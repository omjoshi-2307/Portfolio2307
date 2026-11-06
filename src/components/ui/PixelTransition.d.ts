import type { CSSProperties, ReactNode, JSX } from 'react';

export interface PixelTransitionProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  gridSize?: number;
  pixelColor?: string;
  mosaic?: number;
  animationStepDuration?: number;
  pattern?: 'random' | 'dither' | 'ripple' | 'wipe';
  randomness?: number;
  pixelAnimation?: 'pop' | 'grow' | 'fade';
  pixelShape?: 'square' | 'rounded' | 'circle';
  gap?: number;
  fps?: number;
  trigger?: 'hover' | 'click';
  active?: boolean;
  once?: boolean;
  onActiveChange?: (active: boolean) => void;
  aspectRatio?: string | number;
  className?: string;
  style?: CSSProperties;
}

export declare function PixelTransition(props: PixelTransitionProps): JSX.Element;
export default PixelTransition;
