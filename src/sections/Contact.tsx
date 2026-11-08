import { Mail, ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, CredlyIcon } from '@/components/ui';

const CONTACT_CHANNELS = [
  {
    name: 'LinkedIn',
    handle: 'in/0m-joshi2307',
    href: 'https://www.linkedin.com/in/0m-joshi2307/',
    icon: LinkedinIcon,
    description: 'Professional conversations',
    ariaLabel: 'Om Joshi LinkedIn Profile (opens in new tab)',
  },
  {
    name: 'GitHub',
    handle: 'omjoshi-2307',
    href: 'https://github.com/omjoshi-2307',
    icon: GithubIcon,
    description: 'Projects and source code',
    ariaLabel: 'Om Joshi GitHub Profile (opens in new tab)',
  },
  {
    name: 'X',
    handle: '@omjoshi_2307',
    href: 'https://x.com/omjoshi_2307',
    icon: XIcon,
    description: 'Ideas and build updates',
    ariaLabel: 'Om Joshi X Profile (opens in new tab)',
  },
  {
    name: 'Instagram',
    handle: '@0m.a.joshi',
    href: 'https://www.instagram.com/0m.a.joshi/',
    icon: InstagramIcon,
    description: 'Personal and creative updates',
    ariaLabel: 'Om Joshi Instagram Profile (opens in new tab)',
  },
  {
    name: 'Credly',
    handle: 'om-joshi2623',
    href: 'https://www.credly.com/users/om-joshi2623',
    icon: CredlyIcon,
    description: 'Badges and credentials',
    ariaLabel: 'Om Joshi Credly Profile (opens in new tab)',
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section marker */}
        <div className="font-mono text-xs text-[#737373] tracking-widest uppercase flex items-center gap-2 mb-10 sm:mb-14">
          <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
          <span>05 // CONTACT</span>
          <span className="text-[#292929]">—</span>
          <span>LET&apos;S CONNECT</span>
        </div>

        {/* Main contact statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-2">
              <h2
                id="contact-heading"
                className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-white uppercase leading-[0.9]"
              >
                HAVE AN IDEA?
              </h2>
              <p className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#BDBDBD] italic leading-[1.05]">
                LET&apos;S BUILD IT.
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#B3B3B3] leading-relaxed max-w-xl">
              If you&apos;re exploring an idea, building something interesting, or simply want to exchange perspectives on technology, I&apos;d be glad to hear from you.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#737373] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#A3A3A3]" aria-hidden="true" />
              <span>Pune, India · IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Primary email action */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#333333] bg-[#0A0A0A]/90 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="font-mono text-[10px] sm:text-xs text-[#858585] tracking-[0.18em] uppercase">
                  Direct contact
                </span>
                <Mail className="w-4 h-4 text-[#A3A3A3]" aria-hidden="true" />
              </div>

              <div className="space-y-2 mb-8">
                <p className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:omjoshi2307@gmail.com"
                  className="inline-block font-mono text-lg sm:text-xl lg:text-[1.35rem] text-white break-all underline decoration-[#404040] underline-offset-8 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  aria-label="Email Om Joshi at omjoshi2307@gmail.com"
                >
                  omjoshi2307@gmail.com
                </a>
              </div>

              <a
                href="mailto:omjoshi2307@gmail.com"
                className="group inline-flex w-full items-center justify-between gap-4 border border-white bg-white px-5 py-4 text-black font-mono text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                aria-label="Send an email to Om Joshi"
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  SEND AN EMAIL
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Other places to connect */}
        <div className="mt-20 sm:mt-24 border-t border-[#292929] pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <p className="font-mono text-[10px] text-[#737373] tracking-[0.18em] uppercase mb-2">
                ELSEWHERE ON THE INTERNET
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-tight">
                Find me around.
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#737373] max-w-sm leading-relaxed">
              Follow projects, explore what I&apos;m learning, or connect through a platform that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-t border-[#292929]">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={channel.ariaLabel}
                  className="group min-h-32 border-r border-b border-[#292929] p-5 sm:p-4 lg:p-5 flex flex-col justify-between gap-6 transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="w-4 h-4 text-[#A3A3A3] group-hover:text-white transition-colors" aria-hidden="true" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#555555] group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>

                  <div className="space-y-1">
                    <div className="font-mono text-sm font-semibold text-white">
                      {channel.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#737373] truncate">
                      {channel.handle}
                    </div>
                    <p className="font-sans text-xs text-[#8A8A8A] pt-2">
                      {channel.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
