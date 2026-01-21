import { useState, useEffect, useRef } from "react";
import img from "../../assets/img/portada111.png";
import img2 from "../../assets/img/SpaSession-1.jpg";
import img3 from "../../assets/img/SpaSession-13.jpg";
import "./portada.css";

const slides = [
  {
    id: 1,
    img: img,
    // textIntro: "Aesthetic Clinic",
    textIntro: "Æstetisk Klinik",
    text: "",
    text2: "JUST FEEL RELAXED",
    // text3: "Aesthetics and Massage with a Personalized Approach",
    text3: "Æstetik og Massage med en Personlig Tilgang",
    // btn: <a href="#servicios">Our Services</a>,
    btn: <a href="#servicios">Vores Ydelser</a>,
  },
  {
    id: 2,
    img: img2,
    // textIntro: "Tailored to You",
    textIntro: "Skræddersyet til Dig",
    // text: "Healing Massage for Body and Soul",
    text: "Helende Massage for Krop og Sjæl",
    text2: "",
    // text3: "We Identify Your Needs and Personalize Your Massage",
    text3: "Vi Identificerer Dine Behov og Tilpasser Din Massage",
    // btn: <a href="#explica">Customized Massage</a>,
    btn: <a href="#explica">Skræddersyet massage</a>,
  },
  {
    id: 3,
    img: img3,
    // textIntro: "Gift Card",
    textIntro: "Gavekort",
    // text: "The perfect gift starts with our gift cards",
    text: "Den perfekte gave begynder med vores gavekort",
    text2: "",
    // text3: "Give Freedom, Give an Experience",
    text3: "Giv Frihed, Giv en Oplevelse",
    // btn: <a href="https://wa.me/+4571583738" target="_blank">Buy a Gift Card</a>,
    btn: <a href="https://wa.me/+4571583738" target="_blank">Køb et gavekort</a>,
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
                  
                  <span className="span-0" data-index={i} key={index + "-textIntro"}>{s.textIntro}</span>
                  <span className="span-1" key={index + "-text"}>{s.text}</span>
                  <h1 key={index + "-text2"}>{s.text2}</h1>
                  <span className="span-2" key={index + "-text3"}>{s.text3}</span>
                  <span className="span-3 cursor-target" key={index + "-btn"}>{s.btn}</span>
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
    </div>
  );
}
