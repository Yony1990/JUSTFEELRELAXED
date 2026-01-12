import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./modalContacto.css";

const ModalContacto = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    
    const templateParams = {
      from_name: formData.get("from_name"),
      reply_to: formData.get("reply_to"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);

        setTimeout(() => {
          onClose();
          setSent(false);
        }, 1500);
      })
      .catch(() => {
        setLoading(false);
        alert("Hubo un error enviando el mensaje.");
      });
  };

  return (
    <div className="modal-overlay1" onClick={handleBackgroundClick}>
      <div className="modal-box">
        {!sent ? (
          <>
            <h2>Contact</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" name="from_name" placeholder="Your Name" required />

              <input
                type="email"
                name="reply_to"
                placeholder="Email Address"
                required
              />

              <textarea
                name="message"
                placeholder="Type your message…"
                required
              ></textarea>

              <button className="cursor-target send-btn" type="submit" disabled={loading}>
                {loading ? "Sending message…" : "Send"}
              </button>
            </form>
          </>
        ) : (
          <h3 className="sent-msg">Message Sent Successfully!</h3>
        )}

        <button className="close-btn cursor-target" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ModalContacto;
