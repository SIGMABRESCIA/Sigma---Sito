import {
  Car,
  CarFront,
  Handshake,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

export default function AutomotiveAffinitySection({
  onOpenAutomotive,
}: {
  onOpenAutomotive: () => void;
}) {
    const items = [
    {
      title: "Convenzioni CVT",
      icon: CarFront,
      iconColor: "text-[#16875f]",
      iconBg: "bg-[#eaf5ef]",
    },
    {
      title: "Partnership dealer",
      icon: Handshake,
      iconColor: "text-[#2878c8]",
      iconBg: "bg-[#eaf2fb]",
    },
    {
      title: "Compagnie primarie",
      icon: ShieldCheck,
      iconColor: "text-[#c88718]",
      iconBg: "bg-[#fbf3e4]",
    },
    {
      title: "Fidelizzazione cliente",
      icon: RefreshCw,
      iconColor: "text-[#c85b57]",
      iconBg: "bg-[#faeceb]",
    },
  ];


  return (
    <section
      id="automotive"
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white mb-14 shadow-sm sigma-reveal scroll-mt-28"
    >
      {/* PARTE SUPERIORE */}
      <div className="relative overflow-hidden bg-[#073f35]">
        
        {/* IMMAGINE */}
        <div className="absolute inset-y-0 right-0 hidden md:block w-[56%]">
          <img
            src="/images/automotive-hero.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />

          {/* SFUMATURA */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#073f35] via-[#073f35]/70 to-transparent" />
        </div>

        {/* CONTENUTO */}
        <div className="relative z-10 px-8 py-9 lg:px-12 lg:py-10">
          <div className="max-w-[560px]">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 mb-5">
              <Car size={15} strokeWidth={1.8} />
              Affinity & Automotive
            </div>

            {/* TITOLO */}
            <h2 className="text-[30px] lg:text-[38px] font-semibold tracking-[-0.035em] leading-[1.05] text-white max-w-[530px]">
              Soluzioni assicurative per il settore automotive.
            </h2>

            {/* TESTO */}
            <p className="mt-5 text-[17px] lg:text-[18px] text-white/80 leading-[1.65] max-w-[540px]">
              Affianchiamo concessionari, dealer e operatori nella costruzione
              di programmi assicurativi integrati nella vendita e nel post
              vendita.
            </p>

           {/* PULSANTE */}
<button
onClick={onOpenAutomotive}
  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[16px] font-semibold text-[#075b4b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
>
  Scopri Automotive
  <ArrowRight size={17} strokeWidth={1.8} />
</button>
          </div>
        </div>
      </div>

      {/* FASCIA COMPETENZE */}
      <div className="px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 py-6 lg:px-7 first:pl-0 border-b lg:border-b-0 lg:border-l first:border-l-0 border-slate-200"
              >
                <div
                  className={`shrink-0 flex h-11 w-11 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3 className="text-[17px] lg:text-[18px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#102f2c]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}