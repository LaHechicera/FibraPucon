import './Footer.css'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'planes', label: 'Planes' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

const REDES = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'WhatsApp', href: 'https://wa.me/56900000000' },
]

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__brand-name">Fibrapucon</p>
          <p className="footer__tagline">
            Fibra óptica de verdad para La Araucanía.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del sitio">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__social">
          {REDES.map((red) => (
            <li key={red.label}>
              <a href={red.href} target="_blank" rel="noreferrer">
                {red.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__bottom container">
        <p>© {anio} Fibrapucon. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
