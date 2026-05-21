import { ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#071f19] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#061b16] via-[#071f19]/95 to-[#071f19]/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-40">
        <div className="max-w-5xl sigma-reveal-slow">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl px-5 py-3 text-sm font-semibold text-[#b8f2d3] mb-10 border border-white/10">
            <ShieldCheck size={18} />
            Consulenza assicurativa evoluta per aziende, professionisti e patrimoni
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.065em] leading-[0.88] mb-10 max-w-6xl text-white">
            Protezione assicurativa progettata intorno ai rischi reali.
          </h1>

          <p className="text-xl lg:text-2xl text-white/72 leading-relaxed mb-12 max-w-4xl">
            Analizziamo responsabilità, continuità operativa, patrimonio ed esposizioni concrete per costruire coperture più coerenti, sostenibili e realmente utili nel momento in cui servono.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">50+</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Esperienza</div>
              <p className="text-white/70 text-sm">
                Oltre cinquant’anni di affiancamento a imprese, studi professionali e famiglie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">360°</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Visione integrata</div>
              <p className="text-white/70 text-sm">
                Analisi coordinata di responsabilità, continuità e patrimonio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <div className="text-3xl font-black mb-2 text-[#8ee0b5]">Tailor</div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/45 mb-2">Approccio consulenziale</div>
              <p className="text-white/70 text-sm">
                Nessuna soluzione standardizzata: ogni copertura nasce dall’analisi reale del rischio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}