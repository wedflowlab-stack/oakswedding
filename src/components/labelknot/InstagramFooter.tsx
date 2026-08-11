const CL = "https://res.cloudinary.com/rqyl0ifl/image/upload";
const IG = "https://www.instagram.com/oakswedding";

const CELLS = [
  {
    type: "photo" as const,
    src: `${CL}/v1785232492/SaveClip.App_641741154_18436996375112437_285037600767506686_n_akzm26.jpg`,
    pos: "center 30%",
  },
  {
    type: "text" as const,
    headline: "Every Frame",
    body: "A moment that will outlive the day itself — held still, held forever.",
  },
  {
    type: "photo" as const,
    src: `${CL}/v1785231575/ChatGPT_Image_Jul_28_2026_02_25_52_PM_umm8ot.webp`,
    pos: "center 20%",
  },
  {
    type: "text" as const,
    headline: "Where Love Lives",
    body: "In the glance before the vows. In the quiet after the chaos.",
  },
  {
    type: "photo" as const,
    src: `${CL}/v1785232495/SaveClip.App_743975215_18460390114112437_838627506860467206_n_yxpd6w.jpg`,
    pos: "center 25%",
  },
  {
    type: "text" as const,
    headline: "Rare Frames",
    body: "Photographs your children will hold and still feel something.",
  },
  {
    type: "photo" as const,
    src: `${CL}/v1785232487/ChatGPT_Image_Jul_28_2026_03_21_11_PM_jtfrfm.webp`,
    pos: "center 20%",
  },
  {
    type: "text" as const,
    headline: "Good Light",
    body: "We chase the light that only love can make.",
  },
  {
    type: "photo" as const,
    src: `${CL}/v1785232503/SaveClip.App_660801966_18444324925112437_3863561727846764138_n_j1vmac.jpg`,
    pos: "center 30%",
  },
];

export function InstagramFooter() {
  return (
    <>
      <style>{`
        .oig-section { background: #FDFAF6; padding: 72px 0 80px; }
        .oig-inner { max-width: 600px; margin: 0 auto; padding: 0 24px; }

        .oig-header {
          text-align: center; margin-bottom: 40px;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        .oig-icon-wrap {
          width: 48px; height: 48px; border-radius: 14px; padding: 2.5px;
          background: conic-gradient(from 0deg, #f9ce34, #ee2a7b, #6228d7, #f9ce34, #ee2a7b, #6228d7, #f9ce34);
          display: flex; align-items: center; justify-content: center;
        }
        .oig-icon-inner {
          width: 100%; height: 100%; border-radius: 12px; background: #FDFAF6;
          display: flex; align-items: center; justify-content: center; overflow: hidden;
        }
        .oig-icon-inner img { width: 30px; height: 30px; object-fit: contain; }

        .oig-eyebrow {
          font-family: 'Cormorant Garamond', serif; font-size: 9px; font-weight: 400;
          letter-spacing: 0.55em; color: rgba(78,0,0,0.45); text-transform: uppercase; margin: 0;
        }
        .oig-handle {
          font-family: 'Bodoni Moda', 'Didot', Georgia, serif;
          font-size: clamp(26px, 3.8vw, 46px); font-weight: 400; font-optical-sizing: auto;
          color: #4E0000; line-height: 1.1; margin: 0; letter-spacing: -0.01em;
          max-width: 100%; overflow-wrap: anywhere;
        }
        .oig-sub {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(14px, 1.5vw, 17px);
          font-style: italic; font-weight: 300; color: rgba(78,0,0,0.42); margin: 0;
        }
        .oig-rule { width: 32px; height: 0.5px; background: rgba(78,0,0,0.22); margin: 4px auto 0; }

        .oig-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }

        .oig-photo { aspect-ratio: 1 / 1; overflow: hidden; cursor: pointer; position: relative; }
        .oig-photo img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: brightness(0.92) saturate(0.9);
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease;
        }
        .oig-photo:hover img { transform: scale(1.06); filter: brightness(1) saturate(1); }

        .oig-text {
          aspect-ratio: 1 / 1; background: #F5EFE6; display: flex; flex-direction: column;
          justify-content: center; padding: 26px 22px; box-sizing: border-box;
          border: 0.5px solid rgba(78,0,0,0.08);
        }
        .oig-text-eyebrow {
          font-family: 'Cormorant Garamond', serif; font-size: 8px; font-weight: 400;
          letter-spacing: 0.42em; color: rgba(78,0,0,0.35); text-transform: uppercase; margin: 0 0 10px;
        }
        .oig-text-headline {
          font-family: 'Bodoni Moda', 'Didot', Georgia, serif; font-size: clamp(14px, 1.6vw, 20px);
          font-style: italic; font-weight: 400; font-optical-sizing: auto;
          color: #4E0000; line-height: 1.25; margin: 0 0 11px;
        }
        .oig-text-body {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(11px, 1.1vw, 13px);
          font-style: italic; font-weight: 300; color: rgba(78,0,0,0.50); line-height: 1.65; margin: 0 0 14px;
        }
        .oig-text-rule { width: 20px; height: 0.5px; background: rgba(78,0,0,0.22); }

        .oig-btn-wrap { text-align: center; margin-top: 48px; }
        .oig-btn {
          display: inline-block; font-family: 'Cormorant Garamond', serif; font-size: 9px;
          font-weight: 400; letter-spacing: 0.46em; text-transform: uppercase; color: #4E0000;
          border: 1px solid rgba(78,0,0,0.30); padding: 16px 44px; text-decoration: none;
          position: relative; overflow: hidden;
          transition: border-color 0.35s ease, background 0.35s ease;
        }
        .oig-btn::before {
          content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(78,0,0,0.06), transparent);
          animation: oigShimmer 2.8s ease-in-out infinite;
        }
        @keyframes oigShimmer { 0% { left: -60%; } 100% { left: 120%; } }
        .oig-btn:hover { border-color: rgba(78,0,0,0.65); background: rgba(78,0,0,0.04); }

        .oig-colophon {
          max-width: 600px; margin: 56px auto 0; padding: 22px 24px 0;
          border-top: 1px solid rgba(78,0,0,0.14);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          font-family: 'Cormorant Garamond', serif; font-size: 9px; letter-spacing: 0.28em;
          text-transform: uppercase; color: rgba(78,0,0,0.45); text-align: center;
        }

        @media (max-width: 768px) {
          .oig-section { padding: 48px 0 52px; }
          .oig-inner { padding: 0 10px; max-width: 100%; }
          .oig-header { margin-bottom: 28px; gap: 10px; }
          .oig-icon-wrap { width: 42px; height: 42px; border-radius: 12px; }
          .oig-icon-inner { border-radius: 10px; }
          .oig-icon-inner img { width: 27px; height: 27px; }
          .oig-eyebrow { font-size: 7px; letter-spacing: 0.38em; }
          .oig-handle { font-size: 22px; }
          .oig-sub { font-size: 12px; }
          .oig-grid { grid-template-columns: repeat(3, 1fr); gap: 2px; }
          .oig-text { padding: 10px 9px; }
          .oig-text-eyebrow { display: none; }
          .oig-text-headline { font-size: 10px; margin-bottom: 5px; line-height: 1.2; }
          .oig-text-body { font-size: 9px; margin-bottom: 7px; line-height: 1.45; }
          .oig-text-rule { width: 12px; }
          .oig-btn { padding: 13px 24px; font-size: 7.5px; letter-spacing: 0.34em; }
          .oig-btn-wrap { margin-top: 28px; }
          .oig-colophon { margin-top: 36px; padding: 18px 16px 0; font-size: 8px; letter-spacing: 0.22em; }
        }

        @media (min-width: 1024px) {
          .oig-inner { max-width: 820px; }
          .oig-section { padding: 96px 0 108px; }
          .oig-header { margin-bottom: 48px; gap: 16px; }
          .oig-colophon { max-width: 820px; flex-direction: row; justify-content: space-between; }
        }

        @media (prefers-reduced-motion: reduce) {
          .oig-btn::before { animation: none; }
        }
      `}</style>

      <footer className="oig-section" aria-label="Oaks Wedding on Instagram">
        <div className="oig-inner">
          <div className="oig-header">
            <div className="oig-icon-wrap">
              <div className="oig-icon-inner">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="oig-eyebrow">Follow Us On Instagram</p>
            <h2 className="oig-handle">@oakswedding</h2>
            <p className="oig-sub">Captured in the Moment. Remembered Forever.</p>
            <div className="oig-rule" />
          </div>

          <div className="oig-grid">
            {CELLS.map((cell, i) =>
              cell.type === "photo" ? (
                <a
                  key={i}
                  className="oig-photo"
                  href={IG}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Instagram"
                >
                  <img
                    src={cell.src}
                    alt="Oaks Wedding photograph"
                    style={{ objectPosition: cell.pos }}
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="oig-text" key={i}>
                  <p className="oig-text-eyebrow">Oaks Wedding</p>
                  <p className="oig-text-headline">{cell.headline}</p>
                  <p className="oig-text-body">{cell.body}</p>
                  <div className="oig-text-rule" />
                </div>
              ),
            )}
          </div>

          <div className="oig-btn-wrap">
            <a href={IG} target="_blank" rel="noopener noreferrer" className="oig-btn">
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="oig-colophon">
          <span>© Oaks Wedding · MMXXVI</span>
          <span>Photographed across India · Worldwide</span>
        </div>
      </footer>
    </>
  );
}
