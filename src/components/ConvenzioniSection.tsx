import { Handshake } from "lucide-react";

type View =
  | "home"
  | "professionisti"
  | "aziende"
  | "privati"
  | "reclami"
  | "whistleblowing"
  | "convenzioni-commercialisti"
  | "convenzioni-avvocati"
  | "convenzioni-tecnici";

export default function ConvenzioniSection({ goTo }: { goTo: (view: View) => void }) {
  return (
    <section
      id="convenzioni"
      className="relative overflow-hidden rounded-[2.5rem] bg-[#06281f] text-white p-10 lg:p-14 mb-16 sigma-reveal"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_38%)]" />

      <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 text-[#7ff0c5] text-sm uppercase tracking-[0.22em] font-semibold mb-8">
            <Handshake size={18} />
            Convenzioni professionali
          </div>

          <h2 className="text-5xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95] mb-8 max-w-xl">
            Convenzioni professionali progettate intorno alle esigenze reali degli studi.
          </h2>

          <div className="w-20 h-[2px] bg-[#7ff0c5] mb-8" />

          <p className="text-white/78 text-lg leading-relaxed max-w-xl">
            Convenzioni dedicate alla tutela del rischio professionale sviluppate per ordini, categorie professionali e studi associati.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            { label: "Commercialisti", view: "convenzioni-commercialisti" as View },
            { label: "Avvocati", view: "convenzioni-avvocati" as View },
            { label: "Tecnici professionisti", view: "convenzioni-tecnici" as View },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => goTo(item.view)}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 min-h-[130px] flex items-center justify-between text-left transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div>
                <div className="w-14 h-[2px] bg-[#7ff0c5]/60 mb-5" />
                <h3 className="text-3xl font-black tracking-[-0.03em] leading-tight">
                  {item.label}
                </h3>
                <p className="text-[#7ff0c5] uppercase tracking-[0.2em] text-xs font-semibold mt-3">
                  Scopri la convenzione
                </p>
              </div>

              <div className="text-[#7ff0c5] text-4xl opacity-70 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}