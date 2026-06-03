export default function Footer({ goTo, goToSection }: any) {
  return (
    <footer className="bg-[#06281f] text-white px-8 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
        
        <div>
          <div className="text-2xl font-black mb-4">
            SIGMA STUDI <span className="text-[#8ff0c5]">Brescia</span>
          </div>

          <p className="text-white/75 leading-relaxed mb-6">
            Broker di Assicurazioni per aziende, professionisti e privati.
          </p>

          <div className="space-y-4 text-white/75 leading-relaxed">
            <p>
              <strong className="text-white">Sede legale:</strong><br />
              Via Codignole 45, 25124 Brescia
            </p>

            <p>
              <strong className="text-white">Sede operativa:</strong><br />
              Via Malta 12/N, 25124 Brescia
            </p>

            <p>
              <strong className="text-white">Tel:</strong><br />
              030 2059880 - 030 2059881
            </p>

            <p>
              <strong className="text-white">Fax:</strong><br />
              030 221588
            </p>

            <p>
              <strong className="text-white">Email:</strong><br />
              info@sigmabrescia.it
            </p>

            <p>
              <strong className="text-white">PEC:</strong><br />
              sigmabrescia@pec.sigmabrescia.it
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Soluzioni</h4>

          <div className="space-y-3 text-white/75">
            <button onClick={() => goTo("professionisti")} className="block hover:text-[#8ff0c5] transition">
              Professionisti
            </button>
            <button onClick={() => goTo("aziende")} className="block hover:text-[#8ff0c5] transition">
              Aziende
            </button>
            <button onClick={() => goTo("privati")} className="block hover:text-[#8ff0c5] transition">
              Privati
            </button>
            <button onClick={() => goToSection("automotive")} className="block hover:text-[#8ff0c5] transition">
              Automotive
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5">Informazioni</h4>

          <div className="space-y-3 text-white/75">
            <button onClick={() => goToSection("chi-siamo")} className="block hover:text-[#8ff0c5] transition">
              Chi siamo
            </button>
            <button onClick={() => goTo("reclami")} className="block hover:text-[#8ff0c5] transition">
              Reclami
            </button>
            <button onClick={() => goTo("whistleblowing")} className="block hover:text-[#8ff0c5] transition">
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

        <div>
          <h4 className="text-white font-bold mb-5">Legal</h4>

          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              <strong className="text-white">P. IVA e C.F.</strong><br />
              03135470981
            </p>

            <p>
              <strong className="text-white">Iscrizione al RUI</strong><br />
              n. B000314208 del 29 luglio 2009
            </p>

            <p>
              L’attività svolta da Sigma Studi Brescia S.r.l. è regolamentata dal Codice delle Assicurazioni Private ed è soggetta al controllo dell’Autorità di Vigilanza IVASS.
            </p>

            <p>
              Gli estremi identificativi e di iscrizione dell’intermediario possono essere verificati consultando il Registro Unico degli intermediari assicurativi e riassicurativi (RUI) sul sito internet dell’IVASS (www.ivass.it).
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}