import { useEffect, useRef, useState } from "react";

const OAKS_LOGO_BLACK =
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785162989/oaks_n1szuc.png";

const ABOUT_VIDEO =
  "https://res.cloudinary.com/pcodbmuo/video/upload/v1786129737/OAKS_RATNA_hsdei0.mp4";

const VOGUE_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868855/VOGUE_2_-Photoroom_e0bxv3.png";
const WEDDING_SUTRA_LOGO =
  "https://res.cloudinary.com/pcodbmuo/image/upload/v1786427870/wsip_wpl7dj.webp";
const HARPERS_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868843/BAZZAR-Photoroom_w4mhel.png";
const ELLE_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1780561632/ELLE_LG_tdgul1.webp";
const THE_WED_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1780561634/THE_WED_LG_fw8ziq.webp";
const WEZOREE_LOGO =
  "https://res.cloudinary.com/pcodbmuo/image/upload/v1786427870/wexp_nepgxt.webp";
const TIMES_LOGO =
  "https://res.cloudinary.com/drszur4wl/image/upload/v1776868875/times_of_india-Photoroom_wtd0eu.png";

function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [showCenter, setShowCenter] = useState(true);

  useEffect(() => {
    const el = wrapRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      setShowCenter(true);
      return;
    }
    const t = setTimeout(() => setShowCenter(false), 2000);
    return () => clearTimeout(t);
  }, [isPlaying]);

  const seek = (clientX: number) => {
    const bar = barRef.current;
    const video = videoRef.current;
    if (!bar || !video || !video.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio);
  };

  const onBarDown = (e: React.PointerEvent) => {
    seek(e.clientX);
    const move = (ev: PointerEvent) => seek(ev.clientX);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const controlsVisible = hovered || !isPlaying;

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-[92vw] aspect-[4/3] md:w-[88vw] md:aspect-[16/9] lg:w-[72vw] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        src={ABOUT_VIDEO}
        playsInline
        loop={false}
        className="h-full w-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(e) => setIsMuted((e.target as HTMLVideoElement).muted)}
        onTimeUpdate={(e) => {
          const v = e.target as HTMLVideoElement;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
        onClick={togglePlay}
      />

      <button
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlay}
        className="absolute rounded-full flex items-center justify-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 52,
          height: 52,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.25)",
          opacity: !isPlaying || hovered || showCenter ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M7 4l13 8-13 8z" />
          </svg>
        )}
      </button>

      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          padding: "0 12px 10px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)",
          opacity: controlsVisible ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        <div
          ref={barRef}
          onPointerDown={onBarDown}
          className="w-full cursor-pointer group"
          style={{ paddingBlock: 6 }}
        >
          <div
            className="w-full transition-[height] duration-150 group-hover:h-[5px]"
            style={{ height: 3, background: "rgba(255,255,255,0.20)" }}
          >
            <div
              style={{
                width: `${progress * 100}%`,
                height: "100%",
                background: "rgba(255,255,255,0.85)",
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            aria-label={isMuted ? "Unmute" : "Mute"}
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              v.muted = !v.muted;
              setIsMuted(v.muted);
            }}
            className="rounded-full flex items-center justify-center"
            style={{
              width: 32,
              height: 32,
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {isMuted ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M4 9v6h4l5 4V5L8 9H4z" />
                <path
                  d="M16 9l5 6M21 9l-5 6"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M4 9v6h4l5 4V5L8 9H4z" />
                <path
                  d="M16.5 8.5a5 5 0 010 7"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Founder() {
  return (
    <section
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--sand)", color: "var(--everest)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <img
            src={OAKS_LOGO_BLACK}
            alt="OAKS Wedding"
            className="w-[70vw] max-w-[360px] md:max-w-[420px] select-none pointer-events-none"
            draggable={false}
          />
          <span
            className="font-display uppercase"
            style={{
              fontSize: "12px",
              letterSpacing: "0.35em",
              fontWeight: 400,
              color: "var(--everest)",
            }}
          >
            Wedding
          </span>
        </div>

        <AboutVideo />

        <p
          className="font-display italic text-center"
          style={{
            fontWeight: 300,
            fontSize: "clamp(15px, 4vw, 20px)",
            color: "var(--everest)",
            maxWidth: 560,
            margin: "1.6rem auto 0",
            lineHeight: 1.6,
            padding: "0 1.4rem",
          }}
        >
          "That feeling you get from Oaks is not an accident. That is the entire
          intention."
        </p>
      </div>


      {/* As Seen In — Editorial Grid v8 */}
      <div
        className="relative w-full overflow-hidden mt-20 md:mt-28"
        style={{ backgroundColor: "#4E0000" }}
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
        backgroundColor: "#4E0000",
        borderBottom: compact ? "none" : "1px solid rgba(229,219,196,0.12)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4E0000")}
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
        backgroundColor: "#4E0000",
        borderRight: divider ? "1px solid rgba(229,219,196,0.12)" : "none",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(253,251,240,0.04)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4E0000")}
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

