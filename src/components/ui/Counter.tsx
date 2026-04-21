import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

export function Counter({ value, suffixContent }: { value: number; suffixContent?: React.ReactNode }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.3,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="inline">
      <span>
        {displayValue}
        {suffixContent}
      </span>
    </div>
  );
}
