import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 md:py-44"
      style={{ backgroundColor: "var(--milk)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center">
          <p
            className="eyebrow font-display"
            style={{ color: "var(--everest)", fontSize: "16px" }}
          >
            our philosophy
          </p>
          <p
            className="font-display italic mt-3"
            style={{ color: "var(--everest)", fontSize: "clamp(16px, 1.8vw, 22px)" }}
          >
            don't skip what's coming if you want the best from Four Fold
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Video frame — responsive width, centred */}
          <figure className="w-[92vw] md:w-[80vw] lg:w-[40vw] mx-auto max-w-full">
            <VideoPlayer />
          </figure>

          {/* Heading + copy — stacked below video */}
          <div className="w-full text-center" style={{ marginTop: "48px" }}>
            <h2
              className="editorial-headline text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase"
              style={{ color: "var(--everest)", lineHeight: 1.06, textAlign: "center" }}
            >
              Everyone was there.
              <br />
              <em
                className="font-display italic normal-case tracking-normal"
                style={{ fontSize: "0.85em" }}
              >
                You will remember almost none of it.
              </em>
            </h2>

            <div className="mt-10 max-w-[680px] mx-auto">
              {/* Opening — large italic */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(23px, 2.4vw, 31px)",
                  color: "var(--everest)",
                  lineHeight: 1.35,
                  textAlign: "center",
                }}
              >
                You will spend months on this wedding. The venue. The flowers. The food. The
                outfits. Every detail will feel important — because it is. This is not the time for
                shortcuts.
              </p>

              {/* Emphasis line — stands alone */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 33px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  margin: "28px 0",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                But here is the thing nobody tells you:
              </p>

              {/* Body 1 */}
              <p
                className="font-display mt-8"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Every single thing you are micromanaging right now will fade. The flowers will be
                forgotten. The venue becomes someone else's event. The food — already gone. The
                music — a feeling with no name attached to it.
              </p>

              {/* Emphasis line — stands alone */}
              <p
                className="font-display italic"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 33px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  margin: "28px 0",
                  textAlign: "center",
                  fontWeight: 600,
                }}
              >
                The only thing that can physically return you to that day — twenty years from now —
                are the photographs.
              </p>

              {/* Body 2 */}
              <p
                className="font-display"
                style={{
                  fontSize: "20px",
                  color: "var(--everest)",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Not just the photographs. The moments inside them.
              </p>
            </div>
          </div>

          {/* Hero plate — Pl. 01, large, left-aligned */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-16 md:mt-28">
            <div className="col-span-12 md:col-span-7 md:col-start-1 self-start">
              <figure>
                <img
                  src="https://res.cloudinary.com/rqyl0ifl/image/upload/v1785226101/ChatGPT_Image_Jul_28_2026_01_09_28_PM_v7owuv.webp"
                  alt="A moment that stays"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <figcaption
                  className="cover-line font-display mt-4"
                  style={{ color: "var(--everest)", letterSpacing: "0.28em", opacity: 0.7 }}
                >
                  Pl. 01 — A moment that stays
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Secondary images — Pl. 02 */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-20 md:mt-32">
            {/* Square — right middle */}
            <div className="col-span-8 col-start-5 md:col-span-3 md:col-start-9 md:mt-0 self-start">
              <figure>
                <img
                  src="https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232503/SaveClip.App_657715536_18178895965380706_4306185084163071359_n_w4pv9w.jpg"
                  alt="A held breath, captured"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
                <figcaption
                  className="cover-line font-display mt-4"
                  style={{ color: "var(--everest)", letterSpacing: "0.28em", opacity: 0.7 }}
                >
                  Pl. 02 — A held breath
                </figcaption>
              </figure>
            </div>
          </div>


          {/* Body paragraph after Pl. 02 */}
          <div className="mt-10 max-w-[680px] mx-auto text-center">
            <p
              className="font-display"
              style={{
                fontSize: "20px",
                color: "var(--everest)",
                lineHeight: 1.7,
                textAlign: "center",
              }}
            >
              Your mother, watching you from across the room, understanding something you will only
              understand yourself when your own child stands where you are standing. The cousin who
              flew across the world to be in that room. Your father's face — the one he made when he
              thought no one was looking.
            </p>
          </div>

          {/* Secondary images — Pl. 03 (offset portrait) */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-20 md:mt-32">
            {/* Portrait — offset left */}
            <div className="col-span-8 md:col-span-4 md:col-start-2 md:mt-0 self-start">
              <figure>
                <img
                  src="https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232497/SaveClip.App_642604422_18437630464112437_3954472121064538389_n_fuwdaq.jpg"
                  alt="Light, draped"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <figcaption
                  className="cover-line font-display mt-4"
                  style={{ color: "var(--everest)", letterSpacing: "0.28em", opacity: 0.7 }}
                >
                  Pl. 03 — Light, draped
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Cinematic wide — Pl. 04, centered */}
          <div className="w-full mt-20 md:mt-32">
            <figure className="mx-auto w-full md:w-[86%]">
              <img
                src="https://res.cloudinary.com/rqyl0ifl/image/upload/v1785227998/ChatGPT_Image_Jul_28_2026_02_08_23_PM_w6n0il.webp"
                alt="What remains, after"
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
              />
              <figcaption
                className="cover-line font-display mt-4 text-center"
                style={{ color: "var(--everest)", letterSpacing: "0.28em", opacity: 0.7 }}
              >
                Pl. 04 — What remains, after
              </figcaption>
            </figure>
          </div>



          {/* Urgency seed block */}
          <div className="mt-10 md:mt-14 mx-auto max-w-xl">
            {/* Top rule — sand */}
            <div
              className="rule-thin mb-10 mx-auto"
              style={{ borderColor: "var(--sand)", width: "40px" }}
            />

            {/* Three-line punch */}
            <div style={{ margin: "0 0 32px 0" }}>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 35px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                These moments are happening whether someone is watching for them or not.
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 35px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  margin: "8px 0",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                The only question is whether they are captured.
              </p>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(25px, 2.6vw, 35px)",
                  color: "var(--everest)",
                  lineHeight: 1.15,
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Or whether they are simply gone.
              </p>
            </div>

            {/* Bottom rule — sand */}
            <div
              className="rule-thin mb-8 mt-12 mx-auto"
              style={{ borderColor: "var(--sand)", width: "40px" }}
            />

            {/* Closing italic */}
            <p
              className="font-display italic"
              style={{
                fontSize: "clamp(20px, 2vw, 27px)",
                color: "var(--everest)",
                lineHeight: 1.4,
                marginBottom: "40px",
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              What remains after everything else fades — is what we create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);
  const inactivityTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const bumpActivity = () => {
    setShowControls(true);
    if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    if (isPlaying) {
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    bumpActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;
    const d = videoRef.current.duration || 0;
    setCurrentTime(t);
    if (d > 0) setProgress((t / d) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current && videoRef.current.duration) {
      const newTime = (val / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(val);
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (videoRef.current) {
      videoRef.current.volume = v;
      if (v === 0 && !muted) {
        videoRef.current.muted = true;
        setMuted(true);
      } else if (v > 0 && muted) {
        videoRef.current.muted = false;
        setMuted(false);
      }
    }
  };

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs) || !isFinite(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div
      className="video-player relative w-full overflow-hidden"
      style={{ aspectRatio: "16 / 9" }}
      onMouseMove={bumpActivity}
      onMouseEnter={bumpActivity}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
      onTouchStart={bumpActivity}
    >
      <style>{`
        .video-player input[type="range"].vp-range {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          margin: 0;
          padding: 0;
          cursor: pointer;
          outline: none;
        }
        .video-player input[type="range"].vp-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          cursor: pointer;
          margin-top: -4.5px;
        }
        .video-player input[type="range"].vp-range::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          cursor: pointer;
        }
        .video-player input[type="range"].vp-range::-webkit-slider-runnable-track {
          height: 3px;
          border-radius: 2px;
          background: transparent;
        }
        .video-player input[type="range"].vp-range::-moz-range-track {
          height: 3px;
          border-radius: 2px;
          background: transparent;
        }
      `}</style>
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/cbi5mcab/video/upload/v1784690929/FOURFOLD_cbmpnp.mp4"
        loop
        playsInline
        controls={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-full object-cover"
      />

      {/* Centre glass play/pause button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.3)",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          opacity: showControls ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: showControls ? "auto" : "none",
        }}
      >
        {isPlaying ? (
          <Pause size={22} color="#ffffff" fill="#ffffff" />
        ) : (
          <Play size={22} color="#ffffff" fill="#ffffff" />
        )}
      </button>

      {/* Glass control bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: showControls ? 1 : 0,
          pointerEvents: showControls ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          style={{
            width: "28px",
            height: "28px",
            background: "transparent",
            border: "none",
            padding: 0,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {isPlaying ? (
            <Pause size={14} color="#ffffff" fill="#ffffff" />
          ) : (
            <Play size={14} color="#ffffff" fill="#ffffff" />
          )}
        </button>

        {/* Progress — fills space */}
        <input
          type="range"
          className="vp-range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleSeek}
          style={{
            flex: 1,
            width: "100%",
            minWidth: 0,
            height: "3px",
            background: `linear-gradient(to right, rgba(255,255,255,0.9) ${progress}%, rgba(255,255,255,0.25) ${progress}%)`,
            borderRadius: "2px",
            margin: "0 8px",
          }}
        />

        {/* Time */}
        <div
          className="font-display"
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "1px",
            flexShrink: 0,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Volume */}
        <div
          className="vp-volume-wrap"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
            marginLeft: "8px",
          }}
        >
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              width: "18px",
              height: "18px",
            }}
          >
            {muted ? (
              <VolumeX size={14} color="#ffffff" />
            ) : (
              <Volume2 size={14} color="#ffffff" />
            )}
          </button>
          <input
            type="range"
            className="vp-range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={handleVolume}
            style={{
              width: "60px",
              height: "3px",
              background: `linear-gradient(to right, rgba(255,255,255,0.9) ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.25) ${(muted ? 0 : volume) * 100}%)`,
              borderRadius: "2px",
              opacity: showVolume ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: showVolume ? "auto" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
