import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
   <section id="home" className="relative overflow-hidden bg-[#061b16] text-white">
  <div className="absolute inset-0 animate-[floatSlow_18s_ease-in-out_infinite] bg-[radial-gradient(circle_at_20%_20%,rgba(0,143,76,0.42),transparent_32%)]" />
  <div className="absolute inset-0 animate-[floatSlow2_24s_ease-in-out_infinite] bg-[radial-gradient(circle_at_80%_30%,rgba(0,120,255,0.16),transparent_38%)]" />
  <div className="absolute -right-32 top-20 w-[520px] h-[520px] rounded-full bg-[#008f4c]/20 blur-3xl" />
  <div className="absolute left-1/2 bottom-0 w-[700px] h-[260px] -translate-x-1/2 bg-white/5 blur-3xl" />
<div className="absolute top-[-120px] left-[-80px] w-[420px] h-[420px] bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />

<div
  className="absolute bottom-[-140px] right-[-120px] w-[520px] h-[520px] bg-cyan-400/10 rounded-full blur-3xl"
  style={{
    animation: "floatSlow 14s ease-in-out infinite",
  }}
/>

<div
  className="absolute top-[30%] left-[45%] w-[260px] h-[260px] bg-green-300/10 rounded-full blur-3xl"
  style={{
    animation: "floatSlow2 18s ease-in-out infinite",
  }}
/>
<div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-8 lg:px-12 py-16 lg:py-28 animate-[sigmaFadeUp_1400ms_cubic-bezier(0.22,1,0.36,1)_both]">
        
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-[#b8f2d3] mb-10 border border-white/10">
            <ShieldCheck size={18} />
            Consulenza assicurativa evoluta per aziende, professionisti e patrimoni
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[7.2rem] font-black tracking-[-0.065em] leading-[0.88] mb-10 max-w-6xl text-white animate-[sigmaFadeUp_1800ms_cubic-bezier(0.22,1,0.36,1)_both]">
            Protezione assicurativa progettata intorno ai rischi reali.
          </h1>

         <p
  className="text-xl lg:text-2xl text-white/72 leading-relaxed mb-12 max-w-4xl animate-[sigmaFadeUp_2200ms_cubic-bezier(0.22,1,0.36,1)_both]"
>
            Analizziamo responsabilità, continuità operativa, patrimonio ed esposizioni concrete per costruire coperture più coerenti, sostenibili e realmente utili nel momento in cui servono.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-700 hover:-translate-y-2 hover:bg-white/10 hover:border-[#8ce0b5]/30">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">15+</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Esperienza</div>
              <p className="text-white/70 text-sm">
                Oltre quindici anni di affiancamento a imprese, studi professionali e famiglie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-700 hover:-translate-y-2 hover:bg-white/10 hover:border-[#8ce0b5]/30">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">360°</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Visione integrata</div>
              <p className="text-white/70 text-sm">
                Analisi coordinata di responsabilità, continuità e patrimonio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-700 hover:-translate-y-2 hover:bg-white/10 hover:border-[#8ce0b5]/30">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">Tailor</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Approccio consulenziale</div>
              <p className="text-white/70 text-sm">
                Nessuna soluzione standardizzata: ogni copertura nasce dall’analisi reale del rischio.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}