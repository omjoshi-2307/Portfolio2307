export function Experience() {
  const milestones = [
    {
      period: '2026',
      badge: 'COMPETITION MILESTONE',
      title: 'SureD — Innovate 4 Impact (Round 2 Finalist)',
      organization: 'Team Obscura · Stellar Blockchain Ecosystem',
      description:
        'Architected and presented SureD, a decentralized rental security deposit escrow system leveraging Stellar smart contracts. Authored the comprehensive technical report detailing threat modeling, escrow state machines, dispute arbitration, and UX flows for tenant-landlord agreements.',
      details: ['Technical report documentation', 'Decentralized escrow architecture', 'Competitive hackathon presentation'],
    },
    {
      period: '2025 — PRESENT',
      badge: 'UNDERGRADUATE EDUCATION',
      title: 'B.Tech in Information Technology',
      organization: 'Nutan Maharashtra Institute of Engineering & Technology (NMIET), SPPU · Pune',
      description:
        'Enrolled in formal computer science and IT curriculum focusing on core foundations: Object-Oriented Programming, Data Structures & Algorithms, Computer Networks, Operating Systems, and Discrete Mathematics. Actively building projects validating classroom theory.',
      details: ['Expected Graduation: 2029', 'Consistent hands-on laboratory implementations', 'Active technical experimentation'],
    },
    {
      period: '2025 — PRESENT',
      badge: 'INDEPENDENT ENGINEERING',
      title: 'Open Source Development & Systems Research',
      organization: 'Independent Engineering / GitHub',
      description:
        'Consistently building and publishing full-stack repositories, exploring WebGL particle physics simulations, accessible UI component engineering (React Bits integrations), and modern TypeScript toolchains.',
      details: ['Full-stack web applications', 'Interactive graphics & WebGL', 'Clean code & linting workflows'],
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Experience and Achievements"
      className="relative scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      {/* Anchor alias for #achievements */}
      <div id="achievements" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            05 // EXPERIENCE &amp; ACHIEVEMENTS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            MILESTONES &amp; JOURNEY
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-2xl leading-relaxed">
            Academic milestones, hackathon achievements, and verified technical progression.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-6">
          {milestones.map((item, idx) => (
            <div
              key={item.title}
              className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-4 hover:border-white/50 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292929] pb-3">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-white font-bold">{item.period}</span>
                  <span className="text-[#292929]">·</span>
                  <span className="text-[#737373] uppercase tracking-wider">{item.badge}</span>
                </div>
                <div className="font-mono text-[10px] text-[#737373]">
                  ENTRY // 0{idx + 1}
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-[#A3A3A3]">
                  {item.organization}
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#737373] leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.details.map((detail) => (
                  <span
                    key={detail}
                    className="font-mono text-[11px] text-[#A3A3A3] bg-[#111111] px-2.5 py-1 rounded-subtle border border-[#292929]"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
