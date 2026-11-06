export function About() {
  return (
    <section
      id="about"
      aria-label="About Om Joshi"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            02 // ABOUT
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            ENGINEERING THROUGH CURIOSITY &amp; PRAGMATISM
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Narrative Bio */}
          <div className="lg:col-span-7 space-y-6 text-[#A3A3A3] text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I&apos;m an Information Technology student at{' '}
              <span className="text-white font-medium">
                Nutan Maharashtra Institute of Engineering &amp; Technology (NMIET), Pune
              </span>
              , driven by curiosity and a practical approach to building technology.
            </p>
            <p>
              My goal is to understand how software, networks, and decentralized protocols work at a foundational level. I prioritize building clean, reliable code over superficial complexity, adhering to an iterative loop of{' '}
              <span className="font-mono text-white text-sm uppercase tracking-wider">
                LEARN → BUILD → TEST → DEBUG → IMPROVE
              </span>
              .
            </p>
            <p className="text-[#737373] text-sm sm:text-base">
              Whether architecting smart contract escrows on the Stellar blockchain, optimizing object-oriented algorithms in C++, or developing responsive frontend interfaces with React, I focus on performance, modularity, and technical precision.
            </p>
          </div>

          {/* Right Structured Metadata Column */}
          <div className="lg:col-span-5 border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-5 font-mono text-xs">
            <div className="text-[10px] text-[#737373] tracking-widest uppercase pb-2 border-b border-[#292929]">
              CORE PROFILE &amp; ACADEMIC RECORD
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[#737373] text-[10px] uppercase tracking-wider">LOCATION //</div>
                <div className="text-white font-medium mt-0.5">Pune, Maharashtra, India · IST</div>
              </div>

              <div>
                <div className="text-[#737373] text-[10px] uppercase tracking-wider">ACADEMIC INSTITUTION //</div>
                <div className="text-white font-medium mt-0.5">NMIET (SPPU) · Pune</div>
              </div>

              <div>
                <div className="text-[#737373] text-[10px] uppercase tracking-wider">PROGRAM //</div>
                <div className="text-white font-medium mt-0.5">B.Tech Information Technology (2025–2029)</div>
              </div>

              <div>
                <div className="text-[#737373] text-[10px] uppercase tracking-wider">CORE FOCUS AREAS //</div>
                <div className="text-white font-medium mt-0.5">Software Engineering · Full-Stack · Cybersecurity</div>
              </div>

              <div>
                <div className="text-[#737373] text-[10px] uppercase tracking-wider">STATUS //</div>
                <div className="text-white font-medium mt-0.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Actively Learning &amp; Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
