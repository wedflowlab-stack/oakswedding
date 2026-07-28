import { useEffect, useState } from "react";

const HERO_IMAGE = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785169284/MAIN_ohyo5s.webp";
const MOBILE_IMAGE = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785216659/HERO_NEEW_gchwkx.png";
const LOGO_IMAGE = "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785208822/ChatGPT_Image_Jul_28_2026_08_48_23_AM_nktbkl.webp";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        .oaks-hero {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Cormorant', Georgia, serif;
          background: #1a1710;
        }

        .oaks-bg {
          position: absolute;
          inset: 0;
          background-image: url('${HERO_IMAGE}');
          background-size: cover;
          background-position: center 20%;
          background-repeat: no-repeat;
          opacity: ${loaded ? 1 : 0};
          transition: opacity 1.2s ease;
        }
        .oaks-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom,
              rgba(10,9,6,0.28) 0%,
              rgba(10,9,6,0.05) 30%,
              rgba(10,9,6,0.05) 55%,
              rgba(10,9,6,0.55) 80%,
              rgba(10,9,6,0.82) 100%
            );
        }

        .oaks-content {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
        }

        .oaks-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 2rem 2.2rem 0;
        }

        .oaks-nav-logo { display: flex; align-items: center; gap: 0; }
        .oaks-nav-logo img {
          height: 18px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.9;
        }

        .oaks-menu {
          display: flex;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .oaks-menu span {
          display: block;
          width: 22px;
          height: 1px;
          background: rgba(253,248,235,0.85);
        }

        .oaks-meta-left { display: flex; flex-direction: column; gap: 1px; }
        .oaks-meta-right { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; }
        .oaks-meta-left span,
        .oaks-meta-right span {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(253,248,220,0.72);
          line-height: 1.7;
        }
        .oaks-meta-left .divider,
        .oaks-meta-right .divider {
          width: 16px;
          height: 0.5px;
          background: rgba(253,248,220,0.45);
          margin-top: 4px;
        }
        .oaks-meta-right .divider { align-self: flex-end; }

        .oaks-india {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(253,248,220,0.6);
        }

        .oaks-masthead-wrap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
        }
        .oaks-masthead {
          font-family: 'Cormorant Garamond', 'Cormorant', Georgia, serif;
          font-weight: 300;
          letter-spacing: -0.01em;
          color: rgba(253,248,220,0.93);
          line-height: 0.82;
          text-align: center;
          width: 100%;
          user-select: none;
          margin: 0;
        }

        .oaks-side-label {
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }
        .oaks-side-label span {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(253,248,220,0.6);
          line-height: 1.8;
        }
        .oaks-side-label .divider-h {
          width: 18px;
          height: 0.5px;
          background: rgba(253,248,220,0.4);
          margin-top: 5px;
        }
        .label-archive { left: 2.2rem; bottom: 38%; }
        .label-collector { right: 2.2rem; bottom: 38%; text-align: right; }
        .label-curated { left: 2.2rem; bottom: 7%; }
        .label-oaks-studio { right: 2.2rem; bottom: 7%; text-align: right; }

        .oaks-bottom {
          padding: 0 2.2rem 2.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }

        .oaks-title-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          margin-bottom: 0.6rem;
        }
        .oaks-tender {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.03em;
          color: rgba(253,248,220,0.97);
          line-height: 0.88;
        }
        .oaks-with-vows {
          display: flex;
          align-items: baseline;
          gap: 0;
          line-height: 0.88;
        }
        .oaks-with {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          color: rgba(253,248,220,0.9);
          margin-right: 0.18em;
        }
        .oaks-vows {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.03em;
          color: rgba(253,248,220,0.97);
        }

        .oaks-rare {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(253,248,220,0.82);
          margin-top: 0.8rem;
        }

        .oaks-signature {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          color: rgba(253,248,220,0.72);
          margin-top: 0.55rem;
        }

        .oaks-hr {
          width: 28px;
          height: 0.5px;
          background: rgba(253,248,220,0.45);
          margin: 0.9rem auto;
        }

        .oaks-footer-label {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(253,248,220,0.6);
        }
        .oaks-cities {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.12em;
          color: rgba(253,248,220,0.55);
          margin-top: 0.3rem;
        }

        .oaks-footer-centre { display: none; }

        /* MOBILE ONLY OVERRIDES */
        @media (max-width: 639px) {
          .oaks-bg {
            background-image: url('${MOBILE_IMAGE}');
            background-size: cover;
            background-position: center center;
            inset: 12px;
          }
          .oaks-masthead-wrap { display: none; }
          .oaks-india { display: none; }
          .oaks-top { display: flex; justify-content: space-between; }
          .oaks-title-block { display: none; }
        }

        /* MOBILE (<640px) */
        .oaks-masthead { font-size: clamp(88px, 26vw, 140px); }
        .oaks-masthead-wrap { padding-top: clamp(48px, 12vw, 80px); }
        .oaks-tender { font-size: clamp(58px, 16.5vw, 88px); }
        .oaks-with { font-size: clamp(36px, 9.5vw, 52px); }
        .oaks-vows { font-size: clamp(68px, 19.5vw, 100px); }
        .oaks-rare { font-size: clamp(10px, 2.6vw, 14px); }
        .oaks-signature { font-size: clamp(15px, 4vw, 20px); }
        .oaks-footer-label { font-size: clamp(7px, 1.9vw, 11px); }
        .oaks-cities { font-size: clamp(10px, 2.8vw, 15px); }

        /* TABLET (>=640px) */
        @media (min-width: 640px) {
          .oaks-top { padding: 2.4rem 3rem 0; }
          .oaks-nav-logo img { height: 22px; }
          .oaks-india { font-size: 10px; top: 2.4rem; }
          .oaks-meta-left span, .oaks-meta-right span { font-size: 10px; }
          .oaks-masthead { font-size: clamp(130px, 18vw, 200px); }
          .oaks-masthead-wrap { padding-top: clamp(50px, 8vw, 90px); }
          .oaks-tender { font-size: clamp(72px, 12vw, 120px); }
          .oaks-with { font-size: clamp(46px, 7.5vw, 76px); }
          .oaks-vows { font-size: clamp(88px, 14.5vw, 145px); }
          .oaks-rare { font-size: clamp(11px, 1.6vw, 16px); }
          .oaks-signature { font-size: clamp(18px, 2.6vw, 26px); }
          .oaks-footer-label { font-size: clamp(8px, 1.2vw, 12px); }
          .oaks-cities { font-size: clamp(12px, 1.8vw, 18px); }
          .label-archive, .label-collector { bottom: 36%; }
          .label-curated, .label-oaks-studio { bottom: 7%; }
          .oaks-side-label span { font-size: 9px; }
          .oaks-bottom { padding: 0 3rem 3.5rem; }
        }

        /* DESKTOP (>=1024px) */
        @media (min-width: 1024px) {
          .oaks-hero { min-height: 100vh; }
          .oaks-bg { background-position: 42% 18%; }
          .oaks-bg::after {
            background:
              linear-gradient(to bottom,
                rgba(10,9,6,0.22) 0%,
                rgba(10,9,6,0.02) 28%,
                rgba(10,9,6,0.02) 52%,
                rgba(10,9,6,0.45) 78%,
                rgba(10,9,6,0.75) 100%
              ),
              linear-gradient(to right,
                rgba(10,9,6,0.18) 0%,
                transparent 60%
              );
          }

          .oaks-top { padding: 3rem 4rem 0; }
          .oaks-nav-logo img { height: 26px; }
          .oaks-india { font-size: 11px; letter-spacing: 0.4em; top: 3rem; }
          .oaks-meta-left span, .oaks-meta-right span { font-size: 10px; }

          .oaks-masthead { font-size: clamp(160px, 16vw, 260px); letter-spacing: -0.02em; }
          .oaks-masthead-wrap { padding-top: clamp(52px, 5.5vw, 100px); }

          .oaks-bottom {
            padding: 0 4rem 4rem;
            align-items: flex-end;
            text-align: right;
            padding-right: 5%;
            padding-left: 52%;
          }
          .oaks-title-block { align-items: flex-end; }
          .oaks-with-vows { justify-content: flex-end; }
          .oaks-hr { margin: 0.9rem 0 0.9rem auto; }

          .oaks-tender { font-size: clamp(80px, 9vw, 145px); }
          .oaks-with { font-size: clamp(52px, 5.6vw, 88px); }
          .oaks-vows { font-size: clamp(95px, 11vw, 172px); }
          .oaks-rare { font-size: clamp(11px, 1.05vw, 17px); letter-spacing: 0.32em; }
          .oaks-signature { font-size: clamp(18px, 1.8vw, 28px); }
          .oaks-footer-label { font-size: clamp(9px, 0.75vw, 12px); }
          .oaks-cities { font-size: clamp(13px, 1.1vw, 18px); }

          .label-archive { left: 4rem; bottom: 40%; }
          .label-collector { right: 4rem; bottom: 40%; }
          .label-curated { left: 4rem; bottom: 8%; }
          .label-oaks-studio { right: 4rem; bottom: 8%; }
          .oaks-side-label span { font-size: 9px; letter-spacing: 0.24em; }

          .oaks-footer-mobile { display: none; }
          .oaks-footer-centre {
            display: block;
            position: absolute;
            bottom: 3.8rem;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            white-space: nowrap;
            z-index: 3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .oaks-bg { transition: none; }
        }
      `}</style>

      <section id="top" className="oaks-hero" aria-label="Oaks Wedding — editorial hero">
        <div className="oaks-bg" role="img" aria-hidden="true" />

        <div className="oaks-masthead-wrap" aria-hidden="true">
          <h1 className="oaks-masthead">OAKS</h1>
        </div>

        <div className="oaks-content">
          <div className="oaks-top">
            <div className="oaks-nav-logo">
              <img src={LOGO_IMAGE} alt="Oaks Wedding" />
            </div>
            <div className="oaks-india" aria-hidden="true">INDIA</div>
            <div className="oaks-menu" role="button" aria-label="Open menu" tabIndex={0}>
              <span /><span />
            </div>
          </div>

          <div className="oaks-side-label" style={{ top: "1.9rem", left: "2.2rem" }}>
            <div className="oaks-meta-left">
              <span>JAN</span>
              <span>FEB</span>
              <span>MMXXVI</span>
              <span>EST. 2016</span>
              <div className="divider" />
            </div>
          </div>

          <div className="oaks-side-label" style={{ top: "1.9rem", right: "2.2rem" }}>
            <div className="oaks-meta-right">
              <span>VOLUME XII</span>
              <span>N° 02</span>
              <div className="divider" />
            </div>
          </div>

          <div className="oaks-side-label label-archive" aria-hidden="true">
            <span>ARCHIVE</span>
            <span>EDITION</span>
            <div className="divider-h" />
          </div>

          <div className="oaks-side-label label-collector" aria-hidden="true">
            <span>COLLECTOR'S</span>
            <span>ISSUE</span>
            <div className="divider-h" style={{ marginLeft: "auto" }} />
          </div>

          <div className="oaks-side-label label-curated" aria-hidden="true">
            <span>CURATED</span>
            <span>MEMORIES</span>
          </div>

          <div className="oaks-side-label label-oaks-studio" aria-hidden="true">
            <span>OAKS</span>
            <span>STUDIO</span>
          </div>

          <div style={{ flex: 1 }} />

          <div className="oaks-bottom">
            <div className="oaks-title-block">
              <div className="oaks-tender" aria-label="Tender with Vows">TENDER</div>
              <div className="oaks-with-vows">
                <span className="oaks-with">with</span>
                <span className="oaks-vows">VOWS</span>
              </div>
            </div>

            <div className="oaks-rare">RARE FRAMES</div>
            <div className="oaks-signature">Good Relationships. Good Life.</div>
            <div className="oaks-hr" />

            <div className="oaks-footer-mobile">
              <div className="oaks-footer-label">PREMIUM WEDDING HOUSE</div>
              <div className="oaks-cities">Mumbai • Jaipur • Bangalore • Dubai • UK</div>
            </div>
          </div>

          <div className="oaks-footer-centre" aria-hidden="true">
            <div className="oaks-footer-label">PREMIUM WEDDING HOUSE</div>
            <div className="oaks-cities">Mumbai • Jaipur • Bangalore • Dubai • UK</div>
          </div>
        </div>
      </section>
    </>
  );
}
