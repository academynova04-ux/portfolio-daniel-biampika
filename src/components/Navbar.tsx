import { AnimatePresence, motion } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
  menuOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
}

export function Navbar({ dark, onToggleTheme, menuOpen, onOpenMenu, onCloseMenu }: NavbarProps) {
  return (
    <>
      <header className="topbar">
        <a href="#top" className="logo" aria-label="Accueil Daniel Biampika">
          Daniel<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {NAV_LINKS.map(([label, hash]) => (
            <a key={hash} href={`#${hash}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={dark ? "Mode clair" : "Mode sombre"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="availability" href="#contact">
            <i />
            Disponible
            <span role="tooltip">Disponible pour de nouveaux projets.</span>
          </a>
          <button
            type="button"
            className="menu-button"
            onClick={onOpenMenu}
            aria-label="Ouvrir le menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28 }}
          >
            <button
              type="button"
              onClick={onCloseMenu}
              aria-label="Fermer le menu"
              className="icon-button close-btn"
            >
              <X size={18} />
            </button>
            <nav className="mobile-nav">
              {NAV_LINKS.map(([label, hash]) => (
                <a key={hash} href={`#${hash}`} onClick={onCloseMenu}>
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
