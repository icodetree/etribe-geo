import { useEffect, useRef } from 'react';

/**
 * Particle dot-wave background (LG CNS-style).
 * - Grid of dots modulated by layered sine waves.
 * - Right/top dots brighten and shift toward magenta/pink.
 * - Left/bottom dots fade to deep navy.
 */
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

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    let raf = 0;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gap = width < 640 ? 11 : 9;
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;

      const centerX = width * 0.78;
      const centerY = height * 0.32;
      const maxDist = Math.hypot(width, height);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * gap;
          const baseY = j * gap;

          // Layered sine wave displacement
          const w1 =
            Math.sin(i * 0.055 + t * 0.009 + j * 0.025) * 18;
          const w2 = Math.cos(i * 0.025 - j * 0.04 + t * 0.006) * 12;
          const w3 = Math.sin((i + j) * 0.02 - t * 0.004) * 8;
          const dy = w1 + w2 + w3;

          // Wavy band centered in the upper-right area
          const bandCenterY = height * 0.42 + dy;
          const distFromBand = Math.abs(baseY - bandCenterY);
          const bandWidth =
            height * 0.32 + Math.sin(i * 0.025 + t * 0.003) * 40;

          if (distFromBand > bandWidth) continue;
          const bandFade = 1 - distFromBand / bandWidth;

          // Radial brightness from top-right hot spot
          const dx = baseX - centerX;
          const dYc = baseY - centerY;
          const radialDist = Math.hypot(dx, dYc);
          const radial = Math.max(0, 1 - radialDist / (maxDist * 0.55));

          const intensity =
            Math.pow(bandFade, 1.2) * (0.35 + Math.pow(radial, 1.5) * 0.9);

          if (intensity < 0.05) continue;

          // Color transition: left=soft indigo/white, right=pink/magenta
          const biasRight = Math.pow(i / cols, 1.3);
          const biasTop = Math.pow(1 - j / rows, 1.2);
          const bias = Math.min(1, biasRight * 0.7 + biasTop * 0.4);

          // HSL: 240(indigo) → 320(magenta)
          const hue = 238 + bias * 82;
          const sat = 65 + bias * 25;
          const light = 62 + bandFade * 28;

          const radius = 0.6 + intensity * 1.5;
          const alpha = Math.min(0.95, intensity * 0.85);

          ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(baseX, baseY, radius, 0, Math.PI * 2);
          ctx.fill();

          // Occasional bright dot (sparkle)
          if (radial > 0.75 && Math.random() < 0.004) {
            ctx.fillStyle = `hsla(${hue + 20}, 90%, 88%, ${Math.min(1, alpha + 0.2)})`;
            ctx.beginPath();
            ctx.arc(baseX, baseY, radius + 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      if (!reduced) t += 1;
      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
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
