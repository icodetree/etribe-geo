import { useEffect, useState } from 'react';

/**
 * Floating mesh-gradient orbs that track the viewport.
 * Hidden during the Hero section; fades in from the second section onward.
 */
export function FloatingOrbs() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show orbs once the hero is mostly scrolled out of view
        setVisible(entry.intersectionRatio < 0.15);
      },
      { threshold: [0, 0.15, 0.5] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Primary 3D Orb - Dark Frosted Red Glass */}
      <div
        className="orb-drift-1 absolute backdrop-blur-xl"
        style={{
          width: 440,
          height: 440,
          left: '4%',
          top: '20%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.07) 0%, rgba(252,0,17,0.05) 30%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%)',
          boxShadow:
            'inset -30px -30px 60px rgba(0,0,0,0.6), inset 15px 15px 45px rgba(255,255,255,0.1), 0 40px 60px rgba(0,0,0,0.3)',
          opacity: 0.8,
          willChange: 'transform',
        }}
      />

      {/* Secondary 3D Orb - Dark Space Blue Glass */}
      <div
        className="orb-drift-4 absolute backdrop-blur-xl"
        style={{
          width: 320,
          height: 320,
          right: '5%',
          top: '50%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.06) 0%, rgba(63,43,150,0.06) 30%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%)',
          boxShadow:
            'inset -25px -25px 50px rgba(0,0,0,0.6), inset 12px 12px 35px rgba(255,255,255,0.08), 0 30px 50px rgba(0,0,0,0.3)',
          opacity: 0.75,
          willChange: 'transform',
        }}
      />

      {/* Tertiary 3D Orb - Dark Ambient Pink Glass */}
      <div
        className="orb-drift-3 absolute backdrop-blur-xl"
        style={{
          width: 220,
          height: 220,
          left: '20%',
          top: '70%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.06) 0%, rgba(255,133,157,0.05) 30%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.9) 100%)',
          boxShadow:
            'inset -15px -15px 30px rgba(0,0,0,0.6), inset 8px 8px 25px rgba(255,255,255,0.07), 0 20px 40px rgba(0,0,0,0.3)',
          opacity: 0.65,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
