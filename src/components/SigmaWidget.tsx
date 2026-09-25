import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

import {
  ArrowLeft,
  Building2,
  Check,
  ChevronRight,
  FilePlus2,
  Headphones,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from "lucide-react";

/* ============================================================
   TIPI
============================================================ */

type MainPath = "coverage" | "new" | "assistance" | "contact";

type CustomerType =
  | "professionista"
  | "azienda"
  | "famiglia";

type Step =
  | "menu"
  | "customerType"
  | "coverageTopics"
  | "newTopics"
  | "assistanceType"
  | "details"
  | "contact"
  | "success";

type ContactPreference = "telefono" | "email";

/* ============================================================
   COMPONENTE PRINCIPALE
============================================================ */

export default function SigmaWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] =
    useState<Step>("menu");

  const [path, setPath] =
    useState<MainPath | null>(null);

  const [customerType, setCustomerType] =
    useState<CustomerType | null>(null);

  const [selectedTopics, setSelectedTopics] =
    useState<string[]>([]);

  const [assistanceType, setAssistanceType] =
    useState("");

  const [details, setDetails] =
    useState("");

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [contactPreference, setContactPreference] =
    useState<ContactPreference>("email");

  /* ============================================================
     RESET
  ============================================================ */

  const resetWidget = () => {
    setStep("menu");
    setPath(null);
    setCustomerType(null);
    setSelectedTopics([]);
    setAssistanceType("");
    setDetails("");
    setName("");
    setEmail("");
    setPhone("");
    setContactPreference("email");
  };

  /* ============================================================
     CHIUSURA
  ============================================================ */

  const closeWidget = () => {
    setIsOpen(false);

    window.setTimeout(() => {
      resetWidget();
    }, 300);
  };

  /* ============================================================
     APERTURA PERCORSI
  ============================================================ */

  const openPath = (selectedPath: MainPath) => {
    setPath(selectedPath);

    setSelectedTopics([]);
    setCustomerType(null);
    setAssistanceType("");
    setDetails("");

    if (
      selectedPath === "coverage" ||
      selectedPath === "new"
    ) {
      setStep("customerType");
      return;
    }

    if (selectedPath === "assistance") {
      setStep("assistanceType");
      return;
    }

    setStep("contact");
  };

  /* ============================================================
     TIPO CLIENTE
  ============================================================ */

  const selectCustomerType = (
    type: CustomerType
  ) => {
    setCustomerType(type);

    if (path === "coverage") {
      setStep("coverageTopics");
      return;
    }

    if (path === "new") {
      setStep("newTopics");
    }
  };

  /* ============================================================
     ARGOMENTI
  ============================================================ */

  const toggleTopic = (topic: string) => {
    setSelectedTopics((current) =>
      current.includes(topic)
        ? current.filter(
            (item) => item !== topic
          )
        : [...current, topic]
    );
  };

  /* ============================================================
     SUBMIT
  ============================================================ */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    /*
      INVIO REALE DA COLLEGARE SUCCESSIVAMENTE.

      Dati disponibili:

      path
      customerType
      selectedTopics
      assistanceType
      details
      name
      email
      phone
      contactPreference
    */

    setStep("success");
  };

  /* ============================================================
     INDIETRO
  ============================================================ */

  const goBack = () => {
    if (step === "customerType") {
      setStep("menu");
      return;
    }

    if (
      step === "coverageTopics" ||
      step === "newTopics"
    ) {
      setStep("customerType");
      return;
    }

    if (step === "assistanceType") {
      setStep("menu");
      return;
    }

    if (step === "details") {
      if (path === "assistance") {
        setStep("assistanceType");
      } else if (path === "coverage") {
        setStep("coverageTopics");
      } else {
        setStep("newTopics");
      }

      return;
    }

    if (step === "contact") {
      if (path === "contact") {
        setStep("menu");
      } else {
        setStep("details");
      }
    }
  };

  /* ============================================================
     LABEL CLIENTE
  ============================================================ */

  const getCustomerLabel = () => {
    if (customerType === "professionista") {
      return "Professionista";
    }

    if (customerType === "azienda") {
      return "Azienda";
    }

    if (customerType === "famiglia") {
      return "Persona / Famiglia";
    }

    return "";
  };

  /* ============================================================
     LABEL RICHIESTA
  ============================================================ */

  const getRequestLabel = () => {
    if (path === "coverage") {
      return "Verifica delle coperture";
    }

    if (path === "new") {
      return "Nuova esigenza assicurativa";
    }

    if (path === "assistance") {
      return "Assistenza su una polizza";
    }

    return "Contatta Sigma";
  };

  /* ============================================================
     TOPIC COPERTURE
  ============================================================ */

  const coverageTopics =
    customerType === "professionista"
      ? [
          "Responsabilità professionale",
          "Studio e patrimonio",
          "Tutela legale",
          "Salute e protezione personale",
          "Coperture già esistenti",
          "Non sono sicuro",
        ]
      : customerType === "azienda"
        ? [
            "Responsabilità",
            "Attività e patrimonio",
            "Continuità operativa",
            "Cyber e rischi digitali",
            "Coperture già esistenti",
            "Non sono sicuro",
          ]
        : [
            "Casa e patrimonio",
            "Salute",
            "Infortuni",
            "Tutela legale",
            "Coperture già esistenti",
            "Non sono sicuro",
          ];

  /* ============================================================
     TOPIC NUOVE ESIGENZE
  ============================================================ */

  const newTopics =
    customerType === "professionista"
      ? [
          "Responsabilità professionale",
          "Protezione dello studio",
          "Tutela legale",
          "Salute e infortuni",
          "Altro",
        ]
      : customerType === "azienda"
        ? [
            "Responsabilità aziendale",
            "Property e patrimonio",
            "Continuità operativa",
            "Cyber Risk",
            "Tutela delle persone",
            "Altro",
          ]
        : [
            "Casa",
            "Salute",
            "Infortuni",
            "Tutela legale",
            "Protezione della famiglia",
            "Altro",
          ];

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
      {/* ======================================================
          PANNELLO WIDGET
      ====================================================== */}

      <div
        className={`
          fixed z-[100]

          right-4
          sm:right-5

          bottom-[80px]
          sm:bottom-[92px]

          w-[calc(100%-32px)]
          sm:w-[390px]

          max-w-[390px]

          max-h-[calc(100vh-110px)]
          sm:max-h-[calc(100vh-120px)]

          overflow-y-auto

          rounded-[24px]

          border
          border-[#dce5df]

          bg-[#fbfaf7]

          shadow-[0_20px_60px_rgba(15,47,44,0.18)]

          transition-all
          duration-300
          ease-out

          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        {/* ====================================================
            MENU PRINCIPALE
        ==================================================== */}

        {step === "menu" && (
          <>
            <WidgetHeader
              title="Come possiamo aiutarti?"
              description="Scegli l’esigenza più vicina alla tua situazione."
              onClose={closeWidget}
            />

            <div className="px-3 pb-3">
              <MenuOption
                icon={
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Verifica delle coperture"
                description="Valutiamo insieme la tua situazione"
                onClick={() =>
                  openPath("coverage")
                }
              />

              <Divider />

              <MenuOption
                icon={
                  <FilePlus2
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Nuova esigenza assicurativa"
                description="Valutiamo una nuova copertura"
                onClick={() =>
                  openPath("new")
                }
              />

              <Divider />

              <MenuOption
                icon={
                  <Headphones
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Assistenza su una polizza"
                description="Supporto su una copertura esistente"
                onClick={() =>
                  openPath("assistance")
                }
              />

              <Divider />

              <MenuOption
                icon={
                  <Mail
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Contatta Sigma"
                description="Vorrei essere ricontattato"
                onClick={() =>
                  openPath("contact")
                }
              />
            </div>
          </>
        )}

        {/* ====================================================
            SCELTA CLIENTE
        ==================================================== */}

        {step === "customerType" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <div className="px-6 pb-4">
              <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
                {path === "coverage"
                  ? "Verifica delle coperture"
                  : "Nuova esigenza assicurativa"}
              </h2>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#687772]">
                Per iniziare, indicaci a chi è
                riferita la richiesta.
              </p>
            </div>

            <div className="px-3 pb-3">
              <MenuOption
                icon={
                  <UserRound
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Professionista"
                description="Attività professionale o studio"
                onClick={() =>
                  selectCustomerType(
                    "professionista"
                  )
                }
              />

              <Divider />

              <MenuOption
                icon={
                  <Building2
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Azienda"
                description="Impresa o attività aziendale"
                onClick={() =>
                  selectCustomerType("azienda")
                }
              />

              <Divider />

              <MenuOption
                icon={
                  <Users
                    size={21}
                    strokeWidth={1.8}
                  />
                }
                title="Persona / Famiglia"
                description="Protezione personale e familiare"
                onClick={() =>
                  selectCustomerType("famiglia")
                }
              />
            </div>
          </>
        )}

        {/* ====================================================
            VERIFICA COPERTURE
        ==================================================== */}

        {step === "coverageTopics" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <TopicSelection
              title="Cosa vorresti approfondire?"
              description={`${getCustomerLabel()} · Puoi selezionare anche più di una voce.`}
              topics={coverageTopics}
              selectedTopics={selectedTopics}
              toggleTopic={toggleTopic}
              buttonLabel="Continua"
              disabled={
                selectedTopics.length === 0
              }
              onContinue={() =>
                setStep("details")
              }
            />
          </>
        )}

        {/* ====================================================
            NUOVA ESIGENZA
        ==================================================== */}

        {step === "newTopics" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <TopicSelection
              title="Quale esigenza vuoi approfondire?"
              description={`${getCustomerLabel()} · Seleziona una o più aree.`}
              topics={newTopics}
              selectedTopics={selectedTopics}
              toggleTopic={toggleTopic}
              buttonLabel="Continua"
              disabled={
                selectedTopics.length === 0
              }
              onContinue={() =>
                setStep("details")
              }
            />
          </>
        )}

        {/* ====================================================
            ASSISTENZA POLIZZA
        ==================================================== */}

        {step === "assistanceType" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <div className="px-6 pb-4">
              <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
                Assistenza su una polizza
              </h2>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#687772]">
                Indicaci il tipo di supporto di
                cui hai bisogno.
              </p>
            </div>

            <div className="px-3 pb-3">
              {[
                "Informazioni sulla polizza",
                "Modifica o aggiornamento",
                "Assistenza per un sinistro",
                "Scadenza o rinnovo",
                "Altro",
              ].map(
                (item, index, array) => (
                  <div key={item}>
                    <MenuOption
                      icon={
                        <Headphones
                          size={20}
                          strokeWidth={1.8}
                        />
                      }
                      title={item}
                      onClick={() => {
                        setAssistanceType(item);
                        setStep("details");
                      }}
                    />

                    {index <
                      array.length - 1 && (
                      <Divider />
                    )}
                  </div>
                )
              )}
            </div>
          </>
        )}

        {/* ====================================================
            DETTAGLI
        ==================================================== */}

        {step === "details" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <div className="px-6 pb-6">
              <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#008f4c]">
                {getRequestLabel()}
              </div>

              <h2 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
                Raccontaci brevemente la
                situazione.
              </h2>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#687772]">
                Non servono informazioni
                tecniche. È sufficiente una breve
                descrizione della tua esigenza.
              </p>

              {assistanceType && (
                <div className="mt-4 rounded-[14px] bg-[#edf6f1] px-4 py-3">
                  <div className="text-[12px] text-[#687772]">
                    Tipo di assistenza
                  </div>

                  <div className="mt-0.5 text-[14px] font-semibold text-[#102f2c]">
                    {assistanceType}
                  </div>
                </div>
              )}

              {selectedTopics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedTopics.map(
                    (topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-[#edf6f1] px-3 py-1.5 text-[12px] font-medium text-[#08734d]"
                      >
                        {topic}
                      </span>
                    )
                  )}
                </div>
              )}

              <textarea
                value={details}
                onChange={(event) =>
                  setDetails(
                    event.target.value
                  )
                }
                rows={5}
                placeholder="Es. vorrei verificare le coperture della mia attività..."
                className="
                  mt-5
                  w-full
                  resize-none
                  rounded-[16px]
                  border
                  border-[#dce5df]
                  bg-white
                  px-4
                  py-3.5
                  text-[14px]
                  text-[#102f2c]
                  outline-none
                  placeholder:text-[#9aa6a1]
                  focus:border-[#69aa8b]
                  focus:ring-2
                  focus:ring-[#008f4c]/10
                "
              />

              <button
                type="button"
                onClick={() =>
                  setStep("contact")
                }
                className="
                  mt-4
                  w-full
                  rounded-full
                  bg-[#006f4e]
                  px-5
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#005f43]
                "
              >
                Continua
              </button>
            </div>
          </>
        )}

        {/* ====================================================
            CONTATTO
        ==================================================== */}

        {step === "contact" && (
          <>
            <NavigationHeader
              onBack={goBack}
              onClose={closeWidget}
            />

            <form
              onSubmit={handleSubmit}
              className="px-6 pb-6"
            >
              <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#008f4c]">
                {getRequestLabel()}
              </div>

              <h2 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
                Come possiamo ricontattarti?
              </h2>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#687772]">
                Lasciaci i tuoi riferimenti. Un
                consulente Sigma potrà
                approfondire con te la richiesta.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) =>
                    setName(
                      event.target.value
                    )
                  }
                  placeholder="Nome e cognome *"
                  className={inputClass}
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="Email *"
                  className={inputClass}
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(
                      event.target.value
                    )
                  }
                  placeholder="Telefono"
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#687772]">
                  Preferisco essere contattato via
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <PreferenceButton
                    active={
                      contactPreference ===
                      "email"
                    }
                    onClick={() =>
                      setContactPreference(
                        "email"
                      )
                    }
                  >
                    Email
                  </PreferenceButton>

                  <PreferenceButton
                    active={
                      contactPreference ===
                      "telefono"
                    }
                    onClick={() =>
                      setContactPreference(
                        "telefono"
                      )
                    }
                  >
                    Telefono
                  </PreferenceButton>
                </div>
              </div>

              {path === "contact" && (
                <textarea
                  value={details}
                  onChange={(event) =>
                    setDetails(
                      event.target.value
                    )
                  }
                  rows={4}
                  placeholder="Come possiamo aiutarti?"
                  className={`
                    ${inputClass}
                    mt-4
                    resize-none
                  `}
                />
              )}

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-[#008f4c]"
                />

                <span className="text-[12px] leading-[1.5] text-[#687772]">
                  Ho letto l’informativa privacy e
                  acconsento al trattamento dei
                  dati necessario per essere
                  ricontattato.
                </span>
              </label>

              <button
                type="submit"
                className="
                  mt-5
                  w-full
                  rounded-full
                  bg-[#006f4e]
                  px-5
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#005f43]
                "
              >
                Invia richiesta
              </button>
            </form>
          </>
        )}

        {/* ====================================================
            CONFERMA
        ==================================================== */}

        {step === "success" && (
          <div className="px-7 py-8 text-center">
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#e9f6ef]
                text-[#008f4c]
              "
            >
              <Check
                size={27}
                strokeWidth={2}
              />
            </div>

            <h2 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-[#102f2c]">
              Richiesta ricevuta
            </h2>

            <p className="mt-2 text-[14px] leading-[1.6] text-[#687772]">
              Grazie. Abbiamo registrato la tua
              richiesta. Un consulente Sigma
              potrà ricontattarti utilizzando i
              riferimenti indicati.
            </p>

            <button
              type="button"
              onClick={closeWidget}
              className="
                mt-6
                w-full
                rounded-full
                bg-[#006f4e]
                px-5
                py-3.5
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#005f43]
              "
            >
              Chiudi
            </button>

            <button
              type="button"
              onClick={resetWidget}
              className="
                mt-3
                text-[13px]
                font-semibold
                text-[#52615b]
                transition
                hover:text-[#008f4c]
              "
            >
              Torna a Parla con Sigma
            </button>
          </div>
        )}
      </div>

      {/* ======================================================
          PULSANTE MOBILE
          SOLO ICONA
      ====================================================== */}

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeWidget();
          } else {
            setIsOpen(true);
          }
        }}
        aria-label={
          isOpen
            ? "Chiudi Parla con Sigma"
            : "Parla con Sigma"
        }
        className="
          fixed
          z-[101]

          right-4
          bottom-4

          flex
          sm:hidden

          h-12
          w-12

          items-center
          justify-center

          rounded-full

          bg-[#006f4e]

          text-white

          shadow-[0_8px_24px_rgba(0,75,52,0.22)]

          transition-all
          duration-200

          hover:bg-[#005f43]
        "
      >
        {isOpen ? (
          <X
            size={19}
            strokeWidth={1.9}
          />
        ) : (
          <MessageCircle
            size={19}
            strokeWidth={1.9}
          />
        )}
      </button>

      {/* ======================================================
          PULSANTE DESKTOP
          VERSIONE COMPLETA
      ====================================================== */}

      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            closeWidget();
          } else {
            setIsOpen(true);
          }
        }}
        aria-label={
          isOpen
            ? "Chiudi Parla con Sigma"
            : "Parla con Sigma"
        }
        className="
          fixed
          z-[101]

          hidden
          sm:inline-flex
right-120
bottom-5

          items-center
          justify-center
          gap-2.5

          rounded-full
          bg-[#006f4e]

          px-5
          py-3.5

          text-[15px]
          font-semibold
          text-white

          shadow-[0_10px_30px_rgba(0,75,52,0.25)]

          transition-all
          duration-200

          hover:bg-[#005f43]
          hover:-translate-y-0.5
        "
      >
        {isOpen ? (
          <X
            size={19}
            strokeWidth={1.9}
          />
        ) : (
          <MessageCircle
            size={19}
            strokeWidth={1.9}
          />
        )}

        <span>Parla con Sigma</span>
      </button>
    </>
  );
}

/* ============================================================
   HEADER WIDGET
============================================================ */

function WidgetHeader({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-5 px-6 pt-6 pb-5">
      <div>
        <div className="text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
          {title}
        </div>

        <p className="mt-1.5 text-[14px] leading-[1.5] text-[#687772]">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Chiudi"
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          text-[#52615b]
          transition
          hover:bg-[#eef4f0]
        "
      >
        <X size={19} />
      </button>
    </div>
  );
}

/* ============================================================
   NAVIGATION HEADER
============================================================ */

function NavigationHeader({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between px-6 pt-5 pb-4">
      <button
        type="button"
        onClick={onBack}
        className="
          inline-flex
          items-center
          gap-1.5
          text-[13px]
          font-semibold
          text-[#52615b]
          transition
          hover:text-[#008f4c]
        "
      >
        <ArrowLeft size={17} />
        Indietro
      </button>

      <button
        type="button"
        onClick={onClose}
        aria-label="Chiudi"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          text-[#52615b]
          transition
          hover:bg-[#eef4f0]
        "
      >
        <X size={19} />
      </button>
    </div>
  );
}

/* ============================================================
   MENU OPTION
============================================================ */

function MenuOption({
  icon,
  title,
  description,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        gap-4
        rounded-[18px]
        px-4
        py-4
        text-left
        transition
        hover:bg-[#edf6f1]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#e9f6ef]
          text-[#008f4c]
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[15px] font-semibold text-[#102f2c]">
          {title}
        </div>

        {description && (
          <div className="mt-0.5 text-[13px] text-[#75827d]">
            {description}
          </div>
        )}
      </div>

      <ChevronRight
        size={18}
        className="
          shrink-0
          text-[#789088]
          transition-transform
          group-hover:translate-x-1
        "
      />
    </button>
  );
}

/* ============================================================
   DIVIDER
============================================================ */

function Divider() {
  return (
    <div className="mx-4 border-t border-[#e1e8e4]" />
  );
}

/* ============================================================
   TOPIC SELECTION
============================================================ */

function TopicSelection({
  title,
  description,
  topics,
  selectedTopics,
  toggleTopic,
  buttonLabel,
  disabled,
  onContinue,
}: {
  title: string;
  description: string;
  topics: string[];
  selectedTopics: string[];
  toggleTopic: (topic: string) => void;
  buttonLabel: string;
  disabled: boolean;
  onContinue: () => void;
}) {
  return (
    <div className="px-6 pb-6">
      <h2 className="text-[21px] font-semibold tracking-[-0.02em] text-[#102f2c]">
        {title}
      </h2>

      <p className="mt-2 text-[14px] leading-[1.55] text-[#687772]">
        {description}
      </p>

      <div className="mt-5 space-y-2">
        {topics.map((topic) => {
          const selected =
            selectedTopics.includes(topic);

          return (
            <button
              key={topic}
              type="button"
              onClick={() =>
                toggleTopic(topic)
              }
              className={`
                flex
                w-full
                items-center
                justify-between
                gap-3

                rounded-[14px]

                border

                px-4
                py-3

                text-left
                text-[14px]
                font-medium

                transition

                ${
                  selected
                    ? "border-[#8cc7aa] bg-[#edf6f1] text-[#08734d]"
                    : "border-[#dce5df] bg-white text-[#102f2c] hover:border-[#a9cbb9]"
                }
              `}
            >
              <span>{topic}</span>

              <span
                className={`
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border

                  ${
                    selected
                      ? "border-[#008f4c] bg-[#008f4c] text-white"
                      : "border-[#b9c7c0]"
                  }
                `}
              >
                {selected && (
                  <Check
                    size={13}
                    strokeWidth={2.5}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={onContinue}
        className="
          mt-5
          w-full

          rounded-full

          bg-[#006f4e]

          px-5
          py-3.5

          text-[14px]
          font-semibold
          text-white

          transition

          hover:bg-[#005f43]

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        {buttonLabel}
      </button>
    </div>
  );
}

/* ============================================================
   PREFERENCE BUTTON
============================================================ */

function PreferenceButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-[12px]
        border
        px-4
        py-3
        text-[13px]
        font-semibold
        transition

        ${
          active
            ? "border-[#79b99a] bg-[#edf6f1] text-[#08734d]"
            : "border-[#dce5df] bg-white text-[#52615b] hover:border-[#a9cbb9]"
        }
      `}
    >
      {children}
    </button>
  );
}

/* ============================================================
   INPUT CLASS
============================================================ */

const inputClass = `
  w-full
  rounded-[14px]
  border
  border-[#dce5df]
  bg-white
  px-4
  py-3.5
  text-[14px]
  text-[#102f2c]
  outline-none
  placeholder:text-[#9aa6a1]
  focus:border-[#69aa8b]
  focus:ring-2
  focus:ring-[#008f4c]/10
`;