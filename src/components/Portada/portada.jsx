import { useState, useEffect, useRef } from "react";
import img from "../../assets/img/portada111.png";
import img2 from "../../assets/img/SpaSession-1.jpg";
import img3 from "../../assets/img/SpaSession-13.jpg";
import "./portada.css";

const slides = [
  {
    id: 1,
    img: img,
    textIntro: "Aesthetic Clinic",
    text: "",
    text2: "JUST FEEL RELAXED",
    text3: "Aesthetics and Massage with a Personalized Approach",
    btn: <a href="#servicios">Our Services</a>,
  },
  {
    id: 2,
    img: img2,
    textIntro: "Tailored to You",
    text: "Healing Massage for Body and Soul",
    text2: "",
    text3: "We Identify Your Needs and Personalize Your Massage",
    btn: <a href="#explica">Customized Massage</a>,
  },
  {
    id: 3,
    img: img3,
    textIntro: "Gift Card",
    text: "The perfect gift starts with our gift cards",
    text2: "",
    text3: "Give Freedom, Give an Experience",
    btn: <a href="https://wa.me/+4571583738" target="_blank">Buy a Gift Card</a>,
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
