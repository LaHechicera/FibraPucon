import { useEffect, useState } from 'react'
import logo from '../../assets/logoFibraPucon.png'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'planes', label: 'Planes' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

const SCROLL_THRESHOLD = 80

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
        <img src={logo} alt="Fibrapucon" />
      </a>

      <button
        type="button"
        className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`}
        aria-expanded={isMenuOpen}
        aria-controls="navbar-links"
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="navbar-links"
        className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://sistema.fibrapucon.cl/cliente/login"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
            onClick={closeMenu}
          >
            Portal Cliente
          </a>
        </li>
      </ul>
    </header>
  )
}
