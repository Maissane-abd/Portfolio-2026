import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import './MeContacter.css'

const EMAIL = 'abd.maissane@gmail.com'

const INITIAL_FORM = {
  nom: '',
  email: '',
  num: '',
  demande: '',
}

export default function MeContacter() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setStatus(null) // efface le message précédent quand l'utilisateur modifie le formulaire
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    emailjs.send(
      'service_rhf6z3e',
      'template_pobv6ps',
      {
        name: form.nom,
        email: form.email,
        time: new Date().toLocaleString('fr-FR'),
        message: `
Email : ${form.email}
Téléphone : ${form.num}

${form.demande}
        `.trim(),
      },
      '5laE737ZUlSjKVqNb'
    )
      .then(() => {
        setStatus('success')
        setForm(INITIAL_FORM)
      })
      .catch(() => {
        setStatus('error')
        setErrorMessage('L\'envoi a échoué. Vous pouvez m\'écrire directement par email ci-dessous.')
      })
  }

  return (
    <>
      <Helmet>
        <title>Me contacter - Maissane Abd | CDI, Alternance, Stage</title>
        <meta name="description" content="Contactez Maissane Abd pour un projet, une question ou une opportunité en CDI, alternance ou stage. L'Haÿ-les-Roses, 94240." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.origin + '/me-contacter' : '/me-contacter'} />
      </Helmet>
      <div className="me-contacter container">
        <h1 className="page-title">Me contacter</h1>
        <p className="page-intro">
          Un projet, une question ou une opportunité en CDI, alternance ou stage ? Envoyez-moi un message via le formulaire ou contactez-moi directement par email.
        </p>

        <div className="contact-layout">
          <section className="contact-form-section" aria-labelledby="form-title">
            <h2 id="form-title" className="section-title">
              Envoyer un message
            </h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="nom">
                <span className="label-text">Nom</span>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  autoComplete="name"
                />
              </label>
              <label htmlFor="email">
                <span className="label-text">Email</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.fr"
                  autoComplete="email"
                />
              </label>
              <label htmlFor="num">
                <span className="label-text">Numéro de téléphone</span>
                <input
                  id="num"
                  name="num"
                  type="tel"
                  value={form.num}
                  onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  autoComplete="tel"
                />
              </label>
              <label htmlFor="demande">
                <span className="label-text">Votre demande</span>
                <textarea
                  id="demande"
                  name="demande"
                  required
                  rows={5}
                  value={form.demande}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, question ou opportunité..."
                />
              </label>
              {status === 'success' && (
                <p className="contact-status contact-status-success" role="status">
                  Message envoyé avec succès. Je vous recontacterai rapidement.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status contact-status-error" role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
              </button>
            </form>
          </section>

          <section className="contact-direct" aria-labelledby="direct-title">
            <h2 id="direct-title" className="section-title">
              Contact direct
            </h2>
            <p className="contact-email-text">
              Vous pouvez aussi m'écrire directement à l'adresse suivante :
            </p>
            <a href={`mailto:${EMAIL}`} className="contact-email-link">
              {EMAIL}
            </a>
          </section>
        </div>
      </div>
    </>
  )
}
