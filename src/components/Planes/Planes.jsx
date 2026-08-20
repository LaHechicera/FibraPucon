import './Planes.css'

const PLANES = [
  {
    id: 'plan-estrella',
    icono: '🌟',
    nombre: 'Plan Estrella: 100 MegaFibra',
    precio: '$20.000',
    precioSufijo: '/ mes',
    tagline:
      'La opción preferida de La Araucanía para el hogar. Velocidad, estabilidad y un precio justo.',
    destacado: true,
    caracteristicas: [
      '100 Mbps de fibra óptica de alta fidelidad.',
      'Conexión estable y constante, sin caídas en horas de mayor tráfico.',
      'Ideal para teletrabajo, clases online, streaming HD y videollamadas.',
      'Conexión multidispositivo fluida.',
    ],
    ctaLabel: 'Contratar Plan Estrella',
  },
  {
    id: 'plan-medida',
    icono: '🛠️',
    nombre: 'Plan a Tu Medida (Personalizado)',
    precio: 'Cotización directa',
    precioSufijo: '',
    tagline:
      '¿Necesitas más velocidad, ancho de banda dedicado o requerimientos especiales para tu hogar, campo o negocio? Nos adaptamos 100% a ti.',
    destacado: false,
    caracteristicas: [
      'Definición de velocidad y configuración según tus requerimientos reales.',
      'Atención directa y personalizada con nuestro Gerente de Internet.',
      'Asesoría técnica para garantizar la mejor cobertura y estabilidad.',
      'Soluciones flexibles para proyectos especiales, empresas y eventos.',
    ],
    ctaLabel: 'Hablar con el Gerente de Internet',
  },
]

export default function Planes() {
  return (
    <section id="planes" className="section planes">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Nuestros Planes</span>
          <h2>Elige la conexión que necesitas</h2>
        </div>

        <div className="planes__grid">
          {PLANES.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card ${plan.destacado ? 'plan-card--featured' : ''}`}
            >
              {plan.destacado && (
                <span className="plan-card__badge">Más elegido</span>
              )}
              <div className="plan-card__icon" aria-hidden="true">
                {plan.icono}
              </div>
              <h3>{plan.nombre}</h3>
              <p className="plan-card__price">
                {plan.precio}
                {plan.precioSufijo && (
                  <span className="plan-card__price-suffix">
                    {' '}
                    {plan.precioSufijo}
                  </span>
                )}
              </p>
              <p className="plan-card__tagline">{plan.tagline}</p>
              <ul className="plan-card__features">
                {plan.caracteristicas.map((caracteristica) => (
                  <li key={caracteristica}>
                    <span aria-hidden="true">✓</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`btn ${plan.destacado ? 'btn-primary' : 'btn-secondary'} plan-card__cta`}
              >
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
