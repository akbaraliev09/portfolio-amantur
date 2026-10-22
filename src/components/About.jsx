import Section from './Section.jsx'

export default function About({ t }) {
  return (
    <Section id="about" title={t.about.title}>
      <div className="prose">
        {t.about.text.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Section>
  )
}
