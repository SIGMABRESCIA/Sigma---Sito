import { Menu, UserRound, X } from "lucide-react";

type View = "home" | "professionisti" | "aziende" | "privati" | "reclami" | "whistleblowing";

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
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <img src="/logo-sigma-originale.png" alt="Sigma Studi Brescia" className="h-14 w-auto object-contain" />

        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
          <button onClick={() => goTo("home")} className="hover:text-[#008f4c] transition">Home</button>
          <button onClick={() => goTo("professionisti")} className="hover:text-[#243c7b] transition">Professionisti</button>
          <button onClick={() => goTo("aziende")} className="hover:text-[#0f7a43] transition">Aziende</button>
          <button onClick={() => goToSection("automotive")} className="hover:text-[#008f4c] transition">Automotive</button>
          <button onClick={() => goToSection("convenzioni")} className="hover:text-[#9a5b16] transition">Convenzioni</button>
          <button onClick={() => goToSection("contatti")} className="hover:text-[#008f4c] transition">Contatti</button>
          <button onClick={() => goTo("reclami")} className="hover:text-[#008f4c] transition">Reclami</button>
          <button onClick={() => goTo("whistleblowing")} className="hover:text-[#243c7b] transition">Segnalazione illeciti</button>
        </nav>

        <button className="hidden md:flex items-center gap-2 rounded-full border border-[#008f4c] px-5 py-2 text-sm font-semibold text-[#008f4c] hover:bg-[#e8f5ef] transition whitespace-nowrap">
          <UserRound size={18} /> Area riservata
        </button>

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
          <button onClick={() => goToSection("automotive")} className="block font-semibold">Automotive</button>
          <button onClick={() => goToSection("convenzioni")} className="block font-semibold">Convenzioni</button>
          <button onClick={() => goToSection("contatti")} className="block font-semibold">Contatti</button>
          <button onClick={() => goTo("reclami")} className="block font-semibold">Reclami</button>
          <button onClick={() => goTo("whistleblowing")} className="block font-semibold">Segnalazione illeciti</button>
        </div>
      )}
    </header>
  );
}