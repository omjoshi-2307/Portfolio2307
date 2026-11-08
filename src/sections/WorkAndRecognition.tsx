import {
  ArrowUpRight,
  Terminal,
  Layers,
  Cpu,
  Droplet,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Repeat,
} from 'lucide-react';
import { GithubIcon, TechIcon } from '@/components/ui';
import {
  SureDEscrowDiagram,
  DepthWizardDiagram,
  WalleRobotDiagram,
  JalSanchaeeDiagram,
  CivicLoopDiagram,
} from '@/components/illustrations/ProjectDiagrams';

// ==========================================
// DATA: SUBSECTION A — PROJECTS
// ==========================================
interface Project {
  number: string;
  title: string;
  subtitle: string;
  classification: string;
  recognition?: string;
  description: string;
  contribution?: string;
  details?: string[];
  pipeline?: string[];
  proposedAreas?: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isEarlyStage?: boolean;
  visualType: 'sured' | 'depthwizard' | 'walle' | 'water' | 'civicloop';
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'SureD',
    subtitle: 'Blockchain-Powered Rental Security Deposit Platform',
    classification: 'BLOCKCHAIN · WEB APPLICATION',
    recognition: 'STELLAR ECOSYSTEM · BUILDER SPRINT',
    description:
      'A platform designed to make rental security deposits more transparent through blockchain-powered escrow and tenant-landlord confirmation.',
    contribution:
      'Worked on frontend development, tenant and landlord flows, deposit lifecycle interfaces, Freighter wallet integration, transaction status indicators and user-flow testing.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Stellar', 'Soroban', 'Freighter'],
    liveUrl: 'https://sure-d.vercel.app/',
    githubUrl: 'https://github.com/Khushal-93/SureD',
    visualType: 'sured',
  },
  {
    number: '02',
    title: 'DepthWizard',
    subtitle: 'Single-View Height Estimation & 3D Flythrough',
    classification: 'AI · COMPUTER VISION · 3D VISUALIZATION',
    recognition: 'SIH 2026 · INTERNAL SELECTION ROUND',
    description:
      'A team project exploring how a single RGB image can be processed into depth information, a digital surface model and an interactive 3D flythrough.',
    details: [
      'SIH Problem ID: SIH26175',
      'Organisation: ISRO / Department of Space',
      'Domain: Disaster Management',
      'Team: SochX Horizon (Internal Round)',
    ],
    pipeline: ['RGB IMAGE', 'AI DEPTH ESTIMATION', 'DEPTH MAP', 'DSM GENERATION', '3D FLYTHROUGH'],
    techStack: ['Python', 'OpenCV', 'AI Tooling', 'Computer Vision', 'Digital Surface Models'],
    visualType: 'depthwizard',
  },
  {
    number: '03',
    title: 'WALL-E',
    subtitle: 'Autonomous Obstacle-Avoiding Robot',
    classification: 'ROBOTICS · EMBEDDED SYSTEMS',
    recognition: 'PHYSICAL HARDWARE IMPLEMENTATION',
    description:
      'An Arduino-based robotics project that uses ultrasonic distance sensing and motor control to detect and avoid obstacles.',
    contribution:
      'Worked on hardware assembly, wiring, Arduino programming, ultrasonic sensor integration, motor control and physical testing.',
    techStack: ['Arduino', 'Embedded C++', 'ATmega328P', 'HC-SR04', 'L298N', 'DC Gear Motors'],
    githubUrl: 'https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot',
    visualType: 'walle',
  },
  {
    number: '04',
    title: 'Jal-Sanchaee-Navachar',
    subtitle: 'Urban Water Management & Conservation Concept',
    classification: 'AGRITECH / WATER MANAGEMENT · PROTOTYPE',
    recognition: 'AISSMS TECHATHON 3.0 · 24-HR SPRINT',
    description:
      'A rapid-prototyped concept exploring water monitoring, tank-level visibility, overflow alerts and estimated consumption insights.',
    contribution:
      'Contributed to problem research, dashboard wireframes, data-flow mapping, rapid prototyping, presentation and team collaboration.',
    techStack: ['Rapid Prototyping', 'Telemetry Design', 'Dashboard Wireframes', 'Sensor Logic'],
    visualType: 'water',
  },
  {
    number: '05',
    title: 'CivicLoop',
    subtitle: "Complaints That Don't Disappear.",
    classification: 'CIVIC TECH · EARLY-STAGE INITIATIVE',
    recognition: 'ANVESHANA 2026–27 · TOP 60 · PUNE REGION',
    isEarlyStage: true,
    description:
      'An early-stage civic-tech initiative exploring transparent public complaint tracking, duplicate complaint clustering, evidence-based status updates and ward-level accountability.',
    proposedAreas: [
      'Citizen complaint reporting',
      'Duplicate complaint clustering',
      'Public status timeline',
      'Evidence-based updates',
      'Ward-level dashboards',
    ],
    techStack: ['Civic Architecture', 'Complaint Clustering', 'Public Audit Logs', 'Ward Accountability'],
    visualType: 'civicloop',
  },
];

// ==========================================
// DATA: SUBSECTION B — EXPERIENCE & ACTIVITIES
// ==========================================
interface TimelineItem {
  id: string;
  organisation: string;
  title: string;
  dateOrPeriod?: string;
  classification: string;
  description: string;
  team?: string[];
  tags?: string[];
}

const TIMELINE_ENTRIES: TimelineItem[] = [
  {
    id: '01',
    organisation: 'ANVESHANA',
    title: 'CivicLoop — Top 60, Pune Region',
    dateOrPeriod: '2026–27',
    classification: 'PROJECT RECOGNITION',
    description:
      'Selected among the Top 60 projects in the Pune Region with CivicLoop, an early-stage initiative exploring transparent public complaint tracking and civic accountability.',
    tags: ['Civic Accountability', 'Top 60 Selection', 'Regional Recognition'],
  },
  {
    id: '02',
    organisation: 'SMART INDIA HACKATHON',
    title: 'SIH 2026 — Internal Round',
    dateOrPeriod: '04 SEPTEMBER 2026',
    classification: 'HACKATHON PARTICIPATION',
    description:
      'Participated in the internal selection round with team SochX Horizon, working around the DepthWizard problem statement SIH26175.',
    team: [
      'Om Joshi',
      'Harsh Rajpurohit',
      'Swapnil Bramhankar',
      'Aryan Ahirrao',
      'Anushka Parab',
      'Sakshi Jagtap',
    ],
    tags: ['SIH26175', 'ISRO Problem Statement', 'Team SochX Horizon'],
  },
  {
    id: '03',
    organisation: 'STELLAR BUILD STATION PUNE',
    title: '21-Day Builder Sprint',
    dateOrPeriod: '2026',
    classification: 'BUILDER PROGRAMME',
    description:
      'Participated in a 21-day builder sprint through the SureD project, exploring blockchain-based rental security deposits and the Stellar ecosystem.',
    tags: ['Stellar Ecosystem', 'Soroban Smart Contracts', '21-Day Sprint'],
  },
  {
    id: '04',
    organisation: 'GDGC NMIET PUNE',
    title: 'Certificate of Excellence',
    dateOrPeriod: '01 NOVEMBER 2025',
    classification: 'PROGRAMME RECOGNITION',
    description:
      'Completed 19+1 badges within the programme deadline and received a Certificate of Excellence.',
    tags: ['Google Cloud Study Jams', '19+1 Badges Completed', 'Cloud Foundations'],
  },
  {
    id: '05',
    organisation: 'AISSMS TECHATHON 3.0',
    title: '24-Hour Innovation Sprint',
    dateOrPeriod: '2025',
    classification: 'HACKATHON / EVENT PARTICIPATION',
    description:
      'Participated in a 24-hour innovation sprint with the Jal-Sanchaee-Navachar urban water management concept.',
    tags: ['AISSMS Techathon 3.0', 'Urban Water Conservation', '24-Hour Sprint'],
  },
  {
    id: '06',
    organisation: 'AWS',
    title: 'Student Builder Recognition',
    classification: 'STUDENT COMMUNITY / RECOGNITION',
    description:
      'Recognized as an AWS Student Builder, engaging with Amazon Web Services cloud computing foundational modules, architecture concepts, and student community initiatives.',
    tags: ['AWS Student Community', 'Cloud Architecture', 'Foundational Learning'],
  },
  {
    id: '07',
    organisation: 'ADOBE',
    title: 'University Hackathon Participation',
    classification: 'HACKATHON PARTICIPATION',
    description:
      'Participated in the Adobe University Hackathon as part of student technical activities.',
    tags: ['Adobe University Hackathon', 'Student Hackathon', 'Hands-on Sprint'],
  },
];

// ==========================================
// DATA: SUBSECTION C — ACHIEVEMENTS & RECOGNITION
// ==========================================
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
  },
];

// ==========================================
// DATA: SUBSECTION D — CERTIFICATES
// ==========================================
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

// ==========================================
// DATA: SUBSECTION E — CURRENT FOCUS
// ==========================================
const CURRENT_FOCUS_AREAS = [
  { name: 'Software Engineering', description: 'Design patterns, system architecture and maintainable codebases' },
  { name: 'Full-Stack Development', description: 'API design, component lifecycles and state synchronization' },
  { name: 'Cybersecurity', description: 'Network defense, authentication primitives and access control' },
  { name: 'Artificial Intelligence', description: 'Intelligent systems, practical pipelines and model application' },
  { name: 'Computer Vision', description: 'Depth estimation, OpenCV, object detection and image geometry' },
  { name: 'Blockchain', description: 'Decentralized escrow, smart contracts and ledger state machines' },
  { name: 'Embedded Systems', description: 'Microcontrollers, sensor integration and hardware assembly' },
] as const;

export function WorkAndRecognition() {
  return (
    <section
      id="work"
      aria-label="Work & Recognition"
      className="relative scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      {/* ================= BACKWARD-COMPATIBLE ANCHOR ALIASES ================= */}
      <div id="work-recognition" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* ================= MASTER SECTION HEADER ================= */}
        <div className="space-y-4 pb-8 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">04 // PORTFOLIO CHRONICLE</span>
            <span className="text-[#292929]">·</span>
            <span>EXPERIENCE &amp; CODE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white uppercase leading-[0.95]">
              WORK &amp; RECOGNITION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              A consolidated record of software engineering projects, hands-on hackathon sprints, verified milestones, technical credentials and active development pursuits.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBSECTION A: PROJECTS                                              */}
        {/* =================================================================== */}
        <div className="relative space-y-12">
          <div id="projects" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          {/* Subsection Header */}
          <div className="space-y-2 pb-4 border-b border-[#292929]/70">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-semibold">04.A</span>
              <span className="text-[#292929]">/</span>
              <span>SELECTED PROJECTS</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase">
              SELECTED PROJECTS.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
              Technical initiatives built through experimentation, collaboration and hands-on problem-solving.
            </p>
          </div>

          {/* Project Cards Sequence */}
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="bg-[#0A0A0A] border border-[#292929] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-[#737373] relative flex flex-col justify-between space-y-6"
              >
                {/* 1. Header Bar: Number, Title, Classification & Badges */}
                <div className="space-y-3 border-b border-[#292929] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold tracking-widest uppercase">
                        PROJECT // {project.number}
                      </span>
                      <span className="text-[#292929]">·</span>
                      <span className="text-[#737373] tracking-wider uppercase">
                        {project.classification}
                      </span>
                    </div>

                    {/* Status / Recognition Badge */}
                    <div className="flex items-center gap-2">
                      {project.isEarlyStage && (
                        <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-white text-black font-semibold rounded-subtle tracking-wider">
                          EARLY-STAGE INITIATIVE
                        </span>
                      )}
                      {project.recognition && (
                        <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-[#141414] text-[#A3A3A3] border border-[#292929] font-medium rounded-subtle tracking-wider">
                          {project.recognition}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                      {project.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] font-medium tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* 2. Main Content Grid: Narrative & Visual Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Description, Contributions & Tech Stack (lg:col-span-7) */}
                  <div className="lg:col-span-7 space-y-5 text-left">
                    <p className="font-sans text-sm sm:text-base text-[#CCCCCC] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Individual Contribution if available */}
                    {project.contribution && (
                      <div className="p-3.5 border border-[#292929] bg-[#111111]/60 rounded-subtle space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] flex items-center gap-1.5">
                          <Terminal className="w-3 h-3 text-white" />
                          <span>MY CONTRIBUTION //</span>
                        </div>
                        <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>
                    )}

                    {/* Project Specific Details (DepthWizard) */}
                    {project.details && (
                      <div className="p-3.5 border border-[#292929] bg-[#111111]/60 rounded-subtle space-y-2 font-mono text-xs">
                        <div className="text-[10px] uppercase tracking-widest text-[#737373] flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-white" />
                          <span>PROJECT CONTEXT //</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#A3A3A3]">
                          {project.details.map((detail) => (
                            <div key={detail} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#737373]" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Proposed Areas (CivicLoop) */}
                    {project.proposedAreas && (
                      <div className="p-3.5 border border-[#292929] bg-[#111111]/60 rounded-subtle space-y-2">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-white" />
                          <span>PROPOSED SYSTEM ARCHITECTURE //</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#A3A3A3]">
                          {project.proposedAreas.map((area) => (
                            <li key={area} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Tags with Monochrome Icons */}
                    <div className="space-y-2 pt-1">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
                        TECHNOLOGY &amp; CONCEPTS //
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#A3A3A3] bg-[#141414] border border-[#292929] rounded-subtle hover:border-white/30 transition-colors"
                          >
                            <TechIcon name={tech} className="w-3 h-3 text-[#A3A3A3]" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider rounded-interactive hover:bg-[#F5F5F5] transition-all"
                            aria-label={`Visit live deployment of ${project.title} (opens in a new tab)`}
                          >
                            <span>Live Platform</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-white border border-[#292929] hover:border-white font-mono text-xs uppercase tracking-wider rounded-interactive transition-colors"
                            aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Restrained Editorial Visual Architecture (lg:col-span-5) */}
                  <div className="lg:col-span-5 p-5 border border-[#292929] bg-[#0E0E0E] rounded-subtle space-y-4">
                    {/* Custom SVG: SureD escrow workflow */}
                    {project.visualType === 'sured' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#737373]">
                          <span>ESCROW WORKFLOW</span>
                          <span className="text-white">SOROBAN</span>
                        </div>
                        <SureDEscrowDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] leading-relaxed text-[#737373]">
                          Smart contract backend by Khushal Choudhary · SureD 2.0 planned extension.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: DepthWizard computer-vision pipeline */}
                    {project.visualType === 'depthwizard' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#737373]">
                          <span>IMAGE-TO-3D PIPELINE</span>
                          <span className="text-white">COMPUTER VISION</span>
                        </div>
                        <DepthWizardDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#737373]">
                          Team SochX Horizon · SIH 2026 internal selection round.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: WALL-E hardware architecture */}
                    {project.visualType === 'walle' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#737373]">
                          <span>ROBOT CONTROL ARCHITECTURE</span>
                          <span className="text-white">ARDUINO</span>
                        </div>
                        <WalleRobotDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#737373]">
                          Physical hardware build · Autonomous obstacle avoidance.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: Jal-Sanchaee water monitoring concept */}
                    {project.visualType === 'water' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#737373]">
                          <span>WATER MONITORING CONCEPT</span>
                          <span className="text-white">TECHATHON</span>
                        </div>
                        <JalSanchaeeDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#737373]">
                          AISSMS Techathon 3.0 · 24-hour rapid prototype concept.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: CivicLoop proposed accountability flow */}
                    {project.visualType === 'civicloop' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#737373]">
                          <span>PUBLIC ACCOUNTABILITY FLOW</span>
                          <span className="text-white">ANVESHANA</span>
                        </div>
                        <CivicLoopDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#737373]">
                          Proposed feature architecture · Early-stage initiative, not yet implemented.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBSECTION B: EXPERIENCE & ACTIVITIES                               */}
        {/* =================================================================== */}
        <div className="relative space-y-12 pt-8 border-t border-[#292929]">
          <div id="experience" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          {/* Subsection Header */}
          <div className="space-y-2 pb-4 border-b border-[#292929]/70">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-semibold">04.B</span>
              <span className="text-[#292929]">/</span>
              <span>TIMELINE &amp; SPRINT ACTIVITIES</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase">
              EXPERIENCE &amp; ACTIVITIES.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
              Experiences, hackathon sprints and student communities that have shaped my engineering journey.
            </p>
          </div>

          {/* Vertical Editorial Timeline */}
          <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#292929]">
            {TIMELINE_ENTRIES.map((entry) => (
              <div key={entry.id} className="relative group">
                {/* Timeline Indicator Dot */}
                <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black border border-[#737373] group-hover:border-white transition-colors flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>

                <div className="bg-[#0A0A0A] border border-[#292929] rounded-xl p-5 sm:p-7 space-y-4 hover:border-[#737373] transition-colors">
                  {/* Meta Bar: Organisation, Classification & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold tracking-wider uppercase">
                        {entry.organisation}
                      </span>
                      <span className="text-[#292929]">/</span>
                      <span className="text-[#737373] uppercase tracking-wide">
                        {entry.classification}
                      </span>
                    </div>

                    {entry.dateOrPeriod && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-[#141414] border border-[#292929] text-[#A3A3A3] rounded-subtle">
                        <Calendar className="w-3 h-3 text-[#737373]" />
                        <span>{entry.dateOrPeriod}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h4 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight">
                      {entry.title}
                    </h4>
                    <p className="font-sans text-sm text-[#CCCCCC] leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  {/* Team Members if present */}
                  {entry.team && (
                    <div className="pt-2 border-t border-[#292929]/60 font-mono text-xs">
                      <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-white" />
                        <span>TEAM COLLABORATORS //</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.team.map((member) => (
                          <span
                            key={member}
                            className="px-2 py-0.5 text-[11px] bg-[#111111] border border-[#292929] text-[#A3A3A3] rounded-subtle"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {entry.tags && (
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-[#737373]">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 border border-[#292929] rounded-subtle">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBSECTION C: ACHIEVEMENTS & RECOGNITION                           */}
        {/* =================================================================== */}
        <div className="relative space-y-12 pt-8 border-t border-[#292929]">
          <div id="recognition" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          <div id="achievements" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          {/* Subsection Header */}
          <div className="space-y-2 pb-4 border-b border-[#292929]/70">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-semibold">04.C</span>
              <span className="text-[#292929]">/</span>
              <span>VERIFIED HONORS</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase">
              ACHIEVEMENTS &amp; RECOGNITION.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
              Selected milestones and honors earned through structured competition and consistent participation.
            </p>
          </div>

          {/* Clean Compact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="bg-[#0A0A0A] border border-[#292929] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-white transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Card Header: Category & Number */}
                  <div className="flex items-center justify-between border-b border-[#292929] pb-3 text-xs font-mono text-[#737373]">
                    <span className="text-white font-semibold uppercase">{item.category}</span>
                    <span>HONOR // {item.number}</span>
                  </div>

                  {/* Recognition Title */}
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#141414] border border-[#292929] rounded-subtle text-[10px] font-mono text-white font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span>{item.recognition}</span>
                    </div>
                    <h4 className="font-heading text-2xl font-medium text-white tracking-tight">
                      {item.title}
                    </h4>
                    {item.organisation && (
                      <div className="font-mono text-xs text-[#737373] uppercase">
                        {item.organisation}
                      </div>
                    )}
                  </div>

                  {/* Narrative Context */}
                  <p className="font-sans text-sm text-[#CCCCCC] leading-relaxed">
                    {item.context}
                  </p>
                </div>

                {/* Bullet Points */}
                {item.details && (
                  <div className="pt-3 border-t border-[#292929]/60 space-y-2 text-xs font-mono text-[#A3A3A3]">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBSECTION D: CERTIFICATES                                          */}
        {/* =================================================================== */}
        <div className="relative space-y-12 pt-8 border-t border-[#292929]">
          <div id="certificates" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          <div id="certifications" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          {/* Subsection Header */}
          <div className="space-y-2 pb-4 border-b border-[#292929]/70">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-white font-semibold">04.D</span>
                  <span className="text-[#292929]">/</span>
                  <span>VERIFIED CREDENTIALS</span>
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white uppercase">
                  CERTIFICATES.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] max-w-xl leading-relaxed mt-1">
                  Foundational certifications and coursework completed through recognized programmes.
                </p>
              </div>

              {/* Credly Profile External Link */}
              <a
                href="https://www.credly.com/users/om-joshi2623"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#292929] bg-[#0A0A0A] hover:border-white rounded-interactive font-mono text-xs text-[#A3A3A3] hover:text-white transition-colors group shrink-0"
                aria-label="View Om Joshi Credly Profile with verified badges (opens in a new tab)"
              >
                <span>View All Badges on Credly</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Compact Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.id}
                className="border border-[#292929] bg-[#0A0A0A] p-5 sm:p-6 rounded-xl flex flex-col justify-between space-y-4 hover:border-[#737373] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#737373]">
                    <span className="text-white font-semibold uppercase">{cert.code}</span>
                    <span className="text-[#737373] uppercase">{cert.issuer}</span>
                  </div>

                  <h4 className="font-heading text-xl font-medium text-white tracking-tight">
                    {cert.title}
                  </h4>

                  {cert.notes && (
                    <p className="font-sans text-xs text-[#A3A3A3] leading-relaxed">
                      {cert.notes}
                    </p>
                  )}
                </div>

                {/* Verification Action / Indicator */}
                <div className="pt-3 border-t border-[#292929]/50 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#737373]">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                    <span>{cert.isVerifiedLink ? 'Verified Credential' : 'Coursework Credential'}</span>
                  </div>

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#A3A3A3] hover:text-white underline underline-offset-4"
                      aria-label={`Verify ${cert.title} credential (opens in new tab)`}
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBSECTION E: CURRENT FOCUS                                         */}
        {/* =================================================================== */}
        <div className="relative space-y-8 pt-8 border-t border-[#292929]">
          <div id="current-focus" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          <div id="learning" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          <div id="interests" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
          {/* Subsection Header */}
          <div className="space-y-2 pb-4 border-b border-[#292929]/70">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-semibold">04.E</span>
              <span className="text-[#292929]">/</span>
              <span>ACTIVE HORIZONS</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-white uppercase">
              CURRENT FOCUS.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
              Active engineering interests and the continuous iteration loop driving my everyday practice.
            </p>
          </div>

          {/* 7 Focus Areas Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CURRENT_FOCUS_AREAS.map((focus, idx) => (
              <div
                key={focus.name}
                className="p-4 border border-[#292929] bg-[#0A0A0A] rounded-xl space-y-1.5 hover:border-white/40 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#737373]">
                  <span>DIRECTION // 0{idx + 1}</span>
                  <span className="w-1 h-1 rounded-full bg-white" />
                </div>
                <div className="font-heading text-lg font-medium text-white tracking-tight">
                  {focus.name}
                </div>
                <p className="font-sans text-xs text-[#A3A3A3] leading-relaxed">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>

          {/* Concise Learning Philosophy Banner */}
          <div className="p-6 sm:p-8 border border-[#292929] bg-[#0E0E0E] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl">
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase text-[#737373] tracking-widest">
                ENGINEERING PHILOSOPHY //
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-white tracking-wider">
                LEARN → BUILD → TEST → DEBUG → IMPROVE → REPEAT.
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <Repeat className="w-4 h-4 text-white" />
              <span>Disciplined Iteration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkAndRecognition;
