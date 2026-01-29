import { useState } from "react";
import "./ubicacionFaq.css";
import Carrucel from "../CarrucelLOcal/carruselLocal";
import map from '../../assets/img/map2_11zon.webp';

export default function UbicacionFaq() {

  const faqs = [
    {
      question: "Er det nødvendigt at reservere på forhånd?",
      answer: "Ja, vi anbefaler, at du foretager din reservation mindst en dag i forvejen for at sikre tilgængelighed.",
    },
    {
      question: "Accepterer I kortbetalinger?",
      answer: "Ja, vi accepterer betalingskort og kreditkort samt digitale betalingsmetoder.",
    },
    {
      question: "Hvad skal jeg medbringe til min aftale?",
      answer: "Du behøver ikke medbringe noget særligt, bare behageligt tøj. Vi tager os af resten.",
    },
    {
      question: "Er det muligt at annullere en reservation?",
      answer: "Ja, du kan afbestille mindst 3 timer i forvejen uden strafgebyr.",
    },
    {
      question: "Tilbyder I graviditetsmassage?",
      answer: "Ja, vi tilbyder graviditetsmassage, der er specielt udviklet til kvinder, der er mere end 12 uger henne i graviditeten.",
    },
    {
      question: "Udføres massage af professionelle?",
      answer: "Ja, alle vores terapeuter er certificerede og erfarne.",
    },
    {
      question: "Hvor lang tid varer en session?",
      answer: "De fleste massagebehandlinger varer mellem 45 og 60 minutter, afhængigt af behandlingen.",
    },
    {
      question: "Hvad sker der, hvis jeg kommer for sent til min aftale?",
      answer: "Hvis du kommer for sent, kan sessionens varighed blive reduceret for at imødekomme de efterfølgende aftaler.",
    },
    {
      question: "Kan jeg vælge en mandlig eller kvindelig terapeut?",
      answer: "Ja, når du foretager din reservation, kan du vælge din foretrukne professionelle..",
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
        <h2 className="faq-title">Ofte Stillede Spørgsmål</h2>
        <span className="client-pregunt">Få nem adgang til de oplysninger, du har brug for</span>

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

        <h2 className="map-title">Find Os</h2>
        <span className="direcctionss">Peders Skrams Gade 11, København Danmark</span>

        <div className="container-all-map">
          <div className="map-card">
            <a target="_blank" href="https://maps.app.goo.gl/b5gLfcRBSwc5tnan8">
              <span className="cursor-target">VI ER HER</span>
            </a>
            <div className="degrade"></div>
            <img src={map} alt="" />
          </div>

          <div className="container-other">
            <div className="horario">
              <p>Åbningstider</p>
              <span>10:00 AM - 8:00 PM</span>
            </div>

            <h4>Vores Rume</h4>

            <div className="politica">
              
              <ul>
                <li><span>⦿</span> Klimakontrolleret</li>
                <li><span>⦿</span> Beroligende Musik</li>
                <li><span>⦿</span> Desinficerede Håndklæder</li>
                <li><span>⦿</span> Premium-Produkter</li>
                <li><span>⦿</span> Professionel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-local">
          <div className="info-card">
            <h4>Gæstepolitik</h4>
            <ul>
              <li><span>⦿</span> Forudbestilling Påkrævet</li>
              <li><span>⦿</span> Kom 5–10 Minutter før Tid</li>
              <li><span>⦿</span> Kun Efter Aftale</li>
              <li><span>⦿</span> Strenge Hygiejneprotokoller</li>
              <li
                className="cursor-target"
                onClick={() => setShowPolicyModal(true)}
              >
                Afbestillingspolitik
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
            <h2>Klagepolitik</h2>

            <p>
              Vores klinik er forpligtet til at levere en professionel service af høj kvalitet.
Hvis du mener, at din oplevelse ikke levede op til dine forventninger, kan du indgive en
klage via følgende kanaler: personligt i receptionen, via e-mail,
via vores kontaktformular på hjemmesiden eller via WhatsApp.
            </p>

            <p>
              Klager skal indgives inden for 72 timer efter servicetidspunktet og skal
              indeholde dit fulde navn, servicetidspunkt og -tidspunkt samt en kort beskrivelse af problemet.
            </p>

            <p>
              Alle klager behandles fortroligt, og der gives svar
inden for 5 hverdage. Afhængigt af sagen kan vi tilbyde en gentagelse af tjenesten,
en servicekredit eller andre passende korrigerende foranstaltninger.
            </p>

            <p>
              Der udstedes ikke refusion, når en tjeneste er påbegyndt eller afsluttet, medmindre
              det kræves af gældende lovgivning.
            </p>

            <p>
              Ved at booke eller modtage vores tjenester accepterer du denne klagepolitik.
            </p>

            <div className="policy-modal-actions">
              <button className="btn-cancel cursor-target">Aflys aftale</button>
              <button
                className="btn-close cursor-target"
                onClick={() => setShowPolicyModal(false)}
              >
                Luk
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
