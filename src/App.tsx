import React from "react";
import {
  Building2,
  BriefcaseBusiness,
  Home,
  ShieldCheck,
  Handshake,
  Phone,
  Mail,
  MapPin,
  UserRound,
  Menu,
  X,
} from "lucide-react";

type View = "home" | "professionisti" | "aziende" | "privati";
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

const accents: Record<Accent, { text: string; bg: string; border: string; gradient: string }> = {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveProfessionalDetail(null);
    setActiveBusinessDetail(null);
    setActivePrivateDetail(null);
  }, [activeView]);

  const goTo = (view: View) => {
    setActiveView(view);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f7f7] text-slate-900">
      <MotionStyles />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} goTo={goTo} />
      <Hero />
      <main className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        {activeView === "home" && <HomeView goTo={goTo} />}
        {activeView === "professionisti" && <ProfessionistiView activeDetail={activeProfessionalDetail} setActiveDetail={setActiveProfessionalDetail} goHome={() => goTo("home")} />}
        {activeView === "aziende" && <AziendeView activeDetail={activeBusinessDetail} setActiveDetail={setActiveBusinessDetail} goHome={() => goTo("home")} />}
        {activeView === "privati" && <PrivatiView activeDetail={activePrivateDetail} setActiveDetail={setActivePrivateDetail} goHome={() => goTo("home")} />}
      </main>
      <Footer />
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

function Header({ mobileMenuOpen, setMobileMenuOpen, goTo }: { mobileMenuOpen: boolean; setMobileMenuOpen: (value: boolean) => void; goTo: (view: View) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <img src="/logo-sigma-originale.png" alt="Sigma Studi Brescia" className="h-14 w-auto object-contain" />
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => goTo("home")} className="hover:text-[#008f4c] transition">Home</button>
          <button onClick={() => goTo("professionisti")} className="hover:text-[#243c7b] transition">Professionisti</button>
          <button onClick={() => goTo("aziende")} className="hover:text-[#0f7a43] transition">Aziende</button>
          <a href="#convenzioni" className="hover:text-[#9a5b16] transition">Convenzioni</a>
          <a href="#contatti" className="hover:text-[#008f4c] transition">Contatti</a>
          <button className="hover:text-[#008f4c] transition">Reclami</button>
        </nav>
        <button className="hidden md:flex items-center gap-2 rounded-full border border-[#008f4c] px-5 py-2 text-sm font-semibold text-[#008f4c] hover:bg-[#e8f5ef] transition">
          <UserRound size={18} /> Area riservata
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white" aria-label="Apri menu">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <button onClick={() => goTo("home")} className="block font-semibold">Home</button>
          <button onClick={() => goTo("professionisti")} className="block font-semibold">Professionisti</button>
          <button onClick={() => goTo("aziende")} className="block font-semibold">Aziende</button>
          <a href="#convenzioni" className="block font-semibold">Convenzioni</a>
          <a href="#contatti" className="block font-semibold">Contatti</a>
          <button className="block font-semibold">Reclami</button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#071f19] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-30 scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b16] via-[#071f19]/95 to-[#071f19]/45" />
      <div className="absolute -right-32 -top-32 w-[560px] h-[560px] rounded-full bg-[#00a35a]/20 blur-3xl animate-pulse" />
      <div className="absolute left-1/3 bottom-0 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute left-10 top-24 w-40 h-40 rounded-full border border-white/10 opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-40">
        <div className="max-w-5xl sigma-reveal-slow">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-[#b8f2d3] mb-10 border border-white/10 shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <ShieldCheck size={18} /> Consulenza assicurativa evoluta per aziende, professionisti e patrimoni
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.065em] leading-[0.88] mb-10 max-w-6xl text-white">
            Protezione assicurativa progettata intorno ai rischi reali.
          </h1>
          <p className="text-xl lg:text-2xl text-white/72 leading-relaxed mb-12 max-w-4xl">
            Analizziamo responsabilità, continuità operativa, patrimonio ed esposizioni concrete per costruire coperture più coerenti, sostenibili e realmente utili nel momento in cui servono.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <a href="#contatti" className="sigma-button-motion inline-flex items-center justify-center rounded-full bg-white text-[#0f3328] px-9 py-5 font-bold text-base hover:bg-slate-100 transition shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
              Richiedi una revisione assicurativa
            </a>
            <a href="#professionisti" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-9 py-5 font-bold text-white hover:bg-white/15 transition-all duration-300">
              Esplora le soluzioni
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl sigma-delay-2 sigma-reveal">
            <HeroMetric value="50+" label="Esperienza" text="Oltre cinquant’anni di affiancamento a imprese, studi professionali e famiglie." />
            <HeroMetric value="360°" label="Visione integrata" text="Analisi coordinata di responsabilità, continuità operativa e patrimonio." />
            <HeroMetric value="Tailor" label="Approccio consulenziale" text="Nessuna soluzione standardizzata: ogni copertura nasce dall’analisi reale del rischio." />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMetric({ value, label, text }: { value: string; label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all duration-500">
      <div className="text-3xl font-black mb-2 text-[#8ee0b5]">{value}</div>
      <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">{label}</div>
      <p className="text-white/70 leading-relaxed text-sm">{text}</p>
    </div>
  );
}

function HomeView({ goTo }: { goTo: (view: View) => void }) {
  return (
    <>
      <AboutSection />
      <section id="professionisti" className="mb-16 sigma-reveal sigma-delay-1">
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#2f7a57] mb-4 ml-5 opacity-80">Soluzioni dedicate</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-[1.05]">Coperture costruite intorno alle esigenze di professionisti, aziende e privati.</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <SolutionCard icon={<BriefcaseBusiness className="text-[#243c7b]" size={28} />} title="Soluzioni per Professionisti" text="Coperture dedicate a studi professionali, consulenti e professionisti iscritti ad albi." tags={professionalCategories} color="blue" onClick={() => goTo("professionisti")} />
          <SolutionCard icon={<Building2 className="text-[#0f7a43]" size={28} />} title="Soluzioni per Aziende" text="Programmi assicurativi dedicati alla continuità operativa." tags={["RC Aziendale", "Property", "D&O", "Cyber Risk"]} color="green" onClick={() => goTo("aziende")} />
          <SolutionCard icon={<Home className="text-[#9a5b16]" size={28} />} title="Soluzioni per Privati" text="Soluzioni pensate per la tutela della persona e della famiglia." tags={privateSolutions} color="gold" onClick={() => goTo("privati")} />
        </div>
      </section>
      <ConvenzioniSection />
      <WhySigmaSection />
      <ContactSection />
    </>
  );
}

function AboutSection() {
  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 shadow-sm mb-14 overflow-hidden relative sigma-reveal">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#eefaf3] rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#eef2ff] rounded-full blur-3xl opacity-40" />
      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <div className="inline-flex rounded-full bg-[#eefaf3] text-[#008f4c] px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-6">Chi siamo</div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8 max-w-3xl">Un approccio consulenziale costruito sulla continuità della relazione.</h2>
          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl">Da oltre 50 anni Sigma Studi Brescia affianca aziende, professionisti e privati nella gestione dei rischi, costruendo soluzioni assicurative coerenti con attività, patrimonio e continuità operativa.</p>
          <p className="text-slate-600 leading-relaxed text-lg mb-10 max-w-3xl">Crediamo in una consulenza chiara, continuativa e realmente personalizzata. Per questo il nostro lavoro non si limita alla proposta di una polizza: analizziamo esposizioni, responsabilità, aree di vulnerabilità e sostenibilità delle coperture nel tempo.</p>
        </div>
        <div className="bg-gradient-to-br from-[#0f3328] via-[#154737] to-[#1c5d48] rounded-[2.5rem] p-10 lg:p-12 text-white shadow-[0_20px_80px_rgba(15,51,40,0.18)] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] mb-8 border border-white/10 text-[#8ee0b5]">Il nostro metodo</div>
            <div className="space-y-8">
              <MethodItem title="Analisi" text="Studiamo rischi e necessità specifiche." />
              <MethodItem title="Progettazione" text="Costruiamo soluzioni coerenti con attività e patrimonio." />
              <MethodItem title="Affiancamento" text="Seguiamo il cliente nel tempo con un rapporto diretto." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConvenzioniSection() {
  return (
    <section id="convenzioni" className="bg-[#0f3328] text-white rounded-3xl p-10 mb-16 overflow-hidden relative scroll-mt-28 sigma-reveal sigma-delay-2">
      <div className="grid lg:grid-cols-2 gap-10 items-center relative">
        <div>
          <div className="flex items-center gap-3 mb-4 text-[#8ee0b5]"><Handshake /> Convenzioni dedicate</div>
          <h2 className="text-4xl font-extrabold mb-4">Accordi per ordini professionali e categorie specialistiche.</h2>
          <p className="text-white/75 leading-relaxed">Convenzioni dedicate e coperture specialistiche sviluppate per ordini professionali, studi associati e realtà che richiedono una consulenza assicurativa strutturata.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Commercialisti", "Avvocati", "Architetti e Ingegneri", "Geometri"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-5 font-semibold">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold mb-2">{title}</div>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

function SolutionCard({ icon, title, text, tags, color, onClick }: { icon: React.ReactNode; title: string; text: string; tags: string[]; color: Accent; onClick: () => void }) {
  const style = accents[color];
  return (
    <div className="sigma-float-card group rounded-[2.75rem] border border-white/70 bg-white/80 backdrop-blur-2xl p-9 lg:p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)] flex flex-col transition-all duration-500 ease-out">
      <div className={`w-16 h-16 rounded-[1.6rem] bg-white border ${style.border} flex items-center justify-center mb-8 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1`}>{icon}</div>
      <h3 className="text-[2rem] leading-tight font-black mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-8 min-h-[88px]">{text}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((item) => (
          <span key={item} className={`px-3 py-2 rounded-full ${style.bg} ${style.text} text-sm font-semibold`}>{item}</span>
        ))}
      </div>
      <button onClick={onClick} className={`mt-auto inline-flex items-center gap-2 font-semibold ${style.text} group-hover:gap-3 transition-all duration-300`}>Approfondisci →</button>
    </div>
  );
}

function ProfessionistiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return (
    <SectionView accent="blue" eyebrow="Soluzioni per Professionisti" title="Protezione dedicata a studi, consulenti e professionisti." subtitle="Coperture costruite intorno all’attività professionale, alla responsabilità e alla continuità dello studio." heroTitle="RC Professionale" heroText="Coperture dedicate a studi e professionisti che desiderano tutelare attività e patrimonio." heroButton="Approfondisci RC Professionale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc" primaryDetail={<RcProfessionaleDetail />} cards={professionalCards} details={professionalDetails} gridTitle="Altre soluzioni per completare la protezione professionale." />
  );
}

function AziendeView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return (
    <SectionView accent="green" eyebrow="Soluzioni per Aziende" title="Proteggere un’azienda significa proteggere continuità, persone e responsabilità." subtitle="Costruiamo programmi assicurativi coordinati per imprese che desiderano tutelare operatività, patrimonio, governance e continuità aziendale." heroTitle="RC Aziendale & Responsabilità d’impresa" heroText="Una copertura efficace deve adattarsi al reale funzionamento dell’impresa: attività operative, clienti, dipendenti, fornitori e responsabilità gestionali." heroButton="Approfondisci RC Aziendale" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey="rc-azienda" primaryDetail={<SimpleDetail data={businessDetails["rc-azienda"]} />} cards={businessCards} details={businessDetails} gridTitle="Soluzioni per una protezione aziendale più evoluta." />
  );
}

function PrivatiView({ activeDetail, setActiveDetail, goHome }: { activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void }) {
  return (
    <SectionView accent="gold" eyebrow="Soluzioni per Privati" title="Protezione per famiglia, casa e patrimonio personale." subtitle="Soluzioni pensate per tutelare la vita quotidiana con chiarezza, semplicità e coerenza." heroTitle="Casa, famiglia e responsabilità personale" heroText="Una protezione privata efficace deve essere semplice da capire ma costruita sulle esigenze reali della persona e della famiglia." heroButton="Scopri le soluzioni" activeDetail={activeDetail} setActiveDetail={setActiveDetail} goHome={goHome} primaryKey={null} primaryDetail={null} cards={privateCards} details={privateDetails} gridTitle="Soluzioni per completare la protezione personale e familiare." />
  );
}

function SectionView({ accent, eyebrow, title, subtitle, heroTitle, heroText, heroButton, activeDetail, setActiveDetail, goHome, primaryKey, primaryDetail, cards, details, gridTitle }: { accent: Accent; eyebrow: string; title: string; subtitle: string; heroTitle: string; heroText: string; heroButton: string; activeDetail: Detail; setActiveDetail: (value: Detail) => void; goHome: () => void; primaryKey: string | null; primaryDetail: React.ReactNode; cards: CardData[]; details: Record<string, DetailData>; gridTitle: string }) {
  const style = accents[accent];
  return (
    <section className="bg-white rounded-[2rem] border border-slate-200 p-10 lg:p-14 shadow-sm mb-10 sigma-reveal">
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
              <button onClick={() => setActiveDetail(activeDetail === primaryKey ? null : primaryKey)} className="sigma-button-motion inline-flex rounded-full bg-white text-[#0f172a] px-8 py-4 font-bold hover:bg-slate-100 transition-all duration-300">
                {activeDetail === primaryKey ? "Chiudi approfondimento" : heroButton}
              </button>
            )}
          </div>
          <div className="space-y-4">
            {cards.slice(0, 4).map((item) => (
              <div key={item.key} className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur px-6 py-5 font-semibold text-white transition-transform duration-300 hover:translate-x-1">{item.title}</div>
            ))}
          </div>
        </div>
      </div>
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
              <div className="md:col-span-2 lg:col-span-3 sigma-reveal">
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
          {data.points.map((item) => <div key={item} className="rounded-2xl bg-[#f8fafc] border border-slate-200 p-6 font-semibold">{item}</div>)}
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
          <WhyCard value="50+" title="Anni di esperienza" text="Una presenza consolidata nel mondo assicurativo e della consulenza ai clienti." color="text-[#0f7a43]" />
          <WhyCard value="360°" title="Visione integrata" text="Valutiamo coperture, continuità, responsabilità e patrimonio in modo coordinato." color="text-[#243c7b]" />
          <WhyCard value="Tailor" title="Approccio personalizzato" text="Ogni attività presenta esposizioni differenti e richiede valutazioni specifiche." color="text-[#9a5b16]" />
          <WhyCard value="Direct" title="Relazione continua" text="Seguiamo il cliente nel tempo con un confronto diretto e costante." color="text-[#0f172a]" />
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

function ContactSection() {
  return (
    <section id="contatti" className="bg-white rounded-3xl p-10 border border-slate-200 mb-16 scroll-mt-28 shadow-sm sigma-reveal sigma-delay-3">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Costruiamo una consulenza assicurativa realmente coerente con la tua attività.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">Analizziamo rischi, responsabilità e continuità operativa per aiutarti a valutare coperture più sostenibili, coordinate e costruite sulle esigenze reali della tua attività.</p>
          <a href="mailto:info@sigmabrescia.it" className="sigma-button-motion inline-flex rounded-full bg-[#008f4c] text-white px-7 py-4 font-bold hover:bg-[#007842] transition-all duration-300">Parla con Sigma Studi</a>
        </div>
        <div className="space-y-4 text-slate-700">
          <div className="flex gap-3"><MapPin className="text-[#008f4c] shrink-0" /> Via Codignole 45, 25124 Brescia</div>
          <div className="flex gap-3"><Phone className="text-[#008f4c] shrink-0" /> 030 2059880</div>
          <div className="flex gap-3"><Mail className="text-[#008f4c] shrink-0" /> info@sigmabrescia.it</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b241d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-extrabold text-xl mb-3">SIGMA STUDI <span className="text-[#8ee0b5]">Brescia</span></div>
          <p className="text-white/60">Broker di Assicurazioni per aziende, professionisti e privati.</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Soluzioni</h4>
          <p className="text-white/60 leading-8">Professionisti<br />Aziende<br />Privati</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Informazioni</h4>
          <p className="text-white/60 leading-8">Chi siamo<br />Convenzioni<br />Reclami<br />Segnalazioni illeciti</p>
        </div>
        <div>
          <h4 className="font-bold mb-3">Contatti</h4>
          <div className="space-y-3 text-white/60">
            <div className="flex gap-2 items-center"><MapPin size={16} /> Via Codignole 45</div>
            <div className="flex gap-2 items-center"><Phone size={16} /> 030 2059880</div>
            <div className="flex gap-2 items-center"><Mail size={16} /> info@sigmabrescia.it</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

