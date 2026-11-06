import { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'motion/react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<'hold' | 'zoom'>('hold');
  const [progress, setProgress] = useState<number>(0);
  const timerRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const hasFinishedRef = useRef<boolean>(false);

  const handleFinish = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Immediately set progress to 100% on finish or skip
    setProgress(100);

    // Clear all pending timers and RAF frames
    timerRef.current.forEach((id) => window.clearTimeout(id));
    timerRef.current = [];
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Respect prefers-reduced-motion: skip animation immediately if requested
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleFinish();
      return;
    }

    let isCancelled = false;

    const startSequence = () => {
      if (isCancelled || hasFinishedRef.current) return;

      const startTime = performance.now();
      const progressDuration = 3400; // Counter reaches 100% at 3.4s
      let lastFloor = 0;

      // Deterministic synchronized RAF progress loop
      const stepProgress = (now: number) => {
        if (isCancelled || hasFinishedRef.current) return;
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / progressDuration);

        // Smooth cubic ease-out curve for natural, elegant loading cadence
        const eased = 1 - Math.pow(1 - t, 2.2);
        const currentFloor = Math.min(100, Math.floor(eased * 100));

        if (currentFloor !== lastFloor) {
          lastFloor = currentFloor;
          setProgress(currentFloor);
        }

        if (t < 1) {
          rafRef.current = requestAnimationFrame(stepProgress);
        }
      };

      rafRef.current = requestAnimationFrame(stepProgress);

      // Phase D: Final Cinematic Zoom Reveal starts at 3200ms
      const zoomTimer = window.setTimeout(() => {
        if (!isCancelled && !hasFinishedRef.current) {
          setPhase('zoom');
        }
      }, 3200);
      timerRef.current.push(zoomTimer);

      // Intro completes at 4500ms (total duration 4.5s)
      const completeTimer = window.setTimeout(() => {
        if (!isCancelled && !hasFinishedRef.current) {
          handleFinish();
        }
      }, 4500);
      timerRef.current.push(completeTimer);
    };

    // Ensure the font loads before starting to prevent FOIT/FOUT
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts
        .load('bold 96px "Trixy Stories Bold"')
        .then(() => startSequence())
        .catch(() => startSequence());
    } else {
      startSequence();
    }

    // Accessible keyboard controls: Escape, Space, or Enter triggers instant completion
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      isCancelled = true;
      window.removeEventListener('keydown', handleKeyDown);
      timerRef.current.forEach((id) => window.clearTimeout(id));
      timerRef.current = [];
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [handleFinish]);

  // Formatted numeric percentage as 3 digits (e.g. 000%, 068%, 100%)
  const formattedProgress = `${String(Math.min(100, Math.max(0, Math.floor(progress)))).padStart(3, '0')}%`;

  return (
    <motion.aside
      role="region"
      aria-label="Cinematic name introduction"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000] text-[#FFFFFF] overflow-hidden select-none pointer-events-auto touch-none"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
      initial={{ opacity: 1 }}
      animate={{
        // Viewport remains 100% stationary and opaque during initial scaling (0 to 600ms of zoom);
        // then smoothly dissolves over 700ms to reveal the mounted homepage behind the expanding typography
        opacity: phase === 'zoom' ? 0 : 1,
      }}
      transition={{
        duration: 0.7,
        delay: phase === 'zoom' ? 0.6 : 0,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Subtle Monochrome Ambient Depth — Perfectly static, zero movement */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      {/* Top Technical Metadata Bar */}
      <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-mono text-[11px] sm:text-xs text-[#737373] tracking-widest uppercase"
        >
          PORTFOLIO
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="font-mono text-[11px] sm:text-xs text-[#737373] tracking-widest uppercase"
        >
          PUNE, INDIA
        </motion.div>
      </div>

      {/* Centered Identity & Reveal Composition */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto">
        {/* Main Centered Identity: OM JOSHI (Scales as one unified composition during Phase D zoom) */}
        <div className="relative flex items-center justify-center my-2 sm:my-3">
          <motion.div
            className="font-trixy font-bold tracking-wider uppercase text-[#FFFFFF] select-none text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-none whitespace-nowrap"
            style={{
              fontFamily: '"Trixy Stories Bold", "Trixy Stories"',
              transformOrigin: '50% 50%',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transition: 'none',
            }}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={
              phase === 'zoom'
                ? {
                    // Dramatic continuous scale to 55x: oversized letters extend beyond the viewport
                    scale: 55,
                    opacity: [1, 1, 0.7, 0],
                  }
                : {
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              scale:
                phase === 'zoom'
                  ? {
                      duration: 1.3,
                      ease: [0.65, 0, 0.15, 1],
                    }
                  : {
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
              opacity:
                phase === 'zoom'
                  ? {
                      duration: 1.3,
                      times: [0, 0.5, 0.8, 1],
                      ease: 'easeOut',
                    }
                  : {
                      duration: 0.7,
                      ease: 'easeOut',
                    },
            }}
          >
            OM JOSHI
          </motion.div>
        </div>

        {/* Thin Horizontal White Line: Animates expanding horizontally from the center */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: '50% 50%' }}
          className="h-[1px] w-24 sm:w-36 bg-[#FFFFFF] my-3 sm:my-4 mx-auto select-none pointer-events-none"
        />

        {/* Subtitle Metadata: DESIGNING · DEVELOPING · LEARNING */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#A3A3A3] uppercase select-none"
        >
          DESIGNING · DEVELOPING · LEARNING
        </motion.div>

        {/* Minimal Loading Counter & Synchronized Progress Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: 'easeOut' }}
          className="w-56 sm:w-68 mt-8 sm:mt-10 flex flex-col items-center gap-2.5 select-none"
        >
          {/* Status Label & 3-Digit Percentage */}
          <div className="w-full flex items-center justify-between font-mono text-[10px] tracking-widest text-[#737373]">
            <span className="uppercase text-[9px] sm:text-[10px]">INITIALIZING EXPERIENCE</span>
            <span className="text-white font-semibold text-xs tabular-nums tracking-widest">
              {formattedProgress}
            </span>
          </div>

          {/* Thin Horizontal White Progress Track */}
          <div className="w-full h-[1px] bg-[#292929] relative overflow-hidden">
            <div
              className="h-full bg-white transition-[width] duration-75 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        </motion.div>
      </div>

      {/* Minimal Bottom-Right Skip Intro Control */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30">
        <button
          type="button"
          onClick={handleFinish}
          aria-label="Skip intro animation (or press Escape)"
          className="font-mono text-xs uppercase tracking-wider text-[#A3A3A3] hover:text-white transition-colors duration-200 hover:underline underline-offset-4 focus:outline-none focus:ring-1 focus:ring-white bg-transparent border-0 p-0 cursor-pointer select-none"
        >
          SKIP INTRO ↗
        </button>
      </div>
    </motion.aside>
  );
}
