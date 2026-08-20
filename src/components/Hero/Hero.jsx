import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__intro">
          <h1>Conexión sin límites en La Araucanía</h1>
          <p className="hero__description">
            En Fibrapucon transformamos tu experiencia digital. Te llevamos la
            mejor tecnología en fibra óptica con la velocidad, fluidez y
            estabilidad que tu hogar o negocio necesitan para navegar,
            trabajar y disfrutar sin interrupciones.
          </p>
          <div className="hero__actions">
            <a href="#planes" className="btn btn-primary">
              Ver planes
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
