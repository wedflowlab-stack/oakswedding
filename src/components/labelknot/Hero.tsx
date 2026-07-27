import { useEffect, useState } from "react";
import { HERO_IMAGE } from "@/lib/labelknot-images";

const HERO_LOGO = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785162989/oaks_n1szuc.png";

const SLIDES = [
  HERO_IMAGE,
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536030/The_beginning_of_beautiful_forever_%EF%B8%8F_Reeyaa_Nair_MR_Khanijo_Designed_Photographed_-_f_1_l56ehr.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536012/SnapInsta.to_658813963_18576268351025068_8987836767423854437_n_nyfw6f.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536019/She_wore_the_wind_like_a_whisper_draped_in_sunlight_and_silence_a_fleeting_dream_by_the_water_s_fmyacn.jpg",
  "https://res.cloudinary.com/dtembvivw/image/upload/v1777536024/SnapInsta.to_566520930_18096225913704263_3186290050904152969_n_sifgmv.jpg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Slideshow */}
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Label Knot — premium Indian wedding photography"
          crossOrigin="anonymous"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
          loading={i === 0 ? "eager" : "lazy"}
          onError={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
        />
      ))}

      {/* Editorial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/55 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent z-10" />

      {/* Cover anatomy */}
      <div
        className="relative z-10 h-full w-full flex flex-col"
        style={{ color: "var(--milk)" }}
      >
        {/* Top issue line */}
        <div className="px-6 md:px-12 pt-24 md:pt-28 flex items-start justify-between fade-up">
          <span className="cover-line opacity-90">
            Volume XII &nbsp;·&nbsp; MMXXVI
          </span>
          <span className="cover-line hidden md:block opacity-90">
            Est. 2020 &nbsp;·&nbsp; Six Years of Trust
          </span>
        </div>

        {/* Masthead */}
        <div className="px-6 md:px-12 mt-[10vh] md:mt-10 fade-up text-center flex flex-col items-center">
          <h1 className="sr-only">Fourfold Pictures</h1>
          <img
            src={HERO_LOGO}
            alt="Fourfold Pictures"
            className="w-[85vw] max-w-[640px] md:w-[60vw] lg:w-[52vw] select-none pointer-events-none"
            draggable={false}
          />
          <p className="mt-5 md:mt-6 font-display italic text-base md:text-xl tracking-wide opacity-90">
            Where stories become timeless art
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Cover lines — short, editorial, magazine-rhythm */}
        <div className="px-6 md:px-12 pb-16 md:pb-24 fade-up">
          {/* Editorial row: N°01 left · N°02 right (mirrored) */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 items-start -translate-y-[3vh]">
            <div>
              <p className="cover-line opacity-80 mb-2">N° 01</p>
              <p className="font-display italic text-xl md:text-3xl leading-tight">
                Subtle Luxury,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Quiet Vows</span>
              </p>
            </div>
            <div className="text-right -mt-[calc(2.5rem+3vh)] md:-mt-[calc(2rem+3vh)]">
              <p className="cover-line opacity-80 mb-2">N° 02</p>
              <p className="font-display italic text-xl md:text-3xl leading-tight">
                Rare Frames,
                <br />
                <span className="not-italic uppercase tracking-[0.04em]">Fine Moments</span>
              </p>
            </div>
          </div>

          {/* Centered: Premium Wedding House + locations */}
          <div className="mt-6 md:mt-8 text-center space-y-2 md:space-y-3">
            <p className="cover-line opacity-80">Premium Wedding House</p>
            <p className="font-display text-sm md:text-2xl leading-snug tracking-wide whitespace-nowrap">
              MUMBAI · JAIPUR· BANGLORE · DUBAI · UK ·
            </p>
            <p className="font-display text-sm md:text-2xl leading-snug tracking-wide">
              Worldwide
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
