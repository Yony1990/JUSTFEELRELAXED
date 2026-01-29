import "./quienesSomos.css";
import imgSpa from "../../assets/img/peaple/GastonOrig2.webp";


const QuienesSomos = () => {
  return (
    <section className="quienes-somos-section">
      <div className="quienes-somos-container">

        <div className="quienes-somos-texto">
          
          <h2>Om Os</h2>
          <span className="quienes-somos-tag">Specialister i Velvære og Personlig Pleje</span>

          <p>

            Vi er et sted dedikeret til holistisk velvære, hvor hver massage er skabt til at genforbinde krop og sind. Vores tilgang kombinerer terapeutiske og afslappende teknikker, skræddersyet til hver persons unikke behov.
          </p>

          <p>

            Vi samarbejder med dygtige fagfolk og produkter af førsteklasses kvalitet og sætter hygiejne, personlig opmærksomhed og en dybt afslappende oplevelse i centrum fra allerførste øjeblik.
          </p>

          <p>

            Vi mener, at velvære ikke er en luksus, men en nødvendighed. Vores formål er at hjælpe dig med at slippe spændinger, forbedre din livskvalitet og give dig et øjebliks ro midt i hverdagen.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="quienes-somos-img">
          <img src={imgSpa} alt="Centro de masajes" />
          {/* <div className="img-gradient-port" /> */}
        </div>

      </div>
    </section>
  );
};

export default QuienesSomos;
