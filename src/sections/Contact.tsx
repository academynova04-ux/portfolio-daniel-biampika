import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Github, Linkedin, MessageCircle, Instagram, LoaderCircle, ArrowUpRight, ArrowUp, Check, X, Send } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { PROFILE, WEB3FORMS_ACCESS_KEY, FADE_UP } from '../data';

interface FormState {
  name: string;
  contactMethod: string;
  projectType: string;
  timeline: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  contactMethod: '',
  projectType: 'Création de site web',
  timeline: 'Dès que possible',
  message: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Listen for service card clicks to auto-select project type
  useEffect(() => {
    const handleSelectType = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setForm((prev) => ({
          ...prev,
          projectType: customEvent.detail,
        }));
      }
    };
    window.addEventListener('select-project-type', handleSelectType);
    return () => window.removeEventListener('select-project-type', handleSelectType);
  }, []);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => {
      if (status === 'success') setForm(INITIAL_FORM);
      setStatus(null);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg(null);

    if (!form.name.trim()) {
      setErrorMsg('Veuillez renseigner votre nom ou votre entreprise.');
      setStatus('error');
      return;
    }

    if (!form.contactMethod.trim() || form.contactMethod.trim().length < 5) {
      setErrorMsg('Veuillez indiquer un moyen de contact valide (email ou numéro WhatsApp/téléphone).');
      setStatus('error');
      return;
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      setErrorMsg('Veuillez décrire brièvement votre besoin ou votre projet.');
      setStatus('error');
      return;
    }

    setLoading(true);
    try {
      const isEmail = /^\S+@\S+\.\S+$/.test(form.contactMethod.trim());
      const replyEmail = isEmail ? form.contactMethod.trim().toLowerCase() : PROFILE.email;

      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', form.name.trim());
      formData.append('email', replyEmail);
      formData.append('contact_method', form.contactMethod.trim());
      formData.append('project_type', form.projectType);
      formData.append('timeline', form.timeline);
      formData.append(
        'subject',
        `Nouvelle demande : ${form.projectType} — ${form.name.trim()}`
      );
      formData.append(
        'message',
        `Moyen de contact : ${form.contactMethod.trim()}\nType de projet : ${form.projectType}\nDélai souhaité : ${form.timeline}\n\nDescription du besoin :\n${form.message.trim()}`
      );
      formData.append('from_name', `Vitrine Commerciale Daniel Biampika`);
      formData.append('replyto', replyEmail);

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
      setErrorMsg('Une erreur est survenue lors de l\'envoi. Vous pouvez également me joindre directement via WhatsApp ou email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <motion.div className="contact-copy" {...FADE_UP}>
          <SectionLabel number="06">Contact & Devis</SectionLabel>
          <h2>
            Parlons de <em>votre projet.</em>
          </h2>
          <p className="contact-lead-text">
            Vous avez une idée, un besoin métier ou un site à améliorer ? Présentez-moi votre projet afin que nous puissions étudier une solution adaptée à vos objectifs.
          </p>

          {/* Quick WhatsApp direct block */}
          <div className="contact-quick-chat">
            <div className="quick-chat-badge">Réponse rapide garantie</div>
            <h3>Discuter en direct sur WhatsApp</h3>
            <p>
              Pour un échange immédiat, envoyez-moi un message avec votre idée ou vos questions.
            </p>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-card"
            >
              <MessageCircle size={18} />
              Échanger sur WhatsApp (+242 06 945 7200)
            </a>
          </div>

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
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={16} />
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
          <div className="form-head">
            <h3>Demande d'étude ou devis</h3>
            <p>Remplissez ce formulaire pour recevoir une réponse sous 24 à 48 heures.</p>
          </div>

          <div className="field-row">
            <label>
              Votre nom ou entreprise
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ex. Jean Makaya ou Société Nova"
                required
                autoComplete="name"
              />
            </label>
            <label>
              Votre moyen de contact (Email ou Téléphone)
              <input
                name="contactMethod"
                value={form.contactMethod}
                onChange={(e) => setForm({ ...form, contactMethod: e.target.value })}
                placeholder="jean@email.com ou +242 06..."
                required
                autoComplete="email"
              />
            </label>
          </div>

          <div className="field-row">
            <label>
              Type de projet
              <select
                name="projectType"
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="contact-select"
              >
                <option value="Création de site web">Création de site web vitrine / corporate</option>
                <option value="Développement d'application web">Développement d'application web / SaaS</option>
                <option value="Solution de gestion sur-mesure">Solution de gestion métier (facturation, stocks...)</option>
                <option value="Refonte & Amélioration de site">Refonte & Modernisation de site existant</option>
                <option value="Conception d'interfaces UI/UX">Conception d'interfaces UI/UX & Design</option>
                <option value="Autre demande">Autre demande spécifique</option>
              </select>
            </label>
            <label>
              Délai souhaité
              <select
                name="timeline"
                value={form.timeline}
                onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                className="contact-select"
              >
                <option value="Dès que possible">Dès que possible</option>
                <option value="Dans les 2 à 4 semaines">Dans les 2 à 4 semaines</option>
                <option value="Prochain trimestre">Prochain trimestre</option>
                <option value="Étude préalable / Devis">Phase d'étude préalable & devis</option>
              </select>
            </label>
          </div>

          <label>
            Description de votre besoin
            <textarea
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Présentez votre projet, les fonctionnalités souhaitées, votre cible ou vos objectifs..."
              rows={4}
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
                Envoyer ma demande de projet <Send size={15} />
              </>
            )}
          </button>
        </motion.form>
      </div>

      <footer className="footer">
        <a href="#top" className="footer-logo">
          DB<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Daniel Biampika. Concepteur de solutions numériques à Brazzaville.</p>
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
                  ? 'Votre demande a bien été envoyée !'
                  : 'Une erreur est survenue, veuillez réessayer.'}
              </b>
              {status === 'success' && (
                <small>Je vous répondrai sous 24 à 48 heures pour échanger sur vos objectifs.</small>
              )}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
