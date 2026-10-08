import { useState } from "react";
import { ChevronDown, FileText, Menu, X } from "lucide-react";

type View =
  | "home"
  | "professionisti"
  | "aziende"
  | "privati"
    | "automotive"
  | "reclami"
  | "whistleblowing"
  | "documenti";

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
  const [supportOpen, setSupportOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500">

      {/* HEADER PRINCIPALE */}
     <div className="w-full px-5 sm:px-8 lg:px-10 h-20 flex items-center">

        {/* BLOCCO DESKTOP LEGGERMENTE SPOSTATO A SINISTRA */}
        <div className="w-full flex items-center justify-between">

          {/* LOGO */}
   <button
  type="button"
  onClick={() => goTo("home")}
 className="flex items-center justify-start cursor-pointer border-0 outline-none bg-transparent p-0 appearance-none focus:outline-none"
  aria-label="Torna alla Home"
>
  <img
    src="/logo-sigma-new.png"
    alt="Sigma Insurance Broker"
    className="w-[150px] sm:w-[165px] lg:w-[175px] h-auto object-contain"
  />
</button>

          {/* NAVIGAZIONE DESKTOP */}
{/* NAVIGAZIONE DESKTOP */}
<nav className="hidden 2xl:flex items-center gap-8 ml-auto mr-5 text-[14px] font-medium text-[#172033] whitespace-nowrap">

  {/* SOLUZIONI */}
  <div className="relative">
    <button
      type="button"
      onClick={() => setSolutionsOpen(!solutionsOpen)}
      className="relative flex items-center gap-1.5 py-2 transition-colors duration-300 hover:text-[#245A8D]
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                 after:bg-[#245A8D] after:transition-all after:duration-300
                 hover:after:w-full"
    >
      Soluzioni
      <ChevronDown
        size={15}
        className={`transition-transform duration-200 ${
          solutionsOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {solutionsOpen && (
      <div className="absolute top-full left-0 mt-4 w-[220px] flex flex-col rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50">
        <button
          type="button"
          onClick={() => {
            goTo("professionisti");
            setSolutionsOpen(false);
          }}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#eef6fb] hover:text-[#245A8D] transition"
        >
          Professionisti
        </button>

        <button
          type="button"
          onClick={() => {
            goTo("aziende");
            setSolutionsOpen(false);
          }}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#eef6fb] hover:text-[#245A8D] transition"
        >
          Aziende
        </button>

        <button
          type="button"
          onClick={() => {
            goTo("privati");
            setSolutionsOpen(false);
          }}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#eef6fb] hover:text-[#245A8D] transition"
        >
          Privati
        </button>
      </div>
    )}
  </div>

  {/* CONVENZIONI */}
  <button
    onClick={() => goToSection("convenzioni")}
    className="relative py-2 transition-colors duration-300 hover:text-[#245A8D]
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
               after:bg-[#245A8D] after:transition-all after:duration-300
               hover:after:w-full"
  >
    Convenzioni
  </button>

  {/* AUTOMOTIVE */}
  <button
    onClick={() => goTo("automotive")}
    className="relative py-2 transition-colors duration-300 hover:text-[#245A8D]
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
               after:bg-[#245A8D] after:transition-all after:duration-300
               hover:after:w-full"
  >
    Automotive
  </button>

  {/* CONTATTI */}
  <button
    onClick={() => goToSection("contatti")}
    className="relative py-2 transition-colors duration-300 hover:text-[#245A8D]
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
               after:bg-[#245A8D] after:transition-all after:duration-300
               hover:after:w-full"
  >
    Contatti
  </button>

  {/* SUPPORTO */}
  <div className="relative">
    <button
      type="button"
      onClick={() => setSupportOpen(!supportOpen)}
      className="relative flex items-center gap-1.5 py-2 transition-colors duration-300 hover:text-[#245A8D]
                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                 after:bg-[#245A8D] after:transition-all after:duration-300
                 hover:after:w-full"
    >
      Supporto
      <ChevronDown
        size={15}
        className={`transition-transform duration-200 ${
          supportOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {supportOpen && (
      <div className="absolute top-full right-0 mt-4 w-[250px] flex flex-col rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50">
        <button
          type="button"
          onClick={() => {
            goTo("reclami");
            setSupportOpen(false);
          }}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#eef6fb] hover:text-[#245A8D] transition"
        >
          Reclami
        </button>

        <button
          type="button"
          onClick={() => {
            goTo("whistleblowing");
            setSupportOpen(false);
          }}
          className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#eef6fb] hover:text-[#245A8D] transition"
        >
          Segnalazione illeciti
        </button>
      </div>
    )}
  </div>

</nav>

         {/* DOCUMENTI + MENU MOBILE */}
 {/* DOCUMENTI + MENU MOBILE */}
<div className="flex items-center justify-end gap-3 shrink-0">
<button
  type="button"
  onClick={() => goTo("documenti")}
  className="flex items-center gap-2 rounded-full border border-[#245A8D] px-3 sm:px-4 lg:px-5 py-2 text-[13px] sm:text-sm font-semibold text-[#245A8D] hover:bg-[#eef6fb] transition whitespace-nowrap"
>
   <FileText size={18} className="shrink-0" />
<span className="hidden sm:inline">Documenti</span>
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