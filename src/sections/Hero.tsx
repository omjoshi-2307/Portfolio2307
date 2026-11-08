import { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDownToLine, ArrowUpRight, Terminal } from 'lucide-react';
import grayscalePortrait from '@/assets/photo-grayscale.jpeg';
const LazyLanyard = lazy(() =>
  import('@/components/ui/Lanyard').then(({ Lanyard }) => ({ default: Lanyard })),
);

interface HeroProps {
  introFinished?: boolean;
  imageSrc?: string;
}

// Coordinated animation timing scale
const DURATION_HEADING = 0.85;
const DURATION_SUPPORT = 0.55;
const DURATION_LANYARD = 0.85;
const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

// Short, explicit Devanagari grapheme stages keep matras attached while typing.
const MARATHI_NAME_FRAMES = ['ओ', 'ओम', 'ओम ', 'ओम ज', 'ओम जो', 'ओम जोश', 'ओम जोशी'];
const ENGLISH_NAME_FRAMES = ['O', 'OM', 'OM ', 'OM J', 'OM JO', 'OM JOS', 'OM JOSH', 'OM JOSHI'];
const NAME_FRAMES = [
  ...MARATHI_NAME_FRAMES,
  ...Array(8).fill('ओम जोशी'),
  ...MARATHI_NAME_FRAMES.slice(0, -1).reverse(),
  '',
  ...ENGLISH_NAME_FRAMES,
  ...Array(8).fill('OM JOSHI'),
  ...ENGLISH_NAME_FRAMES.slice(0, -1).reverse(),
  '',
];

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function EmailIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/**
 * Clean 24-hour time formatter for Pune, India (Asia/Kolkata timezone)
 */
function formatPune24HourTime(date: Date): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return formatter.format(date);
  } catch {
    return date.toLocaleTimeString('en-GB', { hour12: false });
  }
}

export function Hero({ introFinished = true, imageSrc = grayscalePortrait }: HeroProps) {
  // Use the actual desktop breakpoint rather than reacting to every resize event.
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 1024px)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Live Pune 24-hour clock state
  const [puneTime, setPuneTime] = useState<string>(() => formatPune24HourTime(new Date()));

  useEffect(() => {
    // Align updates to the start of each minute so the clock does not drift.
    let interval: number | null = null;
    const updateTime = () => setPuneTime(formatPune24HourTime(new Date()));
    const now = new Date();
    const untilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = window.setTimeout(() => {
      updateTime();
      interval = window.setInterval(updateTime, 60_000);
    }, untilNextMinute);

    return () => {
      window.clearTimeout(timeout);
      if (interval !== null) window.clearInterval(interval);
    };
  }, []);

  // Keep motion preferences current if the operating-system setting changes.
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  // Loop the Marathi and English name states with a restrained typewriter cadence.
  const [nameFrameIndex, setNameFrameIndex] = useState<number>(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setNameFrameIndex((index) => (index + 1) % NAME_FRAMES.length);
    }, 145);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const displayedName = prefersReducedMotion ? 'ओम जोशी' : NAME_FRAMES[nameFrameIndex];
  const [firstName = '', lastName = ''] = displayedName.split(' ');
  const isMarathiName = /[\\u0900-\\u097F]/.test(displayedName);

  // The intro completion flag is latched by the parent; reduced motion reveals immediately.
  const isRevealed = introFinished || prefersReducedMotion;

  // Coordinated animation variants memoized to prevent variant churn on clock ticks
  const variants = useMemo(() => {
    return {
      name: {
        hidden: {
          opacity: 0,
          scale: prefersReducedMotion ? 1 : 0.85,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_HEADING,
            delay: 0,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      topMetadata: {
        hidden: {
          opacity: 0,
          y: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: 0,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      role: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.12,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      tagline: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.20,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      intro: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.28,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      cta: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.36,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      social: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.44,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      bottomMetadata: {
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 12,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_SUPPORT,
            delay: prefersReducedMotion ? 0 : 0.48,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,

      lanyard: {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: prefersReducedMotion ? 0 : DURATION_LANYARD,
            delay: 0,
            ease: EASE_EDITORIAL,
          },
        },
      } as Variants,
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-4rem)] lg:h-[calc(100svh-4rem)] lg:min-h-0 flex flex-col justify-between px-6 sm:px-8 lg:px-12 py-3 sm:py-5 lg:py-4 overflow-hidden bg-transparent"
    >
      {/* Anchor alias for #home */}
      <div id="home" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      {/* Background Ambience & Precision Monochrome Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #292929 1px, transparent 1px),
            linear-gradient(to bottom, #292929 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000 60%, transparent 100%)',
        }}
      />

      {/* Full-Viewport Lanyard 3D Scene (Desktop: expands across full available 100vw x 100svh Hero viewport) */}
      {isDesktop && (
        <motion.div
          variants={variants.lanyard}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="w-full h-full pointer-events-auto">
            {isRevealed && (
              <Suspense fallback={null}>
                <LazyLanyard
                key="desktop-lanyard"
                frontImage={imageSrc}
                backImage={imageSrc}
                imageFit="cover"
                cardColor="#111111"
                orientation="portrait"
                finish="matte"
                cornerRadius={0.12}
                size={0.42}
                anchor={0.80}
                strapLength={0.44}
                strapColor="#FFFFFF"
                strapWidth={0.65}
                metal="graphite"
                gravity={1}
                damping={0.55}
                elasticity={0.5}
                breeze={prefersReducedMotion ? 0 : 0.15}
                interactive={true}
                intro={!prefersReducedMotion}
                className="w-full h-full"
                />
              </Suspense>
            )}
          </div>
        </motion.div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between gap-2 sm:gap-4 lg:gap-3 pointer-events-none">
        {/* ================= 1. TOP METADATA ROW ================= */}
        <motion.div
          variants={variants.topMetadata}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 pb-2.5 border-b border-[#292929] font-mono text-[11px] sm:text-xs text-[#858585] pointer-events-auto"
        >
          {/* Top Left: PORTFOLIO */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold tracking-widest uppercase">
              PORTFOLIO
            </span>
            <span className="text-[#292929]">/</span>
            <span className="text-[#858585] uppercase tracking-wider">
              2026 ARCHIVE
            </span>
          </div>

          {/* Top Right: Location & Live 24-hr Pune Clock */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#A3A3A3] uppercase tracking-wider">PUNE, INDIA</span>
              <span className="text-[#292929]">·</span>
              <span className="text-white font-medium tabular-nums">{puneTime} IST</span>
            </div>
            <span className="text-[#292929] hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full bg-white ${prefersReducedMotion ? '' : 'animate-pulse'}`} aria-hidden="true" />
              <span className="text-[#858585] uppercase tracking-wider">STATUS //</span>
              <span className="text-[#A3A3A3] uppercase">CURRENTLY LEARNING &amp; BUILDING</span>
            </div>
          </div>
        </motion.div>

        {/* ================= 2. BRUTALIST ASYMMETRIC HERO STAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2 sm:py-3 relative">
          {/* Left Column: Oversized Identity, Narrative & CTAs (lg:col-span-7 xl:col-span-8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:space-y-4 z-10 text-left pointer-events-auto">
            {/* Massive Bold Left-Aligned Typography */}
            <div className="space-y-1">
              <motion.h1
                id="hero-title"
                aria-label="Om Joshi"
                variants={variants.name}
                initial="hidden"
                animate={isRevealed ? 'visible' : 'hidden'}
                style={{
                  fontFamily: isMarathiName
                    ? '"Tiro Devanagari Marathi", "Noto Sans Devanagari", sans-serif'
                    : '"Cormorant Garamond", Georgia, serif',
                  transformOrigin: 'left center',
                  willChange: 'transform, opacity',
                }}
                className="font-display font-bold tracking-[-0.035em] text-white text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.9] min-h-[1.8em]"
              >
                <span className="sr-only">Om Joshi</span>
                <span aria-hidden="true" className="block">{firstName || '\u00A0'}</span>
                <span aria-hidden="true" className="block min-h-[0.9em]">
                  {lastName || '\u00A0'}
                  {!prefersReducedMotion && (
                    <span
                      className="inline-block h-[0.72em] border-l-[3px] border-white ml-2 align-baseline opacity-80"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                variants={variants.role}
                initial="hidden"
                animate={isRevealed ? 'visible' : 'hidden'}
                className="pt-2 sm:pt-2.5 flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-white font-semibold"
              >
                <Terminal className="w-3.5 h-3.5 text-white shrink-0" />
                <span>IT STUDENT · DEVELOPER</span>
              </motion.div>
            </div>

            {/* Primary Statement */}
            <motion.div
              variants={variants.tagline}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              className="border-l-2 border-white pl-4 py-1"
            >
              <p className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-normal italic tracking-wide text-[#F5F5F5] leading-snug">
                Learning systems. Building useful software.
              </p>
            </motion.div>

            {/* Introduction Column */}
            <motion.p
              variants={variants.intro}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              className="font-sans text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-lg text-left"
            >
              I&apos;m an Information Technology student at NMIET, Pune, interested in software engineering and cybersecurity. I enjoy exploring how technology works and turning ideas into practical projects through continuous learning and building.
            </motion.p>

            {/* Calls to Action */}
            <motion.div
              variants={variants.cta}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              className="pt-0.5 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollToNext(e, 'projects')}
                aria-label="Explore My Work"
                className="group relative inline-flex min-h-11 items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F5F5F5] text-black font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-interactive shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-1px_rgba(255,255,255,0.5)] transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/resume.pdf"
                download="Om-Joshi-Resume.pdf"
                aria-label="Download Resume PDF — Om Joshi"
                className="group inline-flex min-h-11 items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#111111] text-white border border-[#292929] hover:border-white font-mono text-xs sm:text-sm uppercase tracking-wider rounded-interactive transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>DOWNLOAD RESUME</span>
                <ArrowDownToLine className="w-3.5 h-3.5 text-[#A3A3A3] transition-transform group-hover:translate-y-0.5 group-hover:text-white" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollToNext(e, 'contact')}
                aria-label="Get in Touch"
                className="group inline-flex min-h-11 items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#111111] text-white border border-[#292929] hover:border-white font-mono text-xs sm:text-sm uppercase tracking-wider rounded-interactive transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A3A3A3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </motion.div>

            {/* Social Links (Positioned Below CTAs) */}
            <motion.div
              variants={variants.social}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              className="flex flex-wrap items-center gap-4 sm:gap-5 font-mono text-xs text-[#A3A3A3] pt-0.5"
            >
              <a
                href="https://github.com/omjoshi-2307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Om Joshi GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/0m-joshi2307/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Om Joshi LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:omjoshi2307@gmail.com"
                className="flex items-center gap-1.5 rounded-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                aria-label="Send Direct Email to omjoshi2307@gmail.com"
              >
                <EmailIcon className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Mobile Lanyard Inline Stack or Desktop Empty Grid Spacer */}
          {isDesktop ? (
            <div className="hidden lg:block lg:col-span-5 xl:col-span-4 pointer-events-none" aria-hidden="true" />
          ) : (
            <motion.div
              variants={variants.lanyard}
              initial="hidden"
              animate={isRevealed ? 'visible' : 'hidden'}
              className="w-full flex justify-center z-10 pointer-events-auto"
            >
              <div className="w-full max-w-md h-[380px] sm:h-[440px] select-none">
                {isRevealed && (
                  <Suspense fallback={null}>
                    <LazyLanyard
                    key="mobile-lanyard"
                    frontImage={imageSrc}
                    backImage={imageSrc}
                    imageFit="cover"
                    cardColor="#111111"
                    orientation="portrait"
                    finish="matte"
                    cornerRadius={0.12}
                    size={0.58}
                    anchor="center"
                    strapLength={0.48}
                    strapColor="#FFFFFF"
                    strapWidth={0.65}
                    metal="graphite"
                    gravity={1}
                    damping={0.55}
                    elasticity={0.5}
                    breeze={prefersReducedMotion ? 0 : 0.15}
                    interactive={true}
                    intro={!prefersReducedMotion}
                    className="w-full h-full"
                    />
                  </Suspense>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* ================= 3. BOTTOM SCATTERED METADATA & SCROLL INDICATOR ================= */}
        <motion.div
          variants={variants.bottomMetadata}
          initial="hidden"
          animate={isRevealed ? 'visible' : 'hidden'}
          className="pt-2 sm:pt-2.5 border-t border-[#292929] flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 text-[10px] sm:text-[11px] font-mono text-[#858585] pointer-events-auto"
        >
          {/* Left: Technical Interests & Working Philosophy */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-0.5">
            <div>
              <span className="uppercase tracking-widest text-[#858585]">INTERESTS // </span>
              <span className="text-white font-medium">SOFTWARE ENGINEERING · FULL-STACK DEVELOPMENT · CYBERSECURITY</span>
            </div>
            <span className="text-[#292929] hidden sm:inline">·</span>
            <div>
              <span className="uppercase tracking-widest text-[#858585]">PHILOSOPHY // </span>
              <span className="text-[#A3A3A3]">LEARN → BUILD → TEST → DEBUG → IMPROVE</span>
            </div>
          </div>

          {/* Center: Scroll Indicator */}
          <div className="flex items-center justify-center my-0.5 md:my-0">
            <a
              href="#about"
              onClick={(e) => handleScrollToNext(e, 'about')}
              aria-label="Scroll to explore about section"
              className="group inline-flex min-h-11 items-center gap-1.5 rounded-sm font-mono text-xs tracking-widest text-[#858585] hover:text-white transition-colors cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="uppercase text-[11px]">SCROLL TO EXPLORE</span>
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="inline-block text-xs"
              >
                ↓
              </motion.span>
            </a>
          </div>

          {/* Right: Education & Status */}
          <div className="flex items-center justify-end gap-2">
            <span className="uppercase tracking-widest text-[#858585]">EDUCATION // </span>
            <span className="text-[#A3A3A3] font-medium">B.TECH IT · NMIET · 2029</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
