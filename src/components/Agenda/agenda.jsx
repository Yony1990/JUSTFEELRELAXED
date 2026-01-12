import "./agenda.css";
import img1 from "../../assets/img/equipoMasaje.avif";
import img2 from "../../assets/img/eligeServi.jpg";
import img3 from "../../assets/img/agendando.avif";

export default function ComoAgendarme() {
  const steps = [
    {
      id: "01",
      img: img1,
      title: "CHOOSE YOUR PROFESSIONAL",
      icon: <i className="bi bi-person-raised-hand"></i>,
    },
    {
      id: "02",
      img: img2,
      title: "CHOOSE YOUR SERVISE",
      icon: <i className="bi bi-hand-thumbs-up"></i>,
    },
    {
      id: "03",
      img: img3,
      title: "SCHEDULE YOUR APPOINTMENT",
      icon: <i className="bi bi-journal-check"></i>,
    },
  ];

  return (
    <section className="agendarme-section">
      <p className="agendarme-subtitle">3 Simple Steps</p>
      <h2 className="agendarme-title">HOW TO BOOK?</h2>

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
        <button className="btn-agendar cursor-target">BOOK NOW</button>
      </div>
    </section>
  );
}
