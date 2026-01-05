import React, { useState, useEffect } from "react";
import "./header2.css";
import Logo from '../../assets/img/logoSinFondo.png';

const sections = [
  // { id: "inicio", label: "Inicio" },
  // { id: "quienes-somos", label: "Somos" },
  // { id: "servicios", label: "Servicios" },

  // { id: "equipo", label: "Equipo" },
  // { id: "blog", label: "Blog" },
  // { id: "testimonios", label: "Testimonios" },
  // { id: "galeria", label: "Galería" },
  // { id: "faq", label: "Preguntas" },

  { id: "inicio", label: "Home" },
  { id: "quienes-somos", label: "About Us" },
  { id: "servicios", label: "Services" },
  { id: "galeria", label: "Galery" },
  { id: "equipo", label: "Team" },
  { id: "testimonios", label: "Reviews" },
  { id: "faq", label: "Questions" },
];



export default function header2() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [activeMenu, setActiveMenu] = useState(false);

  const showMenu = () => {
    setActiveMenu(!activeMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  
    <div className='header2'>
        {/* <img className="logo" src={Logo} alt="" /> */}
        <div className="menu2 cursor-target">
          <button onClick={showMenu}>
           <span>X</span>
          </button>
        </div>
        {/* <div className="contact">
          <button className="nav-btn-contact">Contacto</button>
        </div> */}
        <div className={activeMenu ? "GlassContainer-si2" : "GlassContainer-no2" }>

          <div onClick={showMenu} className="GlassContent-si2">
            
              <nav className="nav2">
               
                <ul className="nav-links2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`nav-btn2 ${
                          activeSection === section.id ? "active cursor-target" : "cursor-target"
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
          </div>
          
          {/* <div className="GlassMaterial">
              <div className="GlassEdgeReflection"></div>
              <div className="GlassEmbossReflection"></div>
              <div className="GlassRefraction"></div>
              <div className="GlassBlur"></div>
              <div className="BlendLayers"></div>
              <div className="BlendEdge"></div>
              <div className="Highlight"></div>
              <div className="Tint"></div>
              <div className="Contrast"></div>
              <div className="Brightness"></div>
          </div> */}
        </div>
        
     </div>
    
  );
}


