import { motion } from 'motion/react';
import { ArrowUpRight, ShoppingBag, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { ONLINE_PRESENCE, FADE_UP } from '../data';

const ICON_MAP = {
  store: ShoppingBag,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
};

export function OnlinePresence() {
  return (
    <section id="online" className="section online-section" aria-labelledby="online-title">
      <motion.div className="section-heading online-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="03b">Présence digitale</SectionLabel>
          <h2 id="online-title">
            Retrouvez-moi <em>en ligne</em>
          </h2>
        </div>
        <p>Découvrez mes projets, mes créations et mes activités sur mes différentes plateformes.</p>
      </motion.div>
      <div className="online-grid">
        {ONLINE_PRESENCE.map((item, idx) => {
          const IconComp = ICON_MAP[item.icon];
          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="online-card"
              aria-label={`${item.label} — ouvrir dans un nouvel onglet`}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: idx * 0.06 }}
            >
              <div className="online-card-top">
                <span className="online-index">{item.id}</span>
                <span className="online-icon" aria-hidden="true">
                  <IconComp size={22} />
                </span>
              </div>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <span className="online-cta">
                Visiter
                <ArrowUpRight size={15} aria-hidden={true} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
