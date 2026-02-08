import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import MesCompetences from './pages/MesCompetences'
import MesProjets from './pages/MesProjets'
import APropos from './pages/APropos'
import MeContacter from './pages/MeContacter'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/mes-competences" element={<MesCompetences />} />
          <Route path="/mes-projets" element={<MesProjets />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/me-contacter" element={<MeContacter />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
