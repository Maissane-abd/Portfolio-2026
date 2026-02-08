import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Accueil.css'

// Remplacez ces URLs par vos vrais profils
const LIEN_GITHUB = 'https://github.com'
const LIEN_LINKEDIN = 'https://linkedin.com/in'

const sections = [
  {
    id: 'services',
    title: 'Mes services',
    excerpt: 'Mes motivations et valeurs : recherche d\'excellence, modernisation des projets, apprentissage continu, digitalisation et esprit d\'entreprendre. Découvrez aussi les outils que je maîtrise (frontend, backend, DevOps, gestion de projet).',
    to: '/mes-services',
    label: 'Voir mes services',
  },
  {
    id: 'projets',
    title: 'Mes projets',
    excerpt: 'Une sélection de mes réalisations avec captures d\'écran, stack technique, contexte et résultats. Chaque projet est lié à son dépôt GitHub.',
    to: '/mes-projets',
    label: 'Voir mes projets',
  },
  {
    id: 'a-propos',
    title: 'À propos',
    excerpt: 'Mon parcours et mon histoire : qui je suis, comment j\'en suis venu au développement et ce qui me motive au quotidien.',
    to: '/a-propos',
    label: 'En savoir plus',
  },
  {
    id: 'contact',
    title: 'Me contacter',
    excerpt: 'Un projet, une question, une opportunité en CDI, alternance ou stage ? Envoyez-moi un message ou contactez-moi directement par email.',
    to: '/me-contacter',
    label: 'Envoyer un message',
  },
]

export default function Accueil() {
  const [photoError, setPhotoError] = useState(false)

  return (
    <>
      <Helmet>
        <title>Maïssane Abdallah - Portfolio Développeur Full Stack | Accueil</title>
        <meta name="description" content="Maïssane Abdallah, étudiant développeur Full Stack en recherche de master. Freelance Shopify et JavaScript. Portfolio, projets et contact." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/' : '/'} />
      </Helmet>
      <div className="accueil">
        <header className="accueil-hero">
          <div className="container accueil-hero-inner">
            <div className="accueil-hero-photo-wrap">
              {!photoError ? (
                <img
                  src="././public/PP.webP"
                  alt="Maïssane Abdallah - Développeur Full Stack"
                  className="accueil-hero-photo"
                  width="220"
                  height="220"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="accueil-hero-photo-placeholder" aria-hidden="true">
                  <span>MA</span>
                </div>
              )}
            </div>
            <div className="accueil-hero-text">
              <h1 className="accueil-hero-title">
                Bonjour, je suis Maïssane ABDALLAH
              </h1>
              <p className="accueil-hero-subtitle">
                Étudiant développeur Full Stack, en recherche de master informatique. Freelance Shopify et JavaScript. Passionné par l'excellence, le sport et la cyber sécurité.
              </p>
              <div className="accueil-hero-buttons">
                <Link to="/me-contacter" className="accueil-hero-btn accueil-hero-btn-primary">
                  Me contacter
                </Link>
                <a
                  href={LIEN_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accueil-hero-btn accueil-hero-btn-outline"
                >
                  GitHub
                </a>
                <a
                  href={LIEN_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accueil-hero-btn accueil-hero-btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <section className="accueil-sections" aria-labelledby="accueil-sections-title">
            <h2 id="accueil-sections-title" className="sr-only">
              Aperçu des sections du site
            </h2>
            <ul className="accueil-cards">
              {sections.map(({ id, title, excerpt, to, label }) => (
                <li key={id} className="accueil-card">
                  <article>
                    <h3 className="accueil-card-title">{title}</h3>
                    <p className="accueil-card-excerpt">{excerpt}</p>
                    <Link to={to} className="accueil-card-btn">
                      {label}
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
