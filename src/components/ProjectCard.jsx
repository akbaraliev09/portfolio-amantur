import { useState } from 'react'

export default function ProjectCard({ p, t, lang }) {
  const [broken, setBroken] = useState(false)
  const c = p[lang]
  return (
    <article className="project">
      <div className="shot">
        {broken ? (
          <span>{c.title}</span>
        ) : (
          <img src={p.image} alt={c.title} loading="lazy" onError={() => setBroken(true)} />
        )}
      </div>
      <div className="pbody">
        <h3>{c.title}</h3>
        <p>{c.desc}</p>
        <ul>
          {c.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="tags">
          {p.tech.map((x) => <span className="tag" key={x}>{x}</span>)}
        </div>
        <div className="actions">
          {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">{t.projects.live}</a>}
          {p.code && <a className="btn ghost" href={p.code} target="_blank" rel="noreferrer">{t.projects.code}</a>}
        </div>
      </div>
    </article>
  )
}
