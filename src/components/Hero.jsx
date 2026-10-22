import Avatar from './Avatar.jsx'
import { profile } from '../content.js'

export default function Hero({ t, lang }) {
  return (
    <section id="top" className="hero">
      <div className="wrap hgrid">
        <div>
          <p className="hello">{t.hero.hello}</p>
          <h1>{t.hero.name}</h1>
          <p className="role">{t.hero.role}</p>
          <p className="lead">{t.hero.lead}</p>
          <div className="actions">
            <a className="btn" href="#projects">{t.hero.projects}</a>
            <a className="btn ghost" href="#contact">{t.hero.contact}</a>
            {profile.hasResume && (
              <a className="btn ghost" href={`/resume-${lang}.pdf`} download>{t.hero.resume}</a>
            )}
          </div>
          <p className="loc">📍 {t.hero.location}</p>
        </div>
        <Avatar initials={t.initials} />
      </div>
    </section>
  )
}
