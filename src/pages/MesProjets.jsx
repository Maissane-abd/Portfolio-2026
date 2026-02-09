import { Helmet } from 'react-helmet-async'
import './MesProjets.css'

const projets = [
  {
    id: '1',
    titre: 'Alexandro Fratelli',
    phrase: 'Site e-commerce pour une boutique de vêtements.',
    stack: 'Shopify, HTML/CSS, Javascript, Liquid',
    contexte: 'Refonte de la boutique en ligne d\'Alexandro Fratelli.',
    activite: 'Réalisation de maquettes, modification de thème, optimisation SEO, accessibilité & CRO. Gestion du mail marketing, création de newsletters. Création de contenu pour le blog afin de booster le référencement naturel.',
    resultat: 'Site performant, accessible et bien référencé.',
    SiteUrl: 'https://alexandrofratelli.com',
    imageUrl: '/src/assets/Alexandro_Fratelli.png',
    imageAlt: 'Page d\'accueil de la boutique en ligne Alexandro Fratelli',
  },
  {
    id: '2',
    titre: 'Peur De Dormir',
    phrase: 'Site e-commerce pour une boutique de vêtements.',
    stack: 'Shopify, HTML/CSS, Javascript, Liquid',
    contexte: 'Création d\'un site e-commerce pour la marque Peur De Dormir.',
    activite: 'Maquette, intégration, SEO et accessibilité.',
    resultat: 'Site rapide, accessible et bien référencé.',
    githubUrl: 'https://github.com/Maissane-abd/PeurDeDormir.git',
    SiteUrl: 'https://peurdedormir.com',
    imageUrl: '/src/assets/PeurDeDormir.png',
    imageAlt: 'Page d\'accueil de la boutique en ligne Peur De Dormir',
  },
  {
    id: '3',
    titre: 'Budgie',
    phrase: 'Application web de gestion de finances',
    stack: 'Docker, Node, Express, PostgreSQL, VueJS, Figma',
    contexte: 'Dans le cadre d\'un projet scolaire, nous étions chargés de créer une application web de gestion de finances.',
    activite: 'Maquettes, Github Kanban, SCRUM, Agile, intégration, SEO et accessibilité.',
    resultat: 'Application fonctionnelle avec docker, non déployée.',
    githubUrl: 'https://github.com/Y4CNN/Budgie-1.git',
    imageUrl: '/src/assets/Budgie.png',
    imageAlt: 'Page d\'accueil de l\'application Budgie',
  },
  {
    id: '4',
    titre: 'Crunchyroll',
    phrase: 'site vitrine front-end pour une entreprise de streaming',
    stack: 'HTML/CSS, Javascript, SASS',
    contexte: 'Projet scolaire : Réalisation d\'un site vitrine pour la marque Crunchyroll avec SASS.',
    activite: 'développement front-end, intégration, SEO et accessibilité.',
    resultat: 'Front-end responsive et performant.',
    githubUrl: 'https://github.com/Maissane-abd/SASS-PROJET.git',
    imageUrl: '/src/assets/Crunchyroll.png',
    imageAlt: 'Page d\'accueil du site vitrine Crunchyroll',
  },
  {
    id: '5',
    titre: 'Spotify',
    phrase: 'Front-end de la page d\'accueil de Spotify',
    stack: 'HTML/CSS',
    contexte: 'Projet scolaire : Réalisation du front-end de la page d\'accueil de Spotify.',
    activite: 'développement front-end, intégration, SEO et accessibilité.',
    resultat: 'Front-end responsive et performant.',
    githubUrl: 'https://github.com/Maissane-abd/Spotify.git',
    imageUrl: '/src/assets/Spotify.png',
    imageAlt: 'Page d\'accueil de la page d\'accueil de Spotify',
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
                  href={p.SiteUrl }
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
                    href={p.githubUrl || p.SiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projet-github-link"
                  >
                    Voir {p.githubUrl ? 'sur GitHub' : 'le site'} →
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
