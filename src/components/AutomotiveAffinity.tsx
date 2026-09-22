import {
  Car,
  CarFront,
  Handshake,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

export default function AutomotiveAffinitySection() {
  const items = [
    {
      title: "Convenzioni CVT",
      text: "Programmi dedicati per coperture corpi veicoli terrestri e garanzie accessorie.",
      icon: CarFront,
      iconColor: "text-[#16875f]",
      iconBg: "bg-[#eaf5ef]",
    },
    {
      title: "Partnership dealer",
      text: "Soluzioni pensate per concessionari, gruppi automotive e reti vendita.",
      icon: Handshake,
      iconColor: "text-[#2878c8]",
      iconBg: "bg-[#eaf2fb]",
    },
    {
      title: "Compagnie primarie",
      text: "Accesso a convenzioni e prodotti sviluppati con partner assicurativi qualificati.",
      icon: ShieldCheck,
      iconColor: "text-[#c88718]",
      iconBg: "bg-[#fbf3e4]",
    },
    {
      title: "Fidelizzazione cliente",
      text: "Coperture integrate nel percorso di acquisto e nella relazione post vendita.",
      icon: RefreshCw,
      iconColor: "text-[#c85b57]",
      iconBg: "bg-[#faeceb]",
    },
  ];

  return (
    <section
      id="automotive"
      className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 lg:p-16 mb-16 shadow-sm sigma-reveal scroll-mt-28"
    >
      {/* SFUMATURA DI SFONDO */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#e8f5ef] blur-3xl opacity-80" />

      <div className="relative z-10">

        {/* PARTE SUPERIORE */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end">

          {/* TITOLO */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#eefaf3] text-[#008f4c] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] mb-6">
              <Car size={18} strokeWidth={1.8} />
              Affinity & Automotive
            </div>

            <h2
              style={{ fontFamily: '"Inter", sans-serif' }}
              className="text-3xl lg:text-[40px] font-semibold tracking-[-0.025em] leading-[1.08]"
            >
              Programmi assicurativi per concessionarie e settore automotive.
            </h2>
          </div>

          {/* TESTO */}
          <div>
            <p className="text-lg text-[#526174] leading-[1.7] max-w-[650px]">
              Affianchiamo realtà automotive e dealer nella costruzione di
              convenzioni assicurative dedicate alla vendita di coperture CVT,
              con il supporto di primarie compagnie e soluzioni integrate nel
              percorso post vendita.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "CVT",
                "Dealer",
                "Concessionari",
                "Affinity",
                "Post vendita",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#eefaf3] px-4 py-2 text-sm font-bold text-[#0f7a43]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DIVISORE */}
        <div className="h-px bg-[#dce5df] my-10 lg:my-12" />

        {/* 4 AREE INFORMATIVE */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="py-4 sm:px-6 lg:px-7 first:pl-0 lg:border-l first:border-l-0 border-[#dce5df]"
              >
                {/* ICONA */}
                <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor} mb-5`}
                >
                <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* TITOLO */}
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] leading-[1.2] mb-3 text-[#102f2c]">
                  {item.title}
                </h3>

                {/* TESTO */}
                <p className="text-[15px] text-[#526174] leading-[1.6]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}