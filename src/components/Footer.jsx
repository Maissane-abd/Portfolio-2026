import { Link } from 'react-router-dom'
import './Footer.css'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <section className="footer-intro" aria-labelledby="footer-intro-title">
            <h2 id="footer-intro-title" className="footer-title">
              Vous souhaitez collaborer avec moi ?
            </h2>
            <p className="footer-text">
              Vous souhaitez collaborer avec moi pour réaliser votre projet ? Une question ? Envie de me prendre avec vous en CDI, Alternance, stage ? Envoyez-moi un message, j'ai hâte de le lire et d'y répondre !
            </p>
            <Link to="/me-contacter" className="footer-cta">
              Me contacter
            </Link>
          </section>
          <section className="footer-address" aria-labelledby="footer-address-title">
            <h2 id="footer-address-title" className="footer-title">
              Adresse
            </h2>
            <address className="footer-address-text">
              L'Haÿ-les-Roses<br />
              94240
            </address>
          </section>
        </div>
        <div className="footer-bottom">
          <p className="footer-year">
            © {currentYear} Maissane ABDALLAH. Tous droits réservés.
          </p>
          <nav className="footer-nav" aria-label="Navigation pied de page">
            <Link to="/">Accueil</Link>
            <Link to="/mes-competences">Mes compétences</Link>
            <Link to="/mes-projets">Mes projets</Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/me-contacter">Me contacter</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
