import { ArrowRight, RefreshCw } from 'lucide-react';

interface LearningItem {
  number: string;
  area: string;
  focus: string;
  status: 'IN PROGRESS' | 'EXPLORING' | 'LEARNING';
}

const LEARNING_ITEMS: LearningItem[] = [
  {
    number: '01',
    area: 'Frontend Development',
    focus: 'React, TypeScript and modern interface development.',
    status: 'IN PROGRESS',
  },
  {
    number: '02',
    area: 'Cybersecurity',
    focus: 'Security fundamentals, networking and system security.',
    status: 'EXPLORING',
  },
  {
    number: '03',
    area: 'AI & Computer Vision',
    focus: 'Depth estimation, OpenCV, YOLO and practical AI exploration.',
    status: 'EXPLORING',
  },
  {
    number: '04',
    area: 'Backend Development',
    focus: 'REST APIs, databases and application architecture.',
    status: 'LEARNING',
  },
  {
    number: '05',
    area: 'Development Tools',
    focus: 'Git, GitHub, Docker and modern development workflows.',
    status: 'IN PROGRESS',
  },
];

export function Learning() {
  return (
    <section
      id="learning"
      aria-label="Learning and Current Focus"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">09 / CURRENT FOCUS</span>
            <span className="text-[#292929]">/</span>
            <span>ACTIVE HORIZONS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              LEARNING &amp; CURRENT.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Technology keeps evolving, and so does my learning. I&apos;m strengthening my foundations, exploring new technologies and applying what I learn through practical projects.
            </p>
          </div>
        </div>

        {/* ================= STRUCTURED EDITORIAL LIST ================= */}
        <div className="border border-[#292929] bg-[#0A0A0A] rounded-card divide-y divide-[#292929]">
          {LEARNING_ITEMS.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-accent/[0.025] transition-colors"
            >
              {/* Left Identifier & Area */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-0">
                <span className="font-mono text-xs sm:text-sm text-[#737373] font-bold shrink-0">
                  {item.number} //
                </span>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {item.area}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>

              {/* Right Status Badge */}
              <div className="shrink-0 pt-1 md:pt-0 pl-10 sm:pl-0">
                <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-[#141414] text-white border border-[#292929] rounded-subtle tracking-wider inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{item.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= THE ENGINEERING PHILOSOPHY CALLOUT ================= */}
        <div className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-4">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#737373] tracking-widest uppercase">
            <RefreshCw className="w-3.5 h-3.5 text-white" />
            <span>CORE PHILOSOPHY &amp; ITERATION LOOP</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm md:text-base font-semibold text-white tracking-wider">
            <span>LEARN</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#737373]" />
            <span>BUILD</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#737373]" />
            <span>TEST</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#737373]" />
            <span>DEBUG</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#737373]" />
            <span>IMPROVE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#737373]" />
            <span className="underline decoration-white/40 underline-offset-4">REPEAT</span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-2xl">
            An approach I bring to every problem, project and learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Learning;
