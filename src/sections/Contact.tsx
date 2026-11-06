import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, CredlyIcon } from '@/components/ui';

const CONTACT_CHANNELS = [
  {
    name: 'LinkedIn',
    handle: 'in/0m-joshi2307',
    href: 'https://www.linkedin.com/in/0m-joshi2307/',
    icon: LinkedinIcon,
    description: 'Professional updates & networking',
    ariaLabel: 'Om Joshi LinkedIn Profile (opens in new tab)',
  },
  {
    name: 'GitHub',
    handle: 'omjoshi-2307',
    href: 'https://github.com/omjoshi-2307',
    icon: GithubIcon,
    description: 'Repositories & open source code',
    ariaLabel: 'Om Joshi GitHub Profile (opens in new tab)',
  },
  {
    name: 'X',
    handle: '@omjoshi_2307',
    href: 'https://x.com/omjoshi_2307',
    icon: XIcon,
    description: 'Thoughts, builds & discussions',
    ariaLabel: 'Om Joshi X Profile (opens in new tab)',
  },
  {
    name: 'Instagram',
    handle: '@0m.a.joshi',
    href: 'https://www.instagram.com/0m.a.joshi/',
    icon: InstagramIcon,
    description: 'Life, design & creative work',
    ariaLabel: 'Om Joshi Instagram Profile (opens in new tab)',
  },
  {
    name: 'Credly',
    handle: 'om-joshi2623',
    href: 'https://www.credly.com/users/om-joshi2623',
    icon: CredlyIcon,
    description: 'Verified badges & credentials',
    ariaLabel: 'Om Joshi Credly Profile (opens in new tab)',
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Om Joshi"
      className="scroll-mt-20 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Section Introduction */}
        <div className="space-y-6 max-w-4xl">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>LET&apos;S CONNECT</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white uppercase leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              HAVE AN IDEA?
            </h2>
            <div className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#E5E5E5] italic leading-[1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              LET&apos;S BUILD SOMETHING MEANINGFUL.
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#D4D4D4] leading-relaxed max-w-2xl pt-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
            I&apos;m always interested in connecting with people who enjoy technology, learning and building meaningful things. Whether it&apos;s an idea, a collaboration or simply a conversation, feel free to reach out.
          </p>
        </div>

        {/* Primary Email CTA & Selectable Address */}
        <div className="p-8 sm:p-10 border border-[#292929] bg-[#0A0A0A]/85 backdrop-blur-md rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#737373] transition-colors duration-300 shadow-2xl">
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
              PRIMARY DIRECT CHANNEL
            </div>
            <div className="font-mono text-xl sm:text-2xl text-white font-medium select-all hover:text-white transition-colors break-all">
              <a
                href="mailto:omjoshi2307@gmail.com"
                className="hover:underline underline-offset-4"
              >
                omjoshi2307@gmail.com
              </a>
            </div>
            <div className="font-sans text-xs text-[#737373]">
              Click to open mail client or copy directly · Available for inquiries
            </div>
          </div>

          <a
            href="mailto:omjoshi2307@gmail.com"
            aria-label="Send email to Om Joshi at omjoshi2307@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-[#F5F5F5] text-black font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full transition-all shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] active:scale-[0.98] shrink-0"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>GET IN TOUCH ↗</span>
          </a>
        </div>

        {/* Direct Channels & Profiles Grid */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
            DIRECT CHANNELS &amp; VERIFIED PRESENCE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.ariaLabel}
                  className="group p-5 border border-[#292929] bg-[#0A0A0A]/80 backdrop-blur-md rounded-xl hover:border-white hover:bg-[#0A0A0A]/95 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#292929] rounded-lg bg-black/40 text-white group-hover:border-white/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-sm font-semibold text-white group-hover:underline underline-offset-4">
                          {channel.name}
                        </div>
                        <div className="font-mono text-xs text-[#737373]">
                          {channel.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="font-sans text-xs text-[#A3A3A3] leading-relaxed">
                    {channel.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
