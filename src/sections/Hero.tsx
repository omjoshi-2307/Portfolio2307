import { useState, useEffect } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import grayscalePortrait from '@/assets/photo-grayscale.jpeg';
import { Lanyard } from '@/components/ui';

interface HeroProps {
  introFinished?: boolean;
  imageSrc?: string;
}

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
      second: '2-digit',
      hour12: false,
    });
    return formatter.format(date);
  } catch {
    return date.toLocaleTimeString('en-GB', { hour12: false });
  }
}

export function Hero({ introFinished = true, imageSrc = grayscalePortrait }: HeroProps) {
  // Responsive desktop detection for Lanyard full-screen positioning vs mobile inline stack
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Live Pune 24-hour clock state
  const [puneTime, setPuneTime] = useState<string>(() => formatPune24HourTime(new Date()));

  useEffect(() => {
    // Update live clock every second
    const interval = window.setInterval(() => {
      setPuneTime(formatPune24HourTime(new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.04,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[calc(100vh-4rem)] lg:h-[calc(100svh-4rem)] lg:min-h-0 flex flex-col justify-between px-6 sm:px-8 lg:px-12 py-3 sm:py-5 lg:py-4 overflow-hidden bg-transparent"
    >
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
        <div
          className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          <div className="w-full h-full pointer-events-auto">
            <Lanyard
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
          </div>
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial={introFinished ? 'hidden' : false}
        animate={introFinished ? 'visible' : 'hidden'}
        className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between gap-2 sm:gap-4 lg:gap-3 pointer-events-none"
      >
        {/* ================= 1. TOP METADATA ROW ================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 pb-2.5 border-b border-[#292929] font-mono text-[11px] sm:text-xs text-[#737373] pointer-events-auto"
        >
          {/* Top Left: PORTFOLIO */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold tracking-widest uppercase">
              PORTFOLIO
            </span>
            <span className="text-[#292929]">/</span>
            <span className="text-[#737373] uppercase tracking-wider">
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
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[#737373] uppercase tracking-wider">STATUS //</span>
              <span className="text-[#A3A3A3] uppercase">CURRENTLY LEARNING &amp; BUILDING</span>
            </div>
          </div>
        </motion.div>

        {/* ================= 2. BRUTALIST ASYMMETRIC HERO STAGE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2 sm:py-3 relative">
          {/* Left Column: Oversized Identity, Narrative & CTAs (lg:col-span-7 xl:col-span-8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:space-y-4 z-10 text-left pointer-events-auto">
            {/* Massive Bold Left-Aligned Typography */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-heading font-black tracking-[-0.04em] text-white uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.84] select-none">
                OM<br />JOSHI.
              </h1>

              {/* Role */}
              <div className="pt-2 sm:pt-2.5 flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-white font-semibold">
                <Terminal className="w-3.5 h-3.5 text-white shrink-0" />
                <span>IT Student &amp; Developer</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-white pl-3.5 py-0.5"
            >
              <p className="font-heading text-sm sm:text-base md:text-lg font-medium tracking-tight text-[#F5F5F5] italic">
                “Curious by nature. Practical by approach. Always building.”
              </p>
            </motion.div>

            {/* Narrow Introduction Column */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-lg text-left"
            >
              I&apos;m an Information Technology student from Pune, interested in understanding how systems work and building practical solutions. I explore software engineering, full-stack development and cybersecurity through hands-on projects and continuous learning.
            </motion.p>

            {/* Calls to Action */}
            <motion.div
              variants={itemVariants}
              className="pt-0.5 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollToNext(e, 'projects')}
                aria-label="Explore Projects"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#F5F5F5] text-black font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-interactive shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-1px_rgba(255,255,255,0.5)] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollToNext(e, 'contact')}
                aria-label="Get in Touch"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#111111] text-white border border-[#292929] hover:border-white font-mono text-xs sm:text-sm uppercase tracking-wider rounded-interactive transition-colors duration-200"
              >
                <EmailIcon className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Social Links (Positioned Below CTAs) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 font-mono text-xs text-[#A3A3A3] pt-0.5"
            >
              <a
                href="https://github.com/omjoshi-2307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Om Joshi GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/0m-joshi2307/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Om Joshi LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:omjoshi2307@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
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
              variants={itemVariants}
              className="w-full flex justify-center z-10 pointer-events-auto"
            >
              <div className="w-full max-w-md h-[380px] sm:h-[440px] select-none">
                <Lanyard
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
              </div>
            </motion.div>
          )}
        </div>

        {/* ================= 3. BOTTOM SCATTERED METADATA & SCROLL INDICATOR ================= */}
        <motion.div
          variants={itemVariants}
          className="pt-2 sm:pt-2.5 border-t border-[#292929] flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 text-[10px] sm:text-[11px] font-mono text-[#737373] pointer-events-auto"
        >
          {/* Left: Exploring & Engineering Philosophy Loop */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-0.5">
            <div>
              <span className="uppercase tracking-widest text-[#737373]">EXPLORING // </span>
              <span className="text-white font-medium">SOFTWARE ENGINEERING · FULL-STACK · CYBERSECURITY</span>
            </div>
            <span className="text-[#292929] hidden sm:inline">·</span>
            <div>
              <span className="uppercase tracking-widest text-[#737373]">LOOP // </span>
              <span className="text-[#A3A3A3]">LEARN → BUILD → TEST → DEBUG → IMPROVE</span>
            </div>
          </div>

          {/* Center: Scroll Indicator */}
          <div className="flex items-center justify-center my-0.5 md:my-0">
            <a
              href="#about"
              onClick={(e) => handleScrollToNext(e, 'about')}
              aria-label="Scroll to explore about section"
              className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-[#737373] hover:text-white transition-colors cursor-pointer select-none"
            >
              <span className="uppercase text-[11px]">SCROLL TO EXPLORE</span>
              <motion.span
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
            <span className="uppercase tracking-widest text-[#737373]">EDUCATION // </span>
            <span className="text-[#A3A3A3] font-medium">B.TECH IT · NMIET · 2029</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
