import { Helmet } from 'react-helmet-async'
import './APropos.css'

const SECTIONS = [
  { id: 'parcours-dev', label: "Comment j'en suis arrivé au développement web" },
  { id: 'formations', label: 'Mes formations' },
  { id: 'experiences', label: 'Mes expériences' },
  { id: 'motivation', label: 'Ce qui me motive au quotidien' },
  { id: 'objectifs', label: 'Mes objectifs' },
  { id: 'ce-qui-me-distingue', label: 'Ce qui me distingue' },
]

function scrollToSection(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function APropos() {
  return (
    <>
      <Helmet>
        <title>À propos - Maissane ABDALLAH | Mon parcours et mon histoire</title>
        <meta name="description" content="Découvrez le parcours et l'histoire de Maissane Abd, développeur passionné par l'excellence et la modernisation des projets." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/a-propos' : '/a-propos'} />
      </Helmet>
      <div className="a-propos-layout">
        <aside className="a-propos-sidebar" aria-label="Navigation de la page">
          <nav className="a-propos-nav">
            <p className="a-propos-nav-title">Sur cette page</p>
            <ul className="a-propos-nav-list">
              {SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="a-propos-nav-link"
                    onClick={(e) => scrollToSection(e, id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="a-propos container">
          <h1 className="page-title">À propos</h1>

        <section className="a-propos-content" aria-labelledby="parcours-dev">
          <h2 id="parcours-dev" className="section-title">
            Comment j'en suis arrivé au développement web
          </h2>
          <div className="a-propos-text">
            <p>
              Après le baccalauréat, je voulais m'orienter vers le e-commerce tout en apprenant à créer des sites web pour répondre à des problématiques concrètes que j'avais observées durant ma jeunesse. Mon objectif était clair : construire des solutions utiles grâce au numérique.
            </p>
            <p>
              Par défaut, et à cause de Parcoursup, j'ai intégré une faculté de droit, un domaine très éloigné de mes aspirations. Rapidement, je me suis rendu compte que je ne m'y épanouissais pas. C'est au cours de ma troisième année que tout a changé : j'ai rencontré plusieurs développeurs web. Ils m'ont parlé de l'école 42, de création d'applications, de bots, de sites e-commerce, mais aussi de télétravail, de freelance, et de la puissance de technologies comme Python et JavaScript.
            </p>
            <p>
              Ils m'ont littéralement mis des étoiles dans les yeux. Je voulais simplement être comme eux.
            </p>
            <p>
              Durant l'été 2023, j'ai commencé à me former en développement web via OpenClassrooms. À la rentrée suivante, j'ai pris une décision importante : arrêter le droit. Je ne me voyais pas construire une carrière juridique, alors que je savais exactement dans quelle direction je voulais aller.
            </p>
            <p>
              Pour autant, l'université m'a beaucoup apporté. Elle m'a appris la discipline, la rigueur dans le travail, l'expression écrite, la capacité à affronter de très longues lectures, la patience et surtout le goût de l'apprentissage continu, des compétences essentielles aujourd'hui dans le métier de développeur web.
            </p>
            <p>
              Aujourd'hui, je mets ces qualités au service de projets web, e-commerce et tech, avec une ambition claire : créer des expériences performantes, utiles et durables.
            </p>
          </div>
        </section>

        <section className="a-propos-content" aria-labelledby="formations">
          <h2 id="formations" className="section-title">
            Mes formations
          </h2>
          <div className="a-propos-text">
            <p>
              J'ai commencé mon parcours par un bootcamp intensif de six mois à l'École O'clock, convaincu qu'une période immersive suffisait pour devenir développeur web et développeur d'applications. Cette formation m'a permis d'obtenir un titre RNCP de niveau Bac+2 et d'acquérir de solides bases techniques en JavaScript, React, PostgreSQL, HTML, CSS, ainsi que dans la consommation d'API et le développement d'applications web modernes.
            </p>
            <p>
              Cependant, j'ai rapidement compris que ce socle, bien que solide, n'était pas suffisant pour atteindre le niveau d'expertise que je visais. J'ai donc choisi de poursuivre mes études à l'ESGI, avec l'objectif clair d'approfondir mes compétences en développement web, de renforcer mes méthodes de travail, d'augmenter ma pratique quotidienne, et surtout de m'entourer de professionnels et d'étudiants évoluant dans le même domaine.
            </p>
            <p>
              Durant mon Bachelor en développement web, j'ai énormément travaillé en autonomie. Cette rigueur m'a permis de finir major de promotion, confirmant ma capacité à apprendre seul, à structurer mon apprentissage et à monter rapidement en compétence.
            </p>
            <p>
              Aujourd'hui, je suis inscrit en Master Développement Web à l'ESGI, tout en développant un intérêt de plus en plus marqué pour la cybersécurité et la sécurité des applications web. Avec l'émergence de l'intelligence artificielle et du no-code / low-code, j'ai pu observer de nombreux projets web présentant des failles de sécurité majeures, souvent par manque de connaissances fondamentales.
            </p>
            <p>
              Je suis convaincu que la cybersécurité est un domaine d'avenir, impossible à remplacer par l'IA, et qui nécessitera de plus en plus de professionnels qualifiés, notamment à mesure que de nombreux amateurs se lancent dans le développement web sans réelle compréhension des enjeux de sécurité.
            </p>
            <p>
              Si le développement web est un domaine que je maîtrise et que je peux approfondir en totale autonomie, la cybersécurité, elle, exige un cadre structuré, un encadrement pédagogique et une expertise avancée. C'est pourquoi je souhaite renforcer la sécurité de mes applications, concevoir des projets robustes, fiables et durables, et proposer des solutions web alliant performance, qualité et sécurité.
            </p>
          </div>
        </section>

        <section className="a-propos-content" aria-labelledby="experiences">
          <h2 id="experiences" className="section-title">
            Mes expériences
          </h2>
          <div className="a-propos-text">
            <p>
              À ce jour, mon expérience professionnelle en entreprise se concentre principalement autour d'une alternance d'un an en tant que développeur web pour la marque de vêtements Alexandro Fratelli, via leur boutique Shopify{' '}
              <a href="https://alexandrofratelli.com/" target="_blank" rel="noopener noreferrer" className="a-propos-link">
                → https://alexandrofratelli.com/
              </a>
            </p>
            <p>
              Durant cette expérience, j'ai travaillé sur le développement, la maintenance et l'optimisation d'un site e-commerce Shopify, en lien direct avec les besoins de la marque. J'ai pu intervenir sur l'intégration de fonctionnalités, l'amélioration de l'expérience utilisateur, la performance du site ainsi que sur des problématiques concrètes liées au commerce en ligne.
            </p>
            <p>
              En parallèle, j'ai également réalisé plusieurs sites Shopify pour des particuliers, ce qui m'a permis de renforcer mes compétences techniques, de m'adapter à différents besoins clients et de gérer des projets de manière plus autonome, de la conception à la mise en ligne.
            </p>
            <p>
              Aujourd'hui, je suis à la recherche d'un stage ou d'une alternance afin de continuer à progresser et d'approfondir ma compréhension du métier de développeur web / développeur e-commerce. Très autodidacte et habitué à apprendre par moi-même, je ressens toutefois le besoin d'évoluer aux côtés d'un mentor ou d'une équipe expérimentée, afin de gagner en structure, en méthodologie, et de bénéficier d'un retour d'expérience terrain plus poussé.
            </p>
            <p>
              Mon objectif est clair : monter en compétence rapidement, apprendre les bonnes pratiques professionnelles, et devenir un développeur fiable, orienté qualité, performance et sécurité.
            </p>
          </div>
        </section>

        <section className="a-propos-content" aria-labelledby="motivation">
          <h2 id="motivation" className="section-title">
            Ce qui me motive au quotidien
          </h2>
          <div className="a-propos-text">
            <p>
              Ce qui me motive au quotidien, ce sont avant tout mes amis. Beaucoup d'entre eux portent des projets ambitieux et comptent sur moi pour avoir les connaissances et les compétences techniques nécessaires afin de les accompagner sur le plan informatique et web. Cette responsabilité est une vraie source de motivation : aider mon entourage à concrétiser ses idées me pousse constamment à progresser.
            </p>
            <p>
              Il y a aussi une motivation très personnelle : la capacité à résoudre mes propres problématiques, à comprendre par moi-même et à ne pas dépendre des autres pour avancer. Le développement web me permet exactement cela.
            </p>
            <p>
              Enfin, j'aime profondément apprendre. Le web est un domaine vaste, en évolution permanente, où les technologies, les pratiques et les outils changent sans cesse. On n'a jamais fini d'apprendre dans le web : il y a toujours quelque chose à améliorer, à optimiser ou à découvrir. C'est ce mouvement constant qui rend ce métier passionnant et qui nourrit chaque jour mon envie de progresser et de devenir un meilleur développeur web.
            </p>
          </div>
        </section>

        <section className="a-propos-content" aria-labelledby="objectifs">
          <h2 id="objectifs" className="section-title">
            Mes objectifs
          </h2>
          <div className="a-propos-text">
            <p>
              Mon objectif principal est clair : atteindre un haut niveau d'excellence et devenir un développeur à la fois compétent, rigoureux et professionnel. Je cherche constamment à progresser, à affiner mes méthodes et à viser la meilleure qualité possible dans chacun de mes projets.
            </p>
            <p>
              Sur le plan technique, je souhaite devenir un développeur JavaScript complet, capable de concevoir des applications robustes, performantes et sécurisées. Cela passe notamment par l'approfondissement de TypeScript, NestJS pour le back-end et Next.js pour le front-end, afin de maîtriser l'ensemble de la chaîne de développement web moderne.
            </p>
            <p>
              J'ai également un fort attrait pour la compétition et le challenge intellectuel. C'est dans cet environnement que je donne le meilleur de moi-même. En parallèle de mes études, je me forme activement aux réseaux et à la cybersécurité, avec l'objectif d'intégrer un Master en cybersécurité. Je me suis notamment inscrit sur la plateforme Root-Me, où je progresse à travers des challenges techniques et compétitifs. Cette approche m'a déjà porté ses fruits : c'est en me fixant des objectifs élevés et en me mettant en compétition que j'ai obtenu mon Bachelor en développement web en tant que major de promotion.
            </p>
            <p>
              Je sais que j'ai la capacité d'apprendre vite et efficacement, surtout dans un cadre exigeant. C'est pourquoi je suis convaincu de pouvoir m'épanouir pleinement dans un Master de haut niveau, idéalement avec une année à l'étranger dans un pays anglophone. Mon ambition est de devenir totalement bilingue, avec un anglais fluide et professionnel, indispensable dans les métiers du web et de la cybersécurité à l'échelle internationale.
            </p>
            <p>
              J'ai obtenu un score TOEIC de 800, une base solide, mais insuffisante à mes yeux. Mon objectif est d'aller bien au-delà et d'atteindre un niveau d'anglais me permettant d'évoluer sans limite dans des environnements techniques internationaux.
            </p>
          </div>
        </section>

        <section className="a-propos-content" aria-labelledby="ce-qui-me-distingue">
          <h2 id="ce-qui-me-distingue" className="section-title">
            Ce qui me distingue
          </h2>
          <div className="a-propos-text">
            <p>
              Ce qui me distingue avant tout, c'est ma discipline d'apprentissage. Chaque jour, j'apprends quelque chose de nouveau. Depuis mes 18 ans, je ne me suis jamais couché sans avoir enrichi mes connaissances, même sur un détail. Cette constance est devenue une véritable habitude de travail.
            </p>
            <p>
              J'ai également un fort esprit de compétition. Je suis toujours prêt à dépasser mes limites, à remettre en question mes acquis et à rechercher les meilleures méthodes de travail possibles. Mon objectif est simple : devenir, chaque jour, une meilleure version de moi-même, plus compétente et plus rigoureuse que la veille.
            </p>
            <p>
              C'est cet état d'esprit qui m'a permis de finir major de promotion, alors même que certains évoluaient dans le développement web depuis le lycée. De mon côté, j'ai commencé le développement web en 2024, ce qui démontre ma capacité à apprendre vite, à m'adapter et à performer dans un environnement exigeant.
            </p>
            <p>
              Enfin, je suis quelqu'un d'organisé, méthodique et optimiste. J'aborde chaque projet avec sérieux, curiosité et détermination, en cherchant toujours à produire un travail propre, structuré et durable.
            </p>
          </div>
        </section>
        </div>
      </div>
    </>
  )
}
