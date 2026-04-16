import { useRef, useState, useEffect } from 'react';
import { useInView, animate } from 'motion/react';

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) return;

    const reduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (reduced) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value === 0 ? 0 : display}
      {suffix}
    </span>
  );
}
