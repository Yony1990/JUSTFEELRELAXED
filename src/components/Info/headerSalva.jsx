import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from '../../assets/img/logoSinFondo.png'

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Somos" },
  { id: "servicios", label: "Servicios" },
  // { id: "proyectos", label: "Proyectos" },
  { id: "equipo", label: "Equipo" },
  { id: "blog", label: "Blog" },
  { id: "testimonios", label: "Testimonios" },
  { id: "galeria", label: "Galería" },
  { id: "faq", label: "Preguntas" },
  // { id: "contacto", label: "Contacto" },
];



export default function header() {
  const [activeSection, setActiveSection] = useState("inicio");

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
  
    <div className='header'>
        <img className="logo" src={Logo} alt="" />
        <div className="GlassContainer">

          <div className="GlassContent">
              <nav className="nav">
                {/* <div className="logo">Mi Web</div> */}
                <ul className="nav-links">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`nav-btn ${
                          activeSection === section.id ? "active" : ""
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
          </div>
          
          <div className="GlassMaterial">
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
          </div>
        </div>
        <div className="contact">
          <button className="nav-btn-contact">Contacto</button>
        </div>
    </div>
    
  );
}


