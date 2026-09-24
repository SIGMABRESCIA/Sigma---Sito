import React from "react";
import {
  CarFront,
  Handshake,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ConvenzioniSection from "./components/ConvenzioniSection";
import AutomotiveAffinitySection from "./components/AutomotiveAffinity";

type View =
  | "home"
  | "professionisti"
  | "aziende"
  | "privati"
  | "automotive"
  | "reclami"
  | "whistleblowing"
  | "convenzioni-commercialisti"
  | "convenzioni-avvocati"
  | "convenzioni-tecnici";
type Detail = string | null;
type Accent = "blue" | "green" | "gold";

type DetailData = {
  label: string;
  title: string;
  text: string;
  points?: string[];
};

type CardData = {
  key: string;
  title: string;
  text: string;
};

type AccentStyle = {
  text: string;
  bg: string;
  border: string;
  gradient: string;
};

const accents: Record<Accent, AccentStyle> = {
  blue: {
    text: "text-[#243c7b]",
    bg: "bg-[#eef2ff]",
    border: "border-[#dbe7ff]",
    gradient: "from-[#243c7b] via-[#314a86] to-[#425ea6]",
  },
  green: {
    text: "text-[#0f7a43]",
    bg: "bg-[#eefaf3]",
    border: "border-[#d9efe3]",
    gradient: "from-[#0f3328] via-[#154737] to-[#1c5d48]",
  },
  gold: {
    text: "text-[#9a5b16]",
    bg: "bg-[#fff8ef]",
    border: "border-[#f7e6ce]",
    gradient: "from-[#8a4f14] via-[#9a5b16] to-[#c07a2c]",
  },
};

const professionalCategories = ["Commercialisti", "Avvocati", "Ingegneri", "Architetti"];
const privateSolutions = ["Casa", "Salute", "Infortuni", "Tutela legale"];

const professionalCards: CardData[] = [
  { key: "patrimoniale", title: "Tutela patrimoniale", text: "Protezione del patrimonio personale e professionale attraverso coperture coordinate." },
  { key: "convenzioni", title: "Convenzioni dedicate", text: "Accordi e condizioni dedicate per categorie professionali, ordini e studi associati." },
  { key: "cyber-prof", title: "Cyber Risk", text: "Coperture per studi che gestiscono dati, archivi digitali e responsabilità informatiche." },
  { key: "legale-prof", title: "Tutela legale", text: "Supporto assicurativo per controversie e spese legali collegate all’attività." },
  { key: "welfare", title: "Welfare e salute", text: "Soluzioni per protezione personale, salute e continuità economica." },
  { key: "continuita", title: "Continuità dello studio", text: "Strumenti per proteggere organizzazione, collaboratori e operatività dello studio." },
];

const businessCards: CardData[] = [
  { key: "property", title: "Property & All Risks", text: "Protezione di sedi, impianti, macchinari e patrimonio aziendale." },
  { key: "business", title: "Business Interruption", text: "Tutela della continuità operativa dopo eventi critici." },
  { key: "cyber", title: "Cyber Risk", text: "Protezione contro violazioni dati e interruzioni informatiche." },
  { key: "do", title: "D&O", text: "Tutela per amministratori e dirigenti." },
  { key: "logistica", title: "Logistica & Trasporti", text: "Coperture dedicate a flotte e supply chain." },
  { key: "legale", title: "Tutela legale", text: "Supporto nelle controversie aziendali." },
];

const privateCards: CardData[] = [
  { key: "casa", title: "Casa e patrimonio", text: "Protezione dell’abitazione, del contenuto e della responsabilità familiare." },
  { key: "salute", title: "Salute", text: "Soluzioni sanitarie per tutelare la persona e ridurre l’impatto degli imprevisti." },
  { key: "infortuni", title: "Infortuni", text: "Coperture per proteggere reddito, famiglia e continuità economica personale." },
  { key: "legale-privati", title: "Tutela legale", text: "Supporto in caso di controversie legate alla vita privata e familiare." },
];

const professionalDetails: Record<string, DetailData> = {
  patrimoniale: {
    label: "Tutela patrimoniale",
    title: "Protezione coordinata tra attività, famiglia e patrimonio.",
    text: "La tutela del patrimonio richiede una visione che consideri insieme attività professionale, responsabilità personali e situazione familiare. Un evento imprevisto può infatti produrre conseguenze economiche che vanno oltre la sola attività lavorativa. Sigma Studi Brescia analizza le diverse aree di esposizione e le coperture già presenti, con l’obiettivo di individuare eventuali sovrapposizioni o esigenze non adeguatamente tutelate. Le soluzioni vengono valutate in funzione delle caratteristiche del professionista e delle condizioni offerte dalle diverse compagnie.",
    points: ["Patrimonio personale", "Continuità economica", "Coperture coordinate"],
  },

  convenzioni: {
    label: "Convenzioni dedicate",
    title: "Condizioni dedicate per categorie professionali e ordini.",
    text: "Le esigenze assicurative possono cambiare sensibilmente in base alla professione esercitata, alle responsabilità assunte e alle caratteristiche dello studio. Per alcune categorie sono inoltre disponibili convenzioni e soluzioni sviluppate in relazione a specifici profili professionali. Sigma Studi Brescia valuta le opportunità disponibili presso le diverse compagnie, confrontandone condizioni, garanzie, limiti ed eventuali esclusioni. L’obiettivo è individuare una soluzione coerente con l’attività effettivamente svolta, senza fermarsi alla sola appartenenza a una categoria.",
    points: ["Ordini professionali", "Categorie specialistiche", "Analisi delle condizioni"],
  },

  "cyber-prof": {
    label: "Cyber Risk",
    title: "Protezione per studi che lavorano con dati e sistemi digitali.",
    text: "Dati dei clienti, documenti riservati, posta elettronica e strumenti informatici sono ormai parte essenziale dell’attività di molti studi professionali. Un incidente informatico può comportare interruzioni operative, perdita o compromissione dei dati e possibili responsabilità verso terzi. L’analisi del rischio cyber parte dall’organizzazione dello studio e dal tipo di informazioni gestite. Sigma Studi Brescia confronta le soluzioni disponibili valutando garanzie, limiti, servizi di assistenza ed esclusioni previsti dalle diverse compagnie.",
    points: ["Dati sensibili", "Continuità operativa", "Responsabilità verso terzi"],
  },

  "legale-prof": {
    label: "Tutela legale",
    title: "Supporto nelle controversie collegate all’attività.",
    text: "Una controversia professionale può comportare costi legali e necessità di assistenza anche quando il professionista ritiene di avere operato correttamente. Per questo la tutela legale può rappresentare un elemento complementare alla protezione della responsabilità professionale. Sigma Studi Brescia valuta l’ambito delle coperture disponibili e la loro coerenza con l’attività esercitata, considerando le condizioni e i limiti previsti dalle diverse soluzioni assicurative.",
    points: ["Spese legali", "Controversie professionali", "Assistenza specialistica"],
  },

  welfare: {
    label: "Welfare e salute",
    title: "Soluzioni per la protezione personale del professionista.",
    text: "La continuità di uno studio dipende anche dalla persona che ne sostiene l’attività. Malattia, infortunio o altri eventi legati alla salute possono avere conseguenze personali e incidere sulla capacità di proseguire regolarmente il lavoro. Per questo la protezione può essere costruita considerando insieme esigenze sanitarie, tutela della persona e conseguenze economiche di un’eventuale interruzione dell’attività. Le diverse possibilità vengono valutate in funzione delle necessità individuali e delle condizioni offerte dalle compagnie.",
    points: ["Salute", "Infortuni", "Continuità economica"],
  },

  continuita: {
    label: "Continuità dello studio",
    title: "Proteggere operatività, persone e organizzazione.",
    text: "Uno studio professionale non è composto soltanto dal professionista: locali, collaboratori, strumenti, dati e organizzazione contribuiscono ogni giorno alla sua capacità di operare. Un evento imprevisto può quindi produrre effetti su più aspetti contemporaneamente. Sigma Studi Brescia considera queste esposizioni nel loro insieme, verificando quali rischi possano compromettere maggiormente l’operatività e quali soluzioni assicurative possano contribuire alla continuità dello studio.",
    points: ["Operatività", "Collaboratori", "Strumenti e locali"],
  },
};

const businessDetails: Record<string, DetailData> = {
  "rc-azienda": {
    label: "RC Aziendale",
    title: "Molte imprese scoprono i veri limiti della propria copertura solo quando accade un danno reale.",
    text: "Una RC Aziendale efficace non dovrebbe limitarsi a coprire un rischio, ma aiutare l’impresa a proteggere continuità operativa, reputazione e stabilità economica. Analizziamo il funzionamento concreto dell’azienda: processi produttivi, rapporti con clienti e fornitori, gestione del personale, responsabilità verso terzi, utilizzo di macchinari, prodotti distribuiti e aree operative.\n\nOgni attività ha esposizioni differenti e spesso sottovalutate: un errore operativo, un danno causato da un collaboratore, una contestazione legata a un prodotto o un evento che coinvolge clienti e fornitori possono generare richieste economiche rilevanti. Per questo il nostro approccio parte dall’analisi reale dell’impresa e non da una soluzione standardizzata.",
    points: ["Responsabilità operative", "RC prodotti", "Responsabilità verso dipendenti"],
  },
  property: {
    label: "Property & All Risks",
    title: "Proteggere beni, impianti e capacità produttiva significa proteggere il valore dell’impresa.",
    text: "La copertura Property non riguarda solo l’immobile. Per un’azienda significa valutare sedi operative, macchinari, impianti, merci, attrezzature, magazzini e tempi necessari per tornare operativi dopo un evento. Incendio, eventi atmosferici, danni accidentali o guasti possono generare impatti importanti anche quando il danno materiale sembra circoscritto.",
    points: ["Mappatura beni e valori", "Analisi scenari di danno", "Coerenza tra coperture e attività"],
  },
  business: {
    label: "Business Interruption",
    title: "Il vero costo di un danno spesso non è il danno, ma il tempo in cui l’azienda resta ferma.",
    text: "Un evento critico può interrompere produzione, vendite, consegne o servizi anche per periodi prolungati. Il danno economico non dipende soltanto dal valore dei beni coinvolti, ma anche dal tempo necessario per riprendere l’attività e dalla capacità dell’impresa di sostenere costi e impegni durante il fermo. La Business Interruption consente di valutare margini, costi fissi, tempi di ripristino e dipendenze critiche da fornitori, clienti o linee produttive. Sigma Studi Brescia analizza questi elementi insieme alle coperture Property, con l’obiettivo di costruire una protezione coerente con la reale capacità dell’azienda di affrontare un’interruzione dell’attività.",
    points: ["Margine operativo", "Tempi di ripristino", "Dipendenze critiche"],
  },
  cyber: {
    label: "Cyber Risk",
    title: "La continuità digitale oggi è parte integrante della continuità aziendale.",
    text: "La dipendenza da dati, sistemi informatici e servizi digitali espone oggi le imprese a rischi che possono incidere direttamente sulla continuità operativa. Attacchi ransomware, violazioni di dati, indisponibilità dei sistemi o errori umani possono generare costi di ripristino, interruzioni dell’attività e responsabilità verso clienti e terzi. La copertura Cyber deve quindi essere valutata rispetto al modo in cui l’azienda opera realmente, ai dati trattati e alle proprie dipendenze tecnologiche. Sigma Studi Brescia analizza questi elementi e confronta le condizioni offerte dalle diverse compagnie per individuare una protezione coerente con il profilo di rischio dell’impresa.",
  points: ["Violazione dati", "Blocco sistemi", "Responsabilità verso terzi"],
  },
  do: {
    label: "D&O",
    title: "Chi prende decisioni per l’impresa ha bisogno di una tutela coerente con il proprio ruolo.",
    text: "Amministratori, sindaci, dirigenti e altre figure con responsabilità decisionali possono essere chiamati a rispondere personalmente per atti, omissioni o contestazioni connesse all’esercizio del proprio ruolo. Le richieste possono provenire dalla società, dai soci, dai creditori, dai dipendenti o da altri soggetti e comportare conseguenze economiche e spese di difesa. Una copertura D&O deve essere valutata considerando struttura societaria, deleghe, ruoli e processi decisionali dell’impresa. Sigma Studi Brescia analizza questi elementi e le condizioni proposte dalle diverse compagnie per individuare una tutela coerente con le responsabilità effettivamente assunte dal management.",
    points: ["Governance", "Responsabilità gestionali", "Tutela del management"],
  },
  logistica: {
    label: "Logistica & Trasporti",
    title: "Merci, flotte e supply chain richiedono una protezione coordinata lungo tutto il percorso.",
   text: "Le aziende che movimentano merci, gestiscono consegne, utilizzano flotte o dipendono da fornitori logistici sono esposte a rischi che possono coinvolgere più fasi della propria attività. Trasporto, deposito, valore delle merci, responsabilità contrattuali, caratteristiche della flotta e dipendenza dalla supply chain possono incidere in modo diverso sulla continuità operativa. Per questo è importante valutare non soltanto il singolo rischio, ma il percorso complessivo delle merci e le responsabilità dei diversi soggetti coinvolti. Sigma Studi Brescia analizza queste esposizioni e confronta le soluzioni disponibili per costruire una protezione coerente con l’organizzazione e l’operatività dell’impresa.",
  points: ["Merci trasportate", "Flotte aziendali", "Supply chain"],
  },
  legale: {
    label: "Tutela legale",
    title: "Una controversia può sottrarre tempo, risorse e attenzione alla gestione dell’impresa.",
    text: "Contratti, rapporti con fornitori e clienti, gestione dei dipendenti, immobili e responsabilità operative possono generare controversie che richiedono tempo, competenze e risorse economiche. Una tutela legale adeguata può supportare l’impresa nelle spese di assistenza e difesa connesse alle situazioni previste dalla polizza. La copertura deve però essere valutata considerando ambiti di operatività, esclusioni, limiti e condizioni, che possono differire tra le diverse compagnie. Sigma Studi Brescia analizza questi elementi per individuare una soluzione coerente con le principali aree di esposizione dell’azienda.",
    points: ["Spese legali", "Controversie contrattuali", "Supporto specialistico"],
  },
};

const privateDetails: Record<string, DetailData> = {
  casa: {
    label: "Casa e patrimonio",
    title: "Proteggere la casa significa proteggere uno spazio di vita e un valore patrimoniale.",
   text: "La protezione della casa non riguarda soltanto l’edificio, ma anche ciò che contiene e le responsabilità che possono derivare dalla vita quotidiana. Incendio, danni da acqua, eventi atmosferici, furto o danni involontariamente causati a terzi possono avere conseguenze economiche molto diverse. Per questo è importante valutare caratteristiche dell’abitazione, valore dei beni, composizione del nucleo familiare e coperture già presenti. Sigma Studi Brescia confronta garanzie, limiti, franchigie ed esclusioni delle diverse compagnie per individuare una soluzione coerente con le reali esigenze della famiglia.",
    points: ["Abitazione", "Contenuto", "Responsabilità familiare"],
  },
  salute: {
    label: "Salute",
    title: "Una protezione sanitaria aiuta a gestire gli imprevisti con maggiore serenità.",
    text: "La tutela della salute può aiutare la persona e la famiglia ad affrontare con maggiore serenità le conseguenze organizzative ed economiche legate a malattie, interventi o necessità di cure. Le soluzioni disponibili possono prevedere prestazioni, rimborsi, accesso a strutture sanitarie e servizi di assistenza differenti a seconda della compagnia e della formula scelta. Sigma Studi Brescia analizza le esigenze personali e familiari e confronta garanzie, limiti, franchigie, eventuali periodi di carenza ed esclusioni, con l’obiettivo di individuare una copertura coerente con le necessità del cliente.",
    points: ["Prevenzione", "Cure", "Assistenza"],
  },
  infortuni: {
    label: "Infortuni",
    title: "Tutela della persona e della continuità economica familiare.",
   text: "Un infortunio può avere conseguenze che vanno oltre il momento dell’evento, incidendo sulla capacità di lavorare, sulle attività quotidiane e sull’equilibrio economico della famiglia. La protezione deve essere valutata considerando professione, abitudini, attività sportive, mobilità e possibili effetti di un’invalidità temporanea o permanente. Capitali assicurati, franchigie, indennizzi ed esclusioni possono variare sensibilmente tra le diverse soluzioni. Sigma Studi Brescia analizza questi elementi e confronta le condizioni disponibili per individuare una copertura coerente con le esigenze della persona e del nucleo familiare.",
    points: ["Persona", "Reddito", "Famiglia"],
  },
  "legale-privati": {
    label: "Tutela legale",
    title: "Supporto nelle controversie della vita privata.",
    text: "Le controversie della vita privata possono nascere da situazioni molto diverse: rapporti legati alla casa, acquisti e servizi, mobilità, rapporti familiari o richieste di risarcimento. Affrontarle può comportare spese legali, necessità di assistenza specialistica e tempi difficili da prevedere. La tutela legale deve quindi essere valutata considerando gli ambiti effettivamente coperti, i limiti, le esclusioni e le condizioni previste dalle diverse compagnie. Sigma Studi Brescia confronta le soluzioni disponibili per individuare una protezione coerente con le esigenze della persona e della famiglia.",
    points: ["Casa", "Famiglia", "Mobilità"],
  },
};

export default function SigmaWebsiteMockup() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
const [activeView, setActiveView] = React.useState<View>(() => {
  const hash = window.location.hash;

  if (hash === "#professionisti") return "professionisti";
  if (hash === "#aziende") return "aziende";
  if (hash === "#privati") return "privati";

  return "home";
});
  const [activeProfessionalDetail, setActiveProfessionalDetail] = React.useState<Detail>(null);
  const [activeBusinessDetail, setActiveBusinessDetail] = React.useState<Detail>(null);
  const [activePrivateDetail, setActivePrivateDetail] = React.useState<Detail>(null);

  React.useEffect(() => {
    setActiveProfessionalDetail(null);
    setActiveBusinessDetail(null);
    setActivePrivateDetail(null);
  }, [activeView]);

  const goTo = (view: View) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    if (view.startsWith("convenzioni-")) {
  window.setTimeout(() => {
    document.getElementById("main-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 120);
  return;
}

    if (view === "home") {
      window.history.replaceState(null, "", window.location.pathname);
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 120);
      return;
    }

    const targetId = view === "reclami" || view === "whistleblowing" ? view : `view-${view}`;
    window.history.replaceState(null, "", `${window.location.pathname}#${view}`);
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const goToSection = (sectionId: string) => {
    setActiveView("home");
    setMobileMenuOpen(false);
    window.history.replaceState(null, "", `${window.location.pathname}#${sectionId}`);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f7] text-slate-900">
      <MotionStyles />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} goTo={goTo} goToSection={goToSection} />
      {activeView === "home" && <Hero />}
     <main id="main-content" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        {activeView === "home" && <HomeView goTo={goTo} />}
        {activeView === "professionisti" && <ProfessionistiView activeDetail={activeProfessionalDetail} setActiveDetail={setActiveProfessionalDetail} goHome={() => goTo("home")} />}
        {activeView === "aziende" && <AziendeView activeDetail={activeBusinessDetail} setActiveDetail={setActiveBusinessDetail} goHome={() => goTo("home")} />}
        {activeView === "privati" && <PrivatiView activeDetail={activePrivateDetail} setActiveDetail={setActivePrivateDetail} goHome={() => goTo("home")} />}
          {activeView === "automotive" && <AutomotiveView goHome={() => goTo("home")} />}
        {activeView === "reclami" && <ReclamiSection />}
        {activeView === "whistleblowing" && <WhistleblowingSection />}
{activeView === "convenzioni-commercialisti" && (
  <section className="rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-sm sigma-reveal">
    
    <div className="border-b border-slate-200 bg-[#f8fafc] px-10 lg:px-14 py-12">
      <button
       onClick={() => goToSection("convenzioni")}
        className="text-[#008f4c] text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
      >
        ← Torna alle convenzioni
      </button>

      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-[#e9f7f0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#008f4c] mb-6">
          Convenzione dedicata
        </div>

        <h1 className="text-5xl lg:text-7xl font-black tracking-[-0.06em] leading-[0.95] text-[#0b132d] mb-8">
          Convenzione per la tutela del rischio professionale.
        </h1>

        <div className="w-20 h-[3px] bg-[#008f4c] mb-8 rounded-full" />

        <p className="text-slate-600 text-xl leading-relaxed max-w-3xl">
          Soluzioni assicurative dedicate agli iscritti all’Ordine dei Dottori Commercialisti ed Esperti Contabili di Brescia e Provincia.
        </p>
      </div>
    </div>

    <div className="px-10 lg:px-14 py-14">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-[-0.04em] text-[#0b132d] mb-8">
            Un supporto costruito intorno alla professione.
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Sigma Studi Brescia affianca commercialisti e studi professionali nella valutazione delle coperture assicurative dedicate alla responsabilità professionale.
            </p>

            <p>
              La convenzione nasce da una collaborazione consolidata con l’Ordine professionale e permette di accedere a soluzioni coerenti con le reali esigenze operative dello studio.
            </p>

            <p>
              L’attività consulenziale comprende verifica delle coperture già attive, supporto nella gestione dei sinistri e analisi delle aree di rischio professionale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Responsabilità professionale
              </div>

              <p className="text-slate-600 leading-relaxed">
                Coperture dedicate agli iscritti e agli studi associati.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Verifica coperture
              </div>

              <p className="text-slate-600 leading-relaxed">
                Analisi delle garanzie già presenti e delle eventuali aree scoperte.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Assistenza sinistri
              </div>

              <p className="text-slate-600 leading-relaxed">
                Supporto dedicato nella gestione e nel monitoraggio delle pratiche.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 sticky top-10">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.2em] font-bold mb-6">
            Documentazione
          </div>

          <div className="space-y-4">
     <a
  href="/documenti/questionario-commercialisti.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Questionario professionale
</a>

           <a
  href="/documenti/privacy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Informativa Privacy
</a>

  <a
  href="/documenti/mup.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  MUP - Modulo Unico Precontrattuale
</a>
          </div>

          <a
            href="mailto:info@sigmabrescia.it"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-[#008f4c] px-6 py-4 font-semibold text-white hover:bg-[#007642] transition-colors"
          >
            Richiedi informazioni
          </a>
        </div>
      </div>
    </div>
  </section>
)}

{activeView === "convenzioni-avvocati" && (
  <section className="rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-sm sigma-reveal">

    <div className="border-b border-slate-200 bg-[#f8fafc] px-10 lg:px-14 py-12">
      <button
        onClick={() => goToSection("convenzioni")}
        className="text-[#008f4c] text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
      >
        ← Torna alle convenzioni
      </button>

      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-[#e9f7f0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#008f4c] mb-6">
          Convenzione dedicata
        </div>

        <h1 className="text-5xl lg:text-7xl font-black tracking-[-0.06em] leading-[0.95] text-[#0b132d] mb-8">
     Convenzione per la tutela del rischio professionale degli avvocati.
        </h1>

        <div className="w-20 h-[3px] bg-[#008f4c] mb-8 rounded-full" />

        <p className="text-slate-600 text-xl leading-relaxed max-w-3xl">
          Soluzioni assicurative dedicate ad avvocati e studi legali, con particolare attenzione alla responsabilità professionale e alla continuità dell’attività.
        </p>
      </div>
    </div>

    <div className="px-10 lg:px-14 py-14">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-[-0.04em] text-[#0b132d] mb-8">
            Un riferimento dedicato per studi legali e professionisti.
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Sigma Studi Brescia affianca avvocati e studi legali nella valutazione delle coperture assicurative dedicate alla responsabilità professionale.
            </p>

            <p>
              La convenzione consente di analizzare le esigenze dello studio e verificare l’adeguatezza delle garanzie già presenti.
            </p>

            <p>
              Il supporto comprende assistenza consulenziale, verifica delle coperture e affiancamento nella gestione delle pratiche di sinistro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Responsabilità professionale
              </div>
              <p className="text-slate-600 leading-relaxed">
                Coperture dedicate all’attività legale e agli studi professionali.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Verifica garanzie
              </div>
              <p className="text-slate-600 leading-relaxed">
                Analisi delle coperture già attive e delle eventuali necessità integrative.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Gestione sinistri
              </div>
              <p className="text-slate-600 leading-relaxed">
                Supporto operativo nella denuncia e nel monitoraggio delle pratiche.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.2em] font-bold mb-6">
            Documentazione
          </div>

          <div className="space-y-4">
            <a
  href="/documenti/questionario-avvocati.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Questionario professionale
</a>

  <a
  href="/documenti/privacy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Informativa Privacy
</a>

<a
  href="/documenti/mup.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  MUP - Modulo Unico Precontrattuale
</a>
<button
  onClick={() => {
    setActiveView("home");
    setTimeout(() => {
      document
        .getElementById("contatti")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
  className="w-full rounded-2xl bg-[#008f4c] px-5 py-4 font-bold text-white transition-all duration-300 hover:bg-[#007c42]"
>
  Richiedi informazioni
</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)}
{activeView === "convenzioni-tecnici" && (
  <section className="rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-sm sigma-reveal">

    <div className="border-b border-slate-200 bg-[#f8fafc] px-10 lg:px-14 py-12">
      <button
        onClick={() => goToSection("convenzioni")}
        className="text-[#008f4c] text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
      >
        ← Torna alle convenzioni
      </button>

      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-[#e9f7f0] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#008f4c] mb-6">
          Convenzione dedicata
        </div>

        <h1 className="text-5xl lg:text-7xl font-black tracking-[-0.06em] leading-[0.95] text-[#0b132d] mb-8">
       Convenzione per la tutela del rischio professionale dei tecnici.
        </h1>

        <div className="w-20 h-[3px] bg-[#008f4c] mb-8 rounded-full" />

        <p className="text-slate-600 text-xl leading-relaxed max-w-3xl">
          Soluzioni dedicate ad architetti, ingegneri e geometri per la tutela del rischio professionale e la protezione dell'attività tecnica.
        </p>
      </div>
    </div>

    <div className="px-10 lg:px-14 py-14">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">

        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-[-0.04em] text-[#0b132d] mb-8">
            Una convenzione costruita per le professioni tecniche.
          </h2>

          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Sigma Studi Brescia affianca professionisti tecnici e studi associati nell’analisi delle responsabilità professionali e delle esposizioni connesse all’attività progettuale e consulenziale.
            </p>

            <p>
              La convenzione nasce per offrire strumenti assicurativi coerenti con le esigenze di architetti, ingegneri e geometri, con particolare attenzione alla tutela patrimoniale e professionale.
            </p>

            <p>
              L’attività comprende verifica delle coperture in essere, consulenza specialistica e assistenza nella gestione delle eventuali richieste di risarcimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Responsabilità professionale
              </div>

              <p className="text-slate-600 leading-relaxed">
                Coperture dedicate alle attività tecniche e progettuali.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Tutela patrimoniale
              </div>

              <p className="text-slate-600 leading-relaxed">
                Protezione del patrimonio personale e professionale.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
              <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
                Assistenza specialistica
              </div>

              <p className="text-slate-600 leading-relaxed">
                Supporto consulenziale e operativo nella gestione delle pratiche.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.2em] font-bold mb-6">
            Documentazione
          </div>

          <div className="space-y-4">
            <a
  href="/documenti/questionario-architetti-ingegneri-geometri.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Questionario professionale
</a>

           <a
  href="/documenti/privacy.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  Informativa Privacy
</a>

<a
  href="/documenti/mup.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors"
>
  MUP - Modulo Unico Precontrattuale
</a>
          </div>

          <a
            href="mailto:info@sigmabrescia.it"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-[#008f4c] px-6 py-4 font-semibold text-white hover:bg-[#007642] transition-colors"
          >
            Richiedi informazioni
          </a>
        </div>

      </div>
    </div>

  </section>
)}
      </main>
      <Footer goTo={goTo} goToSection={goToSection} />
    </div>
  );
}

function MotionStyles() {
  return (
    <style>{`
      @keyframes sigmaFadeUp {
        from { opacity: 0; transform: translateY(22px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .sigma-reveal { animation: sigmaFadeUp 720ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      .sigma-reveal-slow { animation: sigmaFadeUp 920ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      .sigma-delay-1 { animation-delay: 120ms; }
      .sigma-delay-2 { animation-delay: 220ms; }
      .sigma-delay-3 { animation-delay: 320ms; }
      .sigma-float-card { transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1), border-color 520ms cubic-bezier(0.22, 1, 0.36, 1); }
      .sigma-float-card:hover { transform: translateY(-8px); box-shadow: 0 32px 90px rgba(15, 23, 42, 0.14); }
      .sigma-button-motion { transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1), background-color 300ms ease; }
      .sigma-button-motion:hover { transform: translateY(-2px); box-shadow: 0 18px 42px rgba(15, 23, 42, 0.16); }
    `}</style>
  );
}

function HomeView({ goTo }: { goTo: (view: View) => void }) {
  return (
    <>
      <AboutSection />
      <section id="professionisti" className="mb-16 sigma-reveal sigma-delay-1 px-6 lg:px-16">
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f7a57] mb-4 ml-5 opacity-80">Soluzioni dedicate</div>
<h2

  className="text-3xl lg:text-[40px] font-semibold tracking-[-0.025em] leading-[1.08] mb-5"
>
  Coperture costruite intorno alle esigenze di professionisti, aziende e privati.
</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-10">
          <SolutionCard
 
  title="Soluzioni per Professionisti"
  text="Coperture dedicate a studi professionali, consulenti e professionisti iscritti ad albi."
  tags={professionalCategories}
  color="blue"
  onClick={() => goTo("professionisti")}
  image="/images/professionisti.png"
/>

<SolutionCard
 
  title="Soluzioni per Aziende"
  text="Programmi assicurativi dedicati alla continuità operativa."
  tags={["RC Aziendale", "Property", "D&O", "Cyber Risk"]}
  color="green"
  onClick={() => goTo("aziende")}
  image="/images/aziende.png"
/>

<SolutionCard

  title="Soluzioni per Privati"
  text="Soluzioni pensate per la tutela della persona e della famiglia."
  tags={privateSolutions}
  color="gold"
  onClick={() => goTo("privati")}
  image="/images/privati.png"
/>
        </div>
      </section>
      <ConvenzioniSection goTo={goTo} />
<AutomotiveAffinitySection
   onOpenAutomotive={() => goTo("automotive")}
/>
      <WhySigmaSection />
      <ContactSection />
    </>
  );
}


function ReclamiSection() {
  const requiredInfo = ["Estremi del ricorrente", "Data e luogo di presentazione del reclamo", "Motivi del reclamo", "Documentazione eventualmente utile"];

  return (
    <section id="reclami" className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-14 mb-16 shadow-sm scroll-mt-28 sigma-reveal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#eefaf3] rounded-full blur-3xl opacity-60" />
      <div className="relative z-10 max-w-6xl">
        <div className="inline-flex rounded-full bg-[#eefaf3] text-[#0f7a43] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6">Reclami</div>
        <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8">Gestione reclami e tutela degli utenti.</h2>
        <div className="max-w-5xl space-y-6 text-slate-600 leading-relaxed text-lg mb-14">
          <p>La soddisfazione dei propri clienti e collaboratori è al centro delle priorità di Sigma Studi Brescia Srl.</p>
          <p>A seguito del Provvedimento IVASS n. 46 del 3 maggio 2016 Sigma Studi Brescia Srl ha istituito una funzione e una procedura specifica di gestione degli eventuali reclami da parte degli utenti, secondo gli standard di qualità previsti per il settore assicurativo.</p>
          <p>Per reclamo si intende una dichiarazione di insoddisfazione presentata in forma scritta nei confronti di un’impresa di assicurazione o di un intermediario assicurativo relativamente a un contratto o a un servizio assicurativo.</p>
          <p>Ogni segnalazione viene considerata come un’opportunità per migliorare la qualità del servizio e rafforzare trasparenza, correttezza e imparzialità nella gestione dei rapporti con clienti e collaboratori.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="rounded-[2rem] bg-[#f8fafc] border border-slate-200 p-8">
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#0f7a43] mb-5">Come presentare un reclamo</div>
            <p className="text-slate-600 leading-relaxed mb-6">Eventuali reclami inerenti il rapporto contrattuale o la gestione dei sinistri dovranno essere inoltrati in forma scritta utilizzando uno dei seguenti canali.</p>
            <div className="space-y-5 text-slate-700">
              <div>
                <div className="font-bold mb-2">E-mail</div>
                <div className="space-y-1 text-slate-600">
                  <div>reclami@sigmabrescia.it</div>
                  <div>sigmabrescia@pec.sigmabrescia.it</div>
                </div>
              </div>
              <div>
                <div className="font-bold mb-2">Posta ordinaria o raccomandata</div>
                <div className="text-slate-600 leading-relaxed">SIGMA STUDI SRL - Ufficio Reclami<br />Via Malta 12/N<br />25124 Brescia</div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#0f172a] text-white p-8 overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#8ee0b5] mb-5">Informazioni richieste</div>
              <p className="text-white/75 leading-relaxed mb-6">I reclami dovranno contenere le seguenti informazioni oppure essere presentati tramite il modulo dedicato.</p>
              <div className="space-y-3">
                {requiredInfo.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white/85 font-medium">{item}</div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-white/45 mb-2">Tempistiche</div>
                <p className="text-white/80 leading-relaxed">La Società invierà riscontro entro 45 giorni dal ricevimento del reclamo.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10 shadow-sm mb-10">
          <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#243c7b] mb-5">Tutela dell’utente</div>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>Qualora il reclamante non dovesse ritenersi soddisfatto dell’esito del reclamo oppure in caso di mancato riscontro entro 45 giorni, potrà rivolgersi a:</p>
            <div className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-6">
              <div className="font-bold text-slate-900 mb-3">IVASS - Servizio Vigilanza Intermediari</div>
              <div className="space-y-1 text-slate-600">
                <div>Via del Quirinale 21 - 00187 Roma</div>
                <div>PEC: ivass@pec.ivass.it</div>
                <div>Fax: 06 42133206</div>
                <div>www.ivass.it</div>
              </div>
            </div>
            <p>È inoltre possibile presentare ricorso all’Arbitro Assicurativo tramite il portale dedicato oppure utilizzare gli strumenti alternativi di risoluzione delle controversie previsti dalla normativa vigente e indicati nei DIP aggiuntivi.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/documenti/procedura-reclami.pdf" target="_blank" rel="noopener noreferrer" className="sigma-button-motion inline-flex items-center justify-center rounded-full bg-[#0f3328] text-white px-8 py-4 font-bold hover:bg-[#154737] transition-all duration-300">Scarica procedura reclami</a>
          <a href="/documenti/modulo-reclamo.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 font-bold text-slate-700 hover:bg-slate-50 transition-all duration-300">Scarica modulo reclamo</a>
        </div>
      </div>
    </section>
  );
}

function WhistleblowingSection() {
  return (
    <section id="whistleblowing" className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-14 mb-16 shadow-sm scroll-mt-28 sigma-reveal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#eef2ff] rounded-full blur-3xl opacity-60" />
      <div className="relative z-10 max-w-6xl">
        <div className="inline-flex rounded-full bg-[#eef2ff] text-[#243c7b] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6">Segnalazione illeciti</div>
        <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8">Whistleblowing</h2>
        <div className="max-w-5xl space-y-6 text-slate-600 leading-relaxed text-lg mb-12">
          <p>In attuazione del D.lgs. 242023, Sigma Studi Brescia Srl mette a disposizione un canale di segnalazione degli illeciti commessi nella propria organizzazione ed ha regolamentato un processo di Whistleblowing che garantisca ai segnalanti la riservatezza della loro identità, la corretta gestione della segnalazione e la protezione da eventuali atti di ritorsione.</p>
          <p>Si rendono disponibili per il download i documenti previsti da tali disposizioni.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <a href="/documenti/whistleblowing-manuale-procedura-segnalazioni.pdf" target="_blank" rel="noopener noreferrer" className="sigma-float-card rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 hover:bg-white transition-all duration-300">
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#243c7b] mb-4">Documento</div>
            <h3 className="text-2xl font-extrabold mb-3">Whistleblowing - Manuale e procedura segnalazioni</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Scarica il manuale e la procedura relativi alla segnalazione degli illeciti.</p>
            <span className="font-bold text-[#243c7b]">Scarica PDF →</span>
          </a>
          <a href="/documenti/dlgs-24-2023.pdf" target="_blank" rel="noopener noreferrer" className="sigma-float-card rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 hover:bg-white transition-all duration-300">
            <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#243c7b] mb-4">Normativa</div>
            <h3 className="text-2xl font-extrabold mb-3">D.lgs. 242023</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Testo normativo di riferimento relativo alla protezione delle persone che segnalano violazioni del diritto dell’Unione e degli illeciti.</p>
            <span className="font-bold text-[#243c7b]">Scarica PDF →</span>
          </a>
        </div>
        <div className="rounded-[2rem] bg-[#0f172a] text-white p-8">
          <div className="text-sm uppercase tracking-[0.2em] text-[#8ee0b5] font-bold mb-4">Normativa di riferimento</div>
          <h3 className="text-2xl font-extrabold mb-3">D.lgs. 242023</h3>
          <p className="text-white/75 leading-relaxed">Disciplina della protezione delle persone che segnalano violazioni del diritto dell’Unione e disposizioni riguardanti la protezione dei segnalanti.</p>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  title,
  text,
  tags,
  color,
  onClick,
  image,
}: {
  title: string;
  text: string;
  tags: string[];
  color: Accent;
  onClick: () => void;
  image: string;
}) {
  const style = accents[color];

  return (
    <div className="group relative overflow-hidden rounded-[2.75rem] border border-white/70 bg-gradient-to-br from-white via-white to-slate-50 p-12 lg:p-14 backdrop-blur-2xl shadow-[0_20px_70px_rgba(15,23,42,0.08)] hover:shadow-[0_35px_120px_rgba(15,23,42,0.14)] hover:-translate-y-2 transition-all duration-500 flex flex-col">
      
      <div className="relative mb-8 h-48 overflow-hidden rounded-[2rem]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover md:grayscale transition-all duration-700 md:group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <h3 className="text-[2rem] leading-tight font-black mb-4">
        {title}
      </h3>

      <p className="text-[17px] text-slate-600 leading-[1.7] mb-8 min-h-[96px]">
        {text}
      </p>

      <div className="mb-10">
        <div className="text-[13px] uppercase tracking-[0.17em] text-slate-400 mb-3 font-bold">
          Ambiti principali
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[17px] font-medium text-slate-600">
          {tags.map((item, index) => (
            <span key={item}>
              {item}
              {index !== tags.length - 1 && (
                <span className="ml-3 text-slate-300">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onClick}
        className={`mt-auto inline-flex items-center gap-2 text-[17px] font-semibold ${style.text} group-hover:gap-3 transition-all duration-300`}
      >
        Approfondisci →
      </button>
    </div>
  );
}

function ProfessionistiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView heroImage="/images/professionisti2.png" accent="blue" eyebrow="Soluzioni per Professionisti" title="Protezione dedicata a studi, consulenti e professionisti." subtitle="Coperture costruite intorno all’attività professionale, alla responsabilità e alla continuità dello studio." heroTitle="RC Professionale" heroText="Coperture dedicate a studi e professionisti che desiderano tutelare attività e patrimonio." heroButton="Approfondisci RC Professionale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc" primaryDetail={<RcProfessionaleDetail />} cards={professionalCards} details={professionalDetails} gridTitle="Altre soluzioni per completare la protezione professionale." />;
}

function AziendeView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView heroImage="/images/aziende-hero.png" accent="green" eyebrow="Soluzioni per Aziende" title="Proteggere un’azienda significa proteggere continuità, persone e responsabilità." subtitle="Costruiamo programmi assicurativi coordinati per imprese che desiderano tutelare operatività, patrimonio, governance e continuità aziendale." heroTitle="RC Aziendale & Responsabilità d’impresa" heroText="Una copertura efficace deve adattarsi al reale funzionamento dell’impresa: attività operative, clienti, dipendenti, fornitori e responsabilità gestionali." heroButton="Approfondisci RC Aziendale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc-azienda" primaryDetail={<SimpleDetail data={businessDetails["rc-azienda"]} />} cards={businessCards} details={businessDetails} gridTitle="Soluzioni per una protezione aziendale più evoluta." />;
}

function PrivatiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView heroImage="/images/privati-hero.png" accent="gold" eyebrow="Soluzioni per Privati" title="Protezione per famiglia, casa e patrimonio personale." subtitle="Soluzioni pensate per tutelare la vita quotidiana con chiarezza, semplicità e coerenza." heroTitle="Casa, famiglia e responsabilità personale" heroText="Una protezione privata efficace deve essere semplice da capire ma costruita sulle esigenze reali della persona e della famiglia." heroButton="Scopri le soluzioni" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey={null} primaryDetail={null} cards={privateCards} details={privateDetails} gridTitle="Soluzioni per completare la protezione personale e familiare." />;
}
function AutomotiveView({ goHome }: { goHome: () => void }) {
const automotiveAreas = [
  {
    icon: CarFront,
    iconColor: "text-[#16875f]",
    iconBg: "bg-[#eaf5ef]",
    title: "Convenzioni CVT",
    text: "Programmi dedicati per coperture Corpi Veicoli Terrestri e garanzie accessorie, strutturati in funzione delle caratteristiche della rete e dei veicoli.",
  },
  {
    icon: Handshake,
    iconColor: "text-[#2878c8]",
    iconBg: "bg-[#eaf2fb]",
    title: "Partnership dealer",
    text: "Soluzioni pensate per concessionari, gruppi automotive e reti vendita, integrate nel percorso commerciale.",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-[#c88718]",
    iconBg: "bg-[#fbf3e4]",
    title: "Compagnie primarie",
    text: "Accesso a convenzioni e prodotti sviluppati con partner assicurativi qualificati.",
  },
  {
    icon: RefreshCw,
    iconColor: "text-[#c85b57]",
    iconBg: "bg-[#faeceb]",
    title: "Fidelizzazione cliente",
    text: "Coperture integrate nel processo di acquisto e nella relazione post vendita, per ampliare i servizi offerti al cliente.",
  },
];

  const automotiveMethod = [
    {
      step: "01",
      title: "Analisi",
      text: "Analizziamo struttura della rete, tipologia di clientela, volumi e modalità distributive.",
    },
    {
      step: "02",
      title: "Progettazione",
      text: "Costruiamo il programma assicurativo individuando coperture, garanzie e modalità operative.",
    },
    {
      step: "03",
      title: "Implementazione",
      text: "Affianchiamo il dealer nell'integrazione delle soluzioni assicurative nel processo di vendita.",
    },
    {
      step: "04",
      title: "Assistenza",
      text: "Seguiamo il programma nel tempo con supporto operativo e aggiornamento delle soluzioni.",
    },
  ];

  return (
    <section
      id="view-automotive"
      className="w-full max-w-[1380px] mx-auto bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-16 shadow-sm mb-10 sigma-reveal scroll-mt-28"
    >
      <button
        onClick={goHome}
        className="mb-10 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
      >
        ← Torna alla home
      </button>

{/* INTRODUZIONE */}
<div className="relative overflow-hidden rounded-[2rem] min-h-[390px] mb-14 border border-slate-200">
  
  {/* IMMAGINE */}
  <img
    src="/images/automotive-showroom-hero.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* SFUMATURA CHIARA PER LEGGIBILITÀ */}
<div className="absolute inset-0 bg-gradient-to-r from-white from-[0%] via-white via-[48%] to-white/20 to-[78%]" />

  {/* CONTENUTO */}
  <div className="relative z-10 px-8 py-10 lg:px-12 lg:py-12 max-w-[720px]">
    
    <div className="inline-flex rounded-full bg-[#eaf5ef] text-[#08754b] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] mb-6">
      Affinity & Automotive
    </div>

    <h1 className="text-4xl lg:text-[52px] font-semibold tracking-[-0.045em] leading-[1.02] text-[#101828]">
      Programmi assicurativi per il settore automotive.
    </h1>

    <p className="mt-6 text-[18px] lg:text-[19px] text-[#526174] leading-[1.7] max-w-[680px]">
      Affianchiamo concessionari, dealer, gruppi automotive e operatori del
      settore nella progettazione di programmi assicurativi integrati nei
      processi di vendita e post vendita. Costruiamo soluzioni dedicate,
      sviluppate in collaborazione con primarie compagnie assicurative e
      calibrate sulle esigenze della rete e del cliente finale.
    </p>
  </div>
</div>

{/* 4 AREE */}
<div className="border-y border-[#dce5df]">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
    {automotiveAreas.map((area) => {
      const Icon = area.icon;

      return (
        <div
          key={area.title}
          className="py-9 lg:px-7 first:pl-0 lg:border-l first:border-l-0 border-[#dce5df]"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${area.iconBg} ${area.iconColor} mb-5`}
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>

          <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c] mb-3">
            {area.title}
          </h2>

         <p className="text-[17px] text-[#526174] leading-[1.7]">
  {area.text}
          </p>
        </div>
      );
    })}
  </div>
</div>

      {/* METODO */}
      <div className="mt-16 lg:mt-20">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 mb-12">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#008f4c] mb-4">
              Il nostro approccio
            </div>

            <h2 className="text-3xl lg:text-[42px] font-semibold tracking-[-0.035em] leading-[1.08] text-[#101828]">
              Un programma costruito intorno alla rete.
            </h2>
          </div>

        <p className="text-[19px] text-[#526174] leading-[1.7] max-w-[680px] lg:self-end lg:pb-1">
            Non un prodotto standard, ma un progetto assicurativo sviluppato
            considerando modello distributivo, tipologia di clientela, volumi
            e obiettivi commerciali.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 rounded-[2rem] border border-slate-200 overflow-hidden bg-[#fafbf9]">
          {automotiveMethod.map((item) => (
            <div
              key={item.step}
              className="p-7 lg:p-8 lg:border-l first:border-l-0 border-slate-200"
            >
              <div className="text-sm font-bold text-[#008f4c] mb-6">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold text-[#102f2c] mb-3">
                {item.title}
              </h3>
<p className="text-[17px] text-[#526174] leading-[1.7]">
  {item.text}
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function SectionView({ heroImage, accent, eyebrow, title, subtitle, heroTitle, heroText, heroButton, activeDetail, setActiveDetail, goHome, primaryKey, primaryDetail, cards, details, gridTitle }: { heroImage: string; accent: Accent; eyebrow: string; title: string; subtitle: string; heroTitle: string; heroText: string; heroButton: string; activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void; primaryKey: string | null; primaryDetail: React.ReactNode; cards: CardData[]; details: Record<string, DetailData>; gridTitle: string }) {
  const style = accents[accent];
  const viewId = accent === "blue" ? "professionisti" : accent === "green" ? "aziende" : "privati";
  const [questionariOpen, setQuestionariOpen] = React.useState(false);

  const questionari = [
    { title: "Architetti, Ingegneri e Geometri", href: "/documenti/questionario-architetti-ingegneri-geometri.pdf" },
    { title: "Avvocati", href: "/documenti/questionario-avvocati.pdf" },
    { title: "Commercialisti", href: "/documenti/questionario-commercialisti.pdf" },
  ];
const rcQuickLinks = [
  {
    key: "rc-coperture",
    title: "Cosa copre",
    text: "La RC Professionale tutela il professionista dalle richieste di risarcimento connesse a errori, omissioni o negligenze commesse nello svolgimento dell’attività professionale, nei limiti e alle condizioni previste dalla polizza.",
  },
  {
    key: "rc-massimali",
    title: "Massimali e franchigie",
    text: "Massimale, franchigia e scoperto incidono concretamente sulla capacità della polizza di proteggere il professionista. La loro adeguatezza va valutata in relazione all’attività svolta e all’esposizione economica.",
  },
  {
    key: "rc-esclusioni",
    title: "Esclusioni e criticità",
    text: "Esclusioni, limitazioni e condizioni contrattuali possono determinare differenze importanti al momento del sinistro. Per questo è essenziale verificare non soltanto ciò che la polizza comprende, ma anche ciò che non comprende.",
  },
  {
    key: "rc-rischio",
    title: "Attività e profilo di rischio",
    text: "La copertura deve essere coerente con le attività realmente svolte, le responsabilità assunte e l’evoluzione dello studio professionale. Una corretta analisi del rischio consente di individuare eventuali aree non adeguatamente protette.",
  },
];
const aziendeQuickLinks = [
  {
    key: "aziende-copertura",
    title: "Cosa copre",
    text: "La responsabilità civile aziendale tutela l’impresa rispetto alle richieste di risarcimento derivanti da danni involontariamente causati a terzi nello svolgimento dell’attività, nei limiti e alle condizioni previste dalla polizza.",
  },
  {
    key: "aziende-dipendenti",
    title: "Responsabilità verso i dipendenti",
    text: "La copertura può comprendere la responsabilità dell’impresa per gli infortuni subiti dai prestatori di lavoro, secondo le garanzie previste e in relazione alle caratteristiche dell’attività svolta.",
  },
  {
    key: "aziende-massimali",
    title: "Massimali, limiti ed esclusioni",
    text: "Massimali, limiti di indennizzo, franchigie, scoperti, estensioni ed esclusioni possono variare in modo significativo tra le diverse soluzioni assicurative. L’analisi consente di confrontare le condizioni e valutarne la coerenza rispetto alle effettive esposizioni dell’impresa.",
  },
  {
    key: "aziende-rischio",
    title: "Attività e profilo di rischio",
    text: "Settore, processi produttivi, sedi, numero di addetti, lavorazioni svolte e rapporti con clienti e fornitori incidono sul profilo di rischio. L’analisi serve a individuare eventuali aree non adeguatamente protette.",
  },
];
const privatiQuickLinks = [
  {
    key: "privati-casa",
    title: "Casa e responsabilità",
    text: "Le soluzioni dedicate alla casa possono proteggere il fabbricato, il contenuto e la responsabilità civile della vita privata, secondo le garanzie e le condizioni previste dalla polizza.",
  },
  {
    key: "privati-persone",
    title: "Famiglia e persone",
    text: "La protezione può essere costruita considerando le esigenze della persona e del nucleo familiare, valutando gli eventi che potrebbero incidere sulla stabilità economica e sulla vita quotidiana.",
  },
  {
    key: "privati-limiti",
    title: "Limiti, franchigie e scoperti",
    text: "Massimali, limiti di indennizzo, franchigie, scoperti ed esclusioni possono variare tra le diverse soluzioni assicurative. Il confronto delle condizioni permette di valutarne concretamente la portata.",
  },
  {
    key: "privati-esigenze",
    title: "Analisi delle esigenze",
    text: "Patrimonio, composizione familiare, abitazione e necessità personali contribuiscono a definire le esigenze di protezione e le coperture da valutare.",
  },
];
  return (
   <section
  id={`view-${viewId}`}
  className="w-full max-w-[1380px] mx-auto bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-16 shadow-sm mb-10 sigma-reveal scroll-mt-28"
>
      <button onClick={goHome} className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">← Torna alla home</button>
      <div className="max-w-5xl mb-12">
        <div className={`inline-flex rounded-full ${style.bg} ${style.text} px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6`}>{eyebrow}</div>
       <h2 className="text-4xl lg:text-[56px] font-semibold tracking-[-0.035em] leading-[1.02] mb-8">{title}</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">{subtitle}</p>
      </div>
      <div className={`relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${style.gradient} text-white mb-12 shadow-[0_20px_80px_rgba(15,51,40,0.18)]`}>
        {/* Fotografia dedicata, visibile sul lato destro e sfumata verso il colore */}
        {/* Immagine editoriale della sezione */}
<div className="absolute inset-0 hidden lg:block pointer-events-none">
  <img
    src={heroImage}
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-right"
  />

{accent === "blue" && (
  <div className="absolute inset-0 bg-gradient-to-r from-[#304d8c] from-[0%] via-[#304d8c]/95 via-[28%] to-transparent to-[88%]" />
)}

{accent === "green" && (
  <div className="absolute inset-0 bg-gradient-to-r from-[#123f32] from-[0%] via-[#123f32]/95 via-[28%] to-transparent to-[88%]" />
)}

{accent === "gold" && (
  <div className="absolute inset-0 bg-gradient-to-r from-[#965816] from-[0%] via-[#965816]/95 via-[28%] to-transparent to-[88%]" />
)}
</div>

        <div className="relative z-10 p-10 lg:p-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="inline-flex rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6 border border-white/15">
              In primo piano
            </div>

            <h3 className="text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.95] mb-8 max-w-3xl">
              {heroTitle}
            </h3>

            <p className="text-[18px] lg:text-[20px] text-white/90 leading-[1.65] mb-8 max-w-3xl">
              {heroText}
            </p>

            {primaryKey && (
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveDetail(activeDetail === primaryKey ? null : primaryKey)}
                  className="sigma-button-motion inline-flex items-center justify-center rounded-full bg-white text-[#0f172a] px-8 py-4 font-bold hover:bg-slate-100 transition-all duration-300"
                >
                  {activeDetail === primaryKey ? "Chiudi approfondimento" : heroButton}
                </button>

                {viewId === "professionisti" && (
                  <button
                    onClick={() => setQuestionariOpen(!questionariOpen)}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-8 py-4 font-bold text-white hover:bg-white/15 transition-all duration-300"
                  >
                    Scarica questionario
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="space-y-3 max-w-[480px] ml-auto animate-[sigmaFadeUp_1000ms_cubic-bezier(0.22,1,0.36,1)_both]">
{(
  viewId === "aziende"
    ? aziendeQuickLinks
    : viewId === "privati"
    ? privatiQuickLinks
    : rcQuickLinks
).map((item) => {
  const isActive = activeDetail === item.key;

  return (
    <div
      key={item.key}
      className={`rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 ${
        isActive
          ? "bg-white/95 border-white shadow-lg"
          : accent === "blue"
          ? "bg-[#20345f]/75 border-white/20 hover:bg-[#20345f]/45"
          : accent === "green"
          ? "bg-[#123f32]/75 border-white/20 hover:bg-[#123f32]/45"
          : "bg-[#5f3718]/78 border-white/20 hover:bg-[#5f3718]/45"
      }`}
    >
      <button
        onClick={() => setActiveDetail(isActive ? null : item.key)}
        className={`group w-full text-left px-6 py-4 text-[17px] font-semibold transition-all duration-300 ${
          isActive ? "text-[#20345f]" : "text-white"
        }`}
      >
        <span className="flex items-center justify-between gap-4">
<span
  className={
    isActive
      ? accent === "blue"
        ? "text-[#243c7b]"
        : accent === "green"
        ? "text-[#0f6b46]"
        : "text-[#8a5418]"
      : "text-white"
  }
>
  {item.title}
</span>

          <span
            className={`text-[15px] transition-all duration-300 ${
              isActive ? "text-[#20345f]/70" : "text-white/70"
            }`}
          >
            {isActive ? "Chiudi ↑" : "Apri →"}
          </span>
        </span>
      </button>

      {isActive && (
        <div className="px-6 pb-5">
          <div className="h-px bg-slate-200 mb-4" />

          <p className="text-[16px] leading-[1.7] text-slate-700">
            {item.text}
          </p>
        </div>
      )}
    </div>
  );
})}
          </div>
        </div>
      </div>
      {viewId === "professionisti" && questionariOpen && (
        <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 mb-10 sigma-reveal">
          <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#243c7b] mb-4">Questionari professionisti</div>
          <h3 className="text-3xl font-black tracking-[-0.03em] mb-4">Scarica il questionario dedicato alla tua categoria.</h3>
          <p className="text-slate-600 leading-relaxed mb-6">I documenti potranno essere compilati e inviati a Sigma Studi Brescia per una valutazione più mirata della copertura professionale.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {questionari.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white border border-slate-200 p-5 font-bold text-slate-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                {item.title}
                <span className="block text-sm font-semibold text-[#243c7b] mt-3">Scarica PDF →</span>
              </a>
            ))}
          </div>
        </div>
      )}
      {primaryKey && activeDetail === primaryKey && primaryDetail}
      <DetailGrid title={gridTitle} cards={cards} active={activeDetail} setActive={setActiveDetail} activeBorder={style.border} details={details} accent={accent} />
    </section>
  );
}

function RcProfessionaleDetail() {
  return (
    <div className="mt-10 rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.08)] sigma-reveal">
      <section className="rounded-t-[2.5rem] bg-gradient-to-br from-[#1c3563] via-[#25457d] to-[#31589c] text-white p-10 lg:p-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 mb-8">
            RC Professionale
          </div>

          <h3 className="text-4xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95] mb-8 max-w-5xl">
            Una polizza può sembrare corretta.
            <br />
            Finché non arriva una contestazione.
          </h3>

          <div className="space-y-5 text-white/78 text-lg lg:text-xl leading-relaxed max-w-5xl">
            <p>
              Molti professionisti verificano il premio, il massimale o la presenza delle garanzie obbligatorie, ma raramente analizzano gli elementi che possono fare la differenza nel momento del sinistro.
            </p>

            <p>
              Definizioni contrattuali, esclusioni, attività non correttamente dichiarate o coperture non adeguate alla reale operatività dello studio possono generare criticità proprio quando la tutela dovrebbe intervenire.
            </p>

            <p>
              Sigma Studi Brescia affianca professionisti e studi associati nell’analisi del rischio professionale, verificando la coerenza tra attività svolta, responsabilità assunte e coperture assicurative esistenti.
            </p>

            <p>
              L’obiettivo non è proporre una soluzione standardizzata, ma contribuire a costruire una tutela realmente coerente con l’attività professionale svolta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
           <div className="rounded-[1.75rem] bg-white/8 border border-white/20 p-6 backdrop-blur-xl">
             <div className="text-white/40 text-4xl font-black mb-2">
  01
</div>

<div className="text-white font-bold text-xl mb-3">
  Analisi attività
</div>
              <p className="text-white/70 leading-relaxed">
                Verifica delle attività realmente svolte e delle responsabilità professionali assunte.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/8 border border-white/20 p-6 backdrop-blur-xl">
          <div className="text-white/40 text-4xl font-black mb-2">
  02
</div>

<div className="text-white font-bold text-xl mb-3">
  Verifica coperture
</div>
              <p className="text-white/70 leading-relaxed">
                Controllo delle garanzie esistenti, delle esclusioni e delle eventuali aree scoperte.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/8 border border-white/20 p-6 backdrop-blur-xl">
          <div className="text-white/40 text-4xl font-black mb-2">
  03
</div>

<div className="text-white font-bold text-xl mb-3">
  Supporto sinistri
</div>
              <p className="text-white/70 leading-relaxed">
                Supporto consulenziale dedicato e affiancamento nella gestione di eventuali sinistri.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailGrid({
  title,
  cards,
  active,
  setActive,
  activeBorder,
  details,
  accent,
}: {
  title: string;
  cards: CardData[];
  active: Detail;
  setActive: (value: Detail) => void;
  activeBorder: string;
  details: Record<string, DetailData>;
  accent: Accent;
}) {
  const selectedCard = cards.find((card) => card.key === active);
  const selectedDetail =
    active && selectedCard && details[active] ? details[active] : null;

  return (
    <>
      <div className="mt-12 mb-8">
        <div
          className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80 ${
            accent === "blue"
              ? "text-[#304d8c]"
              : accent === "green"
              ? "text-[#2f7a57]"
              : "text-[#a6631b]"
          }`}
        >
          Aree complementari
        </div>

        <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
          {title}
        </h3>
      </div>

      {/* LE CARD RESTANO SEMPRE FERME */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const isActive = active === card.key;

          return (
            <button
              key={card.key}
              onClick={() => {
  if (isActive) {
    setActive(null);
    return;
  }

  setActive(card.key);

  window.setTimeout(() => {
    document
      .getElementById(`detail-${card.key}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 200);
}}
              className={`text-left rounded-[2rem] border p-7 transition-all duration-300 ease-out ${
                isActive
                  ? `bg-white ${activeBorder} shadow-xl -translate-y-1`
                  : "bg-slate-50 border-slate-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <h4 className="text-[20px] lg:text-[22px] font-bold tracking-[-0.02em] leading-[1.2] mb-3">
                {card.title}
              </h4>

              <p className="text-[16px] lg:text-[17px] text-slate-600 leading-[1.6]">
                {card.text}
              </p>
            </button>
          );
        })}
      </div>

      {/* UN SOLO APPROFONDIMENTO, SEMPRE SOTTO TUTTA LA GRIGLIA */}
      {selectedDetail && active && (
        <div
          id={`detail-${active}`}
          className="mt-8 sigma-reveal scroll-mt-28"
        ><SimpleDetail data={selectedDetail} compact accent={accent} />
        </div>
      )}
    </>
  );
}

function SimpleDetail({
  data,
  compact = false,
  accent = "green",
}: {
  data?: DetailData;
  compact?: boolean;
  accent?: Accent;
}) {
  if (!data) return null;
  const accentText =
  accent === "blue"
    ? "text-[#304d8c]"
    : accent === "gold"
? "text-[#a6631b]"
   : "text-[#2f7a57]";

const accentDot =
  accent === "blue"
   ? "bg-[#304d8c]"
    : accent === "gold"
 ? "bg-[#a6631b]"
   : "bg-[#2f7a57]";
  return (
    <div className={`${compact ? "mt-0" : "mt-10"} rounded-[2.5rem] border border-slate-200 bg-white p-10 lg:p-14 shadow-[0_20px_80px_rgba(15,23,42,0.08)]`}>
      <div className={`text-sm uppercase tracking-[0.2em] font-bold ${accentText} mb-5`}>{data.label}</div>
      <h3 className="text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight mb-8">{data.title}</h3>
      <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-4xl whitespace-pre-line">{data.text}</p>
    {data.points && (
  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
    {data.points.map((item, index) => (
      <React.Fragment key={item}>
        {index > 0 && (
          <span className="hidden md:block h-4 w-px bg-slate-300" />
        )}
        <div className="flex items-center gap-2.5 text-[15px] font-semibold text-slate-700">
      <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} />
          <span>{item}</span>
        </div>
      </React.Fragment>
    ))}
  </div>
)}
    </div>
  );
}

function CallToAction({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] bg-[#0f172a] text-white p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Consulenza dedicata</div>
       <h4 className="text-3xl lg:text-4xl font-semibold tracking-[-0.025em] leading-[1.08] mb-4">
  {title}
</h4>
        <p className="text-slate-300 leading-relaxed text-lg">{text}</p>
      </div>
    </div>
  );
}

function WhySigmaSection() {
  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 mb-16 overflow-hidden relative shadow-sm sigma-reveal sigma-delay-2">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#eefaf3] rounded-full blur-3xl opacity-60" />
      <div className="relative z-10 max-w-6xl">
        <div className="inline-flex rounded-full bg-[#eefaf3] text-[#0f7a43] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6">Perché Sigma</div>
        <h2 className="text-4xl lg:text-[52px] font-semibold tracking-[-0.045em] leading-[1.02] mb-8 max-w-5xl">Non ci limitiamo a proporre polizze.<br />Analizziamo rischi, continuità e sostenibilità delle coperture nel tempo.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-14">Il nostro approccio parte dall’analisi concreta dell’attività, delle responsabilità e delle esposizioni reali. Costruiamo soluzioni assicurative coordinate, evitando sovrapposizioni, incoerenze e aree scoperte che spesso emergono solo nei momenti più delicati.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 mb-14 border-y border-[#dce5df]">

  <div className="py-7 lg:pr-7">
    <div className="text-3xl font-bold tracking-[-0.03em] text-[#0f7a43] mb-3">
      Free
    </div>
    <h3 className="text-[18px] font-semibold mb-2">
      Indipendenza
    </h3>
    <p className="text-[17px] text-slate-600 leading-[1.6]">
      Selezioniamo soluzioni senza vincoli verso singole compagnie.
    </p>
  </div>

  <div className="py-7 lg:px-7 lg:border-l border-[#dce5df]">
    <div className="text-3xl font-bold tracking-[-0.03em] text-[#243c7b] mb-3">
      Focus
    </div>
    <h3 className="text-[18px] font-semibold mb-2">
      Analisi prima della proposta
    </h3>
    <p className="text-[17px] text-slate-600 leading-[1.6]">
      Ascoltiamo esigenze, responsabilità ed esposizioni prima di proporre coperture.
    </p>
  </div>

  <div className="py-7 lg:px-7 lg:border-l border-[#dce5df]">
    <div className="text-3xl font-bold tracking-[-0.03em] text-[#9a5b16] mb-3">
      Tailor
    </div>
    <h3 className="text-[18px] font-semibold mb-2">
      Approccio consulenziale
    </h3>
    <p className="text-[17px] text-slate-600 leading-[1.6]">
      Ogni attività richiede valutazioni specifiche e soluzioni coerenti con il rischio.
    </p>
  </div>

  <div className="py-7 lg:pl-7 lg:border-l border-[#dce5df]">
    <div className="text-3xl font-bold tracking-[-0.03em] text-[#102f2c] mb-3">
      Care
    </div>
    <h3 className="text-[18px] font-semibold mb-2">
      Assistenza continua
    </h3>
    <p className="text-[17px] text-slate-600 leading-[1.6]">
      Affianchiamo il cliente nel tempo, anche nella gestione dei sinistri.
    </p>
  </div>

</div>
        <CallToAction title="Hai già una polizza? Possiamo aiutarti a capire se è davvero coerente con la tua attività." text="Verifichiamo struttura delle coperture, massimali, esclusioni, continuità assicurativa e possibili aree di criticità." />
      </div>
    </section>
  );
}







