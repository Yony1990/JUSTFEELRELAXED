import React, { useState } from "react";
import "./galery.css";

// 🔹 Importás tus imágenes locales
import img0 from "../../assets/img/pre/img0.jpg";
import img1 from "../../assets/img/pre/img1.jpg";
import img2 from "../../assets/img/pre/img2.jpg";
import img3 from "../../assets/img/pre/img3.jpg";
// import img4 from "../../assets/img/pre/img4.jpg";
import img5 from "../../assets/img/pre/img5.jpg";
import img6 from "../../assets/img/pre/img6.jpg";
import img7 from "../../assets/img/pre/img7.jpg";
import img8 from "../../assets/img/pre/img8.jpg";
import img9 from "../../assets/img/pre/img9.jpg";
import img10 from "../../assets/img/pre/img10.jpg";
import img11 from "../../assets/img/pre/img11.jpg";
import img12 from "../../assets/img/pre/img12.jpg";
import img13 from "../../assets/img/pre/img13.jpg";
import img14 from "../../assets/img/pre/img14.jpg";
import img15 from "../../assets/img/pre/img15.jpg";

const images = [
  { src: img1, size: "medium" },
  { src: img2, size: "large" },
  { src: img3, size: "medium" },
  { src: img5, size: "wide" },
  { src: img6, size: "large" },
  { src: img7, size: "medium" },
  { src: img8, size: "medium" },
  { src: img9, size: "medium" },
  { src: img10, size: "medium" },
  { src: img0, size: "wide" },
  { src: img11, size: "large" },
  { src: img12, size: "medium" },
  { src: img13, size: "medium" },
  { src: img14, size: "medium" },
  { src: img15, size: "medium" },
];

const Galery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  return (
    <section className="gallery-section" id="galeria">

      <div className="nombGale">
          <h2>Galleri</h2>
          <span>“Detaljer Der Reflekterer Vores Essens”</span>
      </div>


      <div className="gallery-container">
        
        <div className="portfolio">
          {images.map((img, index) => (
            <div
              key={index}
              className={`portfolio-item ${img.size}`}
              onClick={() => handleClick(img.src)}
            >
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <div className="description">
                  <span className="cursor-target">TAG ET KIG</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* 🔹 Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={handleClose}>
          <img src={selectedImage} alt="zoom" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Galery;
