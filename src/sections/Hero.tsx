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
          <span>✦</span> Développeur créatif basé à Brazzaville
        </p>
        <h1 className="hero-rotator" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={quoteIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            >
              {quote.line1}
              <br />
              <em>{quote.line2}</em>
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="hero-intro">
          Je conçois des identités visuelles fortes, des produits web solides et des interfaces qui font la différence.
        </p>
        <div className="hero-expertises-bar">
          <span className="expertise-pill">
            <CodeXml size={13} /> Développeur Web
          </span>
          <span className="expertise-pill">
            <Palette size={13} /> Designer UI/UX & Branding
          </span>
          <span className="expertise-pill">
            <Sparkles size={13} /> Spécialiste IA
          </span>
          <span className="expertise-pill">
            <PenTool size={13} /> Créateur Digital
          </span>
        </div>
        <div className="hero-proof">
          <span>
            <b>+{PROJECTS.length}</b> Projets réalisés
          </span>
          <i />
          <span>
            <b>Expertise</b> informatique
          </span>
        </div>
        <div className="hero-cta">
          <a className="btn-primary" href="#projects">
            Voir mes projets <ArrowDownRight size={18} />
          </a>
          <a className="btn-text contact-link" href="#contact">
            Me contacter <ArrowUpRight size={17} />
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
          <img src={PROFILE.image} alt="Daniel Biampika, développeur et designer à Brazzaville" />
        </div>
      </motion.div>
    </section>
  );
}
