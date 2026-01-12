import { useState } from "react";
import "./ubicacionFaq.css";
import Carrucel from "../CarrucelLOcal/carruselLocal";
import map from '../../assets/img/map2.png';

export default function UbicacionFaq() {

  const faqs = [
    {
      question: "Is Advance Booking Required?",
      answer: "Yes, we suggest making your reservation at least one day in advance to ensure availability.",
    },
    {
      question: "Do You Accept Card Payments?",
      answer: "Yes, we accept debit and credit cards, as well as digital payment methods.",
    },
    {
      question: "What Do I Need to Bring to My Appointment?",
      answer: "You don’t need to bring anything special, just comfortable clothes. We take care of the rest.",
    },
    {
      question: "Is It Possible to Cancel a Booking?",
      answer: "Yes, you can cancel at least 3 hours in advance with no penalty.",
    },
    {
      question: "Do You Offer Prenatal Massages?",
      answer: "Yes, we provide prenatal massages specifically designed for women who are over 12 weeks pregnant.",
    },
    {
      question: "Are the Massages Performed by Professionals?",
      answer: "Yes, all our therapists are certified and experienced.",
    },
    {
      question: "How Long Does a Session Last?",
      answer: "The duration of most massages ranges from 45 to 60 minutes, depending on the treatment.",
    },
    {
      question: "What Happens If I’m Late for My Appointment?",
      answer: "If you arrive late, the session duration may be reduced to accommodate the following appointments.",
    },
    {
      question: "Can I Choose a Male or Female Therapist?",
      answer: "Sí, al realizar la reserva podrás seleccionar el profesional de tu preferencia.",
    },
    // {
    //   question: "Is Parking Available?",
    //   answer: "Yes, we offer free parking for spa clients.",
    // },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="ubicacionfaq-section">

      

      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <span className="client-pregunt">Easily Access the Information You Need</span>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item cursor-target" key={index}>

                <div className="item-adorno">
                  <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  >
                  <p>{item.question}</p>
                  <span className="faq-icon">
                    {openIndex === index ? "➖" : "➕"}
                  </span>
                  </div>

                  <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* ================= Map ================= */}

      <div className="map-container">

        <h2 className="map-title">Find Us</h2>
        <span className="direcctionss">Peders Skrams Gade 11, Copenhague Dinamarca</span>

        <div className="container-all-map">
          <div className="map-card">
            <a href="https://maps.app.goo.gl/b5gLfcRBSwc5tnan8">
              <span className="cursor-target">WE ARE HERE</span>
            </a>
            <div className="degrade"></div>
            <img src={map} alt="" />
          </div>

          <div className="container-other">
            <div className="horario">
              <p>Business Hours</p>
              <span>10:00 AM 8:00 PM</span>
            </div>

            <h4>Our Space</h4>

            <div className="politica">
              
              <ul>
                <li><span>⦿</span> Climate-Controlled Environment</li>
                <li><span>⦿</span> Soothing Music and Relaxing Scents</li>
                <li><span>⦿</span> Sanitized Towels</li>
                <li><span>⦿</span> Premium Products</li>
                <li><span>⦿</span> Professional Experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-local">
          <div className="info-card">
            <h4>Guest Policy</h4>
            <ul>
              <li><span>⦿</span> Advance Booking Required</li>
              <li><span>⦿</span> Arrive 5–10 Minutes Early</li>
              <li><span>⦿</span> By Appointment Only</li>
              <li><span>⦿</span> Strict Sanitation Protocols</li>
              <li
                className="cursor-target"
                onClick={() => setShowPolicyModal(true)}
              >
                Cancellation Policy
              </li>

            </ul>
          </div>

          <div className="carruc-card">
            <Carrucel />
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {showPolicyModal && (
        <div
          className="policy-modal-overlay"
          onClick={() => setShowPolicyModal(false)}
        >
          <div
            className="policy-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Complaints Policy (Summary)</h2>

            <p>
              Our clinic is committed to providing a professional and high-quality service.
              If you believe your experience did not meet expectations, you may submit a
              complaint through the following channels: in person at reception, by email,
              via our website contact form, or through WhatsApp.
            </p>

            <p>
              Complaints must be submitted within 72 hours of the service date and should
              include your full name, service date and time, and a brief description of the issue.
            </p>

            <p>
              All complaints are reviewed confidentially, and a response will be provided
              within 5 business days. Depending on the case, we may offer a service repeat,
              a service credit, or other appropriate corrective measures.
            </p>

            <p>
              Refunds are not issued once a service has started or been completed, unless
              required by applicable law.
            </p>

            <p>
              By booking or receiving our services, you agree to this Complaints Policy.
            </p>

            <div className="policy-modal-actions">
              <button className="btn-cancel cursor-target">Cancel Appointment</button>
              <button
                className="btn-close cursor-target"
                onClick={() => setShowPolicyModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
