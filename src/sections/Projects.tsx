import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, AlertCircle, X } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { PROJECTS, FADE_UP, Project } from '../data';

export function Projects() {
  const [pendingProject, setPendingProject] = useState<Project | null>(null);

  // Close modal with Escape key & lock body scroll while modal is active
  useEffect(() => {
    if (pendingProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setPendingProject(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [pendingProject]);

  const handleProjectClick = (e: React.MouseEvent, proj: Project) => {
    if (proj.status === 'in-development') {
      e.preventDefault();
      setPendingProject(proj);
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <motion.div className="section-heading" {...FADE_UP}>
        <div>
          <SectionLabel number="02">Projets réalisés</SectionLabel>
          <h2>
            Du concept au <em>pixel parfait.</em>
          </h2>
        </div>
        <p>Des produits digitaux en ligne, pensés, dessinés et développés avec soin.</p>
      </motion.div>

      <div className="project-list project-list-modern">
        {PROJECTS.map((proj, idx) => {
          const isInDev = proj.status === 'in-development';
          return (
            <motion.article
              key={proj.id}
              className={`project-card project-card-modern project-${idx + 1}`}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: (idx % 3) * 0.06 }}
            >
              <a
                className="project-preview"
                href={proj.link_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleProjectClick(e, proj)}
                aria-label={`Voir le projet ${proj.title}`}
              >
                <img
                  src={proj.image_url || ''}
                  alt={`Aperçu du site ${proj.title}`}
                  loading="lazy"
                />
                <span className="project-index">{String(idx + 1).padStart(2, '0')}</span>
                {isInDev && (
                  <span className="project-status-badge">En cours</span>
                )}
                <div className="project-overlay" />
              </a>
              <div className="project-info project-info-modern">
                <div>
                  <p>{proj.subtitle}</p>
                  <h3>{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                  <div className="tags">
                    {proj.metadata?.technologies?.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {proj.link_url && (
                    <a
                      href={proj.link_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleProjectClick(e, proj)}
                    >
                      Voir le projet <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Confirmation Modal for Projects in Development */}
      <AnimatePresence>
        {pendingProject && (
          <div
            className="dev-modal-backdrop"
            onClick={() => setPendingProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dev-modal-title"
          >
            <motion.div
              className="dev-modal-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="dev-modal-close"
                onClick={() => setPendingProject(null)}
                aria-label="Fermer la fenêtre"
              >
                <X size={18} />
              </button>

              <div className="dev-modal-icon">
                <AlertCircle size={26} />
              </div>

              <div className="dev-modal-project-name">
                {pendingProject.title}
              </div>

              <h3 id="dev-modal-title" className="dev-modal-title">
                Projet en cours de développement
              </h3>

              <p className="dev-modal-message">
                « Ce projet est actuellement en cours de développement. Voulez-vous tout de même accéder au site ? »
              </p>

              <div className="dev-modal-actions">
                <button
                  type="button"
                  className="dev-modal-btn btn-cancel"
                  onClick={() => setPendingProject(null)}
                >
                  Annuler
                </button>
                <a
                  href={pendingProject.link_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dev-modal-btn btn-confirm"
                  onClick={() => setPendingProject(null)}
                >
                  Voir le projet <ExternalLink size={15} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
