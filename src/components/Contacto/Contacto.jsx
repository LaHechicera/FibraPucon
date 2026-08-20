import { useState } from 'react'
import './Contacto.css'

const TELEFONO = '+56 9 0000 0000'
const EMAIL = 'contacto@fibrapucon.cl'
const WHATSAPP_HREF = 'https://wa.me/56900000000'

const FORM_INICIAL = { nombre: '', telefono: '', direccion: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(FORM_INICIAL)
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.nombre.trim() || !form.telefono.trim()) {
      setStatus('error')
      return
    }

    const mensaje = encodeURIComponent(
      `Hola Fibrapucon, soy ${form.nombre}.\n` +
        `Teléfono: ${form.telefono}\n` +
        `Dirección: ${form.direccion || 'No especificada'}\n` +
        `Mensaje: ${form.mensaje || 'Quiero más información sobre los planes.'}`,
    )

    window.open(`${WHATSAPP_HREF}?text=${mensaje}`, '_blank')
    setStatus('success')
    setForm(FORM_INICIAL)
  }

  return (
    <section id="contacto" className="section contacto">
      <div className="container contacto__inner">
        <div className="contacto__info">
          <span className="section-eyebrow">Contacto</span>
          <h2>¿Tienes dudas sobre qué plan elegir?</h2>
          <p>
            Ponte en contacto con nuestro equipo y evalúa la factibilidad
            técnica de tu domicilio o negocio en minutos.
          </p>

          <ul className="contacto__details">
            <li>
              <strong>Teléfono:</strong> <a href={`tel:${TELEFONO}`}>{TELEFONO}</a>
            </li>
            <li>
              <strong>Correo:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>

        <form className="contacto__form" onSubmit={handleSubmit} noValidate>
          <div className="contacto__field">
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contacto__field">
            <label htmlFor="telefono">Teléfono de contacto *</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contacto__field">
            <label htmlFor="direccion">Dirección o sector</label>
            <input
              id="direccion"
              name="direccion"
              type="text"
              value={form.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="contacto__field">
            <label htmlFor="mensaje">Cuéntanos qué necesitas</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>

          {status === 'error' && (
            <p className="contacto__status contacto__status--error" role="alert">
              Por favor completa tu nombre y teléfono.
            </p>
          )}
          {status === 'success' && (
            <p className="contacto__status contacto__status--success" role="status">
              ¡Gracias! Te contactaremos vía WhatsApp.
            </p>
          )}

          <button type="submit" className="btn btn-primary contacto__submit">
            Solicitar contacto
          </button>
        </form>
      </div>
    </section>
  )
}
