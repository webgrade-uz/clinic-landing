import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import translations from './translations'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'uz')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = translations[lang]

  return (
    <div className="app">
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home t={t} lang={lang} />} />
          <Route path="/services" element={<Services t={t} lang={lang} />} />
        </Routes>
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
