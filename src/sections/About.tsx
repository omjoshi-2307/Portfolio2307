import { motion, type Transition } from 'motion/react';
import { Terminal, Layers, Shield, Sparkles, RefreshCw } from 'lucide-react';

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export function About() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      aria-label="About Om Joshi"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <motion.div {...fadeIn} className="space-y-3">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">02 // ABOUT</span>
            <span className="text-[#292929]">/</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
            A LITTLE ABOUT ME.
          </h2>
          <div className="h-[1px] w-full bg-[#292929] mt-6" />
        </motion.div>

        {/* ================= ASYMMETRIC EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Narrative Story (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-10 text-left">
            {/* 1. Introduction — Who I am and what drives my curiosity */}
            <motion.div {...fadeIn} className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#737373] flex items-center gap-2">
                <span className="text-white font-medium">01</span>
                <span className="text-[#292929]">/</span>
                <span>CURIOSITY &amp; FOUNDATIONS</span>
              </div>
              <p className="font-sans text-lg sm:text-xl text-white font-normal leading-relaxed">
                I&apos;m an Information Technology student at{' '}
                <span className="text-white font-medium underline decoration-[#737373] underline-offset-4">
                  NMIET, Pune
                </span>
                , with a curiosity that goes beyond simply using technology. I like understanding what happens behind the interface — how software is structured, how systems communicate, and how different pieces work together.
              </p>
            </motion.div>

            {/* 2. How I Learn — Hands-on projects, experimentation, problem-solving */}
            <motion.div {...fadeIn} className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#737373] flex items-center gap-2">
                <span className="text-white font-medium">02</span>
                <span className="text-[#292929]">/</span>
                <span>HOW I LEARN</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                I learn best by getting hands-on. Whether I&apos;m exploring programming, building web projects, experimenting with hardware, or studying cybersecurity fundamentals, I enjoy the process of understanding a problem and working towards a practical solution.
              </p>
            </motion.div>

            {/* 3. Progression & Mindset */}
            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#737373] flex items-center gap-2">
                <span className="text-white font-medium">03</span>
                <span className="text-[#292929]">/</span>
                <span>PROGRESS &amp; REFLECTION</span>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                For me, progress is not just about writing code. It&apos;s about understanding, experimenting, making mistakes, debugging, and building something better. I&apos;m still exploring, learning, and improving — one project and one problem at a time.
              </p>

              {/* Minimal Brutalist Callout */}
              <div className="border-l-2 border-white pl-4 py-2 mt-4">
                <p className="font-heading text-lg sm:text-xl md:text-2xl font-normal italic text-[#F5F5F5] leading-relaxed">
                  “Progress is not just writing code — it is understanding, experimenting, making mistakes, debugging, and building something better.”
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Areas of Interest & My Approach (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-10 lg:pl-6 lg:border-l lg:border-[#292929] text-left">
            {/* 4. Areas of Interest */}
            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-white font-semibold pb-2 border-b border-[#292929] flex items-center justify-between">
                <span>// AREAS OF INTEREST</span>
                <span className="text-[#737373] text-[10px]">EXPLORING &amp; BUILDING</span>
              </div>

              <div className="space-y-3.5 pt-1">
                {/* Interest 1 */}
                <div className="group p-3.5 border border-[#292929] bg-[#0A0A0A] hover:border-white/40 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>01 / Software Engineering</span>
                  </div>
                  <p className="font-sans text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                    Understanding core software architecture, clean modular design, and robust object-oriented problem solving.
                  </p>
                </div>

                {/* Interest 2 */}
                <div className="group p-3.5 border border-[#292929] bg-[#0A0A0A] hover:border-white/40 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-semibold">
                    <Layers className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>02 / Full-Stack Development</span>
                  </div>
                  <p className="font-sans text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                    Building responsive user interfaces, structuring server logic, and connecting frontend experiences with backend data.
                  </p>
                </div>

                {/* Interest 3 */}
                <div className="group p-3.5 border border-[#292929] bg-[#0A0A0A] hover:border-white/40 transition-colors duration-200">
                  <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-semibold">
                    <Shield className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>03 / Cybersecurity</span>
                  </div>
                  <p className="font-sans text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                    Studying network protocols, defensive system concepts, security fundamentals, and safe software practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 5. My Approach — The Iterative Loop */}
            <motion.div {...fadeIn} className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-white font-semibold pb-2 border-b border-[#292929] flex items-center justify-between">
                <span>// MY APPROACH</span>
                <span className="text-[#737373] text-[10px] flex items-center gap-1">
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>ITERATIVE LOOP</span>
                </span>
              </div>

              <div className="space-y-2 pt-1 font-mono text-xs">
                {[
                  { step: '01', title: 'LEARN', desc: 'Grasp underlying mechanics, study concepts, read documentation' },
                  { step: '02', title: 'BUILD', desc: 'Transform theory into functional, hands-on implementations' },
                  { step: '03', title: 'TEST', desc: 'Validate real-world behavior, responsive states, and edge cases' },
                  { step: '04', title: 'DEBUG', desc: 'Trace errors, analyze root causes, and learn from breakdowns' },
                  { step: '05', title: 'IMPROVE', desc: 'Refactor code, optimize performance, and iterate to build better' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3 py-2 border-b border-[#292929]/50 last:border-b-0"
                  >
                    <span className="text-[#737373] text-[11px] font-semibold tabular-nums">
                      {item.step}
                    </span>
                    <div className="space-y-0.5">
                      <div className="text-white font-semibold text-xs tracking-wider flex items-center gap-1.5">
                        <span>{item.title}</span>
                        <Sparkles className="w-2.5 h-2.5 text-[#737373]" />
                      </div>
                      <div className="text-[#A3A3A3] text-[11px] font-sans leading-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= ACADEMIC & CONTEXT FOOTER ================= */}
        <motion.div
          {...fadeIn}
          className="pt-6 sm:pt-8 border-t border-[#292929] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-mono text-xs text-[#737373]"
        >
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#737373]">
              ACADEMIC INSTITUTION //
            </div>
            <div className="text-white font-medium">
              Nutan Maharashtra Institute of Engineering &amp; Technology (NMIET)
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#737373]">
              DEGREE PROGRAM //
            </div>
            <div className="text-white font-medium">
              B.Tech Information Technology · Class of 2029
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-widest text-[#737373]">
              LOCATION &amp; TIMEZONE //
            </div>
            <div className="text-white font-medium">
              Pune, Maharashtra, India · IST (UTC+5:30)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
