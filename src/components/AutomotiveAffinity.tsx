import { Car } from "lucide-react";
export default function AutomotiveAffinitySection() {
  const items = [
    ["Convenzioni CVT", "Programmi dedicati per coperture corpi veicoli terrestri e garanzie accessorie."],
    ["Partnership dealer", "Soluzioni pensate per concessionari, gruppi automotive e reti vendita."],
    ["Compagnie primarie", "Accesso a convenzioni e prodotti sviluppati con partner assicurativi qualificati."],
    ["Fidelizzazione cliente", "Coperture integrate nel percorso di acquisto e nella relazione post vendita."],
  ];

  return (
    <section id="automotive" className="bg-white rounded-[2.5rem] border border-slate-200 p-10 lg:p-16 mb-16 overflow-hidden relative shadow-sm sigma-reveal scroll-mt-28">
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#e8f5ef] rounded-full blur-3xl opacity-80" />
      <div className="relative z-10 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#eefaf3] text-[#008f4c] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] mb-6"><Car size={18} /> Affinity & Automotive</div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.95] mb-8">Programmi assicurativi per concessionari e settore automotive.</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">Affianchiamo realtà automotive e dealer nella costruzione di convenzioni assicurative dedicate alla vendita di coperture CVT, con il supporto di primarie compagnie e soluzioni integrate nel percorso post vendita.</p>
          <div className="flex flex-wrap gap-2">
            {["CVT", "Dealer", "Concessionari", "Affinity", "Post vendita"].map((item) => (
              <span key={item} className="rounded-full bg-[#eefaf3] px-4 py-2 text-sm font-bold text-[#0f7a43]">{item}</span>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(([cardTitle, cardText]) => (
            <div key={cardTitle} className="rounded-[2rem] bg-[#f8fafc] border border-slate-200 p-7">
              <h3 className="text-2xl font-extrabold mb-3">{cardTitle}</h3>
              <p className="text-slate-600 leading-relaxed">{cardText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}