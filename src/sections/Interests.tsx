interface Interest {
  number: string;
  title: string;
  description: string;
  aspects: string[];
}

const INTERESTS: Interest[] = [
  {
    number: '01',
    title: 'Software Engineering',
    description: 'Understanding how reliable, maintainable and well-structured software is designed.',
    aspects: ['Design Patterns', 'System Architecture', 'Modular Codebases'],
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description: 'Exploring how frontend interfaces, backend services and databases work together.',
    aspects: ['API Design', 'Component Lifecycle', 'State Consistency'],
  },
  {
    number: '03',
    title: 'Cybersecurity',
    description: 'Learning about networking, system security, authentication and digital protection.',
    aspects: ['Network Defense', 'Cryptographic Primitives', 'Access Control'],
  },
  {
    number: '04',
    title: 'Artificial Intelligence',
    description: 'Exploring practical AI applications, computer vision and intelligent systems.',
    aspects: ['Object Detection', 'Depth Estimation', 'Practical Pipelines'],
  },
  {
    number: '05',
    title: 'Blockchain Technology',
    description: 'Understanding decentralised systems, blockchain infrastructure and smart contracts.',
    aspects: ['Decentralized Escrow', 'State Machines', 'Consensus Networks'],
  },
  {
    number: '06',
    title: 'Embedded Systems',
    description: 'Exploring the connection between hardware, sensors, microcontrollers and software.',
    aspects: ['Microcontroller C++', 'Sensor Integration', 'Hardware Assembly'],
  },
];

export function Interests() {
  return (
    <section
      id="interests"
      aria-label="Areas of Interest"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">08 / WHAT DRIVES MY CURIOSITY</span>
            <span className="text-[#292929]">/</span>
            <span>INTELLECTUAL DIRECTIONS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              AREAS OF INTEREST.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Beyond what I know today, these are the areas of technology I enjoy exploring and understanding.
            </p>
          </div>
        </div>

        {/* ================= ASYMMETRIC EDITORIAL INTEREST GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INTERESTS.map((item) => (
            <div
              key={item.number}
              className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card flex flex-col justify-between space-y-6 hover:border-white/40 transition-all duration-200 group"
            >
              {/* Numbered Accent Header */}
              <div className="space-y-3 border-b border-[#292929] pb-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#737373]">
                  <span className="text-white font-bold group-hover:text-white transition-colors">
                    DIRECTION // {item.number}
                  </span>
                  <span className="text-[#292929]">/</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                {item.description}
              </p>

              {/* Exploration Focus Tags */}
              <div className="pt-2 border-t border-[#292929]/60 flex flex-wrap gap-1.5 font-mono text-[10px] text-[#737373]">
                {item.aspects.map((aspect) => (
                  <span
                    key={aspect}
                    className="px-2 py-0.5 bg-[#141414] border border-[#292929] rounded-subtle text-[#A3A3A3]"
                  >
                    {aspect}
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

export default Interests;
