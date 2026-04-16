import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ScrollDivider() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // starts appearing slightly after passing up from the bottom
    // finishes when the top of the section is near the upper third of the screen
    offset: ['start 85%', 'start 20%'],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.8, 1]);

  return (
    <div
      ref={ref}
      // Increased height to create a falling light effect (200px)
      className="absolute left-0 right-0 top-0 flex justify-center w-full h-[200px] pointer-events-none z-10 overflow-hidden"
    >
      {/* Top 1px horizontal crisp hairline matching UI */}
      <motion.div
        style={{ scaleX, opacity, transformOrigin: 'center' }}
        className="absolute top-0 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
      
      {/* The main top-to-bottom falling gradient shadow */}
      <motion.div
        style={{ scaleX, opacity, transformOrigin: 'center' }}
        className="w-full h-full bg-gradient-to-b from-white/[0.07] to-transparent [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      />
    </div>
  );
}
