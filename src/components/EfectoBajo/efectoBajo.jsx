import React, { useEffect, useRef, useState } from "react";
import "./efectoBajo.css";
import img3 from "../../assets/img/fondoWhatsap.jpg";

const EfectoBajo = () => {
  const iconRef = useRef(null);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const objetivo = document.querySelector(".segunda-seccion");
    if (!objetivo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            iconRef.current?.classList.add("icon-visible");
          } else {
            const top = entry.boundingClientRect.top;
            if (top > 0) {
              iconRef.current?.classList.remove("icon-visible");
              setOpen(false); // si vuelve arriba, cerrar ventana
            } else {
              iconRef.current?.classList.add("icon-visible");
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(objetivo);
    return () => observer.disconnect();
  }, []);

  // Cerrar si se hace click fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="efectoBajo">
      <div className="Bdegradado" />

      {/* ICONO WHATSAPP */}
      <i
        ref={iconRef}
        className="bi bi-whatsapp cursor-target icono-wsp"
        onClick={() => setOpen(true)}
      />

      {/* VENTANA WHATSAPP */}
      {open && (
        <div className="wsp-modal" ref={modalRef}>
          <div className="wsp-header">
            <i className="bi bi-whatsapp wsp-logo"></i>
            <span>WhatsApp</span>
            {/* <i className="cursor-target bi bi-x close-btn " onClick={() => setOpen(false)}></i> */}
          </div>

          <div className="wsp-body">
            <div className="chat-bubble">
              <p><strong>Hola 👋🏼</strong></p>
              <p>¿En qué puedemos ayudarte?</p>
            </div>

            <a
              href="https://wa.me/598000000"
              target="_blank"
              rel="noopener noreferrer"
              className="wsp-button cursor-target"
            >
              Abrir chat <i className="bi bi-send"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EfectoBajo;
