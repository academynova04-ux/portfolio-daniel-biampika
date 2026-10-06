import { motion } from 'motion/react';
import { FADE_UP, CreationItem } from '../data';

interface CreationCardProps {
  cat: CreationItem;
  index: number;
}

export function CreationCard({ cat, index }: CreationCardProps) {
  return (
    <motion.article
      className="creation-card"
      {...FADE_UP}
      transition={{ ...FADE_UP.transition, delay: (index % 3) * 0.07 }}
    >
      <div className="creation-image-wrapper">
        <img src={cat.image} alt={cat.title} loading="lazy" draggable={false} />
        <div className="creation-badge">{cat.index}</div>
        <div className="creation-overlay" />
      </div>
      <div className="creation-body">
        <h3>{cat.title}</h3>
        <p>{cat.description}</p>
      </div>
    </motion.article>
  );
}
