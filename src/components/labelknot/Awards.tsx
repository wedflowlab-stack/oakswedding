const AWARDS = [
  { name: "Photographer of the Year", org: "Wedding Sutra Favourites", year: "MMXXV" },
  { name: "Editor's Selection", org: "Vogue India · Weddings", year: "MMXXIV" },
  { name: "Cinematic Storytelling Award", org: "The Wedding Filmmakers Guild", year: "MMXXIV" },
  { name: "House of the Year", org: "The Wed · Asia Edition", year: "MMXXIII" },
  { name: "Editorial Distinction", org: "Elle India · Brides", year: "MMXXIII" },
];

const EMBLEMS = [
  {
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778423523/ChatGPT_Image_May_10_2026_07_52_16_PM_omlrmg.webp",
    year: "MMXXV",
    name: "Photographer of the Year",
    org: "Wedding Sutra Favourites",
  },
  {
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778423527/ChatGPT_Image_May_10_2026_07_49_19_PM_sre9vk.webp",
    year: "MMXXIV",
    name: "Cinematic Storytelling Award",
    org: "The Wedding Filmmakers Guild",
  },
  {
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778424369/ChatGPT_Image_May_8_2026_09_54_44_PM_py5wno.webp",
    year: "MMXXIII",
    name: "House of the Year",
    org: "The Wed · Asia Edition",
  },
  {
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778423523/ChatGPT_Image_May_10_2026_07_54_41_PM_mywbk3.webp",
    year: "MMXXIV",
    name: "Editor's Selection",
    org: "Vogue India · Weddings",
  },
  {
    image:
      "https://res.cloudinary.com/dtembvivw/image/upload/v1778511581/ChatGPT_Image_May_8_2026_09_53_14_PM_qwzzsb.webp",
    year: "MMXXIII",
    name: "Editorial Distinction",
    org: "Elle India · Brides",
  },
];

export function Awards() {
  return (
    <section
      className="relative pt-8 md:pt-12 pb-28 md:pb-36"
      style={{ backgroundColor: "var(--milk)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">


        <div
          className="py-16 md:py-20 px-6 md:px-12 mb-16 md:mb-20"
          style={{ backgroundColor: "#4E0000" }}
        >
          <h2
            className="font-display text-center uppercase mb-12"
            style={{
              fontSize: "16px",
              letterSpacing: "4px",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 400,
            }}
          >
            Award Recognition · Selected Honours
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
            style={{ gap: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {EMBLEMS.map((e, i) => (
              <div
                key={i}
                className="px-8 py-10 text-center flex flex-col items-center"
                style={{ backgroundColor: "#4E0000" }}
              >
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6 transition-opacity duration-500 hover:opacity-90"
                />
                <p
                  className="font-display uppercase mb-3"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "4px",
                    color: "rgba(228,219,196,0.5)",
                  }}
                >
                  {e.year}
                </p>
                <h3
                  className="font-display mb-2 text-center"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(18px, 2vw, 24px)",
                    color: "#E4DBC4",
                    lineHeight: 1.2,
                  }}
                >
                  {e.name}
                </h3>
                <p
                  className="font-display italic text-center"
                  style={{
                    fontSize: "13px",
                    color: "rgba(228,219,196,0.6)",
                    letterSpacing: "1px",
                  }}
                >
                  {e.org}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
