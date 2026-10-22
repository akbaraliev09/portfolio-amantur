import Section from './Section.jsx'
import { profile } from '../content.js'

export default function Contact({ t }) {
  const items = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Telegram', value: '@' + profile.telegram, href: `https://t.me/${profile.telegram}` },
    { label: 'GitHub', value: 'github.com/' + profile.github, href: `https://github.com/${profile.github}` },
  ]
  if (profile.showPhone) items.push({ label: t.contact.phone, value: profile.phoneView, href: `tel:${profile.phone}` })

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="groups two">
        {items.map((i) => (
          <a
            className="card link"
            key={i.label}
            href={i.href}
            target={i.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            <span className="muted">{i.label}</span>
            <b>{i.value}</b>
          </a>
        ))}
      </div>
    </Section>
  )
}
