import { useState } from "react";
import "./footer.css";
import logo from "../../assets/img/logoSinFondo.png";

const legalContent = {
  privacy: {
    title: "Fortrolighedspolitik",
    text: `
Vi forpligter os til at beskytte vores kunders og hjemmesidebesøgendes privatliv og personlige data i overensstemmelse med den generelle forordning om databeskyttelse (GDPR) og gældende danske lovgivning om databeskyttelse. Denne privatlivspolitik forklarer, hvordan personlige oplysninger kan indsamles, når du besøger vores hjemmeside, kontakter vores massageklinik eller booker en tid. De personoplysninger, vi kan indsamle, omfatter dit navn, kontaktoplysninger, aftaleoplysninger og andre oplysninger, du frivilligt giver via formularer, e-mail, telefon eller andre kommunikationskanaler. Alle data indsamles på en retfærdig, lovlig og gennemsigtig måde og kun til klart definerede og legitime formål i forbindelse med vores tjenester.

Personoplysninger behandles udelukkende med henblik på at administrere bookinger, levere massage- og wellness-ydelser, besvare forespørgsler, vedligeholde kunderegistre og forbedre den samlede kvalitet af vores ydelser. Vi sælger, handler eller på anden måde overfører ikke dine personoplysninger til tredjeparter, medmindre det er påkrævet ved lov, nødvendigt for at overholde juridiske forpligtelser eller afgørende for at beskytte vores juridiske rettigheder og interesser. Der implementeres passende tekniske og organisatoriske foranstaltninger for at sikre et sikkerhedsniveau, der er passende i forhold til risikoen, herunder beskyttelse mod uautoriseret adgang, utilsigtet tab, ødelæggelse eller ulovlig behandling af personoplysninger.

I henhold til GDPR har du ret til at få adgang til dine personoplysninger, anmode om berigtigelse eller sletning, begrænse eller gøre indsigelse mod behandling og anmode om dataportabilitet, hvor det er relevant. Du har også ret til at trække dit samtykke tilbage når som helst uden at det påvirker lovligheden af den behandling, der er foretaget før tilbagetrækningen. Denne privatlivspolitik kan opdateres med jævne mellemrum for at afspejle ændringer i lovkrav eller vores interne praksis. Vi opfordrer brugerne til at gennemgå denne politik regelmæssigt for at holde sig informeret om, hvordan deres personoplysninger indsamles, bruges og beskyttes.
`
  },
  terms: {
    title: "Vilkår og betingelser",
    text: `
Ved at besøge denne hjemmeside og benytte vores tjenester accepterer du at overholde og være bundet af disse vilkår og betingelser samt alle gældende danske love og regler. Vores massagetjenester leveres udelukkende til wellness- og terapeutiske formål og udgør ikke medicinsk behandling. Aftaler afhænger af tilgængelighed og kan kræve forudgående booking. Vi forbeholder os ret til at nægte service i tilfælde af upassende adfærd, forsinket ankomst eller manglende overholdelse af vores professionelle standarder. Alle oplysninger på denne hjemmeside er kun til generelle informationsformål og kan ændres når som helst uden forudgående varsel.

Kunderne er ansvarlige for at give nøjagtige og fuldstændige oplysninger, når de booker aftaler, og for at informere os om eventuelle relevante helbredsmæssige forhold inden behandlingen. Aflysninger eller ændringer af aftaler skal foretages inden for den tidsramme, der er oplyst ved booking. Vi er ikke ansvarlige for indirekte, tilfældige eller følgeskader, der opstår som følge af brugen af vores hjemmeside eller tjenester, i det omfang det er tilladt i henhold til dansk lovgivning. Disse vilkår og betingelser kan opdateres med jævne mellemrum, og fortsat brug af hjemmesiden eller tjenesterne udgør accept af sådanne ændringer.
`
  },
  cookies: {
    title: "Cookiepolitik",
    text: `
Dette websted bruger cookies og lignende teknologier til at sikre korrekt funktionalitet, forbedre brugeroplevelsen og analysere webstedets ydeevne i overensstemmelse med den generelle forordning om databeskyttelse (GDPR) og gældende danske og EU-lovgivning om databeskyttelse. Cookies er små tekstfiler, der gemmes på din enhed, når du besøger vores websted, og kan omfatte strengt nødvendige cookies, der er nødvendige for driften af webstedet, samt valgfri cookies, der bruges til analytiske eller funktionelle formål. Vi bruger ikke cookies til at indsamle følsomme personoplysninger, og alle ikke-væsentlige cookies bruges kun med dit udtrykkelige samtykke.

Du har ret til at acceptere, afvise eller administrere cookieindstillinger til enhver tid via dine browserindstillinger eller ethvert cookie-samtykkewærktøj, der findes på dette websted. Deaktivering af visse cookies kan påvirke webstedets funktionalitet eller ydeevne. Vi kan opdatere denne cookiepolitik med jævne mellemrum for at afspejle ændringer i lovkrav eller de teknologier, vi bruger. Vi opfordrer brugerne til at gennemgå denne politik regelmæssigt for at holde sig informeret om, hvordan cookies bruges, og hvordan du kan kontrollere dem.
`
  },
  legal: {
    title: "Juridisk meddelelse",
    text: `
Denne hjemmeside drives af en massage- og wellnessvirksomhed med hjemsted i Danmark og er udelukkende til orientering. Alt indhold, der offentliggøres på denne hjemmeside, herunder tekster, billeder, logoer og designelementer, tilhører virksomheden eller anvendes med behørig tilladelse og er beskyttet af gældende dansk og international lovgivning om intellektuel ejendomsret. Uautoriseret reproduktion, distribution, ændring eller brug af indhold fra denne hjemmeside uden forudgående skriftlig tilladelse er strengt forbudt.

Ejeren af denne hjemmeside garanterer ikke for nøjagtigheden, fuldstændigheden eller aktualiteten af de leverede oplysninger og forbeholder sig ret til at ændre eller fjerne indhold til enhver tid uden forudgående varsel. Virksomheden kan ikke holdes ansvarlig for skader, der opstår som følge af adgang til, brug af eller manglende evne til at bruge denne hjemmeside, i det omfang det er tilladt i henhold til dansk lovgivning. Denne juridiske meddelelse er underlagt dansk lovgivning, og eventuelle tvister i forbindelse med brugen af denne hjemmeside er underlagt de kompetente domstoles enekompetence i Danmark.
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
            <h4>Hurtige links</h4>
            <a className="cursor-target" href="#inicio">• Hjem</a>
            <a className="cursor-target" href="#quienes-somos">• Om Os</a>
            <a className="cursor-target" href="#servicios">• Ydelser</a>
            <a className="cursor-target" href="#galeria">• Galleri</a>
            <a className="cursor-target" href="#testimonios">• Anmeldelser</a>
            <a className="cursor-target" href="#faq">• Spørgsmål</a>
          </div>

          {/* BRAND */}
          <div className="footer-brand">
            <img src={logo} alt="Clinic logo" />
            <p className="claim">Fremragende wellness og terapeutisk pleje</p>
            <p className="copy">© Alle rettigheder forbeholdes</p>
            <a target="_blank" className="cursor-target" href="https://yony1990.github.io/portafolio/"><p className="developer">Developed by Yony1990</p></a>
            <p className="location">Danmark, København</p>
            {/* <p className="hours">Mon – Sat · 9:00 – 20:00</p> */}
          </div>

          {/* INFORMATION */}
          <div className="footer-info">
            <h4>Oplysninger</h4>
            <button className="cursor-target" onClick={() => openModal("privacy")}>• Fortrolighedspolitik</button>
            <button className="cursor-target" onClick={() => openModal("terms")}>• Vilkår og Betingelser</button>
            <button className="cursor-target" onClick={() => openModal("cookies")}>• Cookiepolitik</button>
            <button className="cursor-target" onClick={() => openModal("legal")}>• Juridisk Meddelelse</button>

            
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
