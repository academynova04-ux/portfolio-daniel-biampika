import { motion } from 'motion/react';
import { Check, CodeXml, LayoutTemplate, Sparkles, PenTool, MonitorSmartphone } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { SERVICES, FADE_UP } from '../data';

const SERVICE_ICONS = [CodeXml, LayoutTemplate, Sparkles, PenTool, MonitorSmartphone];

export function Services() {
  return (
    <section id="services" className="section services-section">
      <motion.div className="section-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="04">Ce que je fais</SectionLabel>
          <h2>
            Des solutions qui ont
            <br />
            <em>du sens.</em>
          </h2>
        </div>
      </motion.div>
      <div className="service-grid">
        {SERVICES.map((item, idx) => {
          const IconComp = SERVICE_ICONS[idx % SERVICE_ICONS.length];
          return (
            <motion.article
              key={item.id}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: idx * 0.08 }}
            >
              <div className="service-number">0{idx + 1}</div>
              <IconComp size={28} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.items.map((subItem) => (
                  <li key={subItem}>
                    <Check size={14} />
                    {subItem}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
