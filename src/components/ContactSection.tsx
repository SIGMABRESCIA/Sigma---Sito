import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden rounded-[2.5rem] border border-[#dce5df] bg-[#f8f7f2] p-10 lg:p-14 mb-0 scroll-mt-28 shadow-sm sigma-reveal"
    >
      {/* SFUMATURA DI SFONDO */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#e8f5ef] blur-3xl opacity-90" />

      <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

        {/* SINISTRA */}
        <div>
          <div className="inline-flex items-center rounded-full bg-[#eaf6ef] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#008f4c] mb-6">
            Parliamone
          </div>

          <h2 className="text-3xl lg:text-[44px] font-semibold tracking-[-0.025em] leading-[1.08] mb-6 max-w-[620px] text-[#102f2c]">
            Costruiamo una consulenza assicurativa realmente coerente con la tua attività.
          </h2>

          <p className="text-[18px] text-[#526174] leading-[1.7] max-w-[620px] mb-8">
            Analizziamo rischi, responsabilità e continuità operativa per aiutarti
            a valutare coperture più sostenibili, coordinate e costruite sulle
            esigenze reali della tua attività.
          </p>

          <a
            href="mailto:info@sigmabrescia.it"
            className="sigma-button-motion inline-flex items-center gap-2 rounded-full bg-[#008f4c] text-white px-6 py-3.5 font-semibold"
          >
            Parla con Sigma Studi
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* DESTRA */}
        <div className="lg:border-l lg:border-[#d7e1db] lg:pl-12">

          <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#16875f] mb-7">
            Contatti
          </div>

          <div className="space-y-0">

            {/* SEDE */}
            <div className="flex gap-4 py-5 border-b border-[#dce5df]">
              <MapPin
                size={22}
                strokeWidth={1.8}
                className="text-[#008f4c] shrink-0 mt-0.5"
              />

              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#75827d] mb-1">
                  Sede
                </div>

                <div className="text-[17px] font-medium text-[#102f2c]">
                  Via Malta 12/N, 25124 Brescia
                </div>
              </div>
            </div>

            {/* TELEFONO */}
            <div className="flex gap-4 py-5 border-b border-[#dce5df]">
              <Phone
                size={22}
                strokeWidth={1.8}
                className="text-[#008f4c] shrink-0 mt-0.5"
              />

              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#75827d] mb-1">
                  Telefono
                </div>

                <a
                  href="tel:0302059880"
                  className="text-[17px] font-medium text-[#102f2c] hover:text-[#008f4c] transition-colors"
                >
                  030 2059880
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 py-5 border-b border-[#dce5df]">
              <Mail
                size={22}
                strokeWidth={1.8}
                className="text-[#008f4c] shrink-0 mt-0.5"
              />

              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#75827d] mb-1">
                  Email
                </div>

                <a
                  href="mailto:info@sigmabrescia.it"
                  className="text-[17px] font-medium text-[#102f2c] hover:text-[#008f4c] transition-colors"
                >
                  info@sigmabrescia.it
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex gap-4 pt-5">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[22px] h-[22px] text-[#008f4c] shrink-0 mt-0.5"
              >
                <path d="M4.98 3.5C4.98 4.60457 4.10457 5.5 3 5.5C1.89543 5.5 1 4.60457 1 3.5C1 2.39543 1.89543 1.5 3 1.5C4.10457 1.5 4.98 2.39543 4.98 3.5ZM1.5 8H4.5V22H1.5V8ZM8 8H10.88V9.91H10.92C11.32 9.15 12.3 8.35 13.84 8.35C17.02 8.35 17.6 10.29 17.6 13.16V22H14.6V14.11C14.6 12.23 14.56 9.82 12.02 9.82C9.44 9.82 9.05 11.73 9.05 13.98V22H6.05V8H8Z" />
              </svg>

              <div>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#75827d] mb-1">
                  Social
                </div>

                <a
                  href="https://it.linkedin.com/company/sigma-studi-brescia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[17px] font-medium text-[#102f2c] hover:text-[#008f4c] transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}