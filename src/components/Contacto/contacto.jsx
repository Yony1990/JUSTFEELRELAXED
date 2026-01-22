import React, { useState, useRef, useEffect } from 'react'
import ModalContacto from "../EmailSpa/modalContacto";
import "./contacto.css";

const Contacto = () => {
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='container-contacto'>
        <div className="content-contacto" ref={menuRef}>
          
          <div 
            className="cursor-target contact-btn-header"
            onClick={() => setOpen(!open)}
          >
            <span>Kontakt</span>
            <i className="bi bi-person-lines-fill"></i>
          </div>

          <ul className={`content-redes-social ${open ? "open" : ""}`}>
            <li className='cursor-target' onClick={handleItemClick}>
              <a href="https://wa.me/+4571583738" target="_blank"><span><i className="bi bi-whatsapp"></i></span></a>
            </li>

            <li
              className='cursor-target'
              onClick={() => {
                setOpenModal(true);
                setOpen(false);
              }}
            >
              <span><i className="bi bi-envelope-at"></i></span>
            </li>

            <li className='cursor-target' onClick={handleItemClick}>
              <a target="_blank" href="https://www.instagram.com/justfeelrelaxed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><span><i className="bi bi-instagram"></i></span></a>
            </li>

            <li className='cursor-target' onClick={handleItemClick}>
              <span><i className="bi bi-facebook"></i></span>
            </li>

            <li className='cursor-target' onClick={handleItemClick}>
              <span><i className="bi bi-youtube"></i></span>
            </li>
            
          </ul>

        </div>
      </div>

      <ModalContacto isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default Contacto
