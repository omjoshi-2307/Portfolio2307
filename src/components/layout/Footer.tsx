import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, CredlyIcon } from '@/components/ui';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/0m-joshi2307/',
    icon: LinkedinIcon,
    label: 'Om Joshi LinkedIn Profile (opens in new tab)',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/omjoshi-2307',
    icon: GithubIcon,
    label: 'Om Joshi GitHub Profile (opens in new tab)',
  },
  {
    name: 'X',
    href: 'https://x.com/omjoshi_2307',
    icon: XIcon,
    label: 'Om Joshi X Profile (opens in new tab)',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/0m.a.joshi/',
    icon: InstagramIcon,
    label: 'Om Joshi Instagram Profile (opens in new tab)',
  },
  {
    name: 'Credly',
    href: 'https://www.credly.com/users/om-joshi2623',
    icon: CredlyIcon,
    label: 'Om Joshi Credly Profile (opens in new tab)',
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="border-t border-[#292929]/80 py-12 px-6 sm:px-8 lg:px-12 bg-transparent relative z-10"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Upper Row: Identity & Social Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Identity */}
          <div className="space-y-1">
            <div className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white uppercase">
              OM JOSHI
            </div>
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">
              IT STUDENT · DEVELOPER
            </div>
          </div>

          {/* Right: Social Channels */}
          <nav aria-label="Footer social links" className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex items-center gap-1.5 text-[#A3A3A3] hover:text-white transition-colors duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5 text-[#737373] group-hover:text-white transition-colors" />
                  <span className="group-hover:underline underline-offset-4">{link.name}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Lower Row: Metadata, Copyright, Closing Line */}
        <div className="pt-6 border-t border-[#292929]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-[#737373]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#A3A3A3] font-medium">PUNE, INDIA</span>
            <span>·</span>
            <span>© {currentYear} OM JOSHI. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="text-[11px] tracking-wider text-[#737373] uppercase">
            BUILT WITH CURIOSITY. REFINED THROUGH ITERATION.
          </div>
        </div>
      </div>
    </footer>
  );
}
