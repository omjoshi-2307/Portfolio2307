import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'work', label: 'Work & Recognition', href: '#work' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Header() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isManualScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll spy & background glass intensity tracker
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Track scrolled state for dynamic glassmorphic intensity
    setIsScrolled(scrollY > 20);

    if (isManualScrollingRef.current) return;

    // 1. Top of page -> Home
    if (scrollY < 80) {
      setActiveIndex(0);
      return;
    }

    // 2. Near bottom of page -> Contact
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    if (scrollY + clientHeight >= scrollHeight - 60) {
      setActiveIndex(NAV_ITEMS.length - 1);
      return;
    }

    // 3. Find section currently intersecting the reading line (~140px from top)
    const probeY = 140;
    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      const sectionId = NAV_ITEMS[i].id;
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setActiveIndex(i);
          return;
        }
      }
    }
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Defer initial check to avoid synchronous setState inside effect body
    rafId = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  // Close mobile menu on click outside or Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Navigation click handler
  const handleNavClick = (
    index: number,
    targetId: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    // Instant active indicator update
    setActiveIndex(index);
    setIsMobileMenuOpen(false);

    // Suppress scroll-spy updates during smooth scroll
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 850);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    if (targetId === 'hero' || targetId === 'home') {
      window.scrollTo({ top: 0, behavior });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior });
      }
    }
  };

  // Brand click: scroll to top
  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveIndex(0);
    setIsMobileMenuOpen(false);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out select-none ${
        isScrolled
          ? 'bg-black/75 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-black/40 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Left: OM JOSHI Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#home"
            onClick={handleBrandClick}
            className="group flex items-center gap-1.5 font-heading text-xl sm:text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
            aria-label="Om Joshi Portfolio Home"
          >
            <span>OM JOSHI</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white ml-0.5 transition-transform duration-200 group-hover:scale-125" />
          </a>
        </div>

        {/* Right: Desktop Minimal Glassmorphism Navigation */}
        <nav
          aria-label="Main Portfolio Navigation"
          className="hidden md:flex items-center"
        >
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            {NAV_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(index, item.id, e)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.12] border border-white/20 shadow-[0_1px_10px_rgba(255,255,255,0.06)]'
                      : 'text-[#A3A3A3] hover:text-white hover:bg-white/[0.05] border border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span
                        className="inline-block w-1 h-1 rounded-full bg-white"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center md:hidden" ref={mobileMenuRef}>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-white" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Glassmorphic Dropdown Panel */}
          {isMobileMenuOpen && (
            <nav
              id="mobile-navigation-menu"
              aria-label="Mobile Portfolio Navigation"
              className="absolute top-full left-4 right-4 mt-2 p-3 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-[#858585] tracking-widest border-b border-white/[0.06] mb-1">
                // NAVIGATION
              </div>
              {NAV_ITEMS.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(index, item.id, e)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-sans font-medium uppercase tracking-wider transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                      isActive
                        ? 'text-white font-semibold bg-white/[0.12] border border-white/20'
                        : 'text-[#A3A3A3] hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
