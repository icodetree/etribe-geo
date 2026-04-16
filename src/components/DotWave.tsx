import { useEffect, useRef } from 'react';

/**
 * Particle dot-wave background with time-cycling palette.
 *
 * Palette deliberately avoids purple (hues 240–320°) to dodge
 * the "generic AI" look. Stops are direct-interpolated so the
 * transition path never wraps through magenta.
 *
 *   Ember (coral/brand red)  →
 *   Gold  (amber/sunset)     →
 *   Mint  (teal/aqua)        →
 *   Steel (deep cyan-blue)   →  loop
 *
 * One full cycle ≈ 50s — slow enough to feel ambient, fast
 * enough that returning visitors notice shift between sections.
 */

type PaletteStop = { at: number; hue: number; sat: number };

const PALETTE_STOPS: PaletteStop[] = [
  { at: 0.0, hue: 10, sat: 12 }, // Ember — warm gray
  { at: 0.28, hue: 38, sat: 14 }, // Gold — warm gray
  { at: 0.52, hue: 170, sat: 10 }, // Mint — cool gray
  { at: 0.76, hue: 205, sat: 12 }, // Steel — cool gray
  { at: 1.0, hue: 10, sat: 12 }, // loop back to Ember
];

const CYCLE_SECONDS = 50;

function samplePalette(cycleT: number): { hue: number; sat: number } {
  for (let i = 0; i < PALETTE_STOPS.length - 1; i++) {
    const a = PALETTE_STOPS[i];
    const b = PALETTE_STOPS[i + 1];
    if (cycleT >= a.at && cycleT <= b.at) {
      const raw = (cycleT - a.at) / (b.at - a.at);
      const s = raw * raw * (3 - 2 * raw); // smoothstep
      return {
        hue: a.hue + (b.hue - a.hue) * s,
        sat: a.sat + (b.sat - a.sat) * s,
      };
    }
  }
  return { hue: PALETTE_STOPS[0].hue, sat: PALETTE_STOPS[0].sat };
}

export function DotWave({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let isVisible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    // Pause when off-screen to save CPU
    const io = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 },
    );
    io.observe(canvas);

    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    let raf = 0;
    const startTime = performance.now();
    const FRAME_INTERVAL = 1000 / 30; // 30fps cap
    let lastFrame = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);

      // Skip if off-screen or throttled
      if (!isVisible) return;
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;
      const elapsed = (now - startTime) / 1000;
      const cycleT = (elapsed / CYCLE_SECONDS) % 1;
      const palette = samplePalette(cycleT);

      // Wave phase (frame-equivalent time)
      const t = reduced ? 0 : elapsed * 60;

      // ── Layer 1: tinted base ──────────────────────────────
      ctx.fillStyle = `hsl(${palette.hue}, 18%, 4.5%)`;
      ctx.fillRect(0, 0, width, height);

      // ── Layer 2: ambient radial wash (hue-tinted) ─────────
      const bgGrad = ctx.createRadialGradient(
        width * 0.78,
        height * 0.3,
        0,
        width * 0.78,
        height * 0.3,
        Math.max(width, height),
      );
      bgGrad.addColorStop(
        0,
        `hsla(${palette.hue}, ${palette.sat * 0.3}%, 10%, 0.95)`,
      );
      bgGrad.addColorStop(
        0.5,
        `hsla(${palette.hue}, ${palette.sat * 0.15}%, 5%, 0.5)`,
      );
      bgGrad.addColorStop(1, `hsla(0, 0%, 2%, 0)`);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ── Layer 3: hotspot glow (top-right) ─────────────────
      const glowGrad = ctx.createRadialGradient(
        width * 0.78,
        height * 0.3,
        0,
        width * 0.78,
        height * 0.3,
        width * 0.55,
      );
      glowGrad.addColorStop(
        0,
        `hsla(${palette.hue}, ${palette.sat}%, 55%, 0.18)`,
      );
      glowGrad.addColorStop(
        0.35,
        `hsla(${palette.hue + 15}, ${palette.sat}%, 48%, 0.08)`,
      );
      glowGrad.addColorStop(1, `hsla(0, 0%, 0%, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // ── Layer 4: accent glow (bottom-left, opposite hue) ──
      // subtle counter-tone so the scene has two colors visible at once
      const accentHue = palette.hue + 30;
      const accentGrad = ctx.createRadialGradient(
        width * 0.1,
        height * 0.85,
        0,
        width * 0.1,
        height * 0.85,
        width * 0.35,
      );
      accentGrad.addColorStop(
        0,
        `hsla(${accentHue}, ${palette.sat * 0.7}%, 45%, 0.06)`,
      );
      accentGrad.addColorStop(1, `hsla(0, 0%, 0%, 0)`);
      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, 0, width, height);

      // ── Layer 5: dot-wave particle field ──────────────────
      const gap = width < 640 ? 16 : 14;
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;

      const centerX = width * 0.78;
      const centerY = height * 0.32;
      const maxDist = Math.hypot(width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * gap;
          const baseY = j * gap;

          // Layered sine displacement
          const w1 = Math.sin(i * 0.055 + t * 0.009 + j * 0.025) * 18;
          const w2 = Math.cos(i * 0.025 - j * 0.04 + t * 0.006) * 12;
          const w3 = Math.sin((i + j) * 0.02 - t * 0.004) * 8;
          const dy = w1 + w2 + w3;

          // Wavy band centered in upper-right
          const bandCenterY = height * 0.42 + dy;
          const distFromBand = Math.abs(baseY - bandCenterY);
          const bandWidth =
            height * 0.32 + Math.sin(i * 0.025 + t * 0.003) * 40;

          if (distFromBand > bandWidth) continue;
          const bandFade = 1 - distFromBand / bandWidth;

          // Radial intensity from top-right hotspot
          const dx = baseX - centerX;
          const dYc = baseY - centerY;
          const radialDist = Math.hypot(dx, dYc);
          const radial = Math.max(0, 1 - radialDist / (maxDist * 0.55));

          const intensity =
            Math.pow(bandFade, 1.2) * (0.35 + Math.pow(radial, 1.5) * 0.9);

          if (intensity < 0.05) continue;

          // Spatial bias — right/top positions get slightly shifted hue
          const biasRight = Math.pow(i / cols, 1.3);
          const biasTop = Math.pow(1 - j / rows, 1.2);
          const bias = Math.min(1, biasRight * 0.7 + biasTop * 0.4);
          const spatialShift = (bias - 0.5) * 26;

          const hue = palette.hue + spatialShift;
          const sat = palette.sat + bandFade * 6;
          const light = 62 + bandFade * 28;

          const radius = 0.6 + intensity * 1.5;
          const alpha = Math.min(0.95, intensity * 0.65);

          ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(baseX, baseY, radius, 0, Math.PI * 2);
          ctx.fill();

          // Rare sparkle — slight hue shift for variety
          if (radial > 0.75 && Math.random() < 0.003) {
            ctx.fillStyle = `hsla(${hue + 18}, 30%, 88%, ${Math.min(1, alpha + 0.15)})`;
            ctx.beginPath();
            ctx.arc(baseX, baseY, radius + 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

    };

    raf = requestAnimationFrame(draw);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
