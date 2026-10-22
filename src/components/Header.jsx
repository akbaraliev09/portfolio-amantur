const links = ['about', 'skills', 'projects', 'education', 'contact']

export default function Header({ t, lang, setLang, theme, setTheme }) {
  return (
    <header>
      <div className="wrap bar">
        <a href="#top" className="brand">
          <span className="mark">{t.initials}</span>
          <b>{t.shortName}</b>
        </a>
        <nav>
          {links.map((id) => (
            <a key={id} href={`#${id}`}>{t.nav[id]}</a>
          ))}
        </nav>
        <div className="tools">
          {['ru', 'en'].map((l) => (
            <button key={l} className={'chip' + (lang === l ? ' on' : '')} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
          <button className="chip" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}
