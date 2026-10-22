import Section from './Section.jsx'

export default function Education({ t }) {
  return (
    <Section id="education" title={t.education.title}>
      <div className="groups two">
        <div className="card">
          <h3>{t.education.studyTitle}</h3>
          {t.education.items.map((i) => (
            <div className="item" key={i.title}><b>{i.title}</b><span>{i.sub}</span></div>
          ))}
        </div>
        <div className="card">
          <h3>{t.education.langTitle}</h3>
          {t.education.languages.map((l) => (
            <div className="item" key={l.name}><b>{l.name}</b><span>{l.level}</span></div>
          ))}
        </div>
      </div>
    </Section>
  )
}
