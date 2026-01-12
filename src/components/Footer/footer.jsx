import { useState } from "react";
import "./footer.css";
import logo from "../../assets/img/logoSinFondo.png";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    text: `
We are committed to protecting the privacy and personal data of our clients and website visitors in accordance with the General Data Protection Regulation (GDPR) and applicable Danish data protection laws. This Privacy Policy explains how personal information may be collected when you visit our website, contact our massage clinic, or book an appointment. The personal data we may collect includes your name, contact details, appointment information, and any other information you voluntarily provide through forms, email, phone, or other communication channels. All data is collected fairly, lawfully, and transparently, and only for clearly defined and legitimate purposes related to our services.

Personal data is processed solely for the purposes of managing bookings, providing massage and wellness services, responding to inquiries, maintaining client records, and improving the overall quality of our services. We do not sell, trade, or otherwise transfer your personal data to third parties, unless required by law, necessary to comply with legal obligations, or essential to protect our legal rights and interests. Appropriate technical and organizational measures are implemented to ensure a level of security appropriate to the risk, including protection against unauthorized access, accidental loss, destruction, or unlawful processing of personal data.

Under the GDPR, you have the right to access your personal data, request rectification or erasure, restrict or object to processing, and request data portability where applicable. You also have the right to withdraw your consent at any time without affecting the lawfulness of processing carried out prior to withdrawal. This Privacy Policy may be updated periodically to reflect changes in legal requirements or our internal practices. We encourage users to review this policy regularly to remain informed about how their personal data is collected, used, and protected.
`
  },
  terms: {
    title: "Terms & Conditions",
    text: `
By accessing this website and using our services, you agree to comply with and be bound by these Terms & Conditions, as well as all applicable Danish laws and regulations. Our massage services are provided strictly for wellness and therapeutic purposes and do not constitute medical treatment. Appointments are subject to availability and may require prior booking. We reserve the right to refuse service in cases of inappropriate behavior, late arrival, or failure to comply with our professional standards. All information provided on this website is for general informational purposes only and may be modified at any time without prior notice.

Clients are responsible for providing accurate and complete information when booking appointments and for informing us of any relevant health conditions prior to treatment. Cancellations or changes to appointments must be made within the time frame communicated at the time of booking. We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services, to the fullest extent permitted under Danish law. These Terms & Conditions may be updated periodically, and continued use of the website or services constitutes acceptance of any such changes.
`
  },
  cookies: {
    title: "Cookie Policy",
    text: `
This website uses cookies and similar technologies to ensure proper functionality, enhance user experience, and analyze website performance in accordance with the General Data Protection Regulation (GDPR) and applicable Danish and EU data protection laws. Cookies are small text files stored on your device when you visit our website and may include strictly necessary cookies required for the operation of the site, as well as optional cookies used for analytical or functional purposes. We do not use cookies to collect sensitive personal data, and any non-essential cookies are used only with your explicit consent.

You have the right to accept, reject, or manage cookie preferences at any time through your browser settings or any cookie consent tool provided on this website. Disabling certain cookies may affect the functionality or performance of the site. We may update this Cookie Policy periodically to reflect changes in legal requirements or the technologies we use. We encourage users to review this policy regularly to stay informed about how cookies are used and how you can control them.
`
  },
  legal: {
    title: "Legal Notice",
    text: `
This website is operated by a massage and wellness business established in Denmark and is provided for informational purposes only. All content published on this website, including texts, images, logos, and design elements, is the property of the business or used with appropriate authorization and is protected by applicable Danish and international intellectual property laws. Unauthorized reproduction, distribution, modification, or use of any content from this website without prior written consent is strictly prohibited.

The owner of this website does not guarantee the accuracy, completeness, or timeliness of the information provided and reserves the right to modify or remove content at any time without prior notice. The business shall not be held liable for any damages arising from access to, use of, or inability to use this website, to the fullest extent permitted under Danish law. This Legal Notice is governed by Danish legislation, and any disputes arising in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts of Denmark.
`
  }
};

const footer = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (key) => {
    setContent(legalContent[key]);
    setOpen(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a className="cursor-target" href="#inicio">• Home</a>
            <a className="cursor-target" href="#quienes-somos">• About Us</a>
            <a className="cursor-target" href="#servicios">• Services</a>
            <a className="cursor-target" href="#galeria">• Gallery</a>
            <a className="cursor-target" href="#testimonios">• Reviews</a>
            <a className="cursor-target" href="#faq">• FAQ</a>
          </div>

          {/* BRAND */}
          <div className="footer-brand">
            <img src={logo} alt="Clinic logo" />
            <p className="claim">Excellence in wellness & therapeutic care</p>
            <p className="copy">© 2026 All rights reserved</p>
            <p className="location">Dinamarca, Copenage</p>
            <p className="hours">Mon – Sat · 9:00 – 20:00</p>
          </div>

          {/* INFORMATION */}
          <div className="footer-info">
            <h4>Information</h4>
            <button className="cursor-target" onClick={() => openModal("privacy")}>• Privacy Policy</button>
            <button className="cursor-target" onClick={() => openModal("terms")}>• Terms & Conditions</button>
            <button className="cursor-target" onClick={() => openModal("cookies")}>• Cookie Policy</button>
            <button className="cursor-target" onClick={() => openModal("legal")}>• Legal Notice</button>

            
          </div>

        </div>
      </footer>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay-polity" onClick={() => setOpen(false)}>
          <div className="modal-polity" >
            <h3>{content.title}</h3>
            <p>{content.text}</p>
            {/* <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default footer;
