import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Lightbox } from './components/Lightbox';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Creation } from './sections/Creation';
import { OnlinePresence } from './sections/OnlinePresence';
import { Gallery } from './sections/Gallery';
import { Services } from './sections/Services';
import { Expertise } from './sections/Expertise';
import { Contact } from './sections/Contact';
import { GALLERY_ITEMS } from './data';

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('db-theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('db-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return { dark, setDark };
}

export default function App() {
  const { dark, setDark } = useDarkMode();
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 12000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightboxItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, lightboxItem]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app-shell">
      <Navbar
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Creation />
        <OnlinePresence />
        <Gallery onOpen={setLightboxItem} />
        <Services />
        <Expertise />
        <Contact />
      </main>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
