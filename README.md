# Fibrapucon — Landing Page

Landing page de una sola página (React + Vite) para Fibrapucon, proveedor de
internet de fibra óptica en La Araucanía. Dividida en 5 secciones: Inicio,
Planes, Nosotros, Contacto y Footer.

## Estructura

```
src/
  components/
    Navbar/     nav fija + menú responsive
    Hero/       sección "Inicio": propuesta de valor + "¿Por qué elegirnos?"
    Planes/     tarjetas de planes
    Nosotros/   sección institucional
    Contacto/   formulario de contacto (envía a WhatsApp)
    Footer/     enlaces, redes y copyright
  App.jsx       compone las secciones
  index.css     tokens de diseño (colores, tipografía, espaciado) y reset
```

Cada componente vive en su propia carpeta con su JSX y CSS, y con su propio
contenido (textos, precios, links) escrito directamente ahí — como
constantes al inicio del archivo cuando hay que mapear una lista (planes,
links de nav), o directo en el JSX cuando es texto fijo. Para editar el
copy de una sección, se edita ese componente.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run lint      # eslint
npm run preview   # sirve el build de producción localmente
```

## Personalización rápida

- **Copy / precios / planes:** editar directamente el componente de la
  sección (p. ej. `src/components/Planes/Planes.jsx`).
- **Colores / tipografía / espaciados:** editar los tokens en `src/index.css`
  (`:root`).
- **Número de WhatsApp / email de contacto:** constantes al inicio de
  `src/components/Contacto/Contacto.jsx` y `src/components/Footer/Footer.jsx`.
