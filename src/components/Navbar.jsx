import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/mes-competences', label: 'compétences' },
  { to: '/mes-projets', label: 'projets' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/me-contacter', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="Accueil - Portfolio">
          Portfolio
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
        <nav id="nav-menu" className={`navbar-menu ${open ? 'navbar-menu-open' : ''}`} aria-label="Navigation principale">
          <ul className="navbar-list">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`navbar-link ${location.pathname === to ? 'navbar-link-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
