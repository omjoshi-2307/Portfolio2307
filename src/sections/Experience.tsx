import { Calendar, Users } from 'lucide-react';

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

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience & Activities"
      className="relative scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929] bg-transparent"
    >
      {/* Anchor alias to maintain backwards compatibility with #achievements */}
      <div id="achievements" className="absolute -top-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="space-y-3 pb-6 border-b border-[#292929]">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="text-white font-semibold">05 / BEYOND THE CODE</span>
            <span className="text-[#292929]">/</span>
            <span>TIMELINE OF PROGRESSION</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white uppercase">
              EXPERIENCE &amp; ACTIVITIES.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A3A3A3] max-w-xl leading-relaxed">
              Experiences, programmes and communities that have shaped my learning journey.
            </p>
          </div>
        </div>

        {/* ================= REFINED VERTICAL EDITORIAL TIMELINE ================= */}
        <div className="relative pl-6 sm:pl-8 lg:pl-10 ml-2 sm:ml-4 border-l border-[#292929] space-y-12 sm:space-y-14">
          {TIMELINE_ENTRIES.map((entry, idx) => (
            <div key={entry.title + idx} className="relative group">
              {/* Timeline Node Marker */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] lg:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-white transition-transform duration-200 group-hover:scale-125 group-hover:bg-white"
                aria-hidden="true"
              />

              {/* Card Container */}
              <div className="border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-4 hover:border-white/40 transition-colors duration-200">
                {/* Meta Bar: Organisation, Classification & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292929] pb-3.5 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-white font-semibold tracking-wider">
                      {entry.organisation}
                    </span>
                    <span className="text-[#292929]">·</span>
                    <span className="text-[#737373] uppercase tracking-wider text-[11px]">
                      {entry.classification}
                    </span>
                  </div>

                  {entry.dateOrPeriod && (
                    <div className="flex items-center gap-1.5 text-[#A3A3A3] text-[11px] font-mono shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                      <span>{entry.dateOrPeriod}</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium text-white tracking-tight">
                    {entry.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                {/* Team Members if applicable (SIH) */}
                {entry.team && (
                  <div className="p-3 border border-[#292929] bg-[#111111]/60 rounded-subtle space-y-1.5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#737373] flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-white" />
                      <span>TEAM SOCHX HORIZON //</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.team.map((member) => (
                        <span
                          key={member}
                          className="px-2 py-0.5 text-[11px] font-mono text-[#CCCCCC] bg-[#141414] border border-[#292929] rounded-subtle"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags / Accolades */}
                {entry.tags && (
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[#A3A3A3] bg-[#111111] rounded-subtle border border-[#292929] hover:border-white/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
