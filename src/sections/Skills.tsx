import { motion, useReducedMotion } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';
import { TechIcon } from '@/components/ui';

interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'Languages used in coursework and software projects.',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Frontend & Interface',
    description: 'Building responsive interfaces with modern frontend tools.',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Vite', 'Motion', 'shadcn/ui'],
  },
  {
    number: '03',
    title: 'Backend & Data',
    description: 'Server-side application logic, API integration and document databases.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    number: '04',
    title: 'Blockchain & Hardware',
    description: 'Working with wallet integration in blockchain applications and hands-on hardware projects.',
    skills: ['Stellar', 'Freighter Wallet', 'Arduino'],
  },
  {
    number: '05',
    title: 'Developer Tools',
    description: 'Tools used across coding, version control, design and deployment workflows.',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Figma', 'Docker', 'Antigravity'],
  },
];

const CURRENT_FOCUS = [
  {
    title: 'Cybersecurity',
    description: 'Building a stronger foundation in security principles and defensive practices.',
  },
  {
    title: 'Networking & Systems',
    description: 'Deepening my understanding of network communication, protocols and operating systems.',
  },
  {
    title: 'Frontend Engineering',
    description: 'Improving component architecture, TypeScript patterns and accessible interfaces.',
  },
  {
    title: 'AI & Computer Vision',
    description: 'Exploring image-processing workflows and how AI systems interpret visual data.',
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-t border-[#292929] bg-transparent px-6 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-12 sm:space-y-16">
        <motion.div {...reveal} className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#292929] pb-3">
            <p className="font-mono text-[10px] tracking-[0.18em] text-[#A3A3A3] sm:text-xs">
              <span className="text-white">03 / CAPABILITIES</span>
              <span className="px-2 text-[#525252]">/</span>
              TECHNICAL TOOLKIT
            </p>
            <span className="font-mono text-[10px] tracking-wider text-[#858585]">
              COURSEWORK · PROJECTS · PRACTICE
            </span>
          </div>

          <div className="space-y-3">
            <h2
              id="skills-heading"
              className="font-heading text-4xl font-medium uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Skills &amp; Technologies.
            </h2>
            <p className="max-w-2xl font-sans text-sm leading-relaxed text-[#A3A3A3] sm:text-base">
              A practical toolkit built through coursework and project work. The technologies listed reflect tools I have worked with; my current learning areas are shown separately below.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.article
              key={category.number}
              {...reveal}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-[#292929] py-6 sm:py-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-[#858585]">
                    CATEGORY / {category.number}
                  </p>
                  <h3 className="font-heading text-lg font-semibold tracking-wide text-white sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="max-w-sm text-xs leading-relaxed text-[#858585]">
                    {category.description}
                  </p>
                </div>
                <span className="pt-1 font-mono text-[10px] tabular-nums text-[#858585]">
                  {String(category.skills.length).padStart(2, '0')}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={category.title}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 border border-[#292929] px-2.5 py-2 text-xs text-[#D4D4D4] transition-colors duration-200 hover:border-[#666666] hover:text-white"
                  >
                    <span className="text-[#8A8A8A]" aria-hidden="true">
                      <TechIcon name={skill} className="h-3.5 w-3.5" />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal} className="space-y-6 border-t border-[#292929] pt-8 sm:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#292929]/70 pb-3">
            <div className="flex items-center gap-2.5">
              <Compass className="h-4 w-4 text-[#A3A3A3]" aria-hidden="true" />
              <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-white sm:text-sm">
                CURRENT FOCUS
              </h3>
            </div>
            <span className="font-mono text-[10px] tracking-wider text-[#858585]">
              AREAS I’M CURRENTLY LEARNING
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CURRENT_FOCUS.map((item, index) => (
              <div key={item.title} className="space-y-3 border-l border-[#3A3A3A] py-1 pl-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </h4>
                  {index === 0 && (
                    <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#858585]" aria-hidden="true" />
                  )}
                </div>
                <p className="text-xs leading-relaxed text-[#858585]">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
