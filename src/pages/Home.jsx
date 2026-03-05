import ApplicationForm from '../components/ApplicationForm'
import { Clock, Zap, FlaskConical, UserRound, Heart } from 'lucide-react'

const icons = [Clock, Zap, FlaskConical, UserRound, Heart]

function Home({ t }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Smart Clinic</div>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="advantages-grid">
            {t.about.advantages.map((item, idx) => {
              const Icon = icons[idx]
              return (
                <div key={item} className="advantage-card">
                  <div className="advantage-icon">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm t={t} />
    </>
  )
}

export default Home
