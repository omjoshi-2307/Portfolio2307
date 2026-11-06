import React, { useEffect, useRef, useCallback, useState } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export function ScrollStackItem({
  children,
  className = '',
  itemClassName = '',
  style,
}: ScrollStackItemProps) {
  return (
    <div
      className={`scroll-stack-card ${className} ${itemClassName}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  itemScale?: number;
  baseScale?: number;
  dimAmount?: number;
  blurAmount?: number;
  tiltAmount?: number;
  rotationAmount?: number;
  holdDistance?: number;
  smoothScroll?: boolean;
  snap?: boolean;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export function ScrollStack({
  children,
  className = '',
  itemDistance = 110,
  itemStackDistance = 28,
  stackPosition = '12%',
  itemScale = 0.035,
  baseScale = 0.88,
  dimAmount = 0.16,
  blurAmount = 0,
  tiltAmount = 0,
  rotationAmount = 0,
  holdDistance = 150,
  smoothScroll: _smoothScroll = true,
  snap = false,
  useWindowScroll = true,
  onStackComplete,
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafIdRef = useRef<number | null>(null);
  const isCompleteRef = useRef<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Compute pixel value for stackPosition
  const getStackPositionPx = useCallback((): number => {
    if (typeof window === 'undefined') return 90;
    if (typeof stackPosition === 'number') return stackPosition;
    if (typeof stackPosition === 'string' && stackPosition.endsWith('%')) {
      const pct = parseFloat(stackPosition) / 100;
      // Adapt for mobile: ensure stack doesn't clip with header (min 68px, max 130px)
      const calculated = window.innerHeight * pct;
      const isMobile = window.innerWidth < 768;
      const minHeaderClearance = isMobile ? 68 : 80;
      return Math.max(minHeaderClearance, calculated);
    }
    return 90;
  }, [stackPosition]);

  // Update card transform states on scroll
  const updateTransforms = useCallback(() => {
    if (isReducedMotion) return;

    const items = itemWrappersRef.current.filter((el): el is HTMLDivElement => el !== null);
    const count = items.length;
    if (count === 0) return;

    const baseTop = getStackPositionPx();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const activeStackDist = isMobile ? Math.min(itemStackDistance, 20) : itemStackDistance;

    // Get current bounding rects
    const rects = items.map((item) => item.getBoundingClientRect());

    for (let i = 0; i < count; i++) {
      let cardsOnTop = 0;

      // Check how many cards above card i have arrived into the stack
      for (let k = i + 1; k < count; k++) {
        const targetK = baseTop + k * activeStackDist;
        const currentK = rects[k].top;

        if (currentK <= targetK + 1) {
          // Card k is fully pinned
          cardsOnTop += 1;
        } else {
          // Card k is in transition over itemDistance
          const distRemaining = currentK - targetK;
          if (distRemaining < itemDistance) {
            const progress = 1 - distRemaining / itemDistance;
            cardsOnTop += Math.max(0, Math.min(1, progress));
          }
        }
      }

      // Compute style properties
      const currentScale = Math.max(baseScale, 1 - cardsOnTop * itemScale);
      const currentDim = Math.min(0.55, cardsOnTop * dimAmount);
      const currentBrightness = Math.max(0.45, 1 - currentDim);
      const currentBlur = blurAmount > 0 ? cardsOnTop * blurAmount : 0;
      const currentTilt = tiltAmount > 0 ? -cardsOnTop * tiltAmount : 0;
      const currentRot =
        rotationAmount > 0 ? (i % 2 === 0 ? 1 : -1) * cardsOnTop * rotationAmount : 0;

      const transformStr = [
        `scale(${currentScale.toFixed(4)})`,
        'translate3d(0, 0, 0)',
        currentTilt !== 0 ? `rotateX(${currentTilt.toFixed(2)}deg)` : '',
        currentRot !== 0 ? `rotate(${currentRot.toFixed(2)}deg)` : '',
      ]
        .filter(Boolean)
        .join(' ');

      const filterStr = [
        `brightness(${currentBrightness.toFixed(3)})`,
        currentBlur > 0 ? `blur(${currentBlur.toFixed(1)}px)` : '',
      ]
        .filter(Boolean)
        .join(' ');

      const itemEl = items[i];
      if (itemEl) {
        itemEl.style.transform = transformStr;
        itemEl.style.filter = filterStr;
        itemEl.style.zIndex = `${10 + i}`;
      }
    }

    // Trigger stack complete callback once all cards are stacked
    if (!isCompleteRef.current && count > 1) {
      const lastTarget = baseTop + (count - 1) * activeStackDist;
      if (rects[count - 1].top <= lastTarget + 2) {
        isCompleteRef.current = true;
        if (onStackComplete) onStackComplete();
      }
    } else if (isCompleteRef.current && count > 1) {
      const lastTarget = baseTop + (count - 1) * activeStackDist;
      if (rects[count - 1].top > lastTarget + 5) {
        isCompleteRef.current = false;
      }
    }
  }, [
    baseScale,
    blurAmount,
    dimAmount,
    getStackPositionPx,
    isReducedMotion,
    itemDistance,
    itemScale,
    itemStackDistance,
    onStackComplete,
    rotationAmount,
    tiltAmount,
  ]);

  // Handle scroll events with rAF
  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateTransforms);
    };

    if (useWindowScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
    }

    // Initial positioning calculation
    updateTransforms();

    return () => {
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isReducedMotion, updateTransforms, useWindowScroll]);

  const childrenArray = React.Children.toArray(children);
  const totalItems = childrenArray.length;
  const stackTopPx = getStackPositionPx();

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-container ${className}`.trim()}
      style={{
        paddingBottom: `${holdDistance}px`,
        scrollSnapType: snap ? 'y mandatory' : undefined,
      }}
    >
      <div className="scroll-stack-inner">
        {childrenArray.map((child, index) => {
          const isLast = index === totalItems - 1;
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const activeStackDist = isMobile ? Math.min(itemStackDistance, 20) : itemStackDistance;
          const stickyTop = `${stackTopPx + index * activeStackDist}px`;

          return (
            <div
              key={index}
              ref={(el) => {
                itemWrappersRef.current[index] = el;
              }}
              className="scroll-stack-item-wrapper"
              style={{
                top: isReducedMotion ? undefined : stickyTop,
                marginBottom: isLast ? 0 : `${itemDistance}px`,
                zIndex: 10 + index,
                scrollSnapAlign: snap ? 'start' : undefined,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollStack;
