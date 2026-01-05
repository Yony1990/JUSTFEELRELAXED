import React, { useEffect, useRef, useState } from "react";
import "./efectoBajo.css";
import Contact111 from '../Contacto/contacto';
import img3 from "../../assets/img/fondoWhatsap.jpg";

const EfectoBajo = () => {
  const iconRef = useRef(null);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

useEffect(() => {
  if (!iconRef.current) return;

  const triggerY = window.innerHeight * 0.8;

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > triggerY) {
      iconRef.current.classList.add("icon-visible");
    } else {
      iconRef.current.classList.remove("icon-visible");
      setOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // estado inicial correcto

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


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

      <i
        ref={iconRef}
        className="bi bi-whatsapp cursor-target icono-wsp2"
        onClick={() => setOpen(true)}
      />

      <div className="contactMobil111">
        <Contact111/>
      </div>

      {open && (
        <div className="wsp-modal" ref={modalRef}>
          <div className="wsp-header">
            <i className="bi bi-whatsapp wsp-logo"></i>
            <span>WhatsApp</span>
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
