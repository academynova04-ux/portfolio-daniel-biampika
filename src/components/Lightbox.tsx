import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxItem {
  title: string;
  subtitle?: string;
  image_url?: string | null;
}

interface LightboxProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button type="button" aria-label="Fermer" onClick={onClose}>
            <X size={20} />
          </button>
          <motion.div
            initial={{ scale: 0.92 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={item.image_url || ''} alt={item.title} />
            <p>{item.subtitle}</p>
            <h3>{item.title}</h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
