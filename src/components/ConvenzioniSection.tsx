import { ArrowRight, Handshake } from "lucide-react";

type View =
  | "home"
  | "professionisti"
  | "aziende"
  | "privati"
  | "reclami"
  | "whistleblowing"
  | "convenzioni-commercialisti"
  | "convenzioni-avvocati"
  | "convenzioni-tecnici";

export default function ConvenzioniSection({
  goTo,
}: {
  goTo: (view: View) => void;
}) {
  const convenzioni = [
    {
      label: "Commercialisti",
      view: "convenzioni-commercialisti" as View,
    },
    {
      label: "Avvocati",
      view: "convenzioni-avvocati" as View,
    },
    {
      label: "Tecnici professionisti",
      view: "convenzioni-tecnici" as View,
    },
  ];

  return (
    <section
      id="convenzioni"
      className="
        relative
        overflow-hidden

        rounded-[2rem]
        lg:rounded-[2.5rem]

        border
        border-[#dce5df]

        bg-[#f7f5f0]
        text-[#102f2c]

        px-6
        py-8

        lg:px-14
        lg:py-9

        mb-16

        sigma-reveal
      "
    >
      {/* ACCENTI DI SFONDO */}
      <div
        className="
          pointer-events-none
          absolute
          -top-28
          -right-24
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#e6f2eb]
          blur-3xl
          opacity-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-white
          blur-3xl
          opacity-90
        "
      />

      <div
        className="
          relative
          z-10

          grid

          gap-8

          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16

          items-center
        "
      >
        {/* COLONNA SINISTRA */}
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2.5

              text-[#16875f]

              text-[11px]
              lg:text-xs

              uppercase
              tracking-[0.2em]
              lg:tracking-[0.22em]

              font-semibold

              mb-5
              lg:mb-7
            "
          >
            <Handshake
              size={17}
              strokeWidth={1.8}
            />

            Convenzioni professionali
          </div>

          <h2
            className="
              text-[25px]
              lg:text-[38px]

              font-semibold

              tracking-[-0.025em]

              leading-[1.08]

              max-w-[590px]
            "
          >
            Convenzioni professionali progettate intorno alle esigenze reali
            degli studi.
          </h2>

          <div
            className="
              w-10
              lg:w-12

              h-[2px]

              bg-[#16875f]

              mt-6
              mb-5

              lg:mt-8
              lg:mb-7
            "
          />

          <p
            className="
              text-[#526174]

              text-[15px]
              lg:text-[18px]

              leading-[1.65]
              lg:leading-[1.7]

              max-w-[590px]
            "
          >
            Convenzioni dedicate alla tutela del rischio professionale
            sviluppate per ordini, categorie professionali e studi associati.
          </p>
        </div>

        {/* COLONNA DESTRA */}
        <div
          className="
            grid
            gap-3
            lg:gap-4
          "
        >
          {convenzioni.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goTo(item.view)}
              className="
                group

                rounded-[1.25rem]
                lg:rounded-[1.5rem]

                border
                border-[#d8e3dc]

                bg-white/85

                px-4
                py-4

                lg:px-7
                lg:py-7

                flex
                items-center
                justify-between

                text-left

                transition-all
                duration-300

                lg:hover:-translate-y-1
                lg:hover:border-[#a9cbbb]
                lg:hover:shadow-[0_18px_45px_rgba(16,47,44,0.08)]
              "
            >
              <div
                className="
                  flex
                  items-center

                  gap-3.5
                  lg:gap-5

                  min-w-0
                "
              >
                {/* NUMERO */}
                <div
                  className="
                    flex

                    h-10
                    w-10

                    lg:h-11
                    lg:w-11

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#eaf4ee]

                    text-[#16875f]

                    text-[12px]
                    lg:text-sm

                    font-semibold
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TESTI */}
                <div className="min-w-0">
                  <h3
                    className="
                      text-[18px]
                      lg:text-[22px]

                      font-bold

                      tracking-[-0.02em]

                      leading-[1.15]

                      text-[#102f2c]
                    "
                  >
                    {item.label}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      lg:mt-2

                      text-[10px]
                      lg:text-[13px]

                      font-bold

                      uppercase

                      tracking-[0.14em]
                      lg:tracking-[0.16em]

                      text-[#16875f]
                    "
                  >
                    Scopri la convenzione
                  </p>
                </div>
              </div>

              {/* FRECCIA */}
              <ArrowRight
                size={19}
                strokeWidth={1.7}
                className="
                  ml-3
                  shrink-0

                  text-[#16875f]

                  transition-transform
                  duration-300

                  lg:group-hover:translate-x-1
                "
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}