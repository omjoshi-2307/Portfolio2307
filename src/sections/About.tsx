import { useEffect, useState } from 'react';
import { motion, type Transition } from 'motion/react';
import { Terminal, Layers, Shield, RefreshCw } from 'lucide-react';

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

const INTERESTS = [
  {
    number: '01',
    title: 'Software Engineering',
    description:
      'Exploring program structure, modular design, maintainability, and thoughtful problem-solving.',
    Icon: Terminal,
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description:
      'Interested in connecting responsive interfaces, application logic, and data into complete experiences.',
    Icon: Layers,
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description:
      'Building foundations in networks, system security, defensive thinking, and secure development practices.',
    Icon: Shield,
  },
] as const;

const APPROACH = [
  { number: '01', title: 'LEARN', description: 'Understand the concept and the problem.' },
  { number: '02', title: 'BUILD', description: 'Turn ideas into small, working implementations.' },
  { number: '03', title: 'TEST', description: 'Check expected behaviour and important edge cases.' },
  { number: '04', title: 'DEBUG', description: 'Look for root causes instead of patching symptoms.' },
  { number: '05', title: 'REFINE', description: 'Improve clarity, reliability, and usability.' },
] as const;

export function About() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const editorialTransition: Transition = {
    duration: prefersReducedMotion ? 0 : 0.55,
    ease: EASE_EDITORIAL,
  };

  const fadeIn = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 14 },
    whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: editorialTransition,
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section heading */}
        <motion.div {...fadeIn} className="space-y-3">
          <div className="font-mono text-xs text-[#858585] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">02 // ABOUT</span>
            <span className="text-[#292929]" aria-hidden="true">/</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>
          <h2
            id="about-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase"
          >
            A LITTLE ABOUT ME.
          </h2>
          <div className="h-px w-full bg-[#292929] mt-6" aria-hidden="true" />
        </motion.div>

        {/* Asymmetric editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Personal narrative */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <motion.div {...fadeIn} className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#858585] flex items-center gap-2">
                <span className="text-white font-medium">01</span>
                <span className="text-[#292929]" aria-hidden="true">/</span>
                <span>CURIOSITY &amp; FOUNDATIONS</span>
              </div>
              <p className="font-sans text-lg sm:text-xl text-white font-normal leading-relaxed">
                I&apos;m an Information Technology student at{' '}
                <span className="text-white font-medium underline decoration-[#737373] underline-offset-4">
                  NMIET, Pune
                </span>
                . I&apos;m interested in what happens beneath the interface — how applications are
                structured, how systems communicate, and how thoughtful engineering turns ideas
                into useful tools.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#858585] flex items-center gap-2">
                <span className="text-white font-medium">02</span>
                <span className="text-[#292929]" aria-hidden="true">/</span>
                <span>HOW I LEARN</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                I learn best through hands-on exploration. Whether I&apos;m working on a web
                project, experimenting with hardware, or studying cybersecurity fundamentals, I
                like starting with a concept, building a practical implementation, and testing
                what I&apos;ve learned.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#858585] flex items-center gap-2">
                <span className="text-white font-medium">03</span>
                <span className="text-[#292929]" aria-hidden="true">/</span>
                <span>PROGRESS &amp; REFLECTION</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                I don&apos;t expect every attempt to work the first time. Debugging and iteration
                help me turn gaps in understanding into clearer decisions and better
                implementations. I&apos;m still exploring, learning, and improving — one project
                and one problem at a time.
              </p>

              <div className="border-l-2 border-white pl-4 py-2 mt-4">
                <p className="font-heading text-lg sm:text-xl md:text-2xl font-normal italic text-[#F5F5F5] leading-relaxed">
                  “Understand deeply. Build deliberately. Improve continuously.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* Interests and working approach */}
          <div className="lg:col-span-5 space-y-10 lg:pl-6 lg:border-l lg:border-[#292929] text-left min-w-0">
            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-white font-semibold pb-2 border-b border-[#292929] flex items-center justify-between gap-3">
                <span>// AREAS OF INTEREST</span>
                <span className="text-[#858585] text-[10px] text-right">CURRENTLY EXPLORING</span>
              </div>

              <div className="space-y-3.5 pt-1">
                {INTERESTS.map(({ number, title, description, Icon }) => (
                  <div
                    key={number}
                    className="group p-4 border border-[#292929] bg-[#0A0A0A] hover:border-white/40 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-semibold">
                      <Icon className="w-3.5 h-3.5 text-white shrink-0" aria-hidden="true" />
                      <span>{number} / {title}</span>
                    </div>
                    <p className="font-sans text-sm text-[#A3A3A3] mt-2 leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-white font-semibold pb-2 border-b border-[#292929] flex items-center justify-between gap-3">
                <span>// MY APPROACH</span>
                <span className="text-[#858585] text-[10px] flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3" aria-hidden="true" />
                  <span>ITERATIVE PROCESS</span>
                </span>
              </div>

              <ol className="space-y-2 pt-1 font-mono text-xs">
                {APPROACH.map((item) => (
                  <li
                    key={item.number}
                    className="flex items-start gap-3 py-2 border-b border-[#292929]/50 last:border-b-0"
                  >
                    <span className="text-[#858585] text-[11px] font-semibold tabular-nums">
                      {item.number}
                    </span>
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-white font-semibold text-xs tracking-wider">
                        {item.title}
                      </div>
                      <p className="text-[#A3A3A3] text-sm font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>

        {/* Academic context */}
        <motion.div
          {...fadeIn}
          className="pt-6 sm:pt-8 border-t border-[#292929] grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 font-mono text-xs text-[#858585]"
        >
          <div className="space-y-1 min-w-0">
            <div className="text-[10px] uppercase tracking-widest text-[#858585]">
              ACADEMIC INSTITUTION //
            </div>
            <div className="text-white font-medium leading-relaxed">
              Nutan Maharashtra Institute of Engineering &amp; Technology
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#858585]">
              DEGREE PROGRAM //
            </div>
            <div className="text-white font-medium leading-relaxed">
              B.Tech · Information Technology · Class of 2029
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#858585]">
              LOCATION &amp; TIMEZONE //
            </div>
            <div className="text-white font-medium leading-relaxed">
              Pune, Maharashtra, India · IST (UTC+5:30)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
