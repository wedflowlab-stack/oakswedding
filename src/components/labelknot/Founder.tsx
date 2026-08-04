import { useEffect, useState } from "react";

const OAKS_LOGO_BLACK =
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785162989/oaks_n1szuc.png";

const VOGUE_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868855/VOGUE_2_-Photoroom_e0bxv3.png";
const WEDDING_SUTRA_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868846/Gemini_Generated_Image_21e7g121e7g121e7-Photoroom_j2g4th.png";
const HARPERS_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868843/BAZZAR-Photoroom_w4mhel.png";
const ELLE_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1780561632/ELLE_LG_tdgul1.webp";
const THE_WED_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1780561634/THE_WED_LG_fw8ziq.webp";
const WEZOREE_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868854/WEZORE-Photoroom_iptptm.png";
const TIMES_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868875/times_of_india-Photoroom_wtd0eu.png";

const FOUNDER_SLIDES = [
  "https://res.cloudinary.com/dtembvivw/image/upload/v1779731626/SaveClip.App_670986817_18579183334008962_886943027846087425_n_ypxhre.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/q_auto/f_auto/v1780301353/ChatGPT_Image_May_25_2026_11_33_59_PM_ze01as.png",
];

const FOUNDER_SLIDE_STYLES = ["cover", "contain"] as const;

export function Founder() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    FOUNDER_SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % FOUNDER_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6 lg:col-span-5 md:order-1">
          <div
            className="relative mx-auto w-full max-w-[540px] aspect-[5/6] md:max-w-[620px] md:aspect-[6/7] overflow-hidden p-[5px]"
            style={{
              backgroundColor: "#E4DBC4",
              boxShadow: "0 18px 40px rgba(70, 52, 19, 0.14)",
            }}
          >
            <div className="relative w-full h-full overflow-hidden bg-[#120f0a]">
              {FOUNDER_SLIDES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Fourfold Pictures — founder & studio"
                  className="absolute inset-0 h-full w-full"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 1.2s ease-in-out",
                    objectFit: FOUNDER_SLIDE_STYLES[i],
                    objectPosition: "center center",
                  }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-7 md:order-2 md:pt-12 md:pl-6 lg:pl-16 text-center">
          <div className="flex justify-center mb-8">
            <img
              src={FOURFOLD_LOGO_BLACK}
              alt="Fourfold Pictures"
              className="w-[70vw] max-w-[360px] md:max-w-[420px] select-none pointer-events-none"
              draggable={false}
            />
          </div>
          <h2 className="editorial-headline text-3xl md:text-5xl">
            A wedding is not a <br />
            <em className="font-display italic">single event.</em>
          </h2>
          <div className="mt-10 mx-auto max-w-xl space-y-5 editorial-body">
            <p>
              It is ten events, forty relationships, and two hundred unrepeatable moments —
              assembled once, for one family, across a few extraordinary hours. And then it is
              over.
            </p>
            <p>
              OAKS was founded by <strong>Rahul and Nasif</strong> — not with a business plan, but with a question neither of them could stop asking: why does wedding photography so rarely feel like the day actually felt?
            </p>
            <p>
              That question became a 25-member team. A body of work recognised by Polka Cafe, named among the Top 20 Indian Wedding Experts by Wezoree, and published in India Today and Wedding Sutra. Weddings documented from Kerala to the mountains, from coastal celebrations to Austria.
            </p>
            <p>
              Behind every frame OAKS produces is a way of seeing that is taught, not assumed. Creative Director <strong>Ajin Tom</strong> has spent years training the team to move past the moment itself — into the feeling underneath it. The expression before the tears arrive. The silence that carries more than anything said out loud.
            </p>
            <p className="font-display italic text-xl md:text-2xl" style={{ color: "var(--everest)" }}>
              Couples who trusted OAKS keep saying the same thing — they felt understood before the first photograph was taken.
            </p>
            <p className="font-display uppercase tracking-masthead text-sm" style={{ color: "var(--everest)" }}>
              That is not an accident. That is the entire intention.
            </p>
          </div>
        </div>
      </div>

      {/* As Seen In — Editorial Grid v8 */}
      <div
        className="relative w-full overflow-hidden mt-20 md:mt-28"
        style={{ backgroundColor: "#18442A" }}
      >
        <div className="px-6 md:px-12 py-20 md:py-28">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <p
              className="font-display uppercase mb-4"
              style={{
                fontSize: "9px",
                letterSpacing: "5px",
                color: "rgba(253,251,240,0.35)",
              }}
            >
              Recognition · Publications
            </p>
            <h3
              className="font-display mb-8"
              style={{
                fontWeight: 800,
                fontSize: "clamp(38px, 4vw, 58px)",
                color: "#FDFBF0",
                lineHeight: 1.1,
              }}
            >
              As Seen In
            </h3>
            <div
              className="mx-auto"
              style={{
                width: "32px",
                height: "1px",
                backgroundColor: "#E4DBC4",
                opacity: 0.35,
              }}
            />
          </div>

          {/* Grid */}
          <div
            style={{
              borderTop: "1px solid rgba(229,219,196,0.12)",
              borderBottom: "1px solid rgba(229,219,196,0.12)",
            }}
          >
            {/* ROW 1 — Vogue featured */}
            <PressFeatured logo={VOGUE_LOGO} alt="Vogue India" num="N° 01" featured logoHeight="clamp(62px, 10vw, 104px)" />

            {/* ROW 2 — Wedding Sutra + Harpers Bazaar */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ borderBottom: "1px solid rgba(229,219,196,0.12)" }}
            >
              <PressCell logo={WEDDING_SUTRA_LOGO} alt="Wedding Sutra" num="N° 02" logoHeight="clamp(50px, 7.5vw, 78px)" divider />
              <PressCell logo={HARPERS_LOGO} alt="Harpers Bazaar" num="N° 03" logoHeight="clamp(50px, 7.5vw, 78px)" />
            </div>

            {/* ROW 3 — Elle + The Wed + Wezoree */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ borderBottom: "1px solid rgba(229,219,196,0.12)" }}
            >
              <PressCell logo={ELLE_LOGO} alt="Elle India" num="N° 04" logoHeight="clamp(46px, 6.9vw, 73px)" divider />
              <PressCell logo={THE_WED_LOGO} alt="The Wed" num="N° 05" logoHeight="clamp(46px, 6.9vw, 73px)" divider />
              <PressCell logo={WEZOREE_LOGO} alt="Wezoree" num="N° 06" logoHeight="clamp(46px, 6.9vw, 73px)" />
            </div>

            {/* ROW 4 — Times of India full width */}
            <PressFeatured logo={TIMES_LOGO} alt="Times of India" num="N° 07" logoHeight="clamp(53px, 8.1vw, 83px)" compact />
          </div>

          {/* Closing line */}
          <p
            className="text-center mt-10 md:mt-14 pb-2 font-display italic"
            style={{
              fontSize: "15px",
              color: "rgba(253,251,240,0.35)",
              letterSpacing: "0.5px",
            }}
          >
            Seven publications. One studio.
          </p>
        </div>
      </div>
    </section>
  );
}

function PressFeatured({
  logo,
  alt,
  num,
  featured,
  logoHeight,
  compact,
}: {
  logo: string;
  alt: string;
  num: string;
  featured?: boolean;
  logoHeight?: string;
  compact?: boolean;
}) {
  return (
    <div
      className="relative group flex items-center justify-center transition-colors duration-[400ms]"
      style={{
        padding: compact ? "24px 24px" : "28px 24px",
        backgroundColor: "#18442A",
        borderBottom: compact ? "none" : "1px solid rgba(229,219,196,0.12)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#18442A")}
    >
      <span
        className="absolute font-display uppercase"
        style={{
          top: "14px",
          left: "20px",
          fontSize: "9px",
          letterSpacing: "3px",
          color: "rgba(229,219,196,0.22)",
        }}
      >
        {num}
      </span>
      {featured && (
        <span
          className="absolute font-display uppercase"
          style={{
            top: "14px",
            right: "20px",
            fontSize: "9px",
            letterSpacing: "3px",
            color: "rgba(229,219,196,0.35)",
          }}
        >
          Featured
        </span>
      )}
      <img
        src={logo}
        alt={alt}
        className="object-contain transition-opacity duration-[400ms] group-hover:opacity-100"
        style={{
          height: logoHeight ?? "clamp(44px, 6.5vw, 64px)",
          width: "auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

function PressCell({
  logo,
  alt,
  num,
  logoHeight = "clamp(38px, 5.5vw, 56px)",
  divider,
}: {
  logo: string;
  alt: string;
  num: string;
  logoHeight?: string;
  divider?: boolean;
}) {
  // Three-column rows get tighter padding than two-column rows
  const isThreeCol = num === "N° 04" || num === "N° 05" || num === "N° 06";
  return (
    <div
      className="relative group flex flex-col items-center justify-center transition-colors duration-[400ms]"
      style={{
        padding: isThreeCol ? "20px 16px" : "24px 20px",
        gap: "12px",
        backgroundColor: "#18442A",
        borderRight: divider ? "1px solid rgba(229,219,196,0.12)" : "none",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#18442A")}
    >
      <span
        className="absolute font-display uppercase"
        style={{
          top: "12px",
          left: "16px",
          fontSize: "9px",
          letterSpacing: "3px",
          color: "rgba(229,219,196,0.22)",
        }}
      >
        {num}
      </span>
      <img
        src={logo}
        alt={alt}
        className="object-contain transition-opacity duration-[400ms] group-hover:opacity-100"
        style={{
          height: logoHeight,
          width: "auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.55,
        }}
      />
    </div>
  );
}

