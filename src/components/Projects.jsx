import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../content.js'

export default function Projects({ t, lang }) {
  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="plist">
        {projects.map((p) => <ProjectCard key={p.id} p={p} t={t} lang={lang} />)}
         </div>
    </Section>
  )
}
