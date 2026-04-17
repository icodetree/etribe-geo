import { useReveal } from './hooks/useReveal';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Definition } from './sections/Definition';
import { Data } from './sections/Data';
import { How } from './sections/How';
import { Tools } from './sections/Tools';
import { About } from './sections/About';
import { Positioning } from './sections/Positioning';
import { Process } from './sections/Process';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { FloatingOrbs } from './components/FloatingOrbs';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-ink-950 text-ink-50">
      <div className="noise" aria-hidden="true" />
      <FloatingOrbs />
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Definition />
        <Data />
        <How />
        <Tools />
        <About />
        <Positioning />
        <Process />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
