import { useEffect, useState } from 'react'
import { text } from './content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const load = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

export default function App() {
  const [lang, setLang] = useState(() => load('pf_lang', 'ru'))
  const [theme, setTheme] = useState(() => load('pf_theme', 'dark'))

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = lang
    try {
      localStorage.setItem('pf_theme', theme)
      localStorage.setItem('pf_lang', lang)
    } catch {
    }
  }, [theme, lang])

  const t = text[lang]

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} lang={lang} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
