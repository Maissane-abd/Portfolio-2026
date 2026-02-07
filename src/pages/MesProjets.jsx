import { Helmet } from 'react-helmet-async'
import './MesProjets.css'

// Données exemples : à remplacer par vos vrais projets et URLs GitHub / captures
const projets = [
  {
    id: '1',
    titre: 'Projet exemple 1',
    phrase: 'Application web moderne pour la gestion de tâches.',
    stack: 'React, Node, PostgreSQL',
    contexte: 'Projet personnel pour pratiquer la stack full-stack.',
    activite: 'Conception, développement frontend et backend, déploiement.',
    resultat: 'Application fonctionnelle avec authentification et API REST.',
    githubUrl: 'https://github.com',
    imageUrl: 'https://placehold.co/800x450/1a2332/3b82f6?text=Capture+projet+1',
    imageAlt: 'Capture d\'écran du projet 1',
  },
  {
    id: '2',
    titre: 'Projet exemple 2',
    phrase: 'Site vitrine responsive avec formulaire de contact.',
    stack: 'React, HTML/CSS, Vite',
    contexte: 'Réalisation d\'un site type portfolio pour un client fictif.',
    activite: 'Maquette, intégration, SEO et accessibilité.',
    resultat: 'Site rapide, accessible et bien référencé.',
    githubUrl: 'https://github.com',
    imageUrl: 'https://placehold.co/800x450/1a2332/3b82f6?text=Capture+projet+2',
    imageAlt: 'Capture d\'écran du projet 2',
  },
]

export default function MesProjets() {
  return (
    <>
      <Helmet>
        <title>Mes projets - Maissane Abd | Réalisations et GitHub</title>
        <meta name="description" content="Découvrez les projets de Maissane Abd : stack, contexte, activité et résultats. Captures cliquables vers les dépôts GitHub." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/mes-projets' : '/mes-projets'} />
      </Helmet>
      <div className="mes-projets container">
        <h1 className="page-title">Mes projets</h1>
        <p className="page-intro">
          Chaque projet est présenté avec une capture cliquable vers le dépôt GitHub. Vous y trouverez le titre, une phrase de présentation, la stack, le contexte, mon activité et le résultat.
        </p>
        <ul className="projets-list">
          {projets.map((p) => (
            <li key={p.id} className="projet-card">
              <article>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projet-screenshot-link"
                  aria-label={`Voir le projet ${p.titre} sur GitHub`}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.imageAlt}
                    className="projet-screenshot"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                </a>
                <div className="projet-body">
                  <h2 className="projet-titre">{p.titre}</h2>
                  <p className="projet-phrase">{p.phrase}</p>
                  <dl className="projet-details">
                    <div>
                      <dt>Stack utilisée</dt>
                      <dd>{p.stack}</dd>
                    </div>
                    <div>
                      <dt>Contexte</dt>
                      <dd>{p.contexte}</dd>
                    </div>
                    <div>
                      <dt>Mon activité</dt>
                      <dd>{p.activite}</dd>
                    </div>
                    <div>
                      <dt>Résultat</dt>
                      <dd>{p.resultat}</dd>
                    </div>
                  </dl>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projet-github-link"
                  >
                    Voir sur GitHub →
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
