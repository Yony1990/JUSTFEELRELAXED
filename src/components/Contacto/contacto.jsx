import React, { useState, useRef, useEffect } from 'react'
import ModalContacto from "../EmailSpa/modalContacto";
import "./contacto.css";

const Contacto = () => {
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const menuRef = useRef(null)

  // Cerrar si clickea fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <>
      <div className='container-contacto'>
        <div className="content-contacto" ref={menuRef}>
          
          <div 
            className="cursor-target contact-btn-header"
            onClick={() => setOpen(!open)}
          >
            Contact
          </div>

          <ul className={`content-redes-social ${open ? "open" : ""}`}>
            <li className='cursor-target'><span><i className="bi bi-whatsapp"></i></span></li>
            <li className='cursor-target'  onClick={() => setOpenModal(true)}><span><i className="bi bi-envelope-at"></i></span></li>
            <li className='cursor-target'><span><i className="bi bi-instagram"></i></span></li>
            <li className='cursor-target'><span><i className="bi bi-youtube"></i></span></li>
          </ul>

        </div>
      </div>

      <ModalContacto isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default Contacto
