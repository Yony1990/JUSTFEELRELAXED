import { useState } from "react";
import "./ubicacionFaq.css";
import Carrucel from "../CarrucelLOcal/carruselLocal";
import map from '../../assets/img/map2.png';

export default function UbicacionFaq() {
  const faqs = [
    {
      question: "¿Necesito reservar con anticipación?",
      answer: "Sí, recomendamos reservar al menos con un día de anticipación para asegurar tu horario preferido.",
    },
    {
      question: "¿Puedo pagar con tarjeta?",
      answer: "Sí, aceptamos tarjetas de débito, crédito y pagos digitales.",
    },
    {
      question: "¿Qué debo llevar a mi sesión?",
      answer: "Nada especial, solo ropa cómoda. Nosotros proporcionamos todo lo necesario.",
    },
    {
      question: "¿Puedo cancelar una reserva?",
      answer: "Sí, puedes cancelar con al menos 3 horas de anticipación sin penalización.",
    },
    {
      question: "¿Hay masajes para embarazadas?",
      answer: "Sí, contamos con masajes específicos para embarazadas mayores a 12 semanas.",
    },
    {
      question: "¿Los masajes son realizados por profesionales?",
      answer: "Sí, todos nuestros terapeutas están certificados y cuentan con experiencia.",
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer: "La mayoría de los masajes duran entre 45 y 60 minutos, dependiendo del servicio.",
    },
    {
      question: "¿Qué pasa si llego tarde?",
      answer: "La sesión puede verse reducida para respetar el horario de los siguientes clientes.",
    },
    {
      question: "¿Puedo elegir masajista hombre o mujer?",
      answer: "Sí, al momento de agendar puedes elegir el profesional que prefieras.",
    },
    {
      question: "¿Tienen estacionamiento?",
      answer: "Sí, contamos con estacionamiento gratuito para clientes del spa.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="ubicacionfaq-section">

      {/* LADO IZQUIERDO: MAPA */}
      <div className="map-container">

        <h2 className="map-title">Donde Encontrarnos</h2>
        <span className="direcctionss">Peders Skrams Gade 11, Copenhague Dinamarca</span>
        
        <div className="container-all-map">
          <div className="map-card">
            <a href="https://maps.app.goo.gl/b5gLfcRBSwc5tnan8"><span className="cursor-target">WE ARE HERE</span></a>
            <div className="degrade"></div>
            <img src={map} alt="" /> 
          </div>
          <div className="container-other">
            <div className="horario">
              <p>Horario</p>
              <span>10am a 8pm</span> 
            </div>
            <div className="politica">
              <h4>Nuestro Local</h4>
              <ul>
                <li>Ambiente climatizado</li>
                <li>Música y aromas relajantes</li>
                <li>Toallas esterilizadas</li>
                <li>Productos premium</li>
                <li>Experiencia profesional</li>
              </ul>
            </div>
          </div>
        </div>
        

        <div className="text-local">
          <div className="info-card">
            
            <ul>
              <li>Necesidad de reserva previa</li>
              <li>Llegar 5-10 min antes</li>
              <li>Atención solo con cita</li>
              <li>Higiene estricta del local</li>
              <li>Política de cancelaciones</li>
            </ul>
          </div>
          <div className="carruc-card"><Carrucel/></div>
       </div>
        
      </div>

      {/* LADO DERECHO: FAQ */}
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <span className="client-pregunt">Accede fácilmente a la información que necesitas saber</span>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item cursor-target" key={index}>
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <p>{item.question}</p>
                <span className="faq-icon">
                  {openIndex === index ? "➖" : "➕"}
                </span>
              </div>

              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
