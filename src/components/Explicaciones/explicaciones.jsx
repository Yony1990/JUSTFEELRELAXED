import { useState } from "react";
import "./explicaciones.css";

const data = [
  {
    titulo: "EASE MUSCLE TENSION",
    desc: "Can you imagine life without muscle tension? I can help return your muscles to their natural balance, easing the tension they carry.",
    boton: "Deep Tissue Massage",
    contenido: `
Deep tissue massages are designed to release built-up muscle tension and enhance circulation.

Benefits:
• Pain relief
• Deep relaxation
• Better posture
• Increased flexibility

Ideal for anyone who spends long hours seated or feels stiffness in the back, neck, and shoulders.
    `
  },
  {
    titulo: "REDUCE CELLULITE",
    desc: "Through my body treatments, I help combat skin laxity, reduce inches, and enhance the overall appearance of the skin.",
    boton: "View Treatments",
    contenido: `
Our cellulite reduction treatment combines lymphatic drainage, circulation activators, and slimming techniques.

Benefits:
• Smooths “orange peel” skin
• Helps reduce inches
• Firms and tones the body
• Enhances skin texture

Ideal for a firmer, more even, and sculpted body.
    `
  },
  {
    titulo: "REVITALIZE YOUR SKIN",
    desc: "Choose from a variety of peeling treatments that work at different depths to achieve an even complexion and bring radiance to your skin.",
    boton: "Peel + Facial Cleansing",
    contenido: `
Facial treatment designed to renew the skin, remove dead cells, and enhance the radiance of your complexion.

Benefits:
• Reduces dark spots
• Minimizes fine lines
• Improves texture
• Stimulates collagen production

Your skin will look younger, more even, and radiant.
    `
  },
  {
    titulo: "Targeted Fat Reduction",
    desc: "Cavitation is a non-invasive technique that is highly effective for eliminating localized fat and cellulite, with visible results from the first sessions.",
    boton: "Cavitation Therapy",
    contenido: `
Cavitation uses ultrasound to break down fat in a non-invasive way.

Benefits:
• Reduces localized fat
• Shapes the figure
• Improves circulation
• Reduces measurements

Ideal for the abdomen, legs, arms, and flanks.
    `
  }
];

export default function ResultadosVisibles() {
  const [active, setActive] = useState(null);

  return (
    <div className="resultados-container" id="explica">
      <div className="titulos">
          <span>Customized Treatments</span>
          <h2 className="resultados-title">WANT VISIBLE RESULTS?</h2>  
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
            
              <button className="agendart-btn cursor-target">BOOK NOW</button>
              <button className="modal-close cursor-target" onClick={() => setActive(null)}>
                CLOSE
              </button>
              
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
