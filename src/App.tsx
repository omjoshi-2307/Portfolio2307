import { useState, useCallback } from 'react';
import { CinematicIntro } from '@/components/layout/CinematicIntro';
import { Header } from '@/components/layout/Header';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Certifications,
  Contact,
} from '@/sections';
import { SwarmCursor } from '@/components/ui';

export default function App() {
  // Play on every page refresh; respect prefers-reduced-motion
  const [isIntroActive, setIsIntroActive] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const handleIntroComplete = useCallback(() => {
    setIsIntroActive(false);
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      {/* Cinematic Gothic Intro Overlay - mounts over the homepage */}
      {isIntroActive && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}

      {/* Shared SwarmCursor wrapping the entire portfolio content */}
      <SwarmCursor
        count={500}
        size={2}
        shape="dot"
        color="#FFFFFF"
        accentColor="#FFFFFF"
        spread={75}
        speed={0.8}
        swirl={0.45}
        tail={0.35}
        trail={0.35}
        wander={0.3}
        depth={0.5}
        idle="hide"
        clickEffect="pulse"
        hideCursor={false}
        intro={true}
        enabled={!isIntroActive}
        className="flex-1 flex flex-col justify-between min-h-screen bg-black"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Main Page Layout - ALWAYS mounted behind the intro to ensure seamless reveal */}
        <div className="relative z-0 bg-transparent">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
        </div>

        {/* Subtle Technical Precision Footer */}
        <footer className="border-t border-[#292929] py-8 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] relative z-0">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A3A3A3]">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">OM JOSHI</span>
              <span className="text-[#292929]">·</span>
              <span>© {new Date().getFullYear()}</span>
              <span className="text-[#292929]">·</span>
              <span className="text-[#737373]">Pune, India</span>
            </div>
            <div className="text-[11px] text-[#737373]">
              B.Tech Information Technology · NMIET · 2029
            </div>
          </div>
        </footer>
      </SwarmCursor>
    </div>
  );
}
