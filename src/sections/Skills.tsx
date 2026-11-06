import { motion, type Transition } from 'motion/react';
import { TechIcon } from '@/components/ui';
import { Sparkles, Compass } from 'lucide-react';

interface SkillItem {
  name: string;
  proficiency: 'Comfortable' | 'Working Knowledge' | 'Currently Learning';
}

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'Foundational computational and structured languages used for systems, scripting, and applications.',
    skills: [
      { name: 'C', proficiency: 'Comfortable' },
      { name: 'C++', proficiency: 'Comfortable' },
      { name: 'Python', proficiency: 'Comfortable' },
      { name: 'JavaScript', proficiency: 'Working Knowledge' },
      { name: 'TypeScript', proficiency: 'Working Knowledge' },
    ],
  },
  {
    number: '02',
    title: 'Frontend Development',
    description: 'Modern component-driven web architectures, responsive layouts, and performant interfaces.',
    skills: [
      { name: 'HTML', proficiency: 'Comfortable' },
      { name: 'CSS', proficiency: 'Comfortable' },
      { name: 'React', proficiency: 'Working Knowledge' },
      { name: 'Tailwind CSS', proficiency: 'Working Knowledge' },
      { name: 'Vite', proficiency: 'Working Knowledge' },
    ],
  },
  {
    number: '03',
    title: 'Backend & Databases',
    description: 'Server runtimes, structured and document databases, and scalable HTTP API design.',
    skills: [
      { name: 'Node.js', proficiency: 'Working Knowledge' },
      { name: 'Express.js', proficiency: 'Working Knowledge' },
      { name: 'REST APIs', proficiency: 'Working Knowledge' },
      { name: 'MongoDB', proficiency: 'Currently Learning' },
      { name: 'PostgreSQL', proficiency: 'Currently Learning' },
    ],
  },
  {
    number: '04',
    title: 'Cybersecurity & Networking',
    description: 'Fundamental network protocols, defensive operating systems, access control, and cryptographic primitives.',
    skills: [
      { name: 'Linux', proficiency: 'Comfortable' },
      { name: 'TCP/IP', proficiency: 'Working Knowledge' },
      { name: 'Networking Fundamentals', proficiency: 'Working Knowledge' },
      { name: 'Authentication', proficiency: 'Working Knowledge' },
      { name: 'Cryptography Fundamentals', proficiency: 'Currently Learning' },
    ],
  },
  {
    number: '05',
    title: 'Tools & Platforms',
    description: 'Developer environments, version control systems, deployment platforms, and software workflow tooling.',
    skills: [
      { name: 'Git', proficiency: 'Comfortable' },
      { name: 'GitHub', proficiency: 'Comfortable' },
      { name: 'VS Code', proficiency: 'Comfortable' },
      { name: 'Antigravity', proficiency: 'Working Knowledge' },
      { name: 'Docker', proficiency: 'Currently Learning' },
      { name: 'Figma', proficiency: 'Working Knowledge' },
      { name: 'Vercel', proficiency: 'Working Knowledge' },
    ],
  },
  {
    number: '06',
    title: 'Emerging Technologies & Hardware',
    description: 'Embedded microcontrollers, smart contract networks, computer vision algorithms, and intelligent systems.',
    skills: [
      { name: 'Arduino', proficiency: 'Working Knowledge' },
      { name: 'Embedded C++', proficiency: 'Working Knowledge' },
      { name: 'Stellar', proficiency: 'Currently Learning' },
      { name: 'Soroban', proficiency: 'Currently Learning' },
      { name: 'OpenCV', proficiency: 'Currently Learning' },
      { name: 'YOLO', proficiency: 'Currently Learning' },
      { name: 'AI Tooling', proficiency: 'Working Knowledge' },
    ],
  },
];

const EXPLORING_AREAS = [
  {
    title: 'Deeper React Concepts',
    description: 'Advanced component composition patterns, concurrent rendering mechanics, and fine-grained state management.',
  },
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Hands-on network defense principles, access control frameworks, and defensive engineering practices.',
  },
  {
    title: 'Networking & System Security',
    description: 'Packet-level inspection, transport layer mechanics, distributed communication, and server environment hardening.',
  },
  {
    title: 'AI & Computer Vision Exploration',
    description: 'Real-time object detection models (YOLO), OpenCV image processing pipelines, and agentic AI developer tooling.',
  },
];

const EASE_EDITORIAL = [0.16, 1, 0.3, 1] as const;

export function Skills() {
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
      id="skills"
      aria-label="Skills & Technologies"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <motion.div {...fadeIn} className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#292929]">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
              <span className="text-white font-semibold">03 / TECHNICAL PROFILE</span>
              <span className="text-[#292929]">/</span>
              <span>INDEX OF COMPETENCIES</span>
            </div>

            {/* Subtle Proficiency Legend */}
            <div className="hidden sm:flex items-center gap-4 font-mono text-[10px] text-[#737373] tracking-wider uppercase">
              <span className="text-[#A3A3A3]">LEVELS //</span>
              <span className="flex items-center gap-1.5 text-white">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
                Comfortable
              </span>
              <span className="text-[#292929]">·</span>
              <span className="flex items-center gap-1.5 text-[#A3A3A3]">
                <span className="inline-block w-1.5 h-1.5 rounded-full border border-white" />
                Working Knowledge
              </span>
              <span className="text-[#292929]">·</span>
              <span className="flex items-center gap-1.5 text-[#737373]">
                <span className="inline-block w-1.5 h-1.5 rounded-full border border-[#737373] animate-pulse" />
                Currently Learning
              </span>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              SKILLS &amp; TECHNOLOGIES.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-2xl leading-relaxed">
              Technologies, tools and concepts I explore through hands-on practice, experimentation and continuous learning.
            </p>
          </div>
        </motion.div>

        {/* ================= 6-CATEGORY EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              {...fadeIn}
              transition={{
                ...editorialTransition,
                delay: prefersReducedMotion ? 0 : idx * 0.05,
              }}
              className="border border-[#292929] bg-[#0A0A0A] p-5 sm:p-6 flex flex-col justify-between space-y-5 hover:border-white/30 transition-colors duration-200"
            >
              {/* Category Header */}
              <div className="space-y-2 pb-3 border-b border-[#292929]">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#737373]">
                  <span>CATEGORY // {cat.number}</span>
                  <span className="text-[#A3A3A3]">{cat.skills.length} ITEMS</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-white tracking-wide">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs text-[#737373] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Technologies List with Monochrome Logos */}
              <div className="space-y-1.5 pt-1">
                {cat.skills.map((skill) => {
                  const isComfortable = skill.proficiency === 'Comfortable';
                  const isWorking = skill.proficiency === 'Working Knowledge';

                  return (
                    <div
                      key={skill.name}
                      title={`${skill.name} — ${skill.proficiency}`}
                      className="group flex items-center justify-between py-2 px-2.5 rounded-sm bg-transparent hover:bg-white/[0.04] border border-transparent hover:border-[#292929] transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-[#A3A3A3] group-hover:text-white transition-colors duration-200 shrink-0">
                          <TechIcon name={skill.name} className="w-4 h-4" />
                        </span>
                        <span className="font-heading text-xs sm:text-sm text-[#E5E5E5] group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>

                      {/* Subtle Proficiency Dot & Label */}
                      <span className="flex items-center gap-1.5 shrink-0 font-mono text-[9px] uppercase tracking-wider">
                        {isComfortable && (
                          <span className="flex items-center gap-1 text-[#A3A3A3]">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="hidden sm:inline">Comfortable</span>
                          </span>
                        )}
                        {isWorking && (
                          <span className="flex items-center gap-1 text-[#737373]">
                            <span className="w-1.5 h-1.5 rounded-full border border-white" />
                            <span className="hidden sm:inline">Working</span>
                          </span>
                        )}
                        {!isComfortable && !isWorking && (
                          <span className="flex items-center gap-1 text-[#737373]">
                            <span className="w-1.5 h-1.5 rounded-full border border-[#737373] animate-pulse" />
                            <span className="hidden sm:inline">Learning</span>
                          </span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CURRENTLY EXPLORING SUBSECTION ================= */}
        <motion.div
          {...fadeIn}
          className="pt-8 border-t border-[#292929] space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-[#292929]/70">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-white shrink-0" />
              <h3 className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-white">
                CURRENTLY EXPLORING
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#737373]">
              ACTIVE EXPERIMENTS &amp; LEARNING INTERESTS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPLORING_AREAS.map((item, i) => (
              <div
                key={item.title}
                className="p-4 border border-[#292929] bg-[#0A0A0A] space-y-2 hover:border-white/40 transition-colors duration-200"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#737373]">
                  <span>FOCUS // 0{i + 1}</span>
                  <Sparkles className="w-3 h-3 text-[#737373]" />
                </div>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#A3A3A3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
