import { useState, useCallback } from 'react';
import { CinematicIntro } from '@/components/layout/CinematicIntro';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  WorkAndRecognition,
  Contact,
} from '@/sections';
import { SwarmCursor, BackToTop, BlackHole } from '@/components/ui';

export default function App() {
  // Play on every page refresh; respect prefers-reduced-motion
  const [isIntroActive, setIsIntroActive] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [isHeroRevealed, setIsHeroRevealed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const handleHeroReveal = useCallback(() => {
    setIsHeroRevealed(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIsHeroRevealed(true);
    setIsIntroActive(false);
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      {/* Cinematic Gothic Intro Overlay - mounts over the homepage */}
      {isIntroActive && (
        <CinematicIntro
          onReveal={handleHeroReveal}
          onComplete={handleIntroComplete}
        />
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
            <Hero introFinished={isHeroRevealed} />
            <About />
            <Skills />
            <WorkAndRecognition />

            {/* Contact + Footer Experience: shared wrapper with isolated background canvas */}
            <div
              id="contact-footer-experience"
              className="relative w-full overflow-hidden isolate"
              style={{ isolation: 'isolate' }}
            >
              {/* Isolated Black Hole Background Layer */}
              <div
                id="black-hole-background-layer"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                aria-hidden="true"
              >
                <BlackHole
                  width="100%"
                  height="100%"
                  backgroundColor="transparent"
                  colors={['#FFFFFF', '#737373']}
                  opacity={0.65}
                  zoom={1.8}
                  particleCount={13}
                  orbSize={0.75}
                  glow={0.08}
                  contrast={3}
                  ringIntensity={1}
                  mirrorSplits={2}
                  warpEnabled={true}
                  distanceFade={0.35}
                  speed={1}
                  intro={true}
                  cursorInteraction={true}
                  dpr={1.5}
                />
              </div>

              {/* Foreground Content Layer */}
              <div className="relative z-[1]">
                <Contact />
                <Footer />
              </div>
            </div>
          </main>
        </div>

        {/* Floating Back to Top button */}
        <BackToTop />
      </SwarmCursor>
    </div>
  );
}
