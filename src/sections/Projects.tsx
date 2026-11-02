import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, AlertCircle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { PROJECTS, FADE_UP, Project } from '../data';

type CategoryFilter = 'all' | 'saas' | 'showcase' | 'platform' | 'in-dev';

const SAAS_SLUGS = new Set([
  'nexa-workspace', 'arcada-nova-gestion', 'koumou-hospitality', 'plenia-budget',
  'nova-gestion-3meo', 'batistock-construction', 'planiqo-rendezvous', 'nova-rendezvous',
  'pilotis-budget', 'nova-location-740q', 'nova-gestion-di4y', 'nova-gestion-congo',
  'terranova-agricole', 'relchie-market', 'koumou-hospitality-management', 'faktelio'
]);

const SHOWCASE_SLUGS = new Set([
  'mada-voyage', 'garagiste', 'batit-diaspora', 'arcada-cyclea',
  'maman-plus', 'luxoria', 'autokongo-ftts', 'serein-sante',
  'furniture-studio-premium', 'furniture-store'
]);

const PLATFORM_SLUGS = new Set([
  'codenova-learning', 'arcada-codenova', 'arcada-invita', 'ruben-elenga',
  'nova-code', 'junior-france-ngakosso', 'naya-invitations'
]);

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [showAll, setShowAll] = useState(false);
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

  const filteredProjects = useMemo(() => {
    switch (activeFilter) {
      case 'saas':
        return PROJECTS.filter((p) => SAAS_SLUGS.has(p.slug));
      case 'showcase':
        return PROJECTS.filter((p) => SHOWCASE_SLUGS.has(p.slug));
      case 'platform':
        return PROJECTS.filter((p) => PLATFORM_SLUGS.has(p.slug));
      case 'in-dev':
        return PROJECTS.filter((p) => p.status === 'in-development');
      case 'all':
      default:
        return PROJECTS;
    }
  }, [activeFilter]);

  const displayedProjects = useMemo(() => {
    if (activeFilter === 'all' && !showAll) {
      return filteredProjects.slice(0, 10);
    }
    return filteredProjects;
  }, [filteredProjects, activeFilter, showAll]);

  const handleProjectClick = (e: React.MouseEvent, proj: Project) => {
    if (proj.status === 'in-development') {
      e.preventDefault();
      setPendingProject(proj);
    }
  };

  const handleFilterChange = (filter: CategoryFilter) => {
    setActiveFilter(filter);
    if (filter !== 'all') {
      setShowAll(true);
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
        <p>
          Découvrez une sélection de {PROJECTS.length} réalisations concrètes : applications web interactives, outils métier et sites vitrines développés avec soin.
        </p>
      </motion.div>

      {/* Category filter tabs */}
      <div className="projects-filter-bar" role="tablist" aria-label="Filtrer les projets par catégorie">
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'all'}
          className={`filter-tab ${activeFilter === 'all' ? 'is-active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          Tous les projets <span>({PROJECTS.length})</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'saas'}
          className={`filter-tab ${activeFilter === 'saas' ? 'is-active' : ''}`}
          onClick={() => handleFilterChange('saas')}
        >
          Applications & SaaS <span>(16)</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'showcase'}
          className={`filter-tab ${activeFilter === 'showcase' ? 'is-active' : ''}`}
          onClick={() => handleFilterChange('showcase')}
        >
          Sites vitrines & Entreprises <span>(10)</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'platform'}
          className={`filter-tab ${activeFilter === 'platform' ? 'is-active' : ''}`}
          onClick={() => handleFilterChange('platform')}
        >
          Plateformes & Éducation <span>(7)</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeFilter === 'in-dev'}
          className={`filter-tab ${activeFilter === 'in-dev' ? 'is-active' : ''}`}
          onClick={() => handleFilterChange('in-dev')}
        >
          En cours de dév. <span>(17)</span>
        </button>
      </div>

      <div className="project-list project-list-modern">
        {displayedProjects.map((proj, idx) => {
          const originalIdx = PROJECTS.findIndex((p) => p.id === proj.id);
          const isInDev = proj.status === 'in-development';
          return (
            <motion.article
              key={proj.id}
              className={`project-card project-card-modern project-${(originalIdx >= 0 ? originalIdx : idx) + 1}`}
              {...FADE_UP}
              transition={{ ...FADE_UP.transition, delay: (idx % 4) * 0.05 }}
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
                <span className="project-index">
                  {String((originalIdx >= 0 ? originalIdx : idx) + 1).padStart(2, '0')}
                </span>
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

      {/* Expand / Collapse Button when "all" is active */}
      {activeFilter === 'all' && (
        <div className="projects-expand-wrapper">
          <button
            type="button"
            className="projects-expand-btn"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Afficher moins de projets <ChevronUp size={16} />
              </>
            ) : (
              <>
                Afficher l'ensemble des {PROJECTS.length} projets ({PROJECTS.length - 10} de plus){' '}
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}

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
