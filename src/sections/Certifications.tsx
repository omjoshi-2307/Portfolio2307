export function Certifications() {
  const certifications = [
    {
      code: 'CS-OOP-01',
      title: 'Object-Oriented Programming & Systems Architecture',
      issuer: 'Academic Coursework · SPPU / NMIET',
      focus: 'C++ class hierarchies, operator overloading, dynamic polymorphism, virtual function dispatch, and memory management.',
      date: '2025–2026',
    },
    {
      code: 'CS-NET-02',
      title: 'Data Communication & Computer Networking Protocols',
      issuer: 'Academic Coursework · SPPU / NMIET',
      focus: 'TCP/IP stack, OSI 7-layer architecture, subnetting, packet switching, routing algorithms, and physical fiber transmission.',
      date: '2025–2026',
    },
    {
      code: 'CS-WEB-03',
      title: 'Modern Full-Stack & Frontend Engineering',
      issuer: 'Applied Practical Experience & Projects',
      focus: 'React ecosystem, TypeScript strict type safety, asynchronous state machines, component architecture, and modern build pipelines.',
      date: '2025–2026',
    },
    {
      code: 'CS-SEC-04',
      title: 'Information Security & Network Defense Principles',
      issuer: 'Technical Research & Academic Projects',
      focus: 'Cryptographic primitives, hash integrity, authentication mechanisms, network threat vectors, and secure software development.',
      date: '2025–2026',
    },
  ];

  return (
    <section
      id="certifications"
      aria-label="Certifications and Technical Coursework"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            06 // CERTIFICATIONS &amp; COURSEWORK
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            TECHNICAL FOUNDATIONS
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-2xl leading-relaxed">
            Verified academic milestones and core engineering competencies.
          </p>
        </div>

        {/* 2x2 Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-4 hover:border-white/50 transition-colors duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#737373] border-b border-[#292929] pb-2">
                  <span>{cert.code}</span>
                  <span>{cert.date}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                  {cert.title}
                </h3>
                <div className="font-mono text-xs text-[#A3A3A3]">
                  {cert.issuer}
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#737373] leading-relaxed pt-2 border-t border-[#292929]/60">
                {cert.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
