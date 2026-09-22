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
  <section className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm mb-14 overflow-hidden relative sigma-reveal">
    <div className="max-w-[1380px] mx-auto px-10 lg:px-14 pt-6 lg:pt-6 pb-10 lg:pb-12">
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#8ce0b5]/20 blur-3xl"
        style={{
          animation: "floatSlow2 18s ease-in-out infinite",
        }}
      />

      <div
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-[#008f4c]/10 blur-3xl"
        style={{
          animation: "floatSlow 20s ease-in-out infinite",
        }}
      />

      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#eefaf3] rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#f1f5f9] rounded-full blur-3xl opacity-60" />
      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 ">
        <div>
          <div className="inline-flex rounded-full bg-[#eefaf3] text-[#008f4c] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] mb-7 animate-[sigmaFadeUp_700ms_cubic-bezier(0.22,1,0.36,1)_both]">
            Chi siamo
          </div>

          <h2
  style={{ fontFamily: '"Inter", sans-serif' }}
  className="text-3xl lg:text-[40px] font-semibold tracking-[-0.025em] leading-[1.08] mb-7 max-w-[680px] animate-[sigmaFadeUp_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:120ms]"
>
            Una realtà indipendente specializzata nella consulenza assicurativa.
          </h2>

      <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-[680px] animate-[sigmaFadeUp_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:240ms]">
            Fondata nel 2009, Sigma Studi Brescia affianca aziende, professionisti e affinity group nella progettazione, gestione e ottimizzazione delle coperture assicurative.
          </p>

   <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-[680px] animate-[sigmaFadeUp_900ms_cubic-bezier(0.22,1,0.36,1)_both] [animation-delay:360ms]">
            Operiamo nei principali rami assicurativi con un approccio consulenziale basato su analisi dei rischi, trasparenza e continuità della relazione, accompagnando il cliente dalla scelta delle coperture fino alla gestione dei sinistri.
          </p>
        </div>

       <div className="relative z-10 lg:pl-10 lg:mt-10 rounded-2xl border border-slate-200/80 bg-white/55 px-6 py-6">
       <div className="text-[#087A48] text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] mb-6">
  Il nostro metodo
</div>

<div className="space-y-4">
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

  <div className="relative z-10 grid md:grid-cols-3 gap-0 mt-8 border-t border-slate-200/50 pt-8 pb-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/50 lg:mr-10">
        <AboutPill
          icon={<ShieldCheck size={30} />}
          title="Indipendenza"
          text="Soluzioni selezionate senza vincoli verso singole compagnie."
        />

<AboutPill
  icon={<Star size={30} />}
  title="Specializzazione"
  text="Competenze assicurative costruite sulle esigenze di professionisti, aziende e privati."
/>

        <AboutPill
          icon={<Infinity size={30} />}
          title="Continuità"
          text="Consulenza e assistenza lungo tutto il rapporto assicurativo."
        />
      </div>
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
    <div className="grid grid-cols-[64px_1fr] gap-5 items-start border-b border-slate-200 last:border-b-0 pb-5 last:pb-0">
      <div className="w-16 h-16 rounded-full bg-[#eefaf3] text-[#008f4c] flex items-center justify-center">
        {icon}
      </div>

      <div>
<div className="text-[18px] lg:text-[19px] font-medium text-slate-900 mb-3">
    {title}
</div>

<p className="text-[16px] lg:text-[17px] text-slate-600 leading-[1.65]">
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
<div className="grid grid-cols-[48px_1fr] gap-4 items-start py-5 md:px-6 first:md:pl-0 last:md:pr-0">
  <div className="w-12 h-12 rounded-full bg-[#eefaf3] text-[#008f4c] flex items-center justify-center">
    {icon}
  </div>

  <div>
    <div className="text-[18px] font-medium text-slate-900 mb-2">
      {title}
    </div>

 <p className="text-[16px] lg:text-[17px] text-slate-600 leading-[1.55]">
      {text}
    </p>
  </div>
</div>
  );
}