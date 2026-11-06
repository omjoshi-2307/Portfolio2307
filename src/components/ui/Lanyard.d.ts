import type { CSSProperties, JSX } from 'react';

export type LanyardOrientation = 'portrait' | 'landscape';
export type LanyardFinish = 'glossy' | 'matte' | 'holographic' | 'metallic';
export type LanyardAnchor = 'left' | 'center' | 'right' | number;
export type LanyardMetal = 'silver' | 'gold' | 'graphite';
export type LanyardImageFit = 'cover' | 'contain';

export interface LanyardProps {
  frontImage?: string;
  backImage?: string;
  imageFit?: LanyardImageFit;
  cardColor?: string;
  orientation?: LanyardOrientation;
  finish?: LanyardFinish;
  cornerRadius?: number;
  size?: number;
  anchor?: LanyardAnchor;
  strapLength?: number;
  strapImage?: string;
  strapColor?: string;
  strapWidth?: number;
  metal?: LanyardMetal;
  gravity?: number;
  damping?: number;
  elasticity?: number;
  breeze?: number;
  interactive?: boolean;
  intro?: boolean;
  className?: string;
  style?: CSSProperties;
}

export declare function Lanyard(props: LanyardProps): JSX.Element;
export default Lanyard;
