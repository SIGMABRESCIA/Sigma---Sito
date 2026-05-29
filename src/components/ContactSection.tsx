import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contatti"
      className="bg-white rounded-3xl p-10 border border-slate-200 mb-16 scroll-mt-28 shadow-sm sigma-reveal"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-4xl font-extrabold mb-4 text-[#0b132b] leading-tight">
            Costruiamo una consulenza assicurativa realmente coerente con la tua attività.
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed max-w-xl">
            Analizziamo rischi, responsabilità e continuità operativa per aiutarti
            a valutare coperture più sostenibili, coordinate e costruite sulle
            esigenze reali della tua attività.
          </p>

          <a
            href="mailto:info@sigmabrescia.it"
            className="sigma-button-motion inline-flex rounded-full bg-[#008f4c] text-white px-6 py-3 font-semibold"
          >
            Parla con Sigma Studi
          </a>
        </div>

        <div className="space-y-5 text-slate-700">

          <div className="flex items-center gap-3">
            <MapPin className="text-[#008f4c] shrink-0" />
            Via Malta 12/N, 25124 Brescia
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-[#008f4c] shrink-0" />
            030 2059880
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-[#008f4c] shrink-0" />
            info@sigmabrescia.it
          </div>

          <div className="flex items-center gap-3">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#008f4c]"
            >
              <path d="M4.98 3.5C4.98 4.60457 4.10457 5.5 3 5.5C1.89543 5.5 1 4.60457 1 3.5C1 2.39543 1.89543 1.5 3 1.5C4.10457 1.5 4.98 2.39543 4.98 3.5ZM1.5 8H4.5V22H1.5V8ZM8 8H10.88V9.91H10.92C11.32 9.15 12.3 8.35 13.84 8.35C17.02 8.35 17.6 10.29 17.6 13.16V22H14.6V14.11C14.6 12.23 14.56 9.82 12.02 9.82C9.44 9.82 9.05 11.73 9.05 13.98V22H6.05V8H8Z"/>
            </svg>

            <a
              href="https://it.linkedin.com/company/sigma-studi-brescia"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#008f4c] transition-colors"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}