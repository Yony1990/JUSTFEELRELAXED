import "./quienesSomos.css";
import imgSpa from "../../assets/img/imgSomos.png"; // cambia el nombre si tu imagen es otro

const QuienesSomos = () => {
  return (
    <section className="quienes-somos-section">
      <div className="quienes-somos-container">

        {/* TEXTO */}
        <div className="quienes-somos-texto">
          <h2>¿Quiénes Somos?</h2>
          <span className="quienes-somos-tag">Sobre Nosotros</span>

          <p>
            Somos un espacio dedicado al bienestar integral, donde cada masaje
            está pensado para reconectar cuerpo y mente. Nuestro enfoque combina
            técnicas terapéuticas y relajantes adaptadas a las necesidades de cada persona.
          </p>

          <p>
            Trabajamos con profesionales capacitados y productos de alta calidad,
            priorizando la higiene, la atención personalizada y una experiencia
            profundamente relajante desde el primer momento.
          </p>

          <p>
            Creemos que el bienestar no es un lujo, sino una necesidad.
            Nuestro objetivo es ayudarte a liberar tensiones, mejorar tu calidad
            de vida y regalarte un momento de pausa en medio del ritmo diario.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="quienes-somos-img">
          <img src={imgSpa} alt="Centro de masajes" />
        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
