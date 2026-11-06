import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui';

interface Project {
  number: string;
  title: string;
  domain: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export function Projects() {
  const projects: Project[] = [
    {
      number: '01',
      title: 'SureD — Secure Rental Deposits on Stellar',
      domain: 'DECENTRALIZED ESCROW · STELLAR SMART CONTRACTS · WEB APPLICATION',
      description:
        'A decentralized rental deposit escrow platform built on the Stellar blockchain network. Resolves tenant-landlord disputes by enforcing transparent smart contracts for deposit custody, condition inspection verification, and automated fund returns without intermediaries.',
      tags: ['Stellar Blockchain', 'Smart Contracts', 'Web3', 'React', 'Full-Stack', 'Team Obscura'],
      liveUrl: 'https://sure-d.vercel.app/',
      featured: true,
    },
    {
      number: '02',
      title: 'Plate Stacking Minimum Tracking System',
      domain: 'DATA STRUCTURES · SYSTEM DESIGN · C++ OOP',
      description:
        'A high-performance object-oriented tracking system modeling plate stack inventory. Implements an augmented stack data structure that enables O(1) constant-time retrieval of the minimum element, paired with full test suites validating edge conditions.',
      tags: ['C++', 'Data Structures', 'OOP Architecture', 'Algorithmic Optimization'],
    },
    {
      number: '03',
      title: '2D & 3D Computational Graphics Transformation Engine',
      domain: 'COMPUTER GRAPHICS · MATRIX MATHEMATICS · OOP',
      description:
        'An object-oriented computational graphics transformation system implementing linear algebra matrix operations for 2D and 3D geometric entities, supporting multi-axis rotation, translation, scaling, and shear transformations.',
      tags: ['C++', 'Matrix Mathematics', 'Computer Graphics', 'System Design'],
    },
    {
      number: '04',
      title: 'Network Routing & Security Protocol Analysis',
      domain: 'COMPUTER NETWORKS · PACKET ANALYSIS · SECURITY',
      description:
        'Comprehensive technical analysis and simulation of OSI layer interactions, IP packet switching, fiber optic transmission behaviors, and foundational network defense strategies protecting against unauthorized access.',
      tags: ['Computer Networks', 'IP Routing', 'Packet Analysis', 'Network Security'],
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Selected Technical Projects"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#292929] pb-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
              04 // SELECTED PROJECTS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              FEATURED &amp; TECHNICAL WORK
            </h2>
          </div>
          <div className="font-mono text-xs text-[#737373] tracking-wider uppercase">
            ARCHIVE // 2025–2026
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 lg:p-10 rounded-card transition-colors duration-200 hover:border-white/60 relative ${
                project.featured ? 'border-[#737373]/80' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left Block: Number & Meta */}
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
                    <span className="text-white font-bold tracking-wider">
                      PROJECT // {project.number}
                    </span>
                    <span className="text-[#292929]">·</span>
                    <span className="text-[#737373] tracking-widest uppercase">
                      {project.domain}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-white text-black font-semibold rounded-subtle">
                        CURRENTLY FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono text-[#A3A3A3] bg-[#111111] border border-[#292929] rounded-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Block */}
                <div className="flex lg:flex-col items-center lg:items-end gap-3 pt-2 lg:pt-0 shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider rounded-interactive hover:bg-[#F5F5F5] transition-all"
                      aria-label={`Visit live deployment of ${project.title} (opens in a new tab)`}
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-white border border-[#292929] hover:border-white font-mono text-xs uppercase tracking-wider rounded-interactive transition-colors"
                      aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
