import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
  <section id="home" className="relative overflow-hidden bg-[#f7f5f0] text-[#0f172a]">
  {/* <div className="absolute inset-0 animate-[floatSlow_18s_ease-in-out_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(0,143,76,0.42),transparent_32%)]" />
  <div className="absolute inset-0 animate-[floatSlow2_24s_ease-in-out_infinite] bg-[radial-gradient(circle_at_80%_30%,rgba(0,120,255,0.16),transparent_38%)]" />
  <div className="absolute -right-32 top-20 w-[520px] h-[520px] rounded-full bg-[#008f4c]/20 blur-3xl" />
  <div className="absolute left-1/2 bottom-0 w-[700px] h-[260px] -translate-x-1/2 bg-white/5 blur-3xl" />
<div className="absolute top-[-120px] left-[-80px] w-[420px] h-[420px] bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

<div
  className="absolute bottom-[-140px] right-[-120px] w-[520px] h-[520px] bg-cyan-400/5 rounded-full blur-3xl"
  style={{
    animation: "floatSlow 14s ease-in-out infinite",
  }}
/>

<div
  className="absolute top-[30%] left-[45%] w-[260px] h-[260px] bg-green-300/5 rounded-full blur-3xl"
  style={{
    animation: "floatSlow2 18s ease-in-out infinite",
  }}
/>
<div className="absolute inset-0 bg-black/25" /> */}
<div className="absolute inset-y-0 right-0 hidden lg:block w-[58%] pointer-events-none">
  <img
    src="/images/aziende.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] via-[#f7f5f0]/60 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0]/50 via-transparent to-[#f7f5f0]" />
</div>

<div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-12 pt-14 lg:pt-20 pb-6 lg:pb-8">
  <div className="max-w-[820px]">
        
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 text-[16px] font-semibold text-[#23845f] mb-10 border border-[#d9e1dc]">
  <ShieldCheck size={20} />
  Consulenza assicurativa evoluta
</div>

    <h1 className="text-5xl sm:text-6xl lg:text-[4.7rem] font-medium tracking-[-0.035em] leading-[1.02] mb-10 max-w-[820px] ...">
            Protezione assicurativa progettata intorno ai rischi reali.
          </h1>
    
<div className="mt-4 mb-10 text-lg lg:text-xl font-medium text-[#23845f]">
  Per professionisti, aziende e famiglie.
</div>

 <p
  className="text-xl lg:text-2xl text-[#526174] leading-relaxed mb-12 max-w-4xl animate-[sigmaFadeUp_2200ms_cubic-bezier(0.22,1,0.36,1)_both]"
>
  Analizziamo responsabilità, continuità operativa, patrimonio ed esposizioni concrete per costruire coperture più coerenti, sostenibili e realmente utili nel momento in cui servono.
</p>
          </div>


          <div className="grid sm:grid-cols-3 gap-5 max-w-none mt-2">
<div className="rounded-2xl border border-[#d9e1dc] bg-white/55 backdrop-blur-xl p-6 transition-all duration-700 hover:-translate-y-2 hover:bg-white/80 hover:border-[#8ce0b5]/60">
              <div className="text-[30px] font-bold mb-2 text-[#23845f]">15+</div>
              <div className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#52615b] mb-3">Esperienza</div>
             <p className="text-[#293832] text-[17px] leading-[1.55]">
                Oltre quindici anni di affiancamento a imprese, studi professionali e famiglie.
              </p>
            </div>

          <div className="rounded-2xl border border-[#d9e1dc] bg-white/55 backdrop-blur-xl p-6 transition-all duration-700 hover:-translate-y-2 hover:bg-white/80 hover:border-[#8ce0b5]/60">
              <div className="text-[30px] font-bold mb-2 text-[#23845f]">360°</div>
              <div className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#52615b] mb-3">Visione integrata</div>
              <p className="text-[#293832] text-[17px] leading-[1.55]">
                Analisi coordinata di responsabilità, continuità e patrimonio.
              </p>
            </div>

  <div className="rounded-2xl border border-[#d9e1dc] bg-white/55 backdrop-blur-xl p-6 transition-all duration-700 hover:-translate-y-2 hover:bg-white/80 hover:border-[#8ce0b5]/60">
  <div className="text-[30px] font-bold mb-2 text-[#23845f]">Tailor</div>
  <div className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#52615b] mb-3">
    Approccio consulenziale
  </div>
  <p className="text-[#293832] text-[17px] leading-[1.55]">
    Nessuna soluzione standardizzata: ogni copertura nasce dall’analisi reale del rischio.
  </p>
</div>
          </div>
                </div>
</section>
);
}