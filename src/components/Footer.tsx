export default function Footer({ goTo, goToSection }: any) {
  return (
    <footer className="bg-[#06281f] text-white px-6 lg:px-10 py-8 lg:py-9">
      <div className="max-w-7xl mx-auto">

        {/* CONTENUTO PRINCIPALE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.45fr_0.7fr_0.85fr_1.3fr] gap-9 lg:gap-12">

          {/* SIGMA */}
          <div>
            <div className="text-[22px] font-bold tracking-[-0.025em] mb-3">
              SIGMA STUDI{" "}
              <span className="text-[#8ff0c5]">Brescia</span>
            </div>

            <p className="text-[15px] text-white/70 leading-[1.55] mb-4 max-w-[320px]">
              Broker di Assicurazioni per aziende, professionisti e privati.
            </p>

            <div className="space-y-2.5 text-[14px] lg:text-[15px] text-white/70 leading-[1.4]">

              <p>
                <strong className="block text-white font-semibold">
                  Sede legale
                </strong>
                Via Codignole 45, 25124 Brescia
              </p>

              <p>
                <strong className="block text-white font-semibold">
                  Sede operativa
                </strong>
                Via Malta 12/N, 25124 Brescia
              </p>

              <p>
                <strong className="text-white font-semibold">Telefono</strong>
                <span className="mx-1.5 text-white/30">·</span>
                <a
                  href="tel:+390302059880"
                  className="hover:text-[#8ff0c5] transition"
                >
                  030 2059880
                </a>
                <span className="mx-1 text-white/30">·</span>
                <a
                  href="tel:+390302059881"
                  className="hover:text-[#8ff0c5] transition"
                >
                  030 2059881
                </a>
              </p>

              <p>
                <strong className="text-white font-semibold">Fax</strong>
                <span className="mx-1.5 text-white/30">·</span>
                030 221588
              </p>

              <p>
                <strong className="text-white font-semibold">Email</strong>
                <span className="mx-1.5 text-white/30">·</span>
                <a
                  href="mailto:info@sigmabrescia.it"
                  className="hover:text-[#8ff0c5] transition"
                >
                  info@sigmabrescia.it
                </a>
              </p>

              <p>
                <strong className="text-white font-semibold">PEC</strong>
                <span className="mx-1.5 text-white/30">·</span>
                <a
                  href="mailto:sigmabrescia@pec.sigmabrescia.it"
                  className="hover:text-[#8ff0c5] transition"
                >
                  sigmabrescia@pec.sigmabrescia.it
                </a>
              </p>

            </div>
          </div>

          {/* SOLUZIONI */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-4">
              Soluzioni
            </h4>

            <div className="space-y-2.5 text-[15px] text-white/70">

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
                onClick={() => goTo("automotive")}
                className="block hover:text-[#8ff0c5] transition"
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

            <div className="space-y-2.5 text-[15px] text-white/70">

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
            <h4 className="text-[15px] font-bold text-white mb-4">
              Legal
            </h4>

            <div className="text-[14px] lg:text-[15px] text-white/70 leading-[1.5]">

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

              <p className="max-w-[390px]">
                Sigma Studi Brescia S.r.l. è soggetta al controllo IVASS.
                L’iscrizione è verificabile nel Registro Unico degli
                Intermediari (RUI) sul sito IVASS.
              </p>

            </div>
          </div>

        </div>

        {/* CHIUSURA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-white/45">
          <span>© Sigma Studi Brescia S.r.l.</span>
          <span>Broker di Assicurazioni</span>
        </div>

      </div>
    </footer>
  );
}