import { useEffect, useRef, useState, type ReactNode } from "react";

import cameraLandscapeAsset from "@/assets/camera-front-01.png.asset.json";
import cameraVerticalAsset from "@/assets/camera-vertical-wide.png.asset.json";
import sketchPavilionAsset from "@/assets/sketch-pavilion.png.asset.json";
import sketchInteriorAsset from "@/assets/sketch-interior.png.asset.json";

const cameraLandscape = cameraLandscapeAsset.url;
const cameraVertical = cameraVerticalAsset.url;
const sketchPavilion = sketchPavilionAsset.url;
const sketchInterior = sketchInteriorAsset.url;


const YT_ONE = "r9XBRK3OGVM";
const YT_THREE = "DVbTEWoJ3cU";

const STILLS = [
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232495/SaveClip.App_743975215_18460390114112437_838627506860467206_n_yxpd6w.jpg",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785231575/ChatGPT_Image_Jul_28_2026_02_25_52_PM_umm8ot.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785227998/ChatGPT_Image_Jul_28_2026_02_08_23_PM_w6n0il.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232489/ChatGPT_Image_Jul_28_2026_03_15_30_PM_yjrxze.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785226674/ChatGPT_Image_Jul_28_2026_01_46_16_PM_s0wk1d.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785226453/ChatGPT_Image_Jul_28_2026_01_41_21_PM_yjm5sk.webp",
  "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785651717/ChatGPT_Image_Jul_27_2026_09_33_22_PM_mjqur0.webp",
];

const STAMPS: Record<number, string> = { 0: "00:13", 2: "00:47", 4: "01:46", 6: "02:11" };

/** Fade + rise on first entry into the viewport. */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-8% 0px -12% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aom-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const fmt = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r < 10 ? "0" : ""}${r}`;
};

/** Mounts a muted looping YouTube embed only once it approaches the viewport. */
function LazyFilm({
  id,
  title,
  cover,
  controls,
  frameRef,
}: {
  id: string;
  title: string;
  cover?: boolean;
  controls?: boolean;
  frameRef?: React.MutableRefObject<HTMLIFrameElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const send = (func: string, args: unknown[] = []) => {
    frame.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  // Subscribe to the player's info stream for time / duration.
  useEffect(() => {
    if (!controls || !load) return;
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string" || !e.origin.includes("youtube")) return;
      try {
        const msg = JSON.parse(e.data) as {
          event?: string;
          info?: { currentTime?: number; duration?: number; playerState?: number };
        };
        const info = msg.info;
        if (!info) return;
        if (typeof info.currentTime === "number") setTime(info.currentTime);
        if (typeof info.duration === "number" && info.duration > 0) setDuration(info.duration);
        if (typeof info.playerState === "number") setPlaying(info.playerState === 1);
      } catch {
        /* ignore non-player messages */
      }
    };
    window.addEventListener("message", onMessage);
    const hello = window.setInterval(() => {
      frame.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: title }),
        "*",
      );
    }, 1000);
    return () => {
      window.removeEventListener("message", onMessage);
      window.clearInterval(hello);
    };
  }, [controls, load, title]);

  const pct = duration ? Math.min(100, (time / duration) * 100) : 0;

  const src =
    `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&loop=1&playlist=${id}` +
    `&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&iv_load_policy=3` +
    `&cc_load_policy=0&cc=0&hl=en&enablejsapi=1`;

  return (
    <div
      ref={ref}
      onTouchStart={() => {
        setTouched(true);
        window.setTimeout(() => setTouched(false), 3500);
      }}
      className={`aom-film group absolute inset-0 overflow-hidden bg-[oklch(0.12_0.005_60)] ${
        touched ? "is-touched" : ""
      }`}
    >
      {load && (
        <iframe
          ref={frame}
          src={src}
          title={title}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          tabIndex={-1}
          className={
            cover
              ? "pointer-events-none absolute left-1/2 top-1/2 h-full w-[178%] -translate-x-1/2 -translate-y-1/2 border-0"
              : "pointer-events-none absolute inset-0 h-full w-full border-0"
          }
        />
      )}

      {controls && load && (
        <div className="aom-controls absolute inset-x-0 bottom-0 z-30 px-[3.5%] pb-[3%]">
          <div
            role="progressbar"
            aria-label="Film progress"
            aria-valuenow={Math.round(pct)}
            tabIndex={0}
            onClick={(e) => {
              const box = e.currentTarget.getBoundingClientRect();
              const r = (e.clientX - box.left) / box.width;
              if (duration) send("seekTo", [r * duration, true]);
            }}
            className="aom-bar"
          >
            <span className="aom-bar-fill" style={{ width: `${pct}%` }} />
          </div>

          <div className="mt-[2.5%] flex items-center gap-[4%]">
            <button
              type="button"
              aria-label={playing ? "Pause film" : "Play film"}
              onClick={() => {
                send(playing ? "pauseVideo" : "playVideo");
                setPlaying(!playing);
              }}
              className="aom-ctrl"
            >
              {playing ? (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <rect x="2.5" y="1.5" width="2.4" height="9" />
                  <rect x="7.1" y="1.5" width="2.4" height="9" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M3 1.5 L10.5 6 L3 10.5 Z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              aria-label={muted ? "Unmute film" : "Mute film"}
              onClick={() => {
                if (muted) {
                  send("unMute");
                  send("setVolume", [70]);
                } else {
                  send("mute");
                }
                setMuted(!muted);
              }}
              className="aom-ctrl"
            >
              <svg viewBox="0 0 14 12" aria-hidden="true">
                <path d="M1 4.4 H3.3 L6.2 1.8 V10.2 L3.3 7.6 H1 Z" />
                {muted ? (
                  <path d="M8.6 4.2 L12 7.8 M12 4.2 L8.6 7.8" stroke="currentColor" strokeWidth="1.1" fill="none" />
                ) : (
                  <path
                    d="M8.8 3.8 A3.4 3.4 0 0 1 8.8 8.2 M10.6 2.4 A5.4 5.4 0 0 1 10.6 9.6"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                )}
              </svg>
            </button>

            <span className="aom-time">
              {fmt(time)} <span className="opacity-50">/ {fmt(duration)}</span>
            </span>

            <button
              type="button"
              aria-label="Fullscreen"
              onClick={() => {
                const el = ref.current;
                if (!el) return;
                if (document.fullscreenElement) void document.exitFullscreen();
                else void el.requestFullscreen?.();
              }}
              className="aom-ctrl ml-auto"
            >
              <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M1 4 V1 H4 M8 1 H11 V4 M11 8 V11 H8 M4 11 H1 V8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



const VERTICAL_FILM_SRC =
  "https://res.cloudinary.com/dznfeewmc/video/upload/v1785993792/SaveClip.App_AQP3ugCLbddoq0bf-DFW0qT8vM8h3_LCem7bHSsjehhQFOrtriXIxHY7wTOipOdXYn_P-jjoJmHYqscW1wNndbj509tS4c6sfld1sgk_h5mkti.mp4";

/** Native looping video that fills the camera LCD edge-to-edge. */
function NativeFilm({ src, title }: { src: string; title: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [touched, setTouched] = useState(false);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      onTouchStart={() => {
        setTouched(true);
        window.setTimeout(() => setTouched(false), 3500);
      }}
      className={`aom-film group absolute inset-0 overflow-hidden bg-[oklch(0.12_0.005_60)] ${
        touched ? "is-touched" : ""
      }`}
    >
      <video
        ref={video}
        src={src}
        title={title}
        loop
        muted={muted}
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          aria-label="Play film"
          onClick={toggle}
          className="absolute inset-0 z-30 flex items-center justify-center"
        >
          <span className="flex h-[22%] w-[22%] items-center justify-center rounded-full bg-[oklch(0.98_0_0_/_0.14)] backdrop-blur-[2px]">
            <svg viewBox="0 0 12 12" aria-hidden="true" className="h-1/3 w-1/3 fill-[oklch(0.98_0_0_/_0.85)]">
              <path d="M3 1.5 L10.5 6 L3 10.5 Z" />
            </svg>
          </span>
        </button>
      )}

      <div className="aom-controls absolute inset-x-0 bottom-0 z-40 px-[5%] pb-[4%]">
        <div className="flex items-center gap-[6%]">
          <button type="button" aria-label={playing ? "Pause film" : "Play film"} onClick={toggle} className="aom-ctrl">
            {playing ? (
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <rect x="2.5" y="1.5" width="2.4" height="9" />
                <rect x="7.1" y="1.5" width="2.4" height="9" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 1.5 L10.5 6 L3 10.5 Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label={muted ? "Unmute film" : "Mute film"}
            onClick={() => {
              const el = video.current;
              if (!el) return;
              el.muted = !muted;
              setMuted(!muted);
            }}
            className="aom-ctrl"
          >
            <svg viewBox="0 0 14 12" aria-hidden="true">
              <path d="M1 4.4 H3.3 L6.2 1.8 V10.2 L3.3 7.6 H1 Z" />
              {muted ? (
                <path d="M8.6 4.2 L12 7.8 M12 4.2 L8.6 7.8" stroke="currentColor" strokeWidth="1.1" fill="none" />
              ) : (
                <path
                  d="M8.8 3.8 A3.4 3.4 0 0 1 8.8 8.2 M10.6 2.4 A5.4 5.4 0 0 1 10.6 9.6"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const META = "aom-sans text-[clamp(9px,0.75vw,12px)] uppercase tracking-[0.34em] text-ink/70";

export function AnatomyOfAMemory() {
  return (
    <section aria-labelledby="aom-title" className="aom relative overflow-hidden bg-paper text-ink">
      <div className="aom-grain" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1560px] px-6 pt-[clamp(72px,10vw,150px)] md:px-10 lg:px-14">
        {/* 03 — opening */}
        <Reveal>
          <header className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/15 pt-5">
            <span className={META}>OAKS Wedding / Archive Nº 05</span>
            <span className={`${META} md:mx-auto`}>An observation of love &amp; memory</span>
          </header>
        </Reveal>

        <div className="mt-[clamp(48px,7vw,110px)] grid grid-cols-12 items-end gap-y-14">
          <Reveal className="col-span-12 md:col-span-5 lg:col-span-4" delay={80}>
            <div className="relative">
              <img
                src={sketchPavilion}
                alt="Line drawing of a palace pavilion jharokha"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-[68%] max-w-[380px] opacity-[0.42] mix-blend-multiply md:w-full"
              />
              <ul className="absolute right-0 top-[18%] space-y-8 md:right-[-6%]">
                {["Light", "Movement", "Time"].map((w) => (
                  <li key={w} className="flex items-center gap-3">
                    <span className="block h-px w-10 border-t border-dotted border-ink/40" />
                    <span className={META}>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7 lg:col-start-6 lg:col-span-7" delay={160}>
            <h2 id="aom-title" className="aom-serif leading-[0.85]">
              <span className="block text-[clamp(64px,9vw,160px)] tracking-[-0.02em]">ANATOMY</span>
              <span className="block pl-[12%] text-[clamp(22px,2.4vw,44px)] italic text-ink/70">
                of a
              </span>
              <span className="block text-[clamp(64px,9.6vw,172px)] tracking-[-0.02em]">MEMORY</span>
            </h2>
          </Reveal>
        </div>

        {/* 04 — chapter 01 */}
        <div className="mt-[clamp(120px,16vw,220px)] grid grid-cols-12">
          <Reveal className="col-span-12">
            <div className="relative mx-auto w-[92vw] max-w-[1280px] sm:w-[86vw] lg:w-[70%]">
              <img
                src={cameraLandscape}
                alt="Vintage silver compact camera playing a wedding film"
                width={1600}
                height={1104}
                loading="lazy"
                className="relative z-10 w-full select-none"
              />
              <div className="absolute left-[8.25%] top-[18.75%] z-20 h-[66.1%] w-[64.75%] overflow-hidden">
                <LazyFilm id={YT_ONE} title="Film 01 — Kuhuk + Sameer" cover controls />

              </div>
            </div>

          </Reveal>

          <Reveal className="col-span-12 mx-auto mt-10 w-[92vw] max-w-[1280px] sm:w-[86vw] lg:w-[70%]">
            <div className="border-t border-ink/15 pt-4">
              <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-baseline">
                <span className={META}>01 / 03</span>
                <span className={`${META} sm:text-center`}>Kuhuk + Sameer</span>
                <span className={META}>Kesarbagh Palace</span>
              </div>
              <p className={`${META} mt-4 text-ink/45`}>Recorded in motion</p>
            </div>
          </Reveal>
        </div>

        {/* 05 — first quote */}
        <Reveal className="mt-[clamp(120px,18vw,220px)]">
          <blockquote className="aom-serif max-w-[16ch] text-[clamp(46px,7vw,118px)] leading-[0.92] md:ml-[4%]">
            A wedding is not
            <br />a day you
            <br />
            <em className="italic">live through.</em>
          </blockquote>
        </Reveal>
      </div>

      {/* 06 — film strip */}
      <div className="mt-[clamp(110px,14vw,200px)] overflow-hidden py-6">
        <div className="aom-strip-tilt">
          <div className="aom-marquee flex w-max gap-3">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex gap-3" aria-hidden={pass === 1}>
                {STILLS.map((src, i) => (
                  <figure
                    key={`${pass}-${i}`}
                    className="relative w-[27.3vw] shrink-0 border-y-[5px] border-ink/85 bg-ink/85 p-[4px] sm:w-[21vw] lg:w-[15.8vw]"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/3] h-full w-full object-cover grayscale-[0.35]"
                    />
                    <figcaption className="aom-sans absolute bottom-[7px] left-[9px] text-[8px] tracking-[0.3em] text-paper/70">
                      {STAMPS[i] ?? ""}
                    </figcaption>
                  </figure>

                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 07 + 08 — chapter 02 */}
      <div className="relative mx-auto w-full max-w-[1560px] px-6 md:px-10 lg:px-14">
        <img
          src={sketchInterior}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1104}
          loading="lazy"
          className="pointer-events-none absolute left-0 top-[6%] w-[92%] max-w-[1100px] opacity-[0.26] mix-blend-multiply"
        />

        <div className="relative grid grid-cols-12 items-center gap-y-14 pt-[clamp(110px,14vw,200px)]">
          <Reveal className="col-span-8 sm:col-span-6 md:col-span-5 lg:col-start-4 lg:col-span-4">
            <div className="relative ml-[-4%] w-[62vw] sm:w-[42vw] md:w-[40vw] lg:w-full">
              <img
                src={cameraVertical}
                alt="Vertical vintage viewer playing a portrait wedding film"
                width={1024}
                height={1408}
                loading="lazy"
                className="relative z-10 w-full select-none"
              />
              <div className="absolute left-[23%] top-[8.6%] z-20 h-[66.4%] w-[52.2%]">
                <NativeFilm src={VERTICAL_FILM_SRC} title="Film 02 — what remains" />
              </div>
            </div>

          </Reveal>

          <Reveal
            className="col-span-12 md:col-span-7 lg:col-start-8 lg:col-span-5"
            delay={120}
          >
            <span className={META}>02 / 03</span>
            <blockquote className="aom-serif mt-6 text-[clamp(40px,6vw,96px)] leading-[0.92]">
              It is a day
              <br />
              that lives
              <br />
              <em className="italic">through you —</em>
            </blockquote>
            <p className={`${META} mt-8 text-ink/45`}>What remains.</p>
          </Reveal>
        </div>
      </div>

      {/* 09 — chapter 03 */}
      <div className="relative mx-auto w-full max-w-[1560px] px-6 pt-[clamp(120px,16vw,220px)] md:px-10 lg:px-14">
        <div className="grid grid-cols-12 gap-y-8">
          <Reveal className="col-span-12 lg:col-start-2 lg:col-span-2 lg:self-center">
            <div className="space-y-3">
              <p className={META}>Chapter 03</p>
              <p className="aom-serif text-[clamp(20px,1.7vw,30px)] leading-[1.05]">
                Before it
                <br />
                disappears
              </p>
              <p className={`${META} text-ink/45`}>03 / 03</p>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-start-4 lg:col-span-9" delay={100}>
            <div className="relative ml-auto aspect-video w-[92vw] max-w-none translate-x-[3vw] sm:w-[88vw] lg:w-full lg:translate-x-0">
              <LazyFilm id={YT_THREE} title="Film 03 — before it disappears" />
              <span
                aria-hidden="true"
                className="aom-serif pointer-events-none absolute left-[2%] top-1/2 z-10 -translate-y-1/2 text-[clamp(120px,20vw,340px)] leading-none text-paper opacity-[0.17]"
              >
                03
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <p className={`${META} lg:ml-[25%]`}>
            Time does not keep the day. Film does.
          </p>
        </Reveal>

        {/* 10 — final typographic moment */}
        <div className="mt-[clamp(130px,18vw,240px)] grid grid-cols-12 gap-y-12">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="aom-serif text-[clamp(48px,7.5vw,125px)] leading-[0.88]">
              And then
              <br />
              is gone,
            </p>
          </Reveal>
          <div
            aria-hidden="true"
            className="hidden md:col-span-1 md:block md:justify-self-center md:h-full md:w-px md:bg-ink/20"
          />
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <p className="aom-serif text-[clamp(40px,6vw,104px)] italic leading-[0.95] text-ink/85">
              before you knew
              <br />
              you were inside it.
            </p>
          </Reveal>
        </div>

        {/* 11 — end of section */}
        <Reveal className="mt-[clamp(110px,14vw,200px)] pb-[clamp(70px,9vw,130px)]">
          <div className="border-t border-ink/20 pt-5">
            <div className="grid gap-6 sm:grid-cols-3 sm:items-baseline">
              <p className={META}>
                OAKS
                <br />
                <span className="text-ink/45">Premium Wedding House</span>
              </p>
              <p className={`${META} sm:text-center`}>
                Selected Films
                <br />
                <span className="text-ink/45">2018 — 2026</span>
              </p>
              <a href="#aom-title" className={`${META} aom-cta sm:justify-self-end`}>
                Enter the archive <span className="aom-arrow inline-block">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
