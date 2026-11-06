import { CheckCircle2, Sparkles } from 'lucide-react';

interface Achievement {
  id: string;
  number: string;
  title: string;
  recognition: string;
  organisation?: string;
  category: string;
  year?: string;
  context: string;
  details?: string[];
  featured?: boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'anveshana',
    number: '01',
    title: 'Anveshana 2026–27',
    recognition: 'TOP 60 — PUNE REGION',
    category: 'PROJECT RECOGNITION',
    year: '2026–27',
    context:
      'Selected among the Top 60 projects in the Pune Region with CivicLoop, an early-stage civic-tech initiative exploring transparent public complaint tracking and civic accountability.',
    details: [
      'Top 60 Selection across Pune Regional Engineering Pool',
      'Evaluated on innovation, civic impact & system design',
      'CivicLoop early-stage governance concept',
    ],
    featured: true,
  },
  {
    id: 'google-cloud',
    number: '02',
    title: 'Google Cloud Study Jams 2025',
    recognition: 'CERTIFICATE OF EXCELLENCE',
    organisation: 'GDGC NMIET PUNE',
    category: 'PROGRAMME RECOGNITION',
    year: '2025',
    context:
      'Completed 19+1 badges within the programme deadline, demonstrating sustained consistency and foundational cloud engineering competence.',
    details: [
      '19 Skill Badges completed within deadline',
      '1 Milestone Cloud Architecture Foundation Badge',
      'Issued by Google Developer Groups on Campus (NMIET)',
    ],
    featured: true,
  },
  {
    id: 'aws-student',
    number: '03',
    title: 'AWS Student Builder',
    recognition: 'STUDENT BUILDER RECOGNITION',
    organisation: 'AMAZON WEB SERVICES',
    category: 'STUDENT COMMUNITY / RECOGNITION',
    context:
      'Recognized as an AWS Student Builder, engaging with Amazon Web Services cloud computing foundational modules, architecture concepts, and student community initiatives.',
    details: [
      'Cloud Architecture Fundamentals',
      'AWS Student Community Engagement',
      'Continuous Technical Exploration',
    ],
    featured: false,
  },
];

export function Achievements() {
  return (
    <section
      id="recognition"
      aria-label="Achievements and Recognition"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      {/* Anchor alias */}
      <div id="achievements-recognition" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">06 / RECOGNITION</span>
            <span className="text-[#292929]">/</span>
            <span>MILESTONES &amp; HONORS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              ACHIEVEMENTS &amp; RECOGNITION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Milestones, recognition and opportunities that have shaped my journey in technology.
            </p>
          </div>
        </div>

        {/* ================= ASYMMETRIC EDITORIAL RECOGNITION GRID ================= */}
        <div className="space-y-6">
          {/* Top Row: Two Primary Featured Cards (Anveshana & Google Cloud) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {ACHIEVEMENTS.filter((a) => a.featured).map((item, idx) => (
              <div
                key={item.id}
                className={`border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 rounded-card flex flex-col justify-between space-y-6 hover:border-white/40 transition-colors duration-200 ${
                  idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Meta Header */}
                <div className="space-y-4 border-b border-[#292929] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                    <div className="flex items-center gap-2 text-[#737373]">
                      <span className="text-white font-bold">RECOGNITION // {item.number}</span>
                      <span>·</span>
                      <span className="uppercase">{item.category}</span>
                    </div>
                    {item.year && (
                      <span className="text-white font-semibold tracking-wider">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider rounded-subtle">
                      {item.recognition}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight pt-1">
                      {item.title}
                    </h3>
                    {item.organisation && (
                      <p className="font-mono text-xs text-[#737373] uppercase tracking-wider">
                        {item.organisation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Context Description */}
                <p className="font-sans text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                  {item.context}
                </p>

                {/* Detail Milestones */}
                {item.details && (
                  <div className="pt-2 border-t border-[#292929]/70 space-y-2 font-mono text-xs">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-[#A3A3A3] text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row: Complementary Recognition Entry (AWS Student Builder) */}
          {ACHIEVEMENTS.filter((a) => !a.featured).map((item) => (
            <div
              key={item.id}
              className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card hover:border-white/40 transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Meta & Header (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-3 lg:border-r lg:border-[#292929] lg:pr-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#737373]">
                    <span className="text-white font-bold">RECOGNITION // {item.number}</span>
                    <span>·</span>
                    <span className="uppercase">{item.category}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="inline-block px-2.5 py-0.5 bg-[#141414] text-white border border-[#292929] font-mono text-[11px] font-medium uppercase tracking-wider rounded-subtle">
                      {item.recognition}
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white tracking-tight">
                      {item.title}
                    </h3>
                    {item.organisation && (
                      <p className="font-mono text-xs text-[#737373] uppercase tracking-wider">
                        {item.organisation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Context & Details (lg:col-span-7) */}
                <div className="lg:col-span-7 space-y-3">
                  <p className="font-sans text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                    {item.context}
                  </p>
                  {item.details && (
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-2.5 py-1 text-[#A3A3A3] bg-[#111111] border border-[#292929] rounded-subtle flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3 h-3 text-[#737373]" />
                          <span>{detail}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
