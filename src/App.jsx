import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Planes from './components/Planes/Planes'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Planes />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
