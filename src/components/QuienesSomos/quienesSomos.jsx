import "./quienesSomos.css";
import imgSpa from "../../assets/img/imgSomos.png"; // cambia el nombre si tu imagen es otro

const QuienesSomos = () => {
  return (
    <section className="quienes-somos-section">
      <div className="quienes-somos-container">

        {/* TEXTO */}
        <div className="quienes-somos-texto">
          <h2>About Us</h2>
          <span className="quienes-somos-tag">Specialists in Well-Being and Personal Care</span>

          <p>
            {/* Somos un espacio dedicado al bienestar integral, donde cada masaje
            está pensado para reconectar cuerpo y mente. Nuestro enfoque combina
            técnicas terapéuticas y relajantes adaptadas a las necesidades de cada persona. */}
            We are a space devoted to holistic well-being, where every massage is crafted to reconnect body and mind. Our approach blends therapeutic and relaxation techniques, customized to each person’s unique needs.
          </p>

          <p>
            {/* Trabajamos con profesionales capacitados y productos de alta calidad,
            priorizando la higiene, la atención personalizada y una experiencia
            profundamente relajante desde el primer momento. */}
            We collaborate with skilled professionals and premium-quality products, placing hygiene, personalized attention, and a profoundly relaxing experience at the core from the very first moment.
          </p>

          <p>
            {/* Creemos que el bienestar no es un lujo, sino una necesidad.
            Nuestro objetivo es ayudarte a liberar tensiones, mejorar tu calidad
            de vida y regalarte un momento de pausa en medio del ritmo diario. */}
            We believe well-being is not a luxury, but a necessity. Our purpose is to help you release tension, enhance your quality of life, and gift you a moment of calm in the midst of everyday life.
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
