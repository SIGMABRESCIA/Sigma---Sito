import {
  Search,
  PencilLine,
  UsersRound,
  ShieldCheck,
  Star,
  Infinity,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 p-8 lg:p-16 shadow-sm mb-14 overflow-hidden relative sigma-reveal">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#eefaf3] rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#f1f5f9] rounded-full blur-3xl opacity-60" />

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex rounded-full bg-[#eefaf3] text-[#008f4c] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] mb-7">
            Chi siamo
          </div>

          <h2 className="text-3xl lg:text-5xl font-black tracking-[-0.04em] leading-[1.02] mb-7 max-w-[680px]">
            Una realtà indipendente specializzata nella consulenza assicurativa.
          </h2>

          <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-7 max-w-[680px]">
            Fondata nel 2009, Sigma Studi Brescia affianca aziende, professionisti e affinity group nella progettazione, gestione e ottimizzazione delle coperture assicurative.
          </p>

          <p className="text-slate-600 leading-relaxed text-lg max-w-[680px]">
            Operiamo nei principali rami assicurativi con un approccio consulenziale basato su analisi dei rischi, trasparenza e continuità della relazione, accompagnando il cliente dalla scelta delle coperture fino alla gestione dei sinistri.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-xl p-8 lg:p-10 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
          <div className="text-[#008f4c] text-sm font-black uppercase tracking-[0.22em] mb-8">
            Il nostro metodo
          </div>

          <div className="space-y-8">
            <MethodItem
              icon={<Search size={32} />}
              title="Analisi"
              text="Studiamo rischi, responsabilità ed esigenze specifiche."
            />

            <MethodItem
              icon={<PencilLine size={32} />}
              title="Progettazione"
              text="Costruiamo soluzioni coerenti con attività, patrimonio e continuità operativa."
            />

            <MethodItem
              icon={<UsersRound size={32} />}
              title="Affiancamento"
              text="Seguiamo il cliente nel tempo, anche nella gestione dei sinistri."
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-5 mt-12">
        <AboutPill
          icon={<ShieldCheck size={30} />}
          title="Indipendenza"
          text="Soluzioni selezionate senza vincoli verso singole compagnie."
        />

        <AboutPill
          icon={<Star size={30} />}
          title="Esperienza"
          text="Oltre quindici anni di attività sul territorio bresciano e nazionale."
        />

        <AboutPill
          icon={<Infinity size={30} />}
          title="Continuità"
          text="Consulenza e assistenza lungo tutto il rapporto assicurativo."
        />
      </div>
    </section>
  );
}

function MethodItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-6 items-start border-b border-slate-200 last:border-b-0 pb-8 last:pb-0">
      <div className="w-16 h-16 rounded-full bg-[#eefaf3] text-[#008f4c] flex items-center justify-center">
        {icon}
      </div>

      <div>
        <div className="text-2xl font-extrabold text-slate-900 mb-2">
          {title}
        </div>

        <p className="text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

function AboutPill({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white border border-slate-200 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] grid grid-cols-[64px_1fr] gap-5 items-start">
      <div className="w-14 h-14 rounded-full bg-[#eefaf3] text-[#008f4c] flex items-center justify-center">
        {icon}
      </div>

      <div>
        <div className="font-extrabold text-xl text-slate-900 mb-2">
          {title}
        </div>

        <p className="text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}