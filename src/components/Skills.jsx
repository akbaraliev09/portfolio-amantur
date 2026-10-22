import Section from './Section.jsx'
import { skills } from '../content.js'

export default function Skills({ t }) {
  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.note}>
      <div className="groups">
        {Object.entries(skills).map(([key, list]) => (
          <div className="card" key={key}>
            <h3>{t.skills.groups[key]}</h3>
            <div className="tags">
              {list.map((s) => <span className="tag" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
