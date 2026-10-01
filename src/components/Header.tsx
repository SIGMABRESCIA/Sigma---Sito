import { Menu, UserRound, X } from "lucide-react";

type View =
  | "home"
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500">

      {/* HEADER PRINCIPALE */}
     <div className="w-full px-5 sm:px-8 lg:px-10 h-20 flex items-center">

        {/* BLOCCO DESKTOP LEGGERMENTE SPOSTATO A SINISTRA */}
        <div className="w-full grid grid-cols-[190px_minmax(0,1fr)_190px] items-center gap-8">

          {/* LOGO */}
          <div className="flex items-center justify-start">
            <img
              src="/logo-sigma-new.png"
              alt="Sigma Insurance Broker"
              className="w-[150px] sm:w-[165px] lg:w-[175px] h-auto object-contain"
            />
          </div>

          {/* NAVIGAZIONE DESKTOP */}
    <nav className="hidden 2xl:flex w-full items-center justify-between text-[14px] font-medium text-[#172033] whitespace-nowrap">
            <button
              onClick={() => goTo("home")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Home
            </button>

            <button
              onClick={() => goTo("professionisti")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Professionisti
            </button>

            <button
              onClick={() => goTo("aziende")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Aziende
            </button>

            <button
              onClick={() => goTo("privati")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Privati
            </button>

            <button
              onClick={() => goTo("automotive")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Automotive
            </button>

            <button
              onClick={() => goToSection("convenzioni")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Convenzioni
            </button>

            <button
              onClick={() => goToSection("contatti")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Contatti
            </button>

            <button
              onClick={() => goTo("reclami")}
              className="hover:text-[#245A8D] transition-colors"
            >
              Reclami
            </button>

            <button
              onClick={() => goTo("whistleblowing")}
           className="hover:text-[#245A8D] transition-colors whitespace-nowrap"
            >
           Segnalazione illeciti
            </button>

          </nav>

          {/* AREA RISERVATA + MENU MOBILE */}
         <div className="flex items-center justify-end gap-3 shrink-0 ml-auto pl-5 sm:pl-0">
<button className="flex items-center gap-2 rounded-full border border-[#245A8D] px-3 sm:px-4 lg:px-5 py-2 text-[13px] sm:text-sm font-semibold text-[#245A8D] hover:bg-[#eef6fb] transition whitespace-nowrap">
           <UserRound size={18} className="shrink-0" />
<span className="hidden sm:inline">Area riservata</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex 2xl:hidden items-center justify-center w-11 h-11 rounded-full border border-slate-200 bg-white text-[#17324D] hover:border-[#9fc5df] hover:bg-[#eef6fb] transition"
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
            {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>

          </div>
        </div>
      </div>

      {/* MENU MOBILE / TABLET */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-white border-t border-slate-200 px-6 py-5 shadow-lg text-[#17324D]">

          <div className="flex flex-col items-start gap-4">

            <button
              onClick={() => goTo("home")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Home
            </button>

            <button
              onClick={() => goTo("professionisti")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Professionisti
            </button>

            <button
              onClick={() => goTo("aziende")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Aziende
            </button>

            <button
              onClick={() => goTo("privati")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Privati
            </button>

            <button
              onClick={() => goTo("automotive")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Automotive
            </button>

            <button
              onClick={() => goToSection("convenzioni")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Convenzioni
            </button>

            <button
              onClick={() => goToSection("contatti")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Contatti
            </button>

            <button
              onClick={() => goTo("reclami")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Reclami
            </button>

            <button
              onClick={() => goTo("whistleblowing")}
              className="font-semibold hover:text-[#245A8D] transition"
            >
              Segnalazione illeciti
            </button>

          </div>
        </div>
      )}
    </header>
  );
}