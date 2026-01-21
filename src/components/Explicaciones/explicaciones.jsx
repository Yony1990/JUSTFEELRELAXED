import { useState } from "react";
import "./explicaciones.css";

const data = [
//   {
//     titulo: "EASE MUSCLE TENSION",
//     desc: "Can you imagine life without muscle tension? I can help return your muscles to their natural balance, easing the tension they carry.",
//     boton: "Deep Tissue Massage",
//     contenido: `
// Deep tissue massages are designed to release built-up muscle tension and enhance circulation.

// Benefits:
// • Pain relief
// • Deep relaxation
// • Better posture
// • Increased flexibility

// Ideal for anyone who spends long hours seated or feels stiffness in the back, neck, and shoulders.
//     `
//   },
//   {
//     titulo: "REDUCE CELLULITE",
//     desc: "Through my body treatments, I help combat skin laxity, reduce inches, and enhance the overall appearance of the skin.",
//     boton: "View Treatments",
//     contenido: `
// Our cellulite reduction treatment combines lymphatic drainage, circulation activators, and slimming techniques.

// Benefits:
// • Smooths “orange peel” skin
// • Helps reduce inches
// • Firms and tones the body
// • Enhances skin texture

// Ideal for a firmer, more even, and sculpted body.
//     `
//   },
//   {
//     titulo: "REVITALIZE YOUR SKIN",
//     desc: "Choose from a variety of peeling treatments that work at different depths to achieve an even complexion and bring radiance to your skin.",
//     boton: "Peel + Facial Cleansing",
//     contenido: `
// Facial treatment designed to renew the skin, remove dead cells, and enhance the radiance of your complexion.

// Benefits:
// • Reduces dark spots
// • Minimizes fine lines
// • Improves texture
// • Stimulates collagen production

// Your skin will look younger, more even, and radiant.
//     `
//   },
//   {
//     titulo: "Targeted Fat Reduction",
//     desc: "Cavitation is a non-invasive technique that is highly effective for eliminating localized fat and cellulite, with visible results from the first sessions.",
//     boton: "Cavitation Therapy",
//     contenido: `
// Cavitation uses ultrasound to break down fat in a non-invasive way.

// Benefits:
// • Reduces localized fat
// • Shapes the figure
// • Improves circulation
// • Reduces measurements

// Ideal for the abdomen, legs, arms, and flanks.
//     `
//   }
   {
    titulo: "LINDR MUSKELSPÆNDINGER",
    desc: "Kan du forestille dig et liv uden muskelspændinger? Jeg kan hjælpe med at bringe dine muskler tilbage i deres naturlige balance og lindre den spænding, de bærer.",
    boton: "Dybdegående Vævsmassage",
    contenido: `
Dybdegående vævsmassager er designet til at frigøre ophobet muskelspænding og forbedre blodcirkulationen.

Fordele:
• Smertelindring
• Dyb afslapning
• Bedre kropsholdning
• Øget fleksibilitet

Ideel for alle, der tilbringer mange timer siddende eller føler stivhed i ryg, nakke og skuldre.
    `
  },
  {
    titulo: "REDUCER CELLULITE",
    desc: "Gennem mine kropsbehandlinger hjælper jeg med at bekæmpe hudslaphed, reducere centimeter og forbedre hudens samlede udseende.",
    boton: "Se Behandlinger",
    contenido: `
Vores cellulite reduction treatment kombinerer lymfedrænage, circulation activators, og slimming techniques.

Fordele:
• Smidiggør “appelsinhud”
• Hjælper med at reducere centimeter
• Strammer og toner kroppen
• Forbedrer hudens struktur

Ideel for en fastere, mere jævn, og skulptureret krop.
    `
  },
  {
    titulo: "REVITALISER DIN HUD",
    desc: "Vælg blandt en række peelingbehandlinger, der arbejder på forskellige dybder for at opnå en jævn teint og give huden glød.",
    boton: "Peeling + Ansigtsrensning",
    contenido: `
Ansigtsbehandling designet til at forny huden, fjerne døde celler og forbedre hudens glød.

Fordele:
• Reducerer mørke pletter
• Minimerer fine linjer
• Forbedrer hudstruktur
• Stimulerer kollagenproduktionen

Din hud vil se yngre, mere jævn og strålende ud.
    `
  },
  {
    titulo: "Målrettet Fedtreduktion",
    desc: "Kavitation er en ikke-invasiv teknik, der er yderst effektiv til at fjerne lokaliseret fedt og cellulite, med synlige resultater fra de første behandlinger.",
    boton: "Kavitationsterapi",
    contenido: `
Kavitation bruger ultralyd til at nedbryde fedt på en ikke-invasiv måde.

Fordele:
• Reducerer lokaliseret fedt
• Former figuren
• Forbedrer blodcirkulationen
• Reducerer mål

Ideel til mave, ben, arme og flanker.
    `
  }
];

export default function ResultadosVisibles() {
  const [active, setActive] = useState(null);

  return (
    <div className="resultados-container" id="explica">
      <div className="titulos">
          <span>Skræddersyede Behandlinger</span>
          <h2 className="resultados-title">ØNSKER DU SYNLIGE RESULTATER?</h2>  
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
            
              <a target="_blank" href="https://just-feel-relaxed.planway.com/"><button className="agendart-btn cursor-target">BOOK NU</button></a>
              <button className="modal-close cursor-target" onClick={() => setActive(null)}>
                LUK
              </button>
              
            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
