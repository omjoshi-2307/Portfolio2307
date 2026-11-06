import type { CSSProperties, ReactNode, JSX } from 'react';

export type SwarmShape = 'dot' | 'streak' | 'square';
export type SwarmIdle = 'roam' | 'gather' | 'hide';
export type SwarmClickEffect = 'burst' | 'pulse' | 'none';

export interface SwarmCursorProps {
  count?: number;
  size?: number;
  shape?: SwarmShape;
  color?: string;
  accentColor?: string;
  spread?: number;
  speed?: number;
  swirl?: number;
  tail?: number;
  trail?: number;
  wander?: number;
  depth?: number;
  targets?: string;
  idle?: SwarmIdle;
  clickEffect?: SwarmClickEffect;
  hideCursor?: boolean;
  intro?: boolean;
  enabled?: boolean;
  lightMode?: boolean;
  dpr?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export declare function SwarmCursor(props: SwarmCursorProps): JSX.Element;
export default SwarmCursor;
