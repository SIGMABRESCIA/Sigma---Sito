import { Mail, MapPin, Phone } from "lucide-react";
export default function ContactSection() {
  return (
    <section id="contatti" className="bg-white rounded-3xl p-10 border border-slate-200 mb-16 scroll-mt-28 shadow-sm sigma-reveal sigma-delay-3">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Costruiamo una consulenza assicurativa realmente coerente con la tua attività.</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">Analizziamo rischi, responsabilità e continuità operativa per aiutarti a valutare coperture più sostenibili, coordinate e costruite sulle esigenze reali della tua attività.</p>
          <a href="mailto:info@sigmabrescia.it" className="sigma-button-motion inline-flex rounded-full bg-[#008f4c] text-white px-7 py-4 font-bold hover:bg-[#007842] transition-all duration-300">Parla con Sigma Studi</a>
        </div>
        <div className="space-y-4 text-slate-700">
          <div className="flex gap-3"><MapPin className="text-[#008f4c] shrink-0" /> Via Codignole 45, 25124 Brescia</div>
          <div className="flex gap-3"><Phone className="text-[#008f4c] shrink-0" /> 030 2059880</div>
          <div className="flex gap-3"><Mail className="text-[#008f4c] shrink-0" /> info@sigmabrescia.it</div>
        </div>
      </div>
    </section>
  );
}