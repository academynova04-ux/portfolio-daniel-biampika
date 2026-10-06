import { motion } from 'motion/react';
import { ArrowUpRight, CodeXml } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { PROFILE, SKILL_CATEGORIES, ALL_SKILLS, FADE_UP, PROJECTS } from '../data';

export function About() {
  return (
    <section id="about" className="section about-section">
      <motion.div {...FADE_UP}>
        <SectionLabel number="01">À propos</SectionLabel>
      </motion.div>
      <div className="about-grid">
        <motion.div className="about-lead" {...FADE_UP}>
          <h2>
            Entre <span>logique</span> et <span>émotion.</span>
          </h2>
          <p>{PROFILE.description}</p>
          <p style={{ marginTop: 16 }}>
            Développeur Web · AI Enthusiast · UI/UX Designer · AI Content Creator. Je cultive un apprentissage continu à travers des projets personnels, la création digitale et l’expérimentation IA.
          </p>
          <a href="#contact" className="inline-link">
            Travaillons ensemble <ArrowUpRight size={16} />
          </a>
        </motion.div>
        <motion.div
          className="skills-panel"
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.15 }}
        >
          <div className="skills-head">
            <span>Mon arsenal</span>
            <b>{ALL_SKILLS.length.toString().padStart(2, '0')} compétences</b>
          </div>
          <p className="skills-intro">
            Mes compétences et outils pour créer, concevoir et donner vie à des projets numériques.
          </p>
          <div className="skill-groups">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="skill-group">
                <p className="skill-group-label">{cat.category}</p>
                <div className="skill-cloud">
                  {cat.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="facts">
            <div>
              <b>+{PROJECTS.length}</b>
              <span>
                Projets<br />réalisés
              </span>
            </div>
            <div>
              <CodeXml size={20} />
              <span>
                Expertise<br />informatique
              </span>
            </div>
            <div>
              <b>100%</b>
              <span>
                Passion &<br />exigence
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
