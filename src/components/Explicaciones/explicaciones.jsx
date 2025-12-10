import { useState } from "react";
import "./explicaciones.css";

const data = [
  {
    titulo: "ALIVIAR TU MUSCULATURA",
    desc: "¿Te imaginas la vida sin esas contracturas? Yo te puedo ayudar a devolver los músculos a su estado natural, aliviando la tensión sobre ellos.",
    boton: "Descontracturante",
    contenido: `
Los masajes descontracturantes están diseñados para liberar la tensión muscular acumulada y mejorar la circulación.

Beneficios:
• Disminución del dolor  
• Relajación profunda  
• Mejora de postura  
• Aumento de flexibilidad  

Ideal para quienes pasan largas horas sentados o sienten rigidez en espalda, cuello y hombros.
    `
  },
  {
    titulo: "REDUCIR LA CELULITIS",
    desc: "Con mis tratamientos corporales te voy a ayudar a combatir la flacidez y a reducir centímetros, logrando además una mejora en la apariencia de la piel.",
    boton: "Ver tratamientos",
    contenido: `
La reducción de celulitis combina drenaje linfático, activadores circulatorios y técnicas reductoras.

Beneficios:
• Disminuye la piel de naranja  
• Reduce centímetros  
• Reafirma y tonifica  
• Mejora la textura de la piel  

Perfecto para lograr un cuerpo más firme, parejo y definido.
    `
  },
  {
    titulo: "REJUVENECER LA PIEL",
    desc: "Elige entre varios tratamientos de peeling que trabajan a distintos niveles de profundidad, para lograr un cutis homogéneo y dar luminosidad a tu piel.",
    boton: "Peeling + limpieza",
    contenido: `
Tratamiento facial pensado para renovar la piel, eliminar células muertas y mejorar la luminosidad del rostro.

Beneficios:
• Atenúa manchas  
• Reduce líneas finas  
• Mejora textura  
• Estimula el colágeno  

Tu piel se verá más joven, uniforme y radiante.
    `
  },
  {
    titulo: "QUEMAR GRASAS",
    desc: "La cavitación es una técnica no invasiva muy eficaz para eliminar la grasa localizada y la celulitis, con resultados visibles desde las primeras sesiones.",
    boton: "Cavitación",
    contenido: `
La cavitación utiliza ultrasonido para romper grasa de manera no invasiva.

Beneficios:
• Reduce grasa localizada  
• Moldea la figura  
• Mejora circulación  
• Reduce centímetros  

Ideal para abdomen, piernas, brazos y flancos.
    `
  }
];

export default function ResultadosVisibles() {
  const [active, setActive] = useState(null);

  return (
    <div className="resultados-container" id="explica">
      <div className="titulos">
          <span>Tratamientos Personalizados</span>
          <h2 className="resultados-title">¿QUIERES RESULTADOS VISIBLES?</h2>  
      </div>
      

      <div className="resultados-grid">
        {data.map((item, i) => (
          <div className="result-card" key={i}>
            <i className="bi bi-check-circle-fill"></i>
            <h3 className="result-card-title">{item.titulo}</h3>
            <div className="line"></div>
            <p className="result-card-desc">{item.desc}</p>
            <button
              className="result-btn cursor-target"
              onClick={() => setActive(item)}
            >
              {item.boton}
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-window" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{active.titulo}</h3>
            <p className="modal-content">{active.contenido}</p>

            <div className="btnss">
            
              <button className="agendart-btn cursor-target">AGENDARTE</button>
              <button className="modal-close cursor-target" onClick={() => setActive(null)}>
                CERRAR
              </button>
              
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
