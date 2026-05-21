import { Handshake } from "lucide-react";
export default function ConvenzioniSection() {

  return (
    <section id="convenzioni" className="bg-[#0f3328] text-white rounded-3xl p-10 mb-16 overflow-hidden relative scroll-mt-28 sigma-reveal sigma-delay-2">
      <div className="grid lg:grid-cols-2 gap-10 items-center relative">
        <div>
          <div className="flex items-center gap-3 mb-4 text-[#8ee0b5]"><Handshake /> Convenzioni dedicate</div>
          <h2 className="text-4xl font-extrabold mb-4">Accordi per ordini professionali e categorie specialistiche.</h2>
          <p className="text-white/75 leading-relaxed">Convenzioni dedicate e coperture specialistiche sviluppate per ordini professionali, studi associati e realtà che richiedono una consulenza assicurativa strutturata.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Commercialisti", "Avvocati", "Architetti e Ingegneri", "Geometri"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-5 font-semibold">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}