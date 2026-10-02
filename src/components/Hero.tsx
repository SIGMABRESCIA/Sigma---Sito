import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function Hero() {
  const [years, setYears] = useState(0);
  const [vision, setVision] = useState(0);
  const [showTailor, setShowTailor] = useState(false);

  useEffect(() => {
    const duration = 1800;

    const animationTimer = window.setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        const eased = progress;

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
        className="relative overflow-hidden bg-[#f7f5f0] text-[#1C365B]"
      >
        {/* IMMAGINE EDITORIALE - MOBILE */}
        <div className="absolute inset-0 lg:hidden pointer-events-none overflow-hidden">
          <img
           src="/images/hero-01-vetro-riflessi-blu.png"
            alt=""
            className="absolute right-[-35%] bottom-0 h-[58%] w-[90%] object-cover object-center opacity-30"
          />

          {/* Dissolvenza nel fondo della Hero */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-[#f7f5f0]/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] via-[#f7f5f0]/85 to-transparent" />
        </div>

        {/* IMMAGINE EDITORIALE - SOLO DESKTOP */}
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[64%] pointer-events-none overflow-hidden">
          <img
           src="/images/hero-01-vetro-riflessi-blu.png"
            alt=""
           className="hero-image-motion absolute inset-0 h-full w-full object-cover object-[55%_center]"
          />

          {/* Dissolvenza verso il testo */}
       <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0] via-[#f7f5f0]/72 via-[18%] to-transparent" />

          {/* Leggera dissolvenza inferiore */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f5f0]/20" />
        </div>

        {/* CONTENUTO */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-12 pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-12">
          <div className="max-w-[790px]">

            {/* BADGE */}
            <div className="hero-enter hero-delay-1 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#61B3E8]/10 px-4 sm:px-5 py-2 sm:py-3 text-[13px] sm:text-[15px] font-semibold text-[#24476B] mb-8 sm:mb-10 border border-[#61B3E8]/35">
              <ShieldCheck
                size={19}
                strokeWidth={1.8}
                className="text-[#245A8D]"
              />
              Consulenza assicurativa evoluta
            </div>

            {/* TITOLO */}
            <h1 className="hero-enter hero-delay-2 text-[40px] sm:text-6xl lg:text-[4.3rem] font-bold tracking-[-0.025em] leading-[1.02] sm:leading-[0.98] mb-7 sm:mb-8 max-w-[760px] text-[#1C365B] uppercase">
              <span className="hero-title-word">Protezione</span>{" "}
<span className="hero-title-word">assicurativa</span>{" "}
<span className="hero-title-word">progettata</span>{" "}
<span className="hero-title-word">intorno</span>{" "}
<span className="hero-title-word">ai</span>{" "}
<span className="hero-title-word">rischi</span>{" "}
<span className="hero-title-word">reali.</span>
            </h1>

            {/* TARGET */}
            <div className="hero-enter hero-delay-3 mb-8 text-[18px] lg:text-[21px] font-semibold text-[#24476B]">
              Per professionisti, aziende e famiglie.
            </div>

            {/* DESCRIZIONE */}
            <p className="hero-enter hero-delay-4 text-lg lg:text-[20px] text-[#3F5063] leading-[1.65] max-w-[680px]">
              Analizziamo responsabilità, continuità operativa, patrimonio ed
              esposizioni concrete per costruire coperture più coerenti,
              sostenibili e realmente utili nel momento in cui servono.
            </p>
          </div>

          {/* DATI */}
          <div className="mt-7 sm:mt-10 lg:mt-11 max-w-[900px]">
            <div className="grid grid-cols-3">

              {/* 15+ */}
              <div className="hero-enter hero-delay-5 py-5 sm:pr-8 border-b sm:border-b-0 border-[#cbd5dc]">
                <div className="text-[22px] sm:text-[25px] font-semibold text-[#24476B] tabular-nums">
                  {years}+
                </div>

                <div className="mt-2 text-[10px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#53616f]">
                  Esperienza
                </div>

                <p className="hidden sm:block mt-3 text-[17px] leading-[1.6] text-[#465666] max-w-[270px]">
                  Oltre quindici anni di affiancamento a imprese, studi
                  professionali e famiglie.
                </p>
              </div>

              {/* 360° */}
              <div className="hero-enter hero-delay-6 py-5 sm:px-8 border-b sm:border-b-0 sm:border-l border-[#cbd5dc]">
                <div className="text-[22px] sm:text-[25px] font-semibold text-[#24476B] tabular-nums">
                  {vision}°
                </div>

                <div className="mt-2 text-[10px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#53616f]">
                  <span className="sm:hidden">Visione</span>
                  <span className="hidden sm:inline">
                    Visione integrata
                  </span>
                </div>

                <p className="hidden sm:block mt-3 text-[17px] leading-[1.6] text-[#465666] max-w-[270px]">
                  Analisi coordinata di responsabilità, continuità e patrimonio.
                </p>
              </div>

              {/* TAILOR */}
              <div className="hero-enter hero-delay-7 py-5 sm:pl-8 sm:border-l border-[#cbd5dc]">
                <div
                  className={`text-[22px] sm:text-[25px] font-semibold text-[#24476B] transition-all duration-700 ${
                    showTailor
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
               <span className="tailor-letter" style={{ animationDelay: "0.75s" }}>T</span>
<span className="tailor-letter" style={{ animationDelay: "1.05s" }}>a</span>
<span className="tailor-letter" style={{ animationDelay: "1.35s" }}>i</span>
<span className="tailor-letter" style={{ animationDelay: "1.65s" }}>l</span>
<span className="tailor-letter" style={{ animationDelay: "1.95s" }}>o</span>
<span className="tailor-letter" style={{ animationDelay: "2.25s" }}>r</span>
                </div>

                <div className="mt-2 text-[10px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#53616f]">
                  <span className="sm:hidden">Su misura</span>
                  <span className="hidden sm:inline">
                    Approccio consulenziale
                  </span>
                </div>

                <p className="hidden sm:block mt-3 text-[17px] leading-[1.6] text-[#465666] max-w-[270px]">
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
          animation-delay: 1.35s;
        }

        .hero-delay-6 {
          animation-delay: 1.55s;
        }

        .hero-delay-7 {
          animation-delay: 1.75s;
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
.hero-stat-enter {
  opacity: 0;
  transform: translateY(38px);
  animation: heroStatReveal 1.35s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes heroStatReveal {
  from {
    opacity: 0;
    transform: translateY(38px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
   /* Movimento editoriale della fotografia */
.hero-image-motion {
  opacity: 0;
  transform: scale(1.04) translateX(8px);
  transform-origin: center center;
  animation:
    heroImageFadeIn 1.6s ease-out forwards,
    heroImageMotion 9s ease-in-out 1.6s infinite alternate;
}

@keyframes heroImageFadeIn {
  from {
    opacity: 0;
    transform: scale(1.04) translateX(8px);
  }

  to {
    opacity: 1;
    transform: scale(1.02) translateX(0);
  }
}
.hero-title-word {
  display: inline-block;
  opacity: 0;
  filter: blur(6px);
  transform: translateY(18px);
  animation: heroTitleWordIn 0.65s ease-out forwards;
}

.hero-title-word:nth-child(1) { animation-delay: 0.15s; }
.hero-title-word:nth-child(2) { animation-delay: 0.28s; }
.hero-title-word:nth-child(3) { animation-delay: 0.41s; }
.hero-title-word:nth-child(4) { animation-delay: 0.54s; }
.hero-title-word:nth-child(5) { animation-delay: 0.67s; }
.hero-title-word:nth-child(6) { animation-delay: 0.80s; }
.hero-title-word:nth-child(7) { animation-delay: 0.93s; }

@keyframes heroTitleWordIn {
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
  .tailor-letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(12px) scale(0.9);
  filter: blur(4px);
  animation: tailorLetterIn 0.55s ease-out forwards;
}

@keyframes tailorLetterIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
@keyframes heroImageMotion {
  from {
    transform: scale(1.02) translateX(0);
  }

  to {
    transform: scale(1.14) translateX(-28px);
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