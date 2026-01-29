import React, { useState } from "react";
import "./galery.css";

import img0 from "../../assets/img/pre/img0.webp";
import img1 from "../../assets/img/pre/img1.webp";
import img2 from "../../assets/img/pre/img2.webp";
import img3 from "../../assets/img/pre/img3.webp";
import img5 from "../../assets/img/pre/img5.webp";
import img6 from "../../assets/img/pre/img6.webp";
import img7 from "../../assets/img/pre/img7.webp";
import img8 from "../../assets/img/pre/img8.webp";
import img9 from "../../assets/img/pre/img9.webp";
import img10 from "../../assets/img/pre/img10.webp";
import img11 from "../../assets/img/pre/img11.webp";
import img12 from "../../assets/img/pre/img12.webp";
import img13 from "../../assets/img/pre/img13.webp";
import img14 from "../../assets/img/pre/img14.webp";
import img15 from "../../assets/img/pre/img15.webp";
import img16 from "../../assets/img/pre/img16.webp";
import img17 from "../../assets/img/pre/img17.webp";

const images = [
  { src: img16, size: "medium" },
  { src: img5, size: "wide" },
  { src: img2, size: "large" },
  
  { src: img6, size: "large" },
  { src: img7, size: "medium" },
  { src: img8, size: "medium" },
  { src: img9, size: "medium" },
  { src: img10, size: "medium" },
  { src: img1, size: "medium" },
  { src: img17, size: "large" },
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
