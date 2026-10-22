// Обёртка для каждого раздела страницы
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
