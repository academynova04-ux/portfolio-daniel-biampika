import { motion } from 'motion/react';
import { CodeXml, Palette, Sparkles, PenTool } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { EXPERTISE, FADE_UP } from '../data';

const EXPERTISE_ICONS = {
  code: CodeXml,
  palette: Palette,
  spark: Sparkles,
  pen: PenTool,
};

export function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <motion.div className="section-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="05">Expertise</SectionLabel>
          <p className="eyebrow-accent">CE QUE JE MAÎTRISE</p>
          <h2>
            Des idées transformées en
            <br />
            <em>expériences digitales.</em>
          </h2>
        </div>
        <p className="section-lead">
          Je combine développement web, design, branding et intelligence artificielle pour créer des expériences numériques modernes, utiles et mémorables.
        </p>
      </motion.div>
      <div className="expertise-grid">
        {EXPERTISE.map((item, idx) => {
          const IconComp = EXPERTISE_ICONS[item.icon];
          return (
            <motion.article
              key={item.index}
              className="expertise-card"
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: 0.05 + idx * 0.05 }}
            >
              <div className="expertise-card-header">
                <span className="expertise-index">{item.index}</span>
                <div className="expertise-icon">
                  <IconComp size={22} />
                </div>
              </div>
              <h3>{item.title}</h3>
              <div className="expertise-techs">
                {item.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
