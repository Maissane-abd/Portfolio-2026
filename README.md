# Portfolio 2026 - Maissane Abd

Portfolio développé en **React.js** (Vite), avec typographie Calibri et SEO optimisé.

## Stack

- React 18
- React Router
- React Helmet Async (SEO par page)
- Vite

## Structure

- **Navbar** : Accueil, Mes services, Mes projets, À propos, Me contacter
- **Accueil** : Extrait de chaque section + bouton vers la page correspondante
- **Mes services** : Motivations/valeurs + outils par catégorie (Frontend, Backend, DevOps, Gestion de projet, etc.)
- **Mes projets** : Cartes avec capture cliquable → GitHub, titre, phrase, stack, contexte, activité, résultat
- **À propos** : Votre histoire (à personnaliser)
- **Me contacter** : Formulaire (nom, email, numéro, demande) + envoi par mail vers abd.maissane@gmail.com + lien email direct

## Footer

- Texte collaboration (CDI, Alternance, stage)
- Adresse : L'Haÿ-les-Roses 94240
- Année et liens de navigation

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Personnalisation

1. **À propos** : Éditez `src/pages/APropos.jsx` pour raconter votre histoire.
2. **Mes projets** : Modifiez le tableau `projets` dans `src/pages/MesProjets.jsx` (titres, liens GitHub, URLs des captures d’écran).
3. **SEO** : Remplacez `https://votresite.com` dans `index.html`, `public/sitemap.xml` et `public/robots.txt` par l’URL réelle de votre portfolio.

## Contact

abd.maissane@gmail.com — L'Haÿ-les-Roses, 94240
