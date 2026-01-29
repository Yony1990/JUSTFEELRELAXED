import React, { useEffect, useRef } from "react";
import "./testimonios.css";

// Avatares ejemplo (puedes reemplazar por los tuyos)
import avatar1 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar3 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar4 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar5 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar6 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar7 from "../../assets/img/testimonios/logo_11zon.webp";

import avatar9 from "../../assets/img/testimonios/logo_11zon.webp";
import avatar10 from "../../assets/img/testimonios/logo_11zon.webp";
import google from "../../assets/img/testimonios/GoogleLogo.webp";
import google2 from "../../assets/img/testimonios/powered-by-google_1.webp";
import TrustP from "../../assets/img/testimonios/trust_1.webp";

import Reseña1 from "../../assets/img/reseñas/unnamed.webp";
import Reseña2 from "../../assets/img/reseñas/unnamed2.webp";

const testimonios = [
  
  {
    avatar: Reseña1,
    nombre: "Axel Sanabria",
    texto:
      "Such a great spot! 🙌 I was on vacation in Copenhagen and booked a massage session — left feeling amazing. Gaston (the owner) is super friendly and professional. 💆‍♂️✨ Totally recommend if you're around! 😊",
    estrellas: 5,
  },
  {
    avatar: avatar3,
    nombre: "Julie Pahnzen",
    texto:
      "Jeg elsker at komme der! Det er så afslappende. Jeg føler at jeg går fra min massage hver gang, som et helt nyt menneske. Gaston er en super dygtig massør. Stemningen, roen.  Kæmpe anbefaling herfra!",
    estrellas: 5,
  },
  {
    avatar: avatar4,
    nombre: "Michelle Mijic",
    texto:
      "Dejlig og afslappende oplevelse. Sødt og professionelt personale. Kan varmt anbefales.",
    estrellas: 5,
  },
  {
    avatar: avatar1,
    nombre: "Pepe Perez Perez",
    texto:
      "Floraida es una chica colombiana muy formal y profesional.",
    estrellas: 5,
  },
  {
    avatar: avatar5,
    nombre: "Ifigeneia Michailidou",
    texto:
      "I have been struggling with soar shoulders because of sports. (Gastón) He focused exactly on the areas I asked, and the pressure was high as I requested. I was very pleased and I'm definitely booking again.",
    estrellas: 5,
  },
  {
    avatar: avatar6,
    nombre: "Diego Vega",
    texto:
      "The best massage place, thanks to Gaston I left relaxed, without a doubt a place to return to thanks to the warmth and comfort they make you feel",
    estrellas: 5,
  },
  {
    avatar: avatar7,
    nombre: "steffen degn",
    texto:
      "I had a sports massage, and every second felt purposeful, with no time wasted. The pressure was perfect, and the attention was personalized. It was an eye-opening experience of how a massage should feel.",
    estrellas: 5,
  },
  {
    avatar: Reseña2,
    nombre: "Malene Lohmann",
    texto:
      "Jeg havde bestilt en massage via Downtown. Jeg bookede online og fandt nemt stedet via google maps. Jeg blev mødt med venlighed og professionalisme af Gaston.",
    estrellas: 4,
  },
  {
    avatar: avatar9,
    nombre: "Elizabeth Nielsen",
    texto:
      "I've been coming to this spa for a year and have never had any problems! I always felt in good hands!",
    estrellas: 5,
  },
  {
    avatar: avatar10,
    nombre: "Christian Würtz",
    texto:
      "God sportsmassage. Gastón er en dygtig sportsmassør, som hurtigt finder punkterne, hvor der er muskelømhed! Kan varmt anbefales..",
    estrellas: 5,
  },
];

const Testimonios = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY * 1.2;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="testimonios-section" id="testimonios">
      <h2 className="testimonios-title">Udtalelser</h2>
      <h3>“Ærlige Anmeldelser, Autentiske Resultater”</h3>


      <div className="container-carrucel">
        <div className="opinar">
          <div className="container-name-Team">
            <div className="foto-Team">
              <img src={avatar1} alt="" />
            </div>
            <div className="name-Team" >
              <div className="columna-name-team">
                <h4>JUST FEEL RELAXED</h4> 
                <div className="value-Team"><span className="number-clasif">4.5</span> ⭐⭐⭐⭐⭐</div>
                <span>Baseret på 65 anmeldelser</span>
                <img src={google2} alt="" />
              </div>
              <div className="btns-name-Team">
                <a target="_blank" href="https://www.google.com/search?q=just+feel+relaxed&sca_esv=fb6ec2c420ab31bb&rlz=1C1ONGR_esUY1080UY1081&ei=BYVvaajbL6zL1sQPi-zh2Ag&ved=0ahUKEwjo8Y28npqSAxWspZUCHQt2GIsQ4dUDCBE&uact=5&oq=just+feel+relaxed&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWp1c3QgZmVlbCByZWxheGVkMgcQABiABBgTMggQABgTGBYYHjIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYExgWGB4yCBAAGBMYFhgeMggQABgTGBYYHjIIEAAYExgWGB4yCBAAGBMYFhgeSMRcULUFWORScAJ4AZABAJgBY6ABlgaqAQE5uAEDyAEA-AEBmAILoAK9BsICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKEAAYgAQYQxiKBcICBhAAGAcYHsICCBAAGAcYChgewgIFEAAYgATCAgUQLhiABMICCBAAGBMYBxgewgIJEAAYgAQYExgNwgIKEAAYExgHGAgYHsICCBAAGAcYCBgewgIIEAAYExgNGB7CAgYQABgTGB7CAgYQABgIGB7CAgUQABjvBcICCBAAGIAEGKIEmAMAiAYBkAYKkgcEMTAuMaAHlESyBwM4LjG4B7YGwgcFMC44LjPIBx2ACAA&sclient=gws-wiz-serp#lrd=0x465253f8415697b3:0xf0e668c7f038552,3,,,,"><button className="cursor-target">Anmeld <img src={google} alt="" /></button></a>
                
                <a target="_blank" href="https://es.trustpilot.com/review/justfeelrelaxed.com"><button className="cursor-target btn-trust">Anmeld <img src={TrustP} alt="" /></button></a>
              </div>
              
            </div>
          </div>
        </div>

        <div className="testimonios-wrapper" ref={scrollRef}>


        <div className="testimonios-carousel">
            {/* Bloque principal */}
            {testimonios.map((item, index) => (
              <div className="testimonio-card" key={index}>
                <img src={item.avatar} alt={item.nombre} className="avatar" />

                <p className="testimonio-text">{item.texto}</p>

                

                <div className="testimonio-estrellas">
                  <h4 className="testimonio-nombre">{item.nombre}</h4>
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

                

                <div className="testimonio-estrellas">
                  <h4 className="testimonio-nombre">{item.nombre}</h4>
                  {Array.from({ length: item.estrellas }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
     
      <div className="descrip">
        <p>

       Hos<span>  JUST FEEL RELAXED</span> er vi stolte af, at vores kunder elsker det, vi gør. Det skyldes vores dedikation til at levere effektive behandlinger af høj kvalitet hver gang. Vi fokuserer på at levere fremragende resultater og sikre, at hvert besøg føles som en foryngende pause. Vi skaber en varm og afslappende atmosfære, hvor kunderne kan lægge hverdagens stress bag sig. Hver eneste detalje er designet til at få dig til at føle dig værdsat og passet på – fordi dit velbefindende er vores prioritet. Tak, fordi du stoler på os til at tage os af din afslapning og selvpleje.
        {/* AtJUST FEEL RELAXED, we’re proud that our clients love what we do. It’s all thanks to our dedication to providing high-quality, effective treatments every time. We focus on delivering outstanding results and ensuring that every visit feels like a rejuvenating escape. We create a warm, relaxing atmosphere where clients can leave daily stress behind. Every detail is designed to make you feel valued and cared for—because your well-being is our priority. Thank you for trusting us to take care of your relaxation and self-care. */}
        
        </p>
      </div>
    </section>
  );
};

export default Testimonios;