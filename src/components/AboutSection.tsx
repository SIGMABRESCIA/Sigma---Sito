export default function AboutSection() {
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
function MethodItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold mb-2">{title}</div>
      <p className="text-white/70">{text}</p>
    </div>
  );
}