import React, { useState } from "react";
import "./galery.css";

// 🔹 Importás tus imágenes locales
import img1 from "../../assets/img/SpaSession-1.jpg";
import img2 from "../../assets/img/SpaSession-1.jpg";
import img3 from "../../assets/img/SpaSession-13.jpg";
import img4 from "../../assets/img/SpaSession-1.jpg";
import img5 from "../../assets/img/SpaSession-19.jpg";
import img6 from "../../assets/img/SpaSession-1.jpg";
import img7 from "../../assets/img/SpaSession-1.jpg";
import img8 from "../../assets/img/SpaSession-17.jpg";

const images = [
  { src: img1, size: "medium" },
  { src: img2, size: "large" },
  { src: img3, size: "large" },
  { src: img4, size: "medium" },
  { src: img5, size: "wide" },
  { src: img6, size: "medium" },
  { src: img7, size: "medium" },
  { src: img8, size: "large" },
];

const Galery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  return (
    <section className="gallery-section" id="galeria">

      <div className="nombGale">
          <h2>Galery</h2>
          <span>“Details That Reflect Our Essence”</span>
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
                  <span className="cursor-target">TAKE A LOOK</span>
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
