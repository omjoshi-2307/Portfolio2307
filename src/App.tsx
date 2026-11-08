import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { CinematicIntro } from '@/components/layout/CinematicIntro';
import { NotFound } from '@/components/layout/NotFound';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  WorkAndRecognition,
  Contact,
} from '@/sections';
import { SwarmCursor, BackToTop } from '@/components/ui';

const DeferredBlackHole = lazy(() =>
  import('@/components/ui/BlackHole').then(({ BlackHole }) => ({ default: BlackHole })),
);

const BLACK_HOLE_COLORS: [string, string] = ['#FFFFFF', '#737373'];

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

  const [isBlackHoleNearViewport, setIsBlackHoleNearViewport] = useState(false);
  const blackHoleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = blackHoleLayerRef.current;
    if (!layer) return;

    if (!('IntersectionObserver' in window)) {
      setIsBlackHoleNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBlackHoleNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' },
    );

    observer.observe(layer);
    return () => observer.disconnect();
  }, []);

  const handleHeroReveal = useCallback(() => {
    setIsHeroRevealed(true);
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIsHeroRevealed(true);
    setIsIntroActive(false);
  }, []);

  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
    return <NotFound />;
  }

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col justify-between"
      style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
    >
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Cinematic Gothic Intro Overlay - mounts over the homepage */}
      {isIntroActive && (
        <CinematicIntro
          onReveal={handleHeroReveal}
          onComplete={handleIntroComplete}
        />
      )}

      {/* Shared SwarmCursor wrapping the entire portfolio content */}
      <SwarmCursor
        count={320}
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
        dpr={1.5}
        className="flex-1 flex flex-col justify-between min-h-screen bg-black"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Main Page Layout - ALWAYS mounted behind the intro to ensure seamless reveal */}
        <div className="relative z-0 bg-transparent">
          <Header />
          <main id="main-content" tabIndex={-1}>
            <Hero introFinished={isHeroRevealed} />
            <About />
            <Skills />
            <WorkAndRecognition />

            {/* Contact + Footer Experience: shared wrapper with isolated background canvas */}
            <div
              id="contact-footer-experience"
              className="relative w-full isolate"
              style={{ isolation: 'isolate' }}
            >
              {/* Isolated Black Hole Background Layer */}
              <div
                id="black-hole-background-layer"
                ref={blackHoleLayerRef}
                className="sticky top-0 -mb-[100vh] h-screen w-full pointer-events-none z-0"
                aria-hidden="true"
              >
                {isBlackHoleNearViewport && (
                  <Suspense fallback={null}>
                    <DeferredBlackHole
                      width="100%"
                      height="100%"
                      backgroundColor="transparent"
                      colors={BLACK_HOLE_COLORS}
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
                      cursorInteraction={false}
                      dpr={1.5}
                    />
                  </Suspense>
                )}
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
