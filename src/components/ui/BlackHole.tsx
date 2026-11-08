import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface BlackHoleProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  colors?: [string, string];
  opacity?: number;
  zoom?: number;
  particleCount?: number;
  orbSize?: number;
  glow?: number;
  contrast?: number;
  ringIntensity?: number;
  mirrorSplits?: number;
  warpEnabled?: boolean;
  distanceFade?: number;
  speed?: number;
  intro?: boolean;
  cursorInteraction?: boolean;
  dpr?: number;
  className?: string;
  style?: React.CSSProperties;
}

const VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMouse;
uniform float uZoom;
uniform float uParticleCount;
uniform float uOrbSize;
uniform float uGlow;
uniform float uContrast;
uniform float uRingIntensity;
uniform float uMirrorSplits;
uniform float uWarpEnabled;
uniform float uDistanceFade;
uniform float uSpeed;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uOpacity;
uniform float uIntroProgress;
uniform float uCursorInteraction;

varying vec2 vUv;

void main() {
  // Screen-space coordinates centered at origin
  vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

  // Subtle interactive parallax if enabled
  vec2 mouseOffset = uCursorInteraction > 0.5 ? (uMouse - 0.5) * 0.12 : vec2(0.0);
  vec2 p = st - mouseOffset;

  float r = length(p);
  float theta = atan(p.y, p.x);

  // Gravitational lensing / mirrored warp
  if (uWarpEnabled > 0.5) {
    float splits = max(1.0, uMirrorSplits);
    float modTheta = mod(theta, 6.283185307 / splits);
    float symTheta = abs(modTheta - 3.1415926535 / splits);
    theta = theta + sin(symTheta * splits) * (0.16 / max(r, 0.18));
  }

  // Event horizon shadow radius (scaled inversely by zoom)
  float rs = 0.25 / max(uZoom, 0.5);
  float shadow = smoothstep(rs * 0.96, rs * 1.02, r);

  // Intense thin photon ring hugging the event horizon
  float ringDist = abs(r - rs * 1.07);
  float photonRing = exp(-pow(ringDist * 44.0 * uZoom, 2.0)) * uRingIntensity;

  // Accretion disk orbiting light streaks (Keplerian dynamics)
  float t = uTime * uSpeed * 0.55;
  float particles = 0.0;
  int count = int(clamp(uParticleCount, 1.0, 30.0));

  for (int i = 0; i < 30; i++) {
    if (i >= count) break;
    float fi = float(i);
    float orbitR = rs * (1.14 + fi * 0.11 * (uOrbSize / 0.75));
    float speedMult = 1.0 / sqrt(max(orbitR, 0.08));
    float phi = t * speedMult * 0.75 + fi * 2.399963; // Golden angle distribution

    // Tilted elliptical projection for 3D perspective
    vec2 orbPos = vec2(cos(phi), sin(phi) * 0.44) * orbitR;

    float d = length(p - orbPos);
    particles += (uGlow * 0.75) / (d * d * 22.0 + 0.012);
  }

  // Volumetric smoky accretion haze with turbulence
  vec2 diskP = vec2(p.x, p.y / 0.44);
  float diskR = length(diskP);
  float diskTheta = atan(diskP.y, diskP.x);
  float swirl = diskTheta + 2.8 / max(diskR, 0.1) - t * 0.5;

  float haze = sin(swirl * 3.0 + diskR * 7.0) * 0.5 + 0.5;
  haze += sin(swirl * 6.0 - diskR * 13.0 + t) * 0.25 + 0.25;
  haze += sin(swirl * 12.0 + diskR * 25.0 - t * 1.2) * 0.125 + 0.125;

  float diskBand = smoothstep(rs * 1.01, rs * 1.32, diskR) * exp(-diskR * uDistanceFade * 2.8);
  float accretion = pow(haze * diskBand, uContrast * 0.65) * 1.1;

  // Combined luminescence masked by the black hole shadow
  float totalIntensity = (photonRing * 1.25 + particles * 0.55 + accretion * 0.6) * shadow;
  totalIntensity = pow(totalIntensity, 1.0 / (uContrast * 0.35 + 0.65));
  totalIntensity *= uIntroProgress;

  // Monochrome luxury gradient (white core & highlights, neutral grey haze)
  vec3 col = mix(uColor2, uColor1, clamp(totalIntensity * 0.9, 0.0, 1.0));

  // Alpha falloff so canvas remains transparent and blends with background
  float alpha = clamp(totalIntensity * uOpacity, 0.0, 1.0);
  alpha *= smoothstep(1.7, 0.15, r);

  gl_FragColor = vec4(col * alpha, alpha);
}
`;

export function BlackHole({
  width = '100%',
  height = '100%',
  backgroundColor = 'transparent',
  colors = ['#FFFFFF', '#737373'],
  opacity = 0.8,
  zoom = 1.8,
  particleCount = 13,
  orbSize = 0.75,
  glow = 0.08,
  contrast = 3,
  ringIntensity = 1,
  mirrorSplits = 2,
  warpEnabled = true,
  distanceFade = 0.35,
  speed = 1,
  intro = true,
  cursorInteraction = true,
  dpr = 1.5,
  className = '',
  style = {},
}: BlackHoleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, dpr);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(
      backgroundColor === 'transparent' ? 0x000000 : new THREE.Color(backgroundColor),
      backgroundColor === 'transparent' ? 0 : 1
    );

    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const color1 = new THREE.Color(colors[0]);
    const color2 = new THREE.Color(colors[1]);
    const uniforms = {
      uResolution: {
        value: new THREE.Vector2(container.clientWidth * pixelRatio, container.clientHeight * pixelRatio),
      },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uZoom: { value: zoom },
      uParticleCount: { value: particleCount },
      uOrbSize: { value: orbSize },
      uGlow: { value: glow },
      uContrast: { value: contrast },
      uRingIntensity: { value: ringIntensity },
      uMirrorSplits: { value: mirrorSplits },
      uWarpEnabled: { value: warpEnabled ? 1.0 : 0.0 },
      uDistanceFade: { value: distanceFade },
      uSpeed: { value: prefersReducedMotion ? 0 : speed },
      uColor1: { value: new THREE.Vector3(color1.r, color1.g, color1.b) },
      uColor2: { value: new THREE.Vector3(color2.r, color2.g, color2.b) },
      uOpacity: { value: opacity },
      uIntroProgress: { value: prefersReducedMotion || !intro ? 1.0 : 0.0 },
      uCursorInteraction: { value: cursorInteraction ? 1.0 : 0.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: false,
      depthTest: false,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let currentMouseX = 0.5;
    let currentMouseY = 0.5;
    let isVisible = false;
    let animationFrameId: number | null = null;
    const startTime = performance.now();
    const introDuration = 1800;

    const shouldAnimate = () =>
      !prefersReducedMotion &&
      (speed > 0 || (intro && uniforms.uIntroProgress.value < 1) || cursorInteraction);

    const renderFrame = (currentTime: number) => {
      animationFrameId = null;
      if (!isVisible || document.hidden) return;

      const elapsedMs = currentTime - startTime;
      uniforms.uTime.value = prefersReducedMotion ? 0 : elapsedMs / 1000;

      if (prefersReducedMotion) {
        uniforms.uIntroProgress.value = 1;
      } else if (intro && uniforms.uIntroProgress.value < 1) {
        const progress = Math.min(1, elapsedMs / introDuration);
        uniforms.uIntroProgress.value = 1 - Math.pow(1 - progress, 3);
      }

      if (cursorInteraction) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        uniforms.uMouse.value.set(currentMouseX, currentMouseY);
      }

      renderer.render(scene, camera);
      if (shouldAnimate()) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    const wake = () => {
      if (isVisible && !document.hidden && animationFrameId === null) {
        animationFrameId = requestAnimationFrame(renderFrame);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        targetMouseX = (event.clientX - rect.left) / rect.width;
        targetMouseY = 1 - (event.clientY - rect.top) / rect.height;
      }
    };

    const handleMouseLeave = () => {
      targetMouseX = 0.5;
      targetMouseY = 0.5;
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          renderer.setSize(width, height);
          uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
          wake();
        }
      }
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(entries => {
      isVisible = entries.some(entry => entry.isIntersecting);
      if (isVisible) {
        wake();
      } else if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });
    intersectionObserver.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden && animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      } else {
        wake();
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      uniforms.uSpeed.value = prefersReducedMotion ? 0 : speed;
      if (prefersReducedMotion) uniforms.uIntroProgress.value = 1;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      wake();
    };

    if (cursorInteraction) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      motionQuery.removeEventListener('change', handleMotionChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [
    backgroundColor,
    colors,
    contrast,
    cursorInteraction,
    distanceFade,
    dpr,
    glow,
    intro,
    mirrorSplits,
    opacity,
    orbSize,
    particleCount,
    ringIntensity,
    speed,
    warpEnabled,
    zoom,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-hidden ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
