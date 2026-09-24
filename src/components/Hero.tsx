import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  const [years, setYears] = useState(0);
  const [vision, setVision] = useState(0);
  const [showTailor, setShowTailor] = useState(false);

  useEffect(() => {
    const duration = 1400;

    const animationTimer = window.setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // Movimento morbido: veloce all'inizio, più lento alla fine
        const eased = 1 - Math.pow(1 - progress, 3);

        setYears(Math.round(15 * eased));
        setVision(Math.round(360 * eased));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, 650);

    const tailorTimer = window.setTimeout(() => {
      setShowTailor(true);
    }, 1050);

    return () => {
      window.clearTimeout(animationTimer);
      window.clearTimeout(tailorTimer);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#f7f5f0] text-[#102f2c]"
      >
        {/* IMMAGINE EDITORIALE - SOLO DESKTOP */}
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[54%] pointer-events-none overflow-hidden">
          <img
            src="/images/hero-editorial.png"
            alt=""
            className="hero-image-motion absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Dissolvenza verso il testo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] via-[#f7f5f0]/90 via-[20%] to-transparent" />

          {/* Leggera dissolvenza inferiore */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f5f0]/80" />
        </div>

        {/* CONTENUTO */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-12 pt-10 lg:pt-12 pb-10 lg:pb-12">
          <div className="max-w-[790px]">

            {/* BADGE */}
            <div className="hero-enter hero-delay-1 inline-flex items-center gap-3 rounded-full bg-[#edf1eb]/90 px-5 py-3 text-[15px] font-semibold text-[#23845f] mb-10 border border-[#d9e1dc]">
              <ShieldCheck size={19} strokeWidth={1.8} />
              Consulenza assicurativa evoluta
            </div>

            {/* TITOLO */}
            <h1 className="hero-enter hero-delay-2 text-5xl sm:text-6xl lg:text-[4.3rem] font-bold tracking-[-0.025em] leading-[0.98] mb-8 max-w-[760px]">
              Protezione assicurativa progettata intorno ai rischi reali.
            </h1>

            {/* TARGET */}
            <div className="hero-enter hero-delay-3 mb-8 text-[18px] lg:text-[21px] font-medium text-[#16875f]">
              Per professionisti, aziende e famiglie.
            </div>

            {/* DESCRIZIONE */}
            <p className="hero-enter hero-delay-4 text-lg lg:text-[20px] text-[#526174] leading-[1.65] max-w-[680px]">
              Analizziamo responsabilità, continuità operativa, patrimonio ed
              esposizioni concrete per costruire coperture più coerenti,
              sostenibili e realmente utili nel momento in cui servono.
            </p>
          </div>

          {/* DATI */}
          <div className="mt-10 lg:mt-11 max-w-[900px]">
            <div className="grid sm:grid-cols-3">

              {/* 15+ */}
              <div className="hero-enter hero-delay-5 py-5 sm:pr-8 border-b sm:border-b-0 border-[#cfd8d2]">
                <div className="text-[32px] font-semibold text-[#16875f] tabular-nums">
                  {years}+
                </div>

                <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#52615b]">
                  Esperienza
                </div>

                <p className="mt-3 text-[17px] leading-[1.6] text-[#42514c] max-w-[270px]">
                  Oltre quindici anni di affiancamento a imprese, studi
                  professionali e famiglie.
                </p>
              </div>

              {/* 360° */}
              <div className="hero-enter hero-delay-6 py-5 sm:px-8 border-b sm:border-b-0 sm:border-l border-[#cfd8d2]">
                <div className="text-[32px] font-semibold text-[#16875f] tabular-nums">
                  {vision}°
                </div>

                <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#52615b]">
                  Visione integrata
                </div>

                <p className="mt-3 text-[17px] leading-[1.6] text-[#42514c] max-w-[270px]">
                  Analisi coordinata di responsabilità, continuità e patrimonio.
                </p>
              </div>

              {/* TAILOR */}
              <div className="hero-enter hero-delay-7 py-5 sm:pl-8 sm:border-l border-[#cfd8d2]">
                <div
                  className={`text-[32px] font-semibold text-[#16875f] transition-all duration-700 ${
                    showTailor
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  Tailor
                </div>

                <div className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#52615b]">
                  Approccio consulenziale
                </div>

                <p className="mt-3 text-[17px] leading-[1.6] text-[#42514c] max-w-[290px]">
                  Nessuna soluzione standardizzata: ogni copertura nasce
                  dall’analisi reale del rischio.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ANIMAZIONI HERO */}
      <style>{`
        .hero-enter {
          opacity: 0;
          transform: translateY(28px);
          animation: heroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.05s;
        }

        .hero-delay-2 {
          animation-delay: 0.18s;
        }

        .hero-delay-3 {
          animation-delay: 0.34s;
        }

        .hero-delay-4 {
          animation-delay: 0.46s;
        }

        .hero-delay-5 {
          animation-delay: 0.62s;
        }

        .hero-delay-6 {
          animation-delay: 0.76s;
        }

        .hero-delay-7 {
          animation-delay: 0.90s;
        }

        /* Il titolo entra leggermente da sinistra */
        h1.hero-enter {
          transform: translateX(-35px);
          animation-name: heroTitleReveal;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroTitleReveal {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Movimento editoriale della fotografia */
        .hero-image-motion {
          transform: scale(1.02) translateX(0);
          animation: heroImageMotion 10s ease-in-out infinite alternate;
          transform-origin: center center;
        }

        @keyframes heroImageMotion {
          from {
            transform: scale(1.02) translateX(0);
          }

          to {
            transform: scale(1.09) translateX(-18px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter,
          h1.hero-enter {
            opacity: 1;
            transform: none;
            animation: none;
          }

          .hero-image-motion {
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </>
  );
}