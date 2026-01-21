import React, { useState, useEffect } from "react";
import "./header2.css";
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
       
        <div className="menu2 cursor-target">
          <button onClick={showMenu}>
           <span>
            
            <i className="bi bi-list"></i>
           </span>
          </button>
        </div>
        
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
  
        </div>
        
     </div>
    
  );
}


