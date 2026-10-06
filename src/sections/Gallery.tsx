import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS, FADE_UP } from '../data';

interface GalleryProps {
  onOpen: (item: (typeof GALLERY_ITEMS)[0]) => void;
}

export function Gallery({ onOpen }: GalleryProps) {
  return (
    <section className="gallery-section" aria-label="La galerie">
      <motion.div className="gallery-header" {...FADE_UP}>
        <p className="gallery-kicker">ARCHIVES VISUELLES</p>
        <h2>La galerie</h2>
        <p className="gallery-lead">
          Découvrez une sélection de créations visuelles, d’identités graphiques et de concepts numériques imaginés pour donner vie aux idées.
        </p>
      </motion.div>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.button
            key={item.id}
            type="button"
            className={`gallery-item gallery-item-${(idx % 5) + 1}`}
            onClick={() => onOpen(item)}
            aria-label={`Voir ${item.title}`}
            {...FADE_UP}
            transition={{ ...FADE_UP.transition, delay: (idx % 6) * 0.05 }}
          >
            <img src={item.image_url || ''} alt={item.title} loading="lazy" draggable={false} />
            <span className="gallery-item-overlay">
              <b>{item.title}</b>
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
