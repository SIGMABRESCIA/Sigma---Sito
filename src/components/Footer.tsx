import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Footer({ goTo, goToSection }: any) {
  const [contactsOpen, setContactsOpen] = useState(false);

  return (
    <footer className="bg-[#102A4A] text-white px-6 lg:px-10 py-7 lg:py-9">
      <div className="max-w-7xl mx-auto">

        {/* CONTENUTO PRINCIPALE */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.25fr] gap-x-7 gap-y-8 lg:gap-14">

          {/* SIGMA */}
          <div className="col-span-2 lg:col-span-1">

            <div className="mb-4">
              <div className="text-[23px] font-bold tracking-[-0.03em] leading-none">
                SIGMA
              </div>

              <div className="mt-1.5 text-[13px] font-semibold tracking-[0.08em] text-[#8FC5E8]">
                INSURANCE BROKER
              </div>
            </div>

            <p className="text-[15px] text-white/75 leading-[1.6] mb-5 max-w-[310px]">
              Broker di Assicurazioni per aziende, professionisti e privati.
            </p>

            {/* PULSANTE CONTATTI */}
            <button
              onClick={() => setContactsOpen(!contactsOpen)}
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/20
                bg-white/[0.06]
                px-4
                py-2.5
                text-[14px]
                font-semibold
                text-white
                hover:bg-white/[0.11]
                hover:border-white/30
                transition-all
              "
            >
              Contatti e sedi

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  contactsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

          </div>

          {/* SOLUZIONI */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">
              Soluzioni
            </h4>

            <div className="space-y-2.5 text-[15px] text-white/75">

              <button
                onClick={() => goTo("professionisti")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Professionisti
              </button>

              <button
                onClick={() => goTo("aziende")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Aziende
              </button>

              <button
                onClick={() => goTo("privati")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Privati
              </button>

              <button
                onClick={() => goTo("automotive")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Automotive
              </button>

            </div>
          </div>

          {/* INFORMAZIONI */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">
              Informazioni
            </h4>

            <div className="space-y-2.5 text-[15px] text-white/75">

              <button
                onClick={() => goToSection("chi-siamo")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Chi siamo
              </button>

              <button
                onClick={() => goTo("reclami")}
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Reclami
              </button>

              <button
                onClick={() => goTo("whistleblowing")}
                className="block text-left hover:text-[#8FC5E8] transition-colors"
              >
                Segnalazione illeciti
              </button>

              <a
                href="/documenti/elenco-mandati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#8FC5E8] transition-colors"
              >
                Elenco Mandati
              </a>

            </div>
          </div>

          {/* LEGAL */}
          <div className="col-span-2 lg:col-span-1 border-t border-white/10 pt-6 lg:border-t-0 lg:pt-0">

            <h4 className="text-[15px] font-bold text-white mb-4">
              Legal
            </h4>

            <div className="text-[14px] lg:text-[15px] text-white/75 leading-[1.5]">

              <p className="mb-3">
                <strong className="text-white font-semibold">
                  P. IVA e C.F.
                </strong>
                <span className="mx-1.5 text-white/30">·</span>
                03135470981
              </p>

              <p className="mb-4">
                <strong className="text-white font-semibold">
                  Iscrizione al RUI
                </strong>
                <span className="mx-1.5 text-white/30">·</span>
                n. B000314208 del 29 luglio 2009
              </p>

              <p className="max-w-[390px] text-[13px] lg:text-[14px] leading-[1.6] text-white/60">
                Sigma Insurance Broker S.r.l è soggetta al controllo IVASS.
                L’iscrizione è verificabile nel Registro Unico degli
                Intermediari (RUI) sul sito IVASS.
              </p>

            </div>
          </div>

        </div>

        {/* PANNELLO CONTATTI */}
        <div
          className={`
            grid
            transition-all
            duration-500
            ease-in-out
            ${
              contactsOpen
                ? "grid-rows-[1fr] opacity-100 mt-7"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }
          `}
        >
          <div className="overflow-hidden">

            <div className="border-t border-white/10 pt-6">

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 text-[14px] text-white/70">

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    Sede legale
                  </div>
                  Via Codignole 45, 25124 Brescia
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    Sede operativa
                  </div>
                  Via Malta 12/N, 25124 Brescia
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    Telefono
                  </div>

                  <a
                    href="tel:+390302059880"
                    className="hover:text-white transition-colors"
                  >
                    030 2059880
                  </a>

                  <span className="mx-2 text-white/30">·</span>

                  <a
                    href="tel:+390302059881"
                    className="hover:text-white transition-colors"
                  >
                    030 2059881
                  </a>
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    Fax
                  </div>
                  030 221588
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    Email
                  </div>

                  <a
                    href="mailto:info@sigmabrescia.it"
                    className="hover:text-white transition-colors"
                  >
                    info@sigmabrescia.it
                  </a>
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#8FC5E8] mb-1.5">
                    PEC
                  </div>

                  <a
                    href="mailto:sigmabrescia@pec.sigmabrescia.it"
                    className="hover:text-white transition-colors break-all"
                  >
                    sigmabrescia@pec.sigmabrescia.it
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* CHIUSURA */}
        <div className="mt-7 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-white/50">

          <span>© 2026 Sigma Insurance Broker</span>

          <span className="text-[#8FC5E8]">
            Broker di Assicurazioni
          </span>

        </div>

      </div>
    </footer>
  );
}