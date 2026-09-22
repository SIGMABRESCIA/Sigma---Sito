import { Menu, UserRound, X } from "lucide-react";

type View =   | "home"
  | "professionisti"
  | "aziende"
  | "privati"
  | "automotive"
  | "reclami"
  | "whistleblowing";

type HeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  goTo: (view: View) => void;
  goToSection: (sectionId: string) => void;
};

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  goTo,
  goToSection,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-white/60 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500">
     <div className="w-full max-w-[1500px] mx-auto px-8 lg:px-12 h-20 grid grid-cols-[260px_1fr_180px] items-center">
      <div className="flex items-center shrink-0">
  <img
    src="/logo-sigma-originale.png"
    alt="Sigma Studi Brescia"
    className="w-[250px] h-auto object-contain"
  />
</div>

      <nav className="hidden xl:flex items-center justify-center gap-8 text-[16px] font-medium">
          <button onClick={() => goTo("home")} className="hover:text-[#008f4c] transition">Home</button>
          <button onClick={() => goTo("professionisti")} className="hover:text-[#243c7b] transition">Professionisti</button>
          <button onClick={() => goTo("aziende")} className="hover:text-[#0f7a43] transition">Aziende</button>
          <button
  onClick={() => goTo("privati")}
  className="hover:text-[#008f4c] transition"
>
  Privati
</button>
         <button onClick={() => goTo("automotive")} className="hover:text-[#008f4c] transition">Automotive</button>
          <button onClick={() => goToSection("convenzioni")} className="hover:text-[#9a5b16] transition">Convenzioni</button>
          <button onClick={() => goToSection("contatti")} className="hover:text-[#008f4c] transition">Contatti</button>
          <button onClick={() => goTo("reclami")} className="hover:text-[#008f4c] transition">Reclami</button>
          <button onClick={() => goTo("whistleblowing")} className="hover:text-[#243c7b] transition">Segnalazione illeciti</button>
        </nav>
<div className="flex justify-end">
        <button className="hidden md:flex items-center gap-2 rounded-full border border-[#008f4c] px-5 py-2 text-sm font-semibold text-[#008f4c] hover:bg-[#e8f5ef] transition whitespace-nowrap">
          <UserRound size={18} /> Area riservata
        </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white"
          aria-label="Apri menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <button onClick={() => goTo("home")} className="block font-semibold">Home</button>
          <button onClick={() => goTo("professionisti")} className="block font-semibold">Professionisti</button>
          <button onClick={() => goTo("aziende")} className="block font-semibold">Aziende</button>
          <button onClick={() => goTo("privati")} className="block font-semibold">Privati</button>
          <button onClick={() => goTo("automotive")} className="block font-semibold">Automotive</button>
          <button onClick={() => goToSection("convenzioni")} className="block font-semibold">Convenzioni</button>
          <button onClick={() => goToSection("contatti")} className="block font-semibold">Contatti</button>
          <button onClick={() => goTo("reclami")} className="block font-semibold">Reclami</button>
          <button onClick={() => goTo("whistleblowing")} className="block font-semibold">Segnalazione illeciti</button>
        </div>
      )}
    </header>
  );
}