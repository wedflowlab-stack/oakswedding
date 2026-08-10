const FEED = [
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232492/SaveClip.App_641741154_18436996375112437_285037600767506686_n_akzm26.jpg",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785231575/ChatGPT_Image_Jul_28_2026_02_25_52_PM_umm8ot.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785231575/ChatGPT_Image_Jul_28_2026_02_23_45_PM_hffze7.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785226100/ChatGPT_Image_Jul_28_2026_01_24_22_PM_wbskqt.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232503/SaveClip.App_657715536_18178895965380706_4306185084163071359_n_w4pv9w.jpg",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232487/ChatGPT_Image_Jul_28_2026_03_21_11_PM_jtfrfm.webp",
];

export function InstagramFooter() {
  return (
    <footer
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "var(--milk)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="eyebrow mb-10 opacity-80">09 — The Living Archive</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px]">
          {FEED.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/fourfoldpictures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden group"
            >
              <img
                src={src}
                alt={`Recent work ${i + 1}`}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/fourfoldpictures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="inline-block max-w-full [overflow-wrap:anywhere] font-display tracking-[0.32em] text-3xl md:text-5xl uppercase hover:opacity-70 transition-opacity"
          >
            @fourfoldpictures
          </a>
          <p className="cover-line mt-6 opacity-70">
            The door stays open. Walk in when you're ready.
          </p>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--everest)]/20 flex flex-col md:flex-row items-center justify-between gap-3 cover-line opacity-60">
          <span>© four-fold pictures · MMXXVI</span>
          <span>Photographed across India &nbsp;·&nbsp; Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
