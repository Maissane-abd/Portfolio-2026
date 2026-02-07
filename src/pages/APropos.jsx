import { Helmet } from 'react-helmet-async'
import './APropos.css'

export default function APropos() {
  return (
    <>
      <Helmet>
        <title>À propos - Maissane Abd | Mon parcours et mon histoire</title>
        <meta name="description" content="Découvrez le parcours et l'histoire de Maissane Abd, développeur passionné par l'excellence et la modernisation des projets." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/a-propos' : '/a-propos'} />
      </Helmet>
      <div className="a-propos container">
        <h1 className="page-title">À propos</h1>
        <section className="a-propos-content" aria-labelledby="mon-histoire">
          <h2 id="mon-histoire" className="section-title">
            Mon histoire
          </h2>
          <div className="a-propos-text">
            <p>
              Vous pourrez raconter ici votre parcours : comment vous en êtes venu au développement, vos formations, vos expériences et ce qui vous motive au quotidien.
            </p>
            <p>
              Cette section est à personnaliser avec votre propre récit. N'hésitez pas à ajouter des paragraphes sur votre background, vos objectifs (CDI, alternance, stage) et ce qui vous distingue.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
