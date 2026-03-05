import { NavLink } from 'react-router-dom'
import logo from '../assets/20240102_000350.png'

function Navbar({ t, lang, setLang }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Smart Clinic" className="logo-img" />
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {t.nav.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {t.nav.services}
            </NavLink>
          </li>
        </ul>

        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === 'uz' ? 'lang-active' : ''}`}
            onClick={() => setLang('uz')}
          >
            UZ
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${lang === 'ru' ? 'lang-active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
