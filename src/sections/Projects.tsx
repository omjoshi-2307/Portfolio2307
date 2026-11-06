import { ArrowUpRight, Terminal, Layers, Cpu, Droplet, Users, Award } from 'lucide-react';
import { GithubIcon, TechIcon, ScrollStack, ScrollStackItem } from '@/components/ui';

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

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">04 / SELECTED WORK</span>
            <span className="text-[#292929]">/</span>
            <span>EXPERIMENTATION &amp; CODE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              SELECTED PROJECTS.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Projects built through experimentation, collaboration and hands-on problem-solving.
            </p>
          </div>
        </div>

        {/* ================= SCROLLSTACK PROJECTS CARDS ================= */}
        <ScrollStack
          itemDistance={110}
          itemStackDistance={28}
          stackPosition="12%"
          itemScale={0.035}
          baseScale={0.88}
          dimAmount={0.16}
          blurAmount={0}
          tiltAmount={0}
          rotationAmount={0}
          holdDistance={150}
          smoothScroll={true}
          snap={false}
          useWindowScroll={true}
          className="w-full"
        >
          {PROJECTS.map((project) => (
            <ScrollStackItem
              key={project.title}
              itemClassName="bg-[#0A0A0A] border border-[#292929] p-6 sm:p-8 lg:p-10 shadow-2xl relative"
            >
              <article className="flex flex-col justify-between space-y-6">
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
                    <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight">
                      {project.title}
                    </h3>
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
                    {/* Visual 1: SureD Escrow State Machine */}
                    {project.visualType === 'sured' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 text-[10px] text-[#737373]">
                          <span>ESCROW PROTOCOL ARCHITECTURE</span>
                          <span className="text-white">SOROBAN</span>
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { step: '01', label: 'DEPOSIT AGREEMENT', status: 'TENANT / LANDLORD SIGNED' },
                            { step: '02', label: 'ESCROW CUSTODY', status: 'STELLAR SMART CONTRACT' },
                            { step: '03', label: 'CONDITION AUDIT', status: 'INSPECTION VERIFICATION' },
                            { step: '04', label: 'SETTLEMENT DISPATCH', status: 'AUTOMATED RETURN' },
                          ].map((item) => (
                            <div
                              key={item.step}
                              className="p-2 border border-[#292929]/80 bg-[#141414] flex items-center justify-between text-[11px]"
                            >
                              <span className="text-[#737373]">{item.step} // {item.label}</span>
                              <span className="text-white text-[10px] uppercase font-semibold">
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-[#737373] pt-1 border-t border-[#292929]/50">
                          Smart contract backend by Khushal Choudhary · SureD 2.0 planned extension.
                        </div>
                      </div>
                    )}

                    {/* Visual 2: DepthWizard AI Depth Pipeline */}
                    {project.visualType === 'depthwizard' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 text-[10px] text-[#737373]">
                          <span>ISRO SIH26175 PIPELINE</span>
                          <span className="text-white">COMPUTER VISION</span>
                        </div>
                        <div className="space-y-2">
                          {project.pipeline?.map((stage, idx) => (
                            <div
                              key={stage}
                              className="p-2 border border-[#292929]/80 bg-[#141414] flex items-center justify-between text-[11px]"
                            >
                              <span className="text-white font-medium">0{idx + 1} / {stage}</span>
                              <span className="text-[#737373] text-[10px]">STAGE 0{idx + 1}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-[#737373] pt-1 border-t border-[#292929]/50 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-[#737373]" />
                          <span>Team SochX Horizon · Internal Round Participation</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: WALL-E Hardware Circuit Diagram */}
                    {project.visualType === 'walle' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 text-[10px] text-[#737373]">
                          <span>EMBEDDED HARDWARE ARCHITECTURE</span>
                          <span className="text-white">ARDUINO</span>
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { unit: 'ULTRASONIC SENSOR', spec: 'HC-SR04 (TRIGGER / ECHO)', role: 'OBSTACLE DETECT' },
                            { unit: 'MICROCONTROLLER', spec: 'ATmega328P @ 16MHz', role: 'DISTANCE CALCULATE' },
                            { unit: 'MOTOR DRIVER', spec: 'L298N DUAL H-BRIDGE', role: 'CURRENT DRIVE' },
                            { unit: 'ACTUATORS', spec: 'DUAL DC GEAR MOTORS', role: 'DIFFERENTIAL DRIVE' },
                          ].map((hw) => (
                            <div
                              key={hw.unit}
                              className="p-2 border border-[#292929]/80 bg-[#141414] space-y-1 text-[11px]"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-white font-medium">{hw.unit}</span>
                                <span className="text-[10px] text-[#737373]">{hw.role}</span>
                              </div>
                              <div className="text-[10px] text-[#A3A3A3]">{hw.spec}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-[#737373] pt-1 border-t border-[#292929]/50 flex items-center gap-1.5">
                          <Cpu className="w-3 h-3 text-[#737373]" />
                          <span>Physical Assembly &amp; Differential Steering Controller</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Jal-Sanchaee-Navachar Wireframe Schematic */}
                    {project.visualType === 'water' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 text-[10px] text-[#737373]">
                          <span>CONCEPT TELEMETRY WIREFRAME</span>
                          <span className="text-white">SPRINT PROTOTYPE</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { metric: 'RESERVOIR LEVEL SENSING', status: 'FLOAT SENSOR SIGNAL' },
                            { metric: 'OVERFLOW PREVENTION', status: 'CRITICAL THRESHOLD LOGIC' },
                            { metric: 'ESTIMATED CONSUMPTION', status: 'DATA-FLOW MAPPING' },
                            { metric: 'WARD MONITORING UI', status: 'RAPID WIREFRAME PROTOTYPE' },
                          ].map((item) => (
                            <div
                              key={item.metric}
                              className="p-2 border border-[#292929]/80 bg-[#141414] flex items-center justify-between text-[11px]"
                            >
                              <span className="text-[#A3A3A3]">{item.metric}</span>
                              <span className="text-white text-[10px]">{item.status}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-[10px] text-[#737373] pt-1 border-t border-[#292929]/50 flex items-center gap-1.5">
                          <Droplet className="w-3 h-3 text-[#737373]" />
                          <span>AISSMS Techathon 3.0 · Illustrative concept prototype</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 5: CivicLoop Governance Proposal */}
                    {project.visualType === 'civicloop' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between border-b border-[#292929] pb-2 text-[10px] text-[#737373]">
                          <span>CIVIC ACCOUNTABILITY PROPOSAL</span>
                          <span className="text-white">EARLY-STAGE</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { phase: 'INPUT', label: 'GEOTAGGED COMPLAINT LOGGING' },
                            { phase: 'INGEST', label: 'DUPLICATE CLUSTERING ALGORITHM' },
                            { phase: 'VERIFY', label: 'EVIDENCE-BASED STATUS UPDATES' },
                            { phase: 'AUDIT', label: 'PUBLIC WARD ACCOUNTABILITY METRICS' },
                          ].map((stage) => (
                            <div
                              key={stage.phase}
                              className="p-2 border border-[#292929]/80 bg-[#141414] flex items-center justify-between text-[11px]"
                            >
                              <span className="text-[#737373]">{stage.phase} //</span>
                              <span className="text-white text-[10px] font-medium">{stage.label}</span>
                            </div>
                          ))}
                        </div>
                        <div className="p-2 border border-white/20 bg-white/5 rounded-subtle text-[11px] text-[#A3A3A3] flex items-center gap-2">
                          <Award className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>Anveshana 2026–27 · Top 60 Project, Pune Region</span>
                        </div>
                        <div className="text-[10px] text-[#737373] pt-1 border-t border-[#292929]/50">
                          Early-stage proposal. Development has not yet started.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}

export default Projects;
