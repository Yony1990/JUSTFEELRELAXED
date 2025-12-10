import React, { useEffect, useRef } from "react";
import "./testimonios.css";

// Avatares ejemplo (puedes reemplazar por los tuyos)
import avatar1 from "../../assets/img/logo.png";
import avatar2 from "../../assets/img/logo.png";
import avatar3 from "../../assets/img/logo.png";
import avatar4 from "../../assets/img/logo.png";
import avatar5 from "../../assets/img/logo.png";
import avatar6 from "../../assets/img/logo.png";
import avatar7 from "../../assets/img/logo.png";
import avatar8 from "../../assets/img/logo.png";
import avatar9 from "../../assets/img/logo.png";
import avatar10 from "../../assets/img/logo.png";
import google from "../../assets/img/GoogleLogo.webp";
import google2 from "../../assets/img/powered-by-google.png";

const testimonios = [
  {
    avatar: avatar1,
    nombre: "María González",
    texto:
      "Desde que descubrí este spa, no voy a otro. La atención es impecable y los masajes son otro nivel.",
    estrellas: 5,
  },
  {
    avatar: avatar2,
    nombre: "Carlos Pérez",
    texto:
      "Ambiente relajante, personal profesional y resultados increíbles. Salí completamente renovado.",
    estrellas: 4,
  },
  {
    avatar: avatar3,
    nombre: "Lucía Martínez",
    texto:
      "Me encantaron los aromas, la música y el masaje profundo. Una experiencia que pienso repetir.",
    estrellas: 5,
  },
  {
    avatar: avatar4,
    nombre: "Ana Torres",
    texto:
      "Todo muy bien, aunque me gustaría que ampliaran el menú de tratamientos. Aun así, muy recomendable.",
    estrellas: 4,
  },
  {
    avatar: avatar5,
    nombre: "Javier López",
    texto:
      "La atención personalizada hace toda la diferencia. Un lujo increíble en cada detalle.",
    estrellas: 5,
  },
  {
    avatar: avatar6,
    nombre: "Rocío Navarro",
    texto:
      "Las manos de los terapeutas son mágicas. ¡Nunca había salido tan relajada de un spa!",
    estrellas: 5,
  },
  {
    avatar: avatar7,
    nombre: "Miguel Rivas",
    texto:
      "Buen servicio y trato amable. Volvería sin pensarlo, muy buena experiencia.",
    estrellas: 4,
  },
  {
    avatar: avatar8,
    nombre: "Sandra Gómez",
    texto:
      "El masaje con piedras calientes fue una locura. Sentí alivio inmediato. Súper recomendado.",
    estrellas: 5,
  },
  {
    avatar: avatar9,
    nombre: "Patricia León",
    texto:
      "Todo muy organizado, limpio y profesional. Me encantó el ambiente tan relajante.",
    estrellas: 5,
  },
  {
    avatar: avatar10,
    nombre: "Fernando Ruiz",
    texto:
      "Excelente experiencia. Quizás el mejor masaje descontracturante que me he dado en años.",
    estrellas: 5,
  },
];

const Testimonios = () => {
  const scrollRef = useRef(null);

  // --- Scroll horizontal con la rueda del mouse ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // Evita el scroll vertical de la página
      e.preventDefault();

      // Convierte scroll vertical -> movimiento horizontal
      el.scrollLeft += e.deltaY * 1.2;
    };

    // Agrega el evento manualmente para poder usar preventDefault
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="testimonios-section" id="testimonios">
      <h2 className="testimonios-title">Testimonios Sobre Nosotros</h2>
      <h3>“Opiniones sinceras, resultados auténticos.”</h3>


      <div className="container-carrucel">
        <div className="opinar">
          <div className="container-name-Team">
            <div className="foto-Team">
              <img src={avatar1} alt="" />
            </div>
            <div className="name-Team" >
              <h4>JUST FEEL RELAXED</h4> 
              <div className="value-Team"><span className="number-clasif">5.0</span> ⭐⭐⭐⭐⭐</div>
              <span>Basado en 20 reseñas</span>
              <img src={google2} alt="" />
              <button className="cursor-target">Valoranos en <img src={google} alt="" /></button>
            </div>
          </div>
        </div>

        <div className="testimonios-wrapper" ref={scrollRef}>

        {/* <div className="opinar">

        </div> */}

        <div className="testimonios-carousel">
            {/* Bloque principal */}
            {testimonios.map((item, index) => (
              <div className="testimonio-card" key={index}>
                <img src={item.avatar} alt={item.nombre} className="avatar" />

                <p className="testimonio-text">{item.texto}</p>

                <h4 className="testimonio-nombre">{item.nombre}</h4>

                <div className="testimonio-estrellas">
                  {Array.from({ length: item.estrellas }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Duplicación para loop infinito */}
            {testimonios.map((item, index) => (
              <div className="testimonio-card" key={`dup-${index}`}>
                <img src={item.avatar} alt={item.nombre} className="avatar" />

                <p className="testimonio-text">{item.texto}</p>

                <h4 className="testimonio-nombre">{item.nombre}</h4>

                <div className="testimonio-estrellas">
                  {Array.from({ length: item.estrellas }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
      

      {/* <div className="testimonios-wrapper" ref={scrollRef}>

        <div className="testimonios-carousel">
     
          {testimonios.map((item, index) => (
            <div className="testimonio-card" key={index}>
              <img src={item.avatar} alt={item.nombre} className="avatar" />

              <p className="testimonio-text">{item.texto}</p>

              <h4 className="testimonio-nombre">{item.nombre}</h4>

              <div className="testimonio-estrellas">
                {Array.from({ length: item.estrellas }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}

       
          {testimonios.map((item, index) => (
            <div className="testimonio-card" key={`dup-${index}`}>
              <img src={item.avatar} alt={item.nombre} className="avatar" />

              <p className="testimonio-text">{item.texto}</p>

              <h4 className="testimonio-nombre">{item.nombre}</h4>

              <div className="testimonio-estrellas">
                {Array.from({ length: item.estrellas }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="descrip">
        <p>En<span> JUST FEEL RELAXED</span>, nos enorgullece saber que nuestros clientes nos aman. Esto se debe a nuestra inquebrantable dedicación a la calidad y eficiencia en cada tratamiento que ofrecemos. Nos esforzamos por proporcionar resultados excepcionales, asegurando que cada visita sea una experiencia rejuvenecedora. Creemos firmemente en la importancia de crear un ambiente cálido y relajante, donde nuestros clientes pueden escapar del estrés diario. Cada detalle está pensado para que se sientan valorados y cuidados, porque su bienestar es nuestra prioridad. Gracias por confiar en nosotros para su relajación y cuidado personal.</p>
      </div>
    </section>
  );
};

export default Testimonios;