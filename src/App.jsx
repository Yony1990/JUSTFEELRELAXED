import './App.css'
import Portada from './components/Portada/portada'
import Somos from './components/QuienesSomos/quienesSomos'
import Header from "./components/Header/header";
import Galery from "./components/Galeria/galery";
import MagicBento from './components/Servicios/magicBento'
import TargetCursor from './components/StyleBit/targetCursor';
import Testimonios from './components/Reseñas/testimonios';
import EfectoBajo from './components/EfectoBajo/efectoBajo'
import Agenda from './components/Agenda/agenda';
import Explica from './components/Explicaciones/explicaciones';
import Ubicac from './components/PreguntasFrecuentes/ubicacionFaq';
import Footer from './components/Footer/footer';
import Equipo from './components/EquipoTrabajo/equipo'



function App() {

  const sectionIds = [
    {
      id: "inicio",
      content: (
        <>
          <Portada/>
        </>
      ),
    },
    {
      id: "quienes-somos",
      content: (
        <>
          <Somos/>
        </>
      ),
    },
    {
      id: "servicios",
      content: (
        <>
          <MagicBento 
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={300}
            particleCount={20}
            glowColor="243, 145, 76"
          />
          
        </>
      ),
    },
    {
      id: 'agenda',
      content: (
        <>
          <Explica/>
        </>
      ),
    },
    {
      id: 'agendate',
      content: (
        <>
          <Agenda/>
        </>
      ),
    },
    {
      id: "galeria",
      content: (

        <>
            <Galery/>
        </>
      ),
    },
    
    {
      id: "equipo",
      content: (
        <>
          <Equipo/>
        </>
      ),
    },
    {
      id: "testimonios",
      content: (
        <>
          <Testimonios/>
        </>
      ),
    },
    
    // {
    //   id: "faq",
    //   content: (
    //     <>
    //       <Ubicac/>
    //     </>
    //   ),
    // },

  ];
  

  return (
    
    <div className="app">
      
      <EfectoBajo/>

      <div>
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />

        <Header />

        <div className='sections'>
          {sectionIds.map((section) => (
            <section 
              key={section.id} 
              id={section.id} 
              className="section"
              
            >
            {section.content}
            </section>
          ))}
        </div>
      </div>
      
      <Footer/>

    </div>
  )
}

export default App
