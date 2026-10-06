import { motion } from 'motion/react';
import { SectionLabel } from '../components/SectionLabel';
import { CreationCard } from '../components/CreationCard';
import { CREATION_ITEMS, FADE_UP } from '../data';

export function Creation() {
  return (
    <section id="creation" className="section creation-section">
      <motion.div className="section-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="03">Création visuelle</SectionLabel>
          <p className="eyebrow-accent">MON UNIVERS CRÉATIF</p>
          <h2>
            L’image, le design et l’IA
            <br />
            <em>au service de vos idées.</em>
          </h2>
        </div>
        <p className="section-lead">
          Je crée des visuels modernes en combinant design graphique, intelligence artificielle, direction artistique et technologies digitales.
        </p>
      </motion.div>
      <div className="creation-grid">
        {CREATION_ITEMS.map((item, idx) => (
          <CreationCard key={item.id} cat={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
