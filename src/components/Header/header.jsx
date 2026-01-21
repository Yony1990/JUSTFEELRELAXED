import React, { useState, useEffect } from "react";
import "./header.css";
import Contact from '../Contacto/contacto';
import HeaderMobil from '../Header2/header2';
import Logo from '../../assets/img/logoSinFondo.png';

const sections = [
  // { id: "inicio", label: "Home" },
  // { id: "quienes-somos", label: "About Us" },
  // { id: "servicios", label: "Services" },
  // { id: "galeria", label: "Galery" },
  // { id: "equipo", label: "Team" },
  // { id: "testimonios", label: "Reviews" },
  // { id: "faq", label: "Questions" },
  { id: "inicio", label: "Hjem" },
  { id: "quienes-somos", label: "Om os" },
  { id: "servicios", label: "Ydelser" },
  { id: "galeria", label: "Galleri" },
  { id: "equipo", label: "Team" },
  { id: "testimonios", label: "Anmeldelser" },
  { id: "faq", label: "Spørgsmål" },
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
        <div className="degradadoHeader"></div>
        <a href="#inicio"><img className="logo cursor-target" src={Logo} alt="" /></a>
        
        
        <div className="container-nav">
          <nav className="nav">
            
            <ul className="nav-links">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`nav-btn ${
                      activeSection === section.id ? "active cursor-target" : "cursor-target"
                    }`}
                  >
                    
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="contact">
            <button className="nav-btn-contact cursor-target">Contacto</button>
          </div>
          <Contact/>
        </div>
        <div className="headerMobil">
          <HeaderMobil/>
        </div>
              
          
        
    </div>
    
  );
}


