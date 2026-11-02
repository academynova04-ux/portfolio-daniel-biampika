import { motion } from 'motion/react';
import { Check, CodeXml, LayoutTemplate, Database, RefreshCw, Palette, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { SERVICES, FADE_UP } from '../data';

const SERVICE_ICONS = [CodeXml, LayoutTemplate, Database, RefreshCw, Palette];

export function Services() {
  const handleSelectService = (projectType: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('select-project-type', { detail: projectType }));
    }
  };

  return (
    <section id="services" className="section services-section">
      <motion.div className="section-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="04">Services & Offres</SectionLabel>
          <h2>
            Des solutions numériques taillées pour
            <br />
            <em>votre activité.</em>
          </h2>
        </div>
        <p>
          Chaque projet est conçu avec rigueur technique et sens du détail pour répondre à vos objectifs concrets : valoriser votre marque, simplifier votre gestion et accélérer vos résultats.
        </p>
      </motion.div>
      <div className="service-grid service-grid-commercial">
        {SERVICES.map((item, idx) => {
          const IconComp = SERVICE_ICONS[idx % SERVICE_ICONS.length];
          return (
            <motion.article
              key={item.id}
              className="service-card-commercial"
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: idx * 0.08 }}
            >
              <div className="service-header">
                <div className="service-icon-wrap">
                  <IconComp size={22} />
                </div>
                <span className="service-number">0{idx + 1}</span>
              </div>
              {item.badge && <span className="service-badge">{item.badge}</span>}
              <h3>{item.title}</h3>
              <p className="service-desc">{item.description}</p>
              <ul className="service-deliverables">
                {item.items.map((subItem) => (
                  <li key={subItem}>
                    <Check size={14} />
                    <span>{subItem}</span>
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <a
                  href="#contact"
                  className="service-action-btn"
                  onClick={() => handleSelectService(item.projectType)}
                >
                  Discuter de ce besoin <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
