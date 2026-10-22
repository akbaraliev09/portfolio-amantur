export default function Footer({ t }) {
  return (
    <footer>
      <div className="wrap">© {new Date().getFullYear()} {t.hero.name}</div>
    </footer>
  )
}
