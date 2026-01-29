import "./agenda.css";
import img1 from "../../assets/img/agenda/equipoMasaje_11zon.webp";
import img2 from "../../assets/img/agenda/eligeServi_11zon.webp";
import img3 from "../../assets/img/agenda/agendando_11zon.webp";

export default function ComoAgendarme() {
  const steps = [
    {
      id: "01",
      img: img1,
      title: "VÆLG DIN PROFESSIONELLE",
      icon: <i className="bi bi-person-raised-hand"></i>,
    },
    {
      id: "02",
      img: img2,
      title: "VÆLG DIN SERVICE",
      icon: <i className="bi bi-hand-thumbs-up"></i>,
    },
    {
      id: "03",
      img: img3,
      title: "BOOK DIN AFTALE",
      icon: <i className="bi bi-journal-check"></i>,
    },
  ];

  return (
    <section className="agendarme-section">
      <p className="agendarme-subtitle">3 Enkle Trin</p>
      <h2 className="agendarme-title">HVORDAN BOOKER MAN?</h2>

      <div className="steps-wrapper">
        <div className="container-linea">
          <div className="punto-1"></div>
          <div className="linea-larga"></div>
          <div className="punto-2"></div>
        </div>
        {steps.map((step, index) => (
          <div className="step-item" key={step.id}>
            
            {/* Línea izquierda */}
            <div className={index === 0 ? "line-invisible" : "line"} />

            {/* Círculo */}
            <div className="circle-wrapper">
              <img
                src={step.img}
                alt={`Paso ${step.id}`}
                className="circle-img"
              />
              <div className="icon-img">{step.icon}</div>
              <div className="circle-number">{step.id}</div>
            </div>

            {/* Línea derecha */}
            <div
              className={
                index === steps.length - 1 ? "line-invisible" : "line"
              }
            />

            {/* Texto */}
            <div className="step-text">
              <p>{step.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-wrapper">
        <a target="_blank" href="https://just-feel-relaxed.planway.com/"><button className="btn-agendar cursor-target">BOOK NU</button></a>
      </div>
    </section>
  );
}
