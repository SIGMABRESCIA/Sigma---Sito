import React from "react";
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
    text: "Analizziamo le aree di esposizione personale e professionale per costruire un sistema di coperture coerente, evitando sovrapposizioni e lasciando meno aree scoperte.",
    points: ["Patrimonio personale", "Continuità economica", "Coperture coordinate"],
  },
  convenzioni: {
    label: "Convenzioni dedicate",
    title: "Condizioni dedicate per categorie professionali e ordini.",
    text: "Le convenzioni permettono di offrire soluzioni mirate, condizioni dedicate e percorsi più semplici per professionisti appartenenti a specifiche categorie.",
    points: ["Ordini professionali", "Categorie specialistiche", "Percorsi semplificati"],
  },
  "cyber-prof": {
    label: "Cyber Risk",
    title: "Protezione per studi che lavorano con dati e sistemi digitali.",
    text: "Supportiamo studi e professionisti nella valutazione dei rischi informatici legati a dati sensibili, archivi digitali, email e continuità operativa.",
    points: ["Dati sensibili", "Blocco operatività", "Responsabilità verso clienti"],
  },
  "legale-prof": {
    label: "Tutela legale",
    title: "Supporto nelle controversie collegate all’attività.",
    text: "Una tutela legale ben configurata aiuta il professionista ad affrontare spese e assistenza in caso di controversie e contestazioni.",
    points: ["Spese legali", "Controversie professionali", "Assistenza specialistica"],
  },
  welfare: {
    label: "Welfare e salute",
    title: "Soluzioni per la protezione personale del professionista.",
    text: "Integrare salute, prevenzione e protezione economica consente di tutelare la persona oltre all’attività professionale.",
    points: ["Salute", "Infortuni", "Continuità economica"],
  },
  continuita: {
    label: "Continuità dello studio",
    title: "Proteggere operatività, persone e organizzazione.",
    text: "La continuità dello studio richiede una visione ampia: locali, collaboratori, strumenti, responsabilità e capacità di proseguire l’attività dopo eventi imprevisti.",
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
    text: "Un evento critico può interrompere produzione, vendite, consegne o servizi anche per periodi prolungati. La Business Interruption serve a ragionare sull’impatto economico del fermo attività: margini, costi fissi, tempi di ripristino, dipendenza da fornitori, clienti strategici e linee produttive.",
    points: ["Margine operativo", "Tempi di ripristino", "Dipendenze critiche"],
  },
  cyber: {
    label: "Cyber Risk",
    title: "La continuità digitale oggi è parte integrante della continuità aziendale.",
    text: "Attacchi ransomware, blocchi dei sistemi, violazioni di dati, interruzioni dei servizi informatici e responsabilità verso clienti o partner possono creare danni economici e reputazionali molto rilevanti. La copertura Cyber deve essere valutata rispetto al modo in cui l’azienda lavora davvero.",
    points: ["Violazione dati", "Blocco sistemi", "Responsabilità verso terzi"],
  },
  do: {
    label: "D&O",
    title: "Chi prende decisioni per l’impresa ha bisogno di una tutela coerente con il proprio ruolo.",
    text: "Amministratori, sindaci, dirigenti e figure apicali possono essere chiamati a rispondere per decisioni gestionali, omissioni, contestazioni di soci, creditori, dipendenti o autorità. Una copertura D&O efficace deve tenere conto della struttura societaria, delle deleghe e dei processi decisionali.",
    points: ["Governance", "Responsabilità gestionali", "Tutela del management"],
  },
  logistica: {
    label: "Logistica & Trasporti",
    title: "Merci, flotte e supply chain richiedono una protezione coordinata lungo tutto il percorso.",
    text: "Le aziende che movimentano merci, gestiscono consegne, utilizzano flotte o dipendono da fornitori logistici hanno esposizioni che cambiano in base a tratte, responsabilità contrattuali, valore delle merci, modalità di trasporto e tempi di consegna.",
    points: ["Merci trasportate", "Flotte aziendali", "Supply chain"],
  },
  legale: {
    label: "Tutela legale",
    title: "Una controversia può sottrarre tempo, risorse e attenzione alla gestione dell’impresa.",
    text: "Contratti, fornitori, clienti, dipendenti, immobili, responsabilità operative e rapporti commerciali possono generare contenziosi complessi e costosi. La tutela legale aiuta l’impresa ad affrontare spese, assistenza e gestione delle controversie con maggiore controllo.",
    points: ["Spese legali", "Controversie contrattuali", "Supporto specialistico"],
  },
};

const privateDetails: Record<string, DetailData> = {
  casa: {
    label: "Casa e patrimonio",
    title: "Proteggere la casa significa proteggere uno spazio di vita e un valore patrimoniale.",
    text: "Valutiamo abitazione, contenuto, responsabilità familiare e possibili imprevisti quotidiani per costruire una protezione semplice, chiara e coerente con le esigenze reali della famiglia.",
    points: ["Abitazione", "Contenuto", "Responsabilità familiare"],
  },
  salute: {
    label: "Salute",
    title: "Una protezione sanitaria aiuta a gestire gli imprevisti con maggiore serenità.",
    text: "Le soluzioni salute possono integrare prevenzione, visite, ricoveri e percorsi di cura, riducendo l’impatto economico e organizzativo degli eventi sanitari.",
    points: ["Prevenzione", "Cure", "Assistenza"],
  },
  infortuni: {
    label: "Infortuni",
    title: "Tutela della persona e della continuità economica familiare.",
    text: "Una copertura infortuni ben costruita considera attività quotidiane, lavoro, mobilità, sport e impatti economici che un evento improvviso può generare sulla famiglia.",
    points: ["Persona", "Reddito", "Famiglia"],
  },
  "legale-privati": {
    label: "Tutela legale",
    title: "Supporto nelle controversie della vita privata.",
    text: "La tutela legale può aiutare ad affrontare controversie legate alla casa, alla famiglia, alla mobilità e ai rapporti quotidiani, con maggiore controllo sui costi e sull’assistenza necessaria.",
    points: ["Casa", "Famiglia", "Mobilità"],
  },
};

export default function SigmaWebsiteMockup() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeView, setActiveView] = React.useState<View>("home");
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
      <Hero />
      <main id="main-content" className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        {activeView === "home" && <HomeView goTo={goTo} />}
        {activeView === "professionisti" && <ProfessionistiView activeDetail={activeProfessionalDetail} setActiveDetail={setActiveProfessionalDetail} goHome={() => goTo("home")} />}
        {activeView === "aziende" && <AziendeView activeDetail={activeBusinessDetail} setActiveDetail={setActiveBusinessDetail} goHome={() => goTo("home")} />}
        {activeView === "privati" && <PrivatiView activeDetail={activePrivateDetail} setActiveDetail={setActivePrivateDetail} goHome={() => goTo("home")} />}
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
            <button className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors">
              Questionario professionale
            </button>

            <button className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors">
              Modulo privacy
            </button>

            <button className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left font-medium hover:border-[#008f4c] transition-colors">
              Documentazione precontrattuale
            </button>
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
  <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 shadow-sm sigma-reveal">
    <div className="max-w-5xl">
      <div className="inline-flex items-center rounded-full bg-[#eafaf3] text-[#008f4c] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] mb-6">
        Convenzione dedicata
      </div>

      <h1 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-[#0b132d] mb-8">
        Convenzione Avvocati
      </h1>

      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p>
          Sigma Studi Brescia sviluppa coperture assicurative dedicate ad avvocati e studi legali, con particolare attenzione ai profili di responsabilità professionale, tutela patrimoniale e continuità dell’attività.
        </p>

        <p>
          L’attività forense richiede strumenti assicurativi evoluti, capaci di rispondere sia agli obblighi normativi sia alle reali esposizioni operative del professionista.
        </p>

        <p>
          Il nostro approccio parte dall’analisi concreta dell’attività svolta e delle coperture già presenti, con supporto dedicato anche nella gestione dei sinistri.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            RC Professionale
          </div>
          <p className="text-slate-600 leading-relaxed">
            Coperture dedicate alla responsabilità professionale dell’attività legale.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            Tutela dello studio
          </div>
          <p className="text-slate-600 leading-relaxed">
            Soluzioni integrative per proteggere attività, patrimonio e continuità operativa.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            Gestione sinistri
          </div>
          <p className="text-slate-600 leading-relaxed">
            Supporto operativo e consulenziale nelle fasi successive alla sottoscrizione.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <button className="sigma-button-motion rounded-full bg-[#008f4c] text-white px-7 py-4 font-semibold">
          Richiedi informazioni
        </button>

        <button className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 hover:border-[#008f4c] hover:text-[#008f4c] transition-colors">
          Scarica documentazione
        </button>
      </div>
    </div>
  </section>
)}
{activeView === "convenzioni-tecnici" && (
  <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 shadow-sm sigma-reveal">
    <div className="max-w-5xl">
      <div className="inline-flex items-center rounded-full bg-[#eafaf3] text-[#008f4c] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] mb-6">
        Convenzione dedicata
      </div>

      <h1 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-[#0b132d] mb-8">
        Convenzione Tecnici Professionisti
      </h1>

      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p>
          Soluzioni assicurative dedicate ad architetti, ingegneri e geometri, progettate per rispondere alle responsabilità tecniche e professionali dell’attività.
        </p>

        <p>
          Sigma Studi Brescia sviluppa programmi assicurativi coordinati per studi professionali, liberi professionisti e realtà strutturate che operano nel settore tecnico.
        </p>

        <p>
          L’approccio consulenziale comprende analisi delle coperture esistenti, valutazione dei rischi operativi e assistenza continua nella gestione assicurativa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            RC Professionale
          </div>

          <p className="text-slate-600 leading-relaxed">
            Coperture dedicate alla responsabilità civile professionale tecnica.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            Cantieri e attività
          </div>

          <p className="text-slate-600 leading-relaxed">
            Soluzioni coordinate per attività professionali, cantieri e incarichi specialistici.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafc] p-6">
          <div className="text-[#008f4c] text-sm uppercase tracking-[0.18em] font-semibold mb-3">
            Supporto continuativo
          </div>

          <p className="text-slate-600 leading-relaxed">
            Assistenza consulenziale e gestione dedicata durante tutto il rapporto assicurativo.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <button className="sigma-button-motion rounded-full bg-[#008f4c] text-white px-7 py-4 font-semibold">
          Richiedi informazioni
        </button>

        <button className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-700 hover:border-[#008f4c] hover:text-[#008f4c] transition-colors">
          Scarica documentazione
        </button>
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
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-[1.05]">Coperture costruite intorno alle esigenze di professionisti, aziende e privati.</h2>
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
      <AutomotiveAffinitySection />
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

      <p className="text-slate-600 leading-relaxed mb-8 min-h-[88px]">
        {text}
      </p>

      <div className="mb-10">
  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-3 font-bold">
    Ambiti principali
  </div>

  <div className="flex flex-wrap gap-x-3 gap-y-2 text-[15px] font-medium text-slate-600">
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
        className={`mt-auto inline-flex items-center gap-2 font-semibold ${style.text} group-hover:gap-3 transition-all duration-300`}
      >
        Approfondisci →
      </button>
    </div>
  );
}

function ProfessionistiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView accent="blue" eyebrow="Soluzioni per Professionisti" title="Protezione dedicata a studi, consulenti e professionisti." subtitle="Coperture costruite intorno all’attività professionale, alla responsabilità e alla continuità dello studio." heroTitle="RC Professionale" heroText="Coperture dedicate a studi e professionisti che desiderano tutelare attività e patrimonio." heroButton="Approfondisci RC Professionale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc" primaryDetail={<RcProfessionaleDetail />} cards={professionalCards} details={professionalDetails} gridTitle="Altre soluzioni per completare la protezione professionale." />;
}

function AziendeView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView accent="green" eyebrow="Soluzioni per Aziende" title="Proteggere un’azienda significa proteggere continuità, persone e responsabilità." subtitle="Costruiamo programmi assicurativi coordinati per imprese che desiderano tutelare operatività, patrimonio, governance e continuità aziendale." heroTitle="RC Aziendale & Responsabilità d’impresa" heroText="Una copertura efficace deve adattarsi al reale funzionamento dell’impresa: attività operative, clienti, dipendenti, fornitori e responsabilità gestionali." heroButton="Approfondisci RC Aziendale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc-azienda" primaryDetail={<SimpleDetail data={businessDetails["rc-azienda"]} />} cards={businessCards} details={businessDetails} gridTitle="Soluzioni per una protezione aziendale più evoluta." />;
}

function PrivatiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return <SectionView accent="gold" eyebrow="Soluzioni per Privati" title="Protezione per famiglia, casa e patrimonio personale." subtitle="Soluzioni pensate per tutelare la vita quotidiana con chiarezza, semplicità e coerenza." heroTitle="Casa, famiglia e responsabilità personale" heroText="Una protezione privata efficace deve essere semplice da capire ma costruita sulle esigenze reali della persona e della famiglia." heroButton="Scopri le soluzioni" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey={null} primaryDetail={null} cards={privateCards} details={privateDetails} gridTitle="Soluzioni per completare la protezione personale e familiare." />;
}

function SectionView({ accent, eyebrow, title, subtitle, heroTitle, heroText, heroButton, activeDetail, setActiveDetail, goHome, primaryKey, primaryDetail, cards, details, gridTitle }: { accent: Accent; eyebrow: string; title: string; subtitle: string; heroTitle: string; heroText: string; heroButton: string; activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void; primaryKey: string | null; primaryDetail: React.ReactNode; cards: CardData[]; details: Record<string, DetailData>; gridTitle: string }) {
  const style = accents[accent];
  const viewId = accent === "blue" ? "professionisti" : accent === "green" ? "aziende" : "privati";
  const [questionariOpen, setQuestionariOpen] = React.useState(false);

  const questionari = [
    { title: "Architetti, Ingegneri e Geometri", href: "/documenti/questionario-architetti-ingegneri-geometri.pdf" },
    { title: "Avvocati", href: "/documenti/questionario-avvocati.pdf" },
    { title: "Commercialisti", href: "/documenti/questionario-commercialisti.pdf" },
  ];

  const openDetail = (key: string) => {
    setActiveDetail(activeDetail === key ? null : key);
    window.setTimeout(() => {
      document.getElementById(`detail-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 160);
  };

  return (
    <section id={`view-${viewId}`} className="bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-14 shadow-sm mb-10 sigma-reveal scroll-mt-28">
      <button onClick={goHome} className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">← Torna alla home</button>
      <div className="max-w-5xl mb-12">
        <div className={`inline-flex rounded-full ${style.bg} ${style.text} px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6`}>{eyebrow}</div>
        <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8">{title}</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl">{subtitle}</p>
      </div>
      <div className={`rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${style.gradient} text-white mb-12 shadow-[0_20px_80px_rgba(15,51,40,0.18)]`}>
        <div className="p-10 lg:p-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6 border border-white/10">In primo piano</div>
            <h3 className="text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.95] mb-8">{heroTitle}</h3>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">{heroText}</p>
            {primaryKey && (
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setActiveDetail(activeDetail === primaryKey ? null : primaryKey)} className="sigma-button-motion inline-flex items-center justify-center rounded-full bg-white text-[#0f172a] px-8 py-4 font-bold hover:bg-slate-100 transition-all duration-300">
                  {activeDetail === primaryKey ? "Chiudi approfondimento" : heroButton}
                </button>
                {viewId === "professionisti" && (
                  <button onClick={() => setQuestionariOpen(!questionariOpen)} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur px-8 py-4 font-bold text-white hover:bg-white/15 transition-all duration-300">
                    Scarica questionario
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="space-y-4">
            {cards.slice(0, 4).map((item) => (
              <button key={item.key} onClick={() => openDetail(item.key)} className="group w-full text-left rounded-2xl bg-white/10 border border-white/10 backdrop-blur px-6 py-5 font-semibold text-white transition-all duration-300 hover:translate-x-1 hover:bg-white/15 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.title}</span>
                  <span className="text-sm text-white/60 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">Apri →</span>
                </span>
              </button>
            ))}
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
      <DetailGrid title={gridTitle} cards={cards} active={activeDetail} setActive={setActiveDetail} activeBorder={style.border} details={details} />
    </section>
  );
}

function RcProfessionaleDetail() {
  return (
    <div className="mt-10 rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-[0_20px_80px_rgba(15,23,42,0.08)] sigma-reveal">
      <div className="bg-gradient-to-br from-[#243c7b] via-[#314a86] to-[#425ea6] text-white p-10 lg:p-14 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-5xl">
          <div className="inline-flex rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6 border border-white/10">RC Professionale</div>
          <h3 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8">Una polizza può sembrare corretta.<br />Finché non arriva una contestazione.</h3>
          <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-4xl mb-10">Molti professionisti scoprono limiti, esclusioni o scoperture soltanto quando devono realmente utilizzare la copertura. Il nostro lavoro parte proprio da qui: capire se la polizza protegge davvero l’attività che svolgi ogni giorno.</p>
        </div>
      </div>
      <div className="p-10 lg:p-14">
        <CallToAction title="Vuoi capire se la tua RC professionale è davvero coerente con la tua attività?" text="Possiamo aiutarti ad analizzare la copertura attuale e individuare eventuali criticità prima che si trasformino in problemi concreti." />
      </div>
    </div>
  );
}

function DetailGrid({ title, cards, active, setActive, activeBorder, details }: { title: string; cards: CardData[]; active: Detail; setActive: (value: Detail) => void; activeBorder: string; details: Record<string, DetailData> }) {
  return (
    <>
      <div className="mt-12 mb-8">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f7a57] mb-4 opacity-80">Aree complementari</div>
        <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight">{title}</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <React.Fragment key={card.key}>
            <button onClick={() => setActive(active === card.key ? null : card.key)} className={`text-left rounded-[2rem] border p-7 transition-all duration-500 ease-out ${active === card.key ? `bg-white ${activeBorder} shadow-xl -translate-y-1` : "border-slate-200 bg-[#f8fafc] hover:bg-white hover:-translate-y-1 hover:shadow-xl"}`}>
              <h4 className="text-2xl font-extrabold mb-4">{card.title}</h4>
              <p className="text-slate-600 leading-relaxed">{card.text}</p>
            </button>
            {active === card.key && details[card.key] && (
              <div id={`detail-${card.key}`} className="md:col-span-2 lg:col-span-3 sigma-reveal scroll-mt-28">
                <SimpleDetail data={details[card.key]} compact />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function SimpleDetail({ data, compact = false }: { data?: DetailData; compact?: boolean }) {
  if (!data) return null;
  return (
    <div className={`${compact ? "mt-0" : "mt-10"} rounded-[2.5rem] border border-slate-200 bg-white p-10 lg:p-14 shadow-[0_20px_80px_rgba(15,23,42,0.08)]`}>
      <div className="text-sm uppercase tracking-[0.2em] font-bold text-[#0f7a43] mb-5">{data.label}</div>
      <h3 className="text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-tight mb-8">{data.title}</h3>
      <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-4xl whitespace-pre-line">{data.text}</p>
      {data.points && (
        <div className="grid md:grid-cols-3 gap-5">
          {data.points.map((item) => (
            <div key={item} className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-6 font-semibold">{item}</div>
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
        <h4 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">{title}</h4>
        <p className="text-slate-300 leading-relaxed text-lg">{text}</p>
      </div>
      <button className="sigma-button-motion inline-flex items-center justify-center rounded-full bg-white text-[#0f172a] px-8 py-4 font-bold whitespace-nowrap hover:bg-slate-100 transition-all duration-300">Richiedi una valutazione</button>
    </div>
  );
}

function WhySigmaSection() {
  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 mb-16 overflow-hidden relative shadow-sm sigma-reveal sigma-delay-2">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#eefaf3] rounded-full blur-3xl opacity-60" />
      <div className="relative z-10 max-w-6xl">
        <div className="inline-flex rounded-full bg-[#eefaf3] text-[#0f7a43] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6">Perché Sigma</div>
        <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8 max-w-5xl">Non ci limitiamo a proporre polizze.<br />Analizziamo rischi, continuità e sostenibilità delle coperture nel tempo.</h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-14">Il nostro approccio parte dall’analisi concreta dell’attività, delle responsabilità e delle esposizioni reali. Costruiamo soluzioni assicurative coordinate, evitando sovrapposizioni, incoerenze e aree scoperte che spesso emergono solo nei momenti più delicati.</p>
        <div className="grid lg:grid-cols-4 gap-6 mb-14">
<WhyCard
  value="Free"
  title="Indipendenza"
  text="Selezioniamo soluzioni senza vincoli verso singole compagnie."
  color="text-[#0f7a43]"
/>

<WhyCard
  value="Focus"
  title="Analisi prima della proposta"
  text="Ascoltiamo esigenze, responsabilità ed esposizioni prima di proporre coperture."
  color="text-[#243c7b]"
/>

<WhyCard
  value="Tailor"
  title="Approccio consulenziale"
  text="Ogni attività richiede valutazioni specifiche e soluzioni coerenti con il rischio."
  color="text-[#9a5b16]"
/>

<WhyCard
  value="Care"
  title="Assistenza continua"
  text="Affianchiamo il cliente nel tempo, anche nella gestione dei sinistri."
  color="text-slate-900"
/>   
        </div>
        <CallToAction title="Hai già una polizza? Possiamo aiutarti a capire se è davvero coerente con la tua attività." text="Verifichiamo struttura delle coperture, massimali, esclusioni, continuità assicurativa e possibili aree di criticità." />
      </div>
    </section>
  );
}

function WhyCard({ value, title, text, color }: { value: string; title: string; text: string; color: string }) {
  return (
    <div className="sigma-float-card rounded-[2rem] bg-[#f8fafc] border border-slate-200 p-8">
      <div className={`text-5xl font-black ${color} mb-4`}>{value}</div>
      <div className="text-lg font-bold mb-2">{title}</div>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}



