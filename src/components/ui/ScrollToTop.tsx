import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="group fixed cursor-pointer bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-brand-red/40 hover:bg-brand-red/10 hover:shadow-[0_0_30px_rgba(252,0,17,0.2)] focus:outline-none focus:ring-2 focus:ring-brand-red/60"
          aria-label="맨 위로"
        >
          <ArrowUp className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-brand-red" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
