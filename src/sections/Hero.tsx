import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, CodeXml, Palette, Sparkles, PenTool } from 'lucide-react';
import { HERO_QUOTES, PROFILE, PROJECTS } from '../data';

export function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % HERO_QUOTES.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = HERO_QUOTES[quoteIndex];

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <p className="eyebrow">
          <span>✦</span> Daniel Biampika · Développeur web & Concepteur de solutions numériques
        </p>
        <h1 className="hero-rotator" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={quoteIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {quote.line1}
              <br />
              <em>{quote.line2}</em>
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="hero-value-statement">
          « Je conçois des sites web et des applications modernes pour transformer vos idées en <b>solutions numériques concrètes</b>. »
        </p>
        <p className="hero-intro">
          Sites vitrines professionnels, plateformes métier sur-mesure et interfaces fluides pensées pour valoriser votre expertise et convertir vos visiteurs en clients.
        </p>
        <div className="hero-expertises-bar">
          <span className="expertise-pill">
            <CodeXml size={13} /> Sites Web Vitrines & Corporate
          </span>
          <span className="expertise-pill">
            <Palette size={13} /> Applications & Outils de Gestion
          </span>
          <span className="expertise-pill">
            <Sparkles size={13} /> Interfaces UI/UX & Responsive
          </span>
          <span className="expertise-pill">
            <PenTool size={13} /> Refonte & Modernisation
          </span>
        </div>
        <div className="hero-proof">
          <span>
            <b>+{PROJECTS.length}</b> Réalisations en ligne
          </span>
          <i />
          <span>
            <b>Solutions</b> sur-mesure
          </span>
          <i />
          <span>
            <b>Brazzaville</b> & International
          </span>
        </div>
        <div className="hero-cta">
          <a className="btn-primary" href="#projects">
            Découvrir mes réalisations <ArrowDownRight size={18} />
          </a>
          <a className="btn-text contact-link" href="#contact">
            Discuter de mon projet <ArrowUpRight size={17} />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1.06 }}
        transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="portrait-frame">
          <div className="portrait-shape" />
          <img src={PROFILE.image} alt="Daniel Biampika, développeur web et concepteur de solutions numériques" />
        </div>
      </motion.div>
    </section>
  );
}
