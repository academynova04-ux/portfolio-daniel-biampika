import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Github, Linkedin, MessageCircle, Instagram, LoaderCircle, ArrowUpRight, ArrowUp, Check, X } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { PROFILE, WEB3FORMS_ACCESS_KEY, FADE_UP } from '../data';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => {
      if (status === 'success') setForm(INITIAL_FORM);
      setStatus(null);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg(null);

    if (
      !form.name.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email) ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setErrorMsg('Merci de remplir correctement tous les champs.');
      setStatus('error');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim().toLowerCase());
      formData.append('subject', form.subject.trim());
      formData.append('message', form.message.trim());
      formData.append('from_name', 'Portfolio Daniel Biampika');
      formData.append('replyto', form.email.trim().toLowerCase());

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'error');
      }
      setStatus('success');
      setErrorMsg(null);
    } catch {
      setStatus('error');
      setErrorMsg('Une erreur est survenue, veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <motion.div className="contact-copy" {...FADE_UP}>
          <SectionLabel number="06">Contact</SectionLabel>
          <h2>
            Une idée en tête ?
            <br />
            <em>Parlons-en.</em>
          </h2>
          <p>
            Je suis toujours ouvert aux collaborations ambitieuses, missions freelance et belles conversations créatives.
          </p>
          <div className="contact-details">
            <a href={`mailto:${PROFILE.email}`}>
              <Mail size={17} />
              {PROFILE.email}
            </a>
            <a href={PROFILE.phoneHref}>
              <Phone size={17} />
              {PROFILE.phone}
            </a>
          </div>
          <div className="socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href={PROFILE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          {...FADE_UP}
          transition={{ ...FADE_UP.transition, delay: 0.1 }}
        >
          <div className="field-row">
            <label>
              Votre nom
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jean Makaya"
                required
                autoComplete="name"
              />
            </label>
            <label>
              Votre email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jean@email.com"
                required
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            Sujet
            <input
              name="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Un nouveau projet, une collaboration..."
              required
            />
          </label>
          <label>
            Votre message
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Racontez-moi votre idée..."
              rows={5}
              required
            />
          </label>
          {errorMsg && status === 'error' && (
            <div className="form-status error" role="alert">
              {errorMsg}
            </div>
          )}
          <button type="submit" className="submit-button" disabled={loading} aria-busy={loading}>
            {loading ? (
              <>
                <LoaderCircle className="button-spinner" size={16} /> Envoi en cours...
              </>
            ) : (
              <>
                Envoyer le message <ArrowUpRight size={17} />
              </>
            )}
          </button>
        </motion.form>
      </div>

      <footer className="footer">
        <a href="#top" className="footer-logo">
          DB<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Daniel Biampika. Conçu avec intention à Brazzaville.</p>
        <a href="#top">
          Retour en haut <ArrowUp size={15} />
        </a>
      </footer>

      <AnimatePresence>
        {status && (
          <motion.div
            className={`contact-toast ${status}`}
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div>{status === 'success' ? <Check size={18} /> : <X size={18} />}</div>
            <span>
              <b>
                {status === 'success'
                  ? 'Votre message a été bien envoyé'
                  : 'Une erreur est survenue, veuillez réessayer.'}
              </b>
              {status === 'success' && (
                <small>Je vous répondrai dans les plus brefs délais</small>
              )}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
