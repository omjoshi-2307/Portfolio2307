import { Mail, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui';

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="scroll-mt-20 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-[#292929]/70 bg-transparent"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            07 // CONTACT &amp; INQUIRIES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            START A CONVERSATION
          </h2>
        </div>

        {/* Two-Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Invitation */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              Have an opportunity, technical question, or project you&apos;d like to discuss? I&apos;m always open to connecting with engineers, mentors, and collaborative teams.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:omjoshi@example.com"
                aria-label="Send email to Om Joshi"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-white hover:bg-[#F5F5F5] text-black font-mono text-sm font-semibold uppercase tracking-wider rounded-interactive transition-all shadow-[0_0_20px_-3px_rgba(255,255,255,0.3)] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>omjoshi@example.com</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="font-mono text-xs text-[#737373] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Direct Links & Details */}
          <div className="lg:col-span-5 border border-[#292929] bg-[#0A0A0A] p-6 sm:p-8 rounded-card space-y-6 font-mono text-xs">
            <div className="text-[10px] text-[#737373] tracking-widest uppercase pb-2 border-b border-[#292929]">
              DIRECT CHANNELS &amp; PRESENCE
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-[#292929] rounded-subtle hover:border-white transition-colors text-[#A3A3A3] hover:text-white"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-[#292929] rounded-subtle hover:border-white transition-colors text-[#A3A3A3] hover:text-white"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-start gap-2.5 p-3 border border-[#292929] rounded-subtle text-[#737373]">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Pune, Maharashtra, India</div>
                  <div className="text-[11px] text-[#737373] mt-0.5">Indian Standard Time · UTC+5:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
