import { useState } from "react";
import "./carruselLocal.css";

import imgLocal1 from '../../assets/img/pre/img0.jpg';
import imgLocal2 from '../../assets/img/local/local1.JPG';
import imgLocal3 from '../../assets/img/local/local2.JPG';
import imgLocal4 from '../../assets/img/local/local3.JPG';


const Carrusel = () => {
  const imagenes = [
    imgLocal1,
    imgLocal2,
    imgLocal3,
    imgLocal4,
  ];

  const [index, setIndex] = useState(0);
  const [animacion, setAnimacion] = useState("");

  const animar = (tipo) => {
    setAnimacion(tipo);
    setTimeout(() => setAnimacion(""), 400); // coincide con animation-duration
  };

  const siguiente = () => {
    animar("slide-left");
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    animar("slide-right");
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="carrusel-container">

      <button className="btn-carrusel left cursor-target" onClick={anterior}>❮</button>

      <div className="carrusel-wrapper">
        <div className={`slide-wrapper ${animacion}`}>
          <img src={imagenes[index]} className="carrusel-img" />
        </div>
      </div>

      <button className="btn-carrusel right cursor-target" onClick={siguiente}>❯</button>

    </div>
  );
};

export default Carrusel;
