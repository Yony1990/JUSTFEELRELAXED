import { useState } from "react";
import "./equipo.css";

import man from "../../assets/img/peaple/gastonFinal1.png";
import woman1 from "../../assets/img/imgMujer1.png";
import woman2 from "../../assets/img/imgMujer2.png";

const team = [
  {
    name: "Gaston",
    lastName: "Gaston Madsen",
    img: man,
    info: `
Masajista terapéutico con más de 12 años de experiencia.
Especialista en masajes descontracturantes y deportivos.
Formado en la Escuela Internacional de Terapias Manuales.
Amplia experiencia en recuperación muscular y lesiones.
    `,
  },
  {
    name: "Sofia",
    lastName: "Sofia Lindholm",
    img: woman1,
    info: `
Especialista en masajes de relajación profunda.
8 años de experiencia en bienestar integral.
Formada en aromaterapia y técnicas holísticas.
Enfoque en equilibrio cuerpo–mente.
    `,
  },
  {
    name: "Emma",
    lastName: "Emma Sørensen",
    img: woman2,
    info: `
Masajista corporal y estética.
6 años de experiencia en drenaje linfático.
Formada en estética avanzada y tratamientos reductores.
Acompañamiento personalizado.
    `,
  },
];

const EquipoHover = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="equipo-hover-section">
      <div className="container-equipo-title">
        <h4 className="equipo-title">Our Team</h4>
        <span className="spanEquipo">Wellness Professionals</span>
      </div>
      

      <div className="equipo-cards">
        {team.map((person, i) => (
          <div className="equipo-card" key={i}>
            <div className="img-wrapper">
              <img src={person.img} alt={person.name} onClick={() => setActive(person)} />
              <div className="img-gradient" />

              <button
                className="btn-vermas cursor-target"
                onClick={() => setActive(person)}
              >
                PROFILE
              </button>
            </div>

            {/* <div className="name-tag" data-index={i}>
              <p>{person.name}</p>
              
            </div> */}
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-content">
          
            <div className="modal-text">
              <h3>{active.lastName}</h3>
              <p>{active.info}</p>

              <button className="btn-agendar cursor-target">
                Agendar
              </button>
            </div>

            <div className="modal-img">
              <img src={active.img} alt={active.name} />
              <div className="img-gradient-modal" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EquipoHover;