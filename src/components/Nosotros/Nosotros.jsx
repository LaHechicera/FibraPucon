import './Nosotros.css'

const RAZONES = [
  {
    titulo: '100 Mbps Reales y Estables',
    descripcion:
      'Olvídate de los cortes inesperados y la lentitud en horas pico.',
  },
  {
    titulo: 'Servicio 100% Local',
    descripcion:
      'Conocemos la región y sus necesidades; te brindamos una atención cercana, rápida y sin rodeos.',
  },
  {
    titulo: 'Planes a tu Medida',
    descripcion:
      'Flexibilidad total para adaptarnos exactamente a lo que tu consumo requiere.',
  },
  {
    titulo: 'Baja Latencia',
    descripcion:
      'Conexión fluida optimizada para videollamadas, streaming en alta definición y juegos en línea.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="section nosotros">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">Nosotros</span>
          <h2>Conectando La Araucanía</h2>
        </div>

        <div className="nosotros__grid">
          <div className="nosotros__col">
            <h3>¿Quiénes somos?</h3>
            <p className="nosotros__text">
              En Fibrapucon nos mueve acortar distancias y potenciar la
              conectividad de La Araucanía. Combinamos infraestructura de
              última generación con una vocación de servicio auténtica para
              mantenerte siempre unido a lo que más te importa.
            </p>
          </div>

          <div className="nosotros__divider" aria-hidden="true" />

          <div className="nosotros__col">
            <h3>¿Por qué elegirnos?</h3>
            <ul className="nosotros__why-grid">
              {RAZONES.map((razon) => (
                <li key={razon.titulo} className="nosotros__why-card">
                  <h4>{razon.titulo}</h4>
                  <p>{razon.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
