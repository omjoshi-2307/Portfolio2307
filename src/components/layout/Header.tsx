export function Header() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#292929] bg-black/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        {/* Brand Name & Title */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            className="flex items-center gap-1.5 font-heading text-lg sm:text-xl font-bold tracking-tight text-white hover:text-white transition-colors select-none"
            aria-label="Om Joshi Portfolio Home"
          >
            <span>OM</span>
            <span className="text-[#737373] font-mono text-base font-normal">/</span>
            <span>JOSHI</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white ml-0.5" />
          </a>
        </div>

        {/* Desktop Editorial Navigation Links */}
        <nav
          aria-label="Main Portfolio Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-[#A3A3A3]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Minimalist Technical Right Marker */}
        <div className="font-mono text-xs text-[#737373] tracking-widest uppercase shrink-0">
          // IT &amp; DEV
        </div>
      </div>
    </header>
  );
}
