export default function Footer({ goTo, goToSection }: any) {
  return (
    <footer className="bg-[#06281f] text-white px-8 lg:px-12 py-11">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.35fr] gap-10 lg:gap-14">

          {/* SIGMA */}
          <div>
            <div className="text-[25px] font-bold tracking-[-0.02em] mb-4">
              SIGMA STUDI{" "}
              <span className="text-[#8ff0c5]">Brescia</span>
            </div>

            <p className="text-[16px] text-white/70 leading-[1.6] mb-6 max-w-[330px]">
              Broker di Assicurazioni per aziende, professionisti e privati.
            </p>

            <div className="space-y-3.5 text-[16px] text-white/70 leading-[1.45]">

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  Sede legale
                </strong>
                Via Codignole 45, 25124 Brescia
              </p>

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  Sede operativa
                </strong>
                Via Malta 12/N, 25124 Brescia
              </p>

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  Telefono
                </strong>
                030 2059880 · 030 2059881
              </p>

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  Fax
                </strong>
                030 221588
              </p>

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  Email
                </strong>
                info@sigmabrescia.it
              </p>

              <p>
                <strong className="block text-white font-semibold mb-0.5">
                  PEC
                </strong>
                sigmabrescia@pec.sigmabrescia.it
              </p>

            </div>
          </div>

          {/* SOLUZIONI */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-5">
              Soluzioni
            </h4>

            <div className="space-y-3 text-[16px] text-white/70">

              <button
                onClick={() => goTo("professionisti")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Professionisti
              </button>

              <button
                onClick={() => goTo("aziende")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Aziende
              </button>

              <button
                onClick={() => goTo("privati")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Privati
              </button>

              <button
                onClick={() => goToSection("automotive")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Automotive
              </button>

            </div>
          </div>

          {/* INFORMAZIONI */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-5">
              Informazioni
            </h4>

            <div className="space-y-3 text-[16px] text-white/70">

              <button
                onClick={() => goToSection("chi-siamo")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Chi siamo
              </button>

              <button
                onClick={() => goTo("reclami")}
                className="block hover:text-[#8ff0c5] transition"
              >
                Reclami
              </button>

              <button
                onClick={() => goTo("whistleblowing")}
                className="block text-left hover:text-[#8ff0c5] transition"
              >
                Segnalazione illeciti
              </button>

              <a
                href="/documenti/elenco-mandati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#8ff0c5] transition"
              >
                Elenco Mandati
              </a>

            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-5">
              Legal
            </h4>

            <div className="text-[16px] text-white/70 leading-[1.55]">

              <div className="mb-4">
                <strong className="block text-white font-semibold mb-0.5">
                  P. IVA e C.F.
                </strong>
                03135470981
              </div>

              <div className="mb-5">
                <strong className="block text-white font-semibold mb-0.5">
                  Iscrizione al RUI
                </strong>
                n. B000314208 del 29 luglio 2009
              </div>

              <p className="mb-4">
                L’attività svolta da Sigma Studi Brescia S.r.l. è regolamentata
                dal Codice delle Assicurazioni Private ed è soggetta al controllo
                dell’Autorità di Vigilanza IVASS.
              </p>

              <p>
                Gli estremi identificativi e di iscrizione dell’intermediario
                possono essere verificati consultando il Registro Unico degli
                intermediari assicurativi e riassicurativi (RUI) sul sito
                internet dell’IVASS (www.ivass.it).
              </p>

            </div>
          </div>

        </div>

        {/* CHIUSURA */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px] text-white/50">
          <span>© Sigma Studi Brescia S.r.l.</span>
          <span>Broker di Assicurazioni</span>
        </div>

      </div>
    </footer>
  );
}