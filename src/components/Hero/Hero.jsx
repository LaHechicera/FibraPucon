import logoIcono from '../../assets/logoSoloIcono.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>¡Conexión sin límites!</h1>
          <p className="hero__description">
            En Fibrapucon transformamos tu experiencia digital. Te llevamos la
            mejor tecnología en fibra óptica con la velocidad, fluidez y
            estabilidad que tu hogar o negocio necesitan para navegar,
            trabajar y disfrutar sin interrupciones.
          </p>
        </div>

        <div className="hero__side">
          <img src={logoIcono} alt="Fibrapucon" className="hero__logo" />
          <div className="hero__actions">
            <a href="#planes" className="hero__btn hero__btn--fill">
              Ver planes
            </a>
            <a href="#contacto" className="hero__btn hero__btn--outline">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
