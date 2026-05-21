type View = "home" | "professionisti" | "aziende" | "privati" | "reclami" | "whistleblowing";

type FooterProps = {
  goTo: (view: View) => void;
  goToSection: (sectionId: string) => void;
};

export default function Footer({ goTo, goToSection }: FooterProps) {
  return (
    <footer className="bg-[#0b241d] text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">
        
        <div>
          <div className="font-extrabold text-2xl mb-4">
            SIGMA STUDI <span className="text-[#8ee0b5]">Brescia</span>
          </div>

          <p className="text-white/70 leading-relaxed mb-6">
            Broker di Assicurazioni per aziende, professionisti e privati.
          </p>

          <div className="space-y-3 text-white/60 text-sm leading-relaxed">
            <div>
              <span className="font-semibold text-white/80">
                Sede legale:
              </span>{" "}
              Via Codignole 45, 25124 Brescia
            </div>

            <div>
              <span className="font-semibold text-white/80">
                Sede operativa:
              </span>{" "}
              Via Malta 12/N, 25124 Brescia
            </div>

            <div>
              <span className="font-semibold text-white/80">
                Tel:
              </span>{" "}
              030 2059880 - 030 2059881
            </div>

            <div>
              <span className="font-semibold text-white/80">
                Fax:
              </span>{" "}
              030 221588
            </div>

            <div>
              <span className="font-semibold text-white/80">
                P.IVA:
              </span>{" "}
              03135470981
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Soluzioni</h4>

          <div className="text-white/60 leading-8 flex flex-col items-start">
           <button
  onClick={() => goTo("professionisti")}
  className="hover:text-white transition text-left"
>
  Professionisti
</button>

<button
  onClick={() => goTo("aziende")}
  className="hover:text-white transition text-left"
>
  Aziende
</button>

<button
  onClick={() => goTo("privati")}
  className="hover:text-white transition text-left"
>
  Privati
</button>

<button onClick={() => goToSection("automotive")}
  className="hover:text-white transition text-left"
>
  Automotive
</button>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Informazioni</h4>

          <div className="text-white/60 leading-8 flex flex-col items-start">
            <button
  onClick={() => goTo("home")}
  className="hover:text-white transition text-left"
>
  Chi siamo
</button>

<button
  onClick={() => goTo("reclami")}
  className="hover:text-white transition text-left"
>
  Reclami
</button>

<button
  onClick={() => goTo("whistleblowing")}
  className="hover:text-white transition text-left"
>
  Segnalazione illeciti
</button>

            <a
              href="/documenti/elenco-mandati.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Elenco Mandati
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-lg">Contatti</h4>

          <div className="space-y-4 text-white/60">
            <div>Via Codignole 45 - Brescia</div>
            <div>030 2059880</div>
            <div>info@sigmabrescia.it</div>
            <div>sigmabrescia@pec.sigmabrescia.it</div>
          </div>

          <div className="mt-8 text-white/50 text-sm leading-relaxed">
            Iscrizione al RUI con n. B000314208 del 29 luglio 2009
          </div>

          <div className="mt-4 text-white/40 text-sm leading-relaxed">
            L’attività svolta da Sigma Studi Brescia S.r.l. è regolamentata
            dal Codice delle Assicurazioni Private ed è soggetta al controllo
            dell’Autorità di Vigilanza IVASS.
          </div>
        </div>

      </div>
    </footer>
  );
}