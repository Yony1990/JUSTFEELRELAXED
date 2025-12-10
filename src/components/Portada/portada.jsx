import { useState, useEffect, useRef } from "react";
import img from "../../assets/img/portada111.png";
import img2 from "../../assets/img/SpaSession-1.jpg";
import img3 from "../../assets/img/SpaSession-13.jpg";
// import Principal from '../Principal/principal'
import "./portada.css";

const slides = [
  {
    id: 1,
    img: img,
    text: "Consultorio Estetico",
    text2: "JUST FEEL RELAXED",
    text3: "Estética y Masajes con un enfoque personalizado",
    
  },
  {
    id: 2,
    img: img2,
    text: "Masajes terapéuticos para cuerpo y alma",
    text2: "",
    text3: "",
    btn: <a href=""></a>,
  },
  {
    id: 3,
    img: img3,
    text: "Experiencia spa de lujo para ti",
    text2: "",
    text3: "",
    btn: <a href=""></a>,
  },
];

export default function portada() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    timeoutRef.current = setTimeout(next, 10000);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const goTo = (i) => {
    clearTimeout(timeoutRef.current);
    setIndex(i);
  };

  return (
    <div className="carousel-container">
      
      <div className="carousel-inner">
        {slides.map((s, i) => (
            
            <div
            className={`carousel-slide ${i === index ? "active" : ""}`}
            key={s.id}
            >
              <div className="efecto-bajo">
                <div className="degradado"></div>
              </div>

              <img src={s.img} alt="" className="carousel-img" />

              <div className="carousel-text">
                  {/* ESTA KEY reinicia la animación del texto 👍 */}
                  <span className=".span-1" key={index + "-text"}>{s.text}</span>
                  <h1 key={index + "-text2"}>{s.text2}</h1>
                  <span className=".span-2" key={index + "-text3"}>{s.text3}</span>
              </div>
              
            </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active-dot" : ""}`}
            onClick={() => goTo(i)}
          ></div>
        ))}
      </div>

      {/* <Principal/> */}
    </div>
  );
}
