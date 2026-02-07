import { Helmet } from 'react-helmet-async'
import './MesServices.css'

const motivations = [
  {
    title: 'La recherche d\'excellence',
    description: 'Je vise la qualité dans chaque livrable et une base de code maintenable et performante.',
  },
  {
    title: 'Aider à moderniser les projets',
    description: 'Mettre à jour les stacks, améliorer l\'UX et les performances pour des produits à la pointe.',
  },
  {
    title: 'Apprendre tous les mois à maîtriser différents outils',
    description: 'Formation continue : nouveaux frameworks, bonnes pratiques et veille technique régulière.',
  },
  {
    title: 'Digitaliser les projets',
    description: 'Accompagner la transformation numérique avec des solutions web et mobiles adaptées.',
  },
  {
    title: 'Entreprendre',
    description: 'Esprit initiative, prise de responsabilités et envie de faire grandir les projets.',
  },
]

const outilsParCategorie = {
  'Frontend': [
    'React',
    'VueJS',
    'HTML/CSS',
    'Javascript',
    'Web Mobile (Responsive Design, Mobile First)',
    'FIGMA',
  ],
  'Backend': [
    'Node',
    'API REST',
    'SQL',
    'PostgreSQL',
  ],
  'DevOps & Outils': [
    'Docker',
    'CI/CD',
    'LINUX',
    'Git',
    'Github',
    'Gitlab',
  ],
  'Gestion de projet': [
    'Trello',
    'Kanban',
    'Méthode Agile',
    'SCRUM',
    'Gestion de projet web',
  ],
  'Qualité & autres': [
    'Shopify',
    'SEO',
    'Accessibilité',
    'TOEIC B2',
    'Design pattern',
    'Algorithme',
  ],
}

export default function MesServices() {
  return (
    <>
      <Helmet>
        <title>Mes services - Maissane Abd | Motivations, valeurs et compétences</title>
        <meta name="description" content="Motivations et outils de Maissane Abd : excellence, modernisation, apprentissage, digitalisation, entreprendre. Frontend, Backend, DevOps, gestion de projet." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/mes-services' : '/mes-services'} />
      </Helmet>
      <div className="mes-services container">
        <h1 className="page-title">Mes services</h1>

        <section className="services-section" aria-labelledby="motivations-title">
          <h2 id="motivations-title" className="section-title">
            Mes motivations et valeurs
          </h2>
          <ul className="motivations-list">
            {motivations.map(({ title, description }) => (
              <li key={title} className="motivation-card">
                <h3 className="motivation-title">{title}</h3>
                <p className="motivation-desc">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="services-section" aria-labelledby="outils-title">
          <h2 id="outils-title" className="section-title">
            Outils et compétences
          </h2>
          <p className="section-intro">
            Répartition par domaine : frontend, backend, DevOps, gestion de projet et qualité.
          </p>
          <div className="outils-grid">
            {Object.entries(outilsParCategorie).map(([categorie, outils]) => (
              <div key={categorie} className="outils-categorie">
                <h3 className="outils-categorie-title">{categorie}</h3>
                <ul className="outils-tags">
                  {outils.map((outil) => (
                    <li key={outil}>
                      <span className="outil-tag">{outil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
