export function Skills() {
  const skillCategories = [
    {
      title: 'LANGUAGES & RUNTIMES',
      description: 'Core computational and programming languages for systems and applications.',
      items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5 & CSS3'],
    },
    {
      title: 'FRONTEND & INTERFACE ENGINEERING',
      description: 'Modern component-driven web interfaces, responsive styling, and web performance.',
      items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion / Motion', 'Next.js basics', 'Responsive Design'],
    },
    {
      title: 'SYSTEMS & NETWORKING',
      description: 'Foundational computer science principles, networking models, and architectural patterns.',
      items: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'OSI 7-Layer Model', 'IP Routing & Packet Switching', 'Network Security Fundamentals'],
    },
    {
      title: 'DEVELOPMENT & TOOLCHAIN',
      description: 'Environment workflows, version control, and modern software tooling.',
      items: ['Git & GitHub', 'Linux / Bash', 'VS Code', 'Postman', 'Vercel Deployment', 'npm / Node.js'],
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Architecture"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            03 // SKILLS &amp; ARCHITECTURE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            TECHNICAL COMPETENCIES
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-2xl leading-relaxed">
            Practical skills acquired through academic study, competitive engineering, and continuous hands-on projects.
          </p>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="border border-[#292929] bg-[#0A0A0A] p-6 rounded-card flex flex-col justify-between space-y-6 hover:border-[#737373] transition-colors duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#737373] border-b border-[#292929] pb-2">
                  <span>CATEGORY // 0{idx + 1}</span>
                  <span>OJ-SKL</span>
                </div>
                <h3 className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs text-[#737373] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#292929]/60">
                <ul className="space-y-2">
                  {cat.items.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs text-[#A3A3A3] flex items-center gap-2"
                    >
                      <span className="text-[#737373]">·</span>
                      <span className="hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
