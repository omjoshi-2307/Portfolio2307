import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronDown,
  Terminal,
  Layers,
  Users,
  Calendar,
  CheckCircle2,
  Sparkles,
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
  caseStudy?: {
    problem: string;
    approach: string;
    role?: string;
    status: string;
  };
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
    caseStudy: {
      problem:
        'Rental security deposits can be difficult to track when funds, confirmations and refund decisions are handled informally.',
      approach:
        'A Soroban escrow workflow records the deposit lifecycle on Stellar: create, fund, tenant and landlord confirmation, then release, with a refund path.',
      role:
        'Frontend development across tenant and landlord flows, deposit lifecycle interfaces, Freighter wallet integration, transaction status indicators and user-flow testing.',
      status:
        'Live demo linked. Smart-contract implementation was handled by a teammate; this case study describes my frontend contribution.',
    },
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
    caseStudy: {
      problem:
        'Explore how a single RGB image can be used to estimate scene height and surface structure for disaster-management visualization.',
      approach:
        'The team pipeline moves from RGB image to AI depth estimation, depth map, digital surface model (DSM) and a 3D flythrough. Georeferenced inputs can support absolute metric outputs; ordinary images produce relative outputs.',
      status:
        'SIH 2026 internal-selection project (SIH26175) by SochX Horizon; presented as a proposed team solution, not a deployed product.',
    },
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
    caseStudy: {
      problem:
        'A small mobile robot needs to detect nearby obstacles and choose a safer direction without continuous manual steering.',
      approach:
        'The Arduino reads HC-SR04 distance measurements. When an obstacle is within the threshold, the robot stops, scans left and right with a servo, compares distances and drives using the motor controller.',
      role:
        'Hardware and documentation lead: circuit integration, obstacle-detection logic, troubleshooting, presentation and demonstration preparation.',
      status:
        'Four-week academic team project with a physical working model.',
    },
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
    caseStudy: {
      problem:
        'Explore how urban water storage and usage could be made more visible, including tank levels, overflow risk and estimated consumption.',
      approach:
        'A 24-hour sprint concept using dashboard wireframes, data-flow mapping, tank-level visibility, overflow alerts and estimated consumption insights.',
      role:
        'Contributed to problem research, dashboard wireframes, data-flow mapping, rapid prototyping and presentation.',
      status:
        'AISSMS Techathon 3.0 concept/prototype; not a fully integrated or deployed water-management system.',
    },
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
    caseStudy: {
      problem:
        'Citizens need a clearer way to follow reported civic issues and understand whether progress updates are supported by evidence.',
      approach:
        'The proposed platform explores complaint reporting, duplicate clustering, a public status timeline, evidence-based updates and ward-level dashboards.',
      status:
        'Selected in Anveshana 2026–27 Top 60, Pune Region. This is an early-stage concept; development has not started and the listed features are proposals.',
    },
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

export function WorkAndRecognition() {
  const shouldReduceMotion = useReducedMotion();

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
          <div className="font-mono text-xs text-[#858585] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">04 // PORTFOLIO CHRONICLE</span>
            <span className="text-[#292929]">·</span>
            <span>EXPERIENCE &amp; CODE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white uppercase leading-[0.95]">
              WORK &amp; RECOGNITION.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Selected projects, collaborative experiences and recognitions that reflect how I approach practical engineering.
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
            <div className="font-mono text-xs text-[#858585] tracking-widest uppercase flex items-center gap-2">
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
          <div className="relative space-y-8 lg:space-y-0">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.04, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex: index + 1 }}
                className="relative flex flex-col justify-between space-y-6 rounded-2xl border border-[#292929] bg-[#0A0A0A] p-6 shadow-2xl transition-[border-color,box-shadow] duration-300 hover:border-[#737373] sm:p-8 lg:sticky lg:top-24 lg:mb-8 lg:p-10"
              >
                {/* 1. Header Bar: Number, Title, Classification & Badges */}
                <div className="space-y-3 border-b border-[#292929] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold tracking-widest uppercase">
                        PROJECT // {project.number}
                      </span>
                      <span className="text-[#292929]">·</span>
                      <span className="text-[#858585] tracking-wider uppercase">
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

                    {/* Expandable, evidence-conscious project case study */}
                    {project.caseStudy && (
                      <details className="group border border-[#292929] bg-[#0D0D0D] rounded-subtle">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-3.5 font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                          <span>Read project case study</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <div className="grid grid-cols-1 gap-4 border-t border-[#292929] p-3.5 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#858585]">Problem</h5>
                            <p className="font-sans text-xs leading-relaxed text-[#A3A3A3]">{project.caseStudy.problem}</p>
                          </div>
                          <div className="space-y-1.5">
                            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#858585]">Approach</h5>
                            <p className="font-sans text-xs leading-relaxed text-[#A3A3A3]">{project.caseStudy.approach}</p>
                          </div>
                          {project.caseStudy.role && (
                            <div className="space-y-1.5">
                              <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#858585]">My contribution</h5>
                              <p className="font-sans text-xs leading-relaxed text-[#A3A3A3]">{project.caseStudy.role}</p>
                            </div>
                          )}
                          <div className="space-y-1.5">
                            <h5 className="font-mono text-[10px] uppercase tracking-widest text-[#858585]">Status &amp; scope</h5>
                            <p className="font-sans text-xs leading-relaxed text-[#A3A3A3]">{project.caseStudy.status}</p>
                          </div>
                        </div>
                      </details>
                    )}

                    {/* Individual Contribution if available */}
                    {project.contribution && (
                      <div className="p-3.5 border border-[#292929] bg-[#111111]/60 rounded-subtle space-y-1.5">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#858585] flex items-center gap-1.5">
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
                        <div className="text-[10px] uppercase tracking-widest text-[#858585] flex items-center gap-1.5">
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
                        <div className="font-mono text-[10px] uppercase tracking-widest text-[#858585] flex items-center gap-1.5">
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
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#858585]">
                        TECHNOLOGY &amp; CONCEPTS //
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#A3A3A3] bg-[#141414] border border-[#292929] rounded-subtle hover:border-accent/40 transition-colors"
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
                            className="group inline-flex items-center gap-2 px-4 py-2 bg-accent text-black font-mono text-xs font-semibold uppercase tracking-wider rounded-interactive hover:bg-accent-hover transition-all"
                            aria-label={`Live Platform — ${project.title} (opens in a new tab)`}
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-white border border-[#292929] hover:border-accent font-mono text-xs uppercase tracking-wider rounded-interactive transition-colors"
                            aria-label={`Source Code — ${project.title} (opens in a new tab)`}
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
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#858585]">
                          <span>ESCROW WORKFLOW</span>
                          <span className="text-white">SOROBAN</span>
                        </div>
                        <SureDEscrowDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] leading-relaxed text-[#858585]">
                          Smart contract backend by Khushal Choudhary · SureD 2.0 planned extension.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: DepthWizard computer-vision pipeline */}
                    {project.visualType === 'depthwizard' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#858585]">
                          <span>IMAGE-TO-3D PIPELINE</span>
                          <span className="text-white">COMPUTER VISION</span>
                        </div>
                        <DepthWizardDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#858585]">
                          Team SochX Horizon · SIH 2026 internal selection round.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: WALL-E hardware architecture */}
                    {project.visualType === 'walle' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#858585]">
                          <span>ROBOT CONTROL ARCHITECTURE</span>
                          <span className="text-white">ARDUINO</span>
                        </div>
                        <WalleRobotDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#858585]">
                          Physical hardware build · Autonomous obstacle avoidance.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: Jal-Sanchaee water monitoring concept */}
                    {project.visualType === 'water' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#858585]">
                          <span>WATER MONITORING CONCEPT</span>
                          <span className="text-white">TECHATHON</span>
                        </div>
                        <JalSanchaeeDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#858585]">
                          AISSMS Techathon 3.0 · 24-hour rapid prototype concept.
                        </p>
                      </div>
                    )}

                    {/* Custom SVG: CivicLoop proposed accountability flow */}
                    {project.visualType === 'civicloop' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 font-mono text-[10px] text-[#858585]">
                          <span>PUBLIC ACCOUNTABILITY FLOW</span>
                          <span className="text-white">ANVESHANA</span>
                        </div>
                        <CivicLoopDiagram />
                        <p className="border-t border-[#292929]/50 pt-2 font-mono text-[10px] text-[#858585]">
                          Proposed feature architecture · Early-stage initiative, not yet implemented.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
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
            <div className="font-mono text-xs text-[#858585] tracking-widest uppercase flex items-center gap-2">
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
                <span className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black border border-[#737373] group-hover:border-accent transition-colors flex items-center justify-center">
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
                      <span className="text-[#858585] uppercase tracking-wide">
                        {entry.classification}
                      </span>
                    </div>

                    {entry.dateOrPeriod && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-[#141414] border border-[#292929] text-[#A3A3A3] rounded-subtle">
                        <Calendar className="w-3 h-3 text-[#858585]" />
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
                      <div className="text-[10px] text-[#858585] uppercase tracking-wider mb-2 flex items-center gap-1.5">
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
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-[#858585]">
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
            <div className="font-mono text-xs text-[#858585] tracking-widest uppercase flex items-center gap-2">
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
                className="bg-[#0A0A0A] border border-[#292929] rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-accent/60 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Card Header: Category & Number */}
                  <div className="flex items-center justify-between border-b border-[#292929] pb-3 text-xs font-mono text-[#858585]">
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
                      <div className="font-mono text-xs text-[#858585] uppercase">
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

        {/* Preserve legacy deep links; current learning areas live in Skills. */}
        <div className="sr-only" aria-hidden="true">
          <span id="current-focus" />
          <span id="learning" />
          <span id="interests" />
        </div>
      </div>
    </section>
  );
}

export default WorkAndRecognition;
