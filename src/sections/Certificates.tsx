import { ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  code: string;
  title: string;
  issuer: string;
  category: string;
  verificationUrl?: string;
  isVerifiedLink?: boolean;
  notes?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'ibm-python-101',
    code: 'CERT // 01',
    title: 'Python 101 for Data Science',
    issuer: 'IBM / Cognitive Class',
    category: 'DATA SCIENCE & COMPUTATION',
    verificationUrl: 'https://courses.cognitiveclass.ai/certificates/3c105827fd0d435da8785fded690cc4b',
    isVerifiedLink: true,
    notes: 'Verified IBM-accredited Cognitive Class credential covering data structures, Pandas, NumPy, and analytical foundations.',
  },
  {
    id: 'cognitive-cs105',
    code: 'CERT // 02',
    title: 'CS105 — Introduction to Python',
    issuer: 'Cognitive Class',
    category: 'FOUNDATIONAL PROGRAMMING',
    verificationUrl: 'https://www.credly.com/users/om-joshi2623',
    isVerifiedLink: true,
    notes: 'Foundational Python control flow, algorithmic problem solving, functions, and structured modular programming.',
  },
  {
    id: 'ethical-hacking-101',
    code: 'CERT // 03',
    title: 'Ethical Hacking 101',
    issuer: 'Cybersecurity Education',
    category: 'CYBERSECURITY & DEFENSIVE SYSTEMS',
    notes: 'Defensive fundamentals, network reconnaissance, attack surface identification, and secure system practices.',
  },
  {
    id: 'python-3x',
    code: 'CERT // 04',
    title: 'Programming with Python 3.X',
    issuer: 'Advanced Coursework',
    category: 'CORE SOFTWARE DEVELOPMENT',
    notes: 'Object-oriented programming, exception handling, standard library utilities, and idiomatic Python development.',
  },
  {
    id: 'ms-intro-ml',
    code: 'CERT // 05',
    title: 'Introduction to Machine Learning',
    issuer: 'Microsoft Learn',
    category: 'ARTIFICIAL INTELLIGENCE & ML',
    notes: 'Core machine learning models, supervised classification, regression metrics, and predictive feature engineering.',
  },
  {
    id: 'ms-web-vscode',
    code: 'CERT // 06',
    title: 'Web Development with VS Code',
    issuer: 'Microsoft Learn',
    category: 'FRONTEND ARCHITECTURE & TOOLING',
    notes: 'Modern web development toolchains, DOM manipulation, debugging workflows, and source-control integration in VS Code.',
  },
];

export function Certificates() {
  return (
    <section
      id="certificates"
      aria-label="Certificates and Credentials"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      {/* Anchor alias to support previous #certifications links */}
      <div id="certifications" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">07 / CONTINUOUS LEARNING</span>
              <span className="text-[#292929]">/</span>
              <span>VERIFIED CREDENTIALS</span>
            </div>

            {/* Credly Profile External Link */}
            <a
              href="https://www.credly.com/users/om-joshi2623"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#A3A3A3] hover:text-white transition-colors group"
              aria-label="View Om Joshi Credly Profile (opens in a new tab)"
            >
              <span>Credly Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              CERTIFICATES.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Certifications and learning programmes that reflect my commitment to strengthening technical foundations.
            </p>
          </div>
        </div>

        {/* ================= 2-COLUMN COMPACT EDITORIAL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-7 rounded-card flex flex-col justify-between space-y-5 hover:border-white/40 transition-colors duration-200"
            >
              {/* Top Meta Bar */}
              <div className="space-y-2 border-b border-[#292929] pb-3.5">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white font-bold">{cert.code}</span>
                  <span className="text-[#737373] uppercase tracking-wider">{cert.category}</span>
                </div>

                <div className="pt-1">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-[#A3A3A3] mt-1 uppercase tracking-wider flex items-center gap-1.5">
                    <span>{cert.issuer}</span>
                    {cert.isVerifiedLink && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 bg-white/10 text-white text-[10px] rounded-subtle font-sans">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                        <span>Verified</span>
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Description & Action */}
              <div className="space-y-4">
                {cert.notes && (
                  <p className="font-sans text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {cert.notes}
                  </p>
                )}

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#CCCCCC] transition-colors pt-1"
                    aria-label={`Verify ${cert.title} credential (opens in a new tab)`}
                  >
                    <span className="border-b border-white/50 group-hover:border-white pb-0.5">
                      Verify Credential
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="font-mono text-[11px] text-[#737373] flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#737373]" />
                    <span>Academic &amp; Learning Verification</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Credly Link Fallback */}
        <div className="sm:hidden pt-4 text-center">
          <a
            href="https://www.credly.com/users/om-joshi2623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#292929] bg-[#0A0A0A] rounded-interactive font-mono text-xs text-white"
          >
            <span>View All Badges on Credly</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
