import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

type StoryParagraph = { text: string; lead?: boolean };

function StoryCopy({ paragraphs }: { paragraphs: StoryParagraph[] }) {
  return (
    <div className="mx-auto mt-14 max-w-[680px] space-y-6 text-center md:mt-20">
      {paragraphs.map(({ text, lead }, index) => (
        <p
          key={`${index}-${text.slice(0, 16)}`}
          className={lead ? "font-display italic" : "font-display"}
          style={{
            fontSize: lead ? "clamp(23px, 2.4vw, 31px)" : "20px",
            color: "var(--everest)",
            lineHeight: lead ? 1.35 : 1.7,
            fontWeight: lead ? 500 : 400,
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}

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

          {/* New editorial copy */}
          <div className="w-full text-center" style={{ marginTop: "48px" }}>
            <h2
              className="editorial-headline text-4xl md:text-6xl lg:text-7xl uppercase"
              style={{ color: "var(--everest)", lineHeight: 1.06, textAlign: "center" }}
            >
              You have spent months on this wedding.
            </h2>
            <StoryCopy
              paragraphs={[
                { text: "Every detail, every arrangement, every decision — held in your hands. And it matters. Every single part of it.", lead: true },
                { text: "But here is what no one has told you yet." },
                { text: "On that day — you will not be able to see your own wedding.", lead: true },
                { text: "You will be inside it. Carried by it. Moving through it faster than you ever imagined a day could move. And while you are living it, the real moments will be happening around you. The ones nobody planned. The ones that don’t announce themselves." },
                { text: "The ones that vanish the second they happen — unless someone is already there, already watching, already ready." },
              ]}
            />
          </div>

          {/* Hero plate — Pl. 01, large, left-aligned */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-14 md:mt-20">
            <div className="col-span-11 md:col-span-6 lg:col-span-5 md:col-start-1 self-start">
              <figure className="max-w-[520px] md:max-w-none">
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

          <StoryCopy
            paragraphs={[
              { text: "Think about the night of your Sangeet.", lead: true },
              { text: "Your college friends. Your cousins. The people who flew in from three cities — some from abroad — who changed their plans just to be in that room with you. The ones who knew you before any of this." },
              { text: "One of them will watch you from across the room. And in their face will be years of friendship, connection, and love." },
              { text: "That face lasts three seconds. If no one is looking for it, it is gone.", lead: true },
            ]}
          />

          {/* Secondary images — Pl. 02 */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-10 md:mt-16">
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


          <StoryCopy
            paragraphs={[
              { text: "Think about your mother.", lead: true },
              { text: "There is a version of her you have not seen yet. She has been carrying this day — quietly, privately, in the space between prayers — for years. And now it is here. Her face will do something entirely different today. She knows you are leaving. That breaks her. And at the same time, she is the proudest she has ever been." },
              { text: "Both things. In the same face. At the same moment. We know exactly how to look for that.", lead: true },
              { text: "And your father. But he might not share his feelings as you hoped. Watch what his hands do when they have nothing to hold. Watch him adjust his sherwani or blazer one more time even though it looks fine. but .." },
              { text: "He is holding something enormous — the weight of giving you away, the joy of knowing you have chosen well — without a single word. We have seen this man at a hundred weddings. We know exactly which moment it happens in and where to be when it does." },
            ]}
          />


          {/* Secondary images — Pl. 03 (offset portrait) */}
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start w-full mt-10 md:mt-16">
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

          <StoryCopy
            paragraphs={[
              { text: "Now it's time for your wedding. Maybe for you, it's the pheras, or it could be the vows in a church.", lead: true },
              { text: "Seven circles. Seven promises. A fire between you. Or you’re at the altar. The pandit or the priest is speaking words that are centuries old. The family has gathered like never before. Everyone you love and every branch of both families are here, all in one place at the same time." },
              { text: "This will not happen again. Not like this. Not with this exact collection of people, at this exact point in all their lives.", lead: true },
              { text: "We have stood in that doorway with a hundred families. Fathers who held themselves together through everything — and finally didn’t. Brothers who were certain they were fine, discovering they were not. Grandmothers and grandfathers with tears in their eyes and smiles on their lips — holding a lifetime of you in a single moment." },
              { text: "The moment does not wait for anyone to be ready. It just happens. And the photographs from that moment — the real ones, the unguarded ones — are the ones a family cannot look at without feeling the full weight of that day return to them completely. We know what is coming. We are already where we need to be." },
            ]}
          />

          {/* Cinematic wide — Pl. 04, centered */}
          <div className="w-full mt-10 md:mt-16">
            <figure className="mx-auto w-full px-3 md:px-0 md:w-[66%] lg:w-[58%]">
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



          <StoryCopy
            paragraphs={[
              { text: "Now — a question.", lead: true },
              { text: "Twenty years from now, you and your partner are at home. The children are asleep. It is an ordinary evening — maybe after an argument, maybe just a quiet night — and one of you suggests watching the wedding film. You sit down together. And it begins." },
              { text: "The Sangeet. Your cousins. Your friends’ faces. Your mother. Your father. The Pheras. The Vidaai." },
              { text: "What do you want to feel when you watch that? What do you want to tell your partner in that moment? What do you want your children to understand about who you were on that day — the people you came from, the love that filled that room?", lead: true },
              { text: "Because that film — that album — is not for next week. It is not for Instagram. It is for that evening. Twenty years from now. And the only question that matters right now is whether the people you choose will be able to give you that." },
              { text: "The venue will host another wedding next weekend. The flowers will be gone by morning. The dress, folded away.. Every arrangement you spent months creating will fade — not because it wasn’t beautiful, but because that is what arrangements do. They serve the day. And then the day is over." },
              { text: "What does not fade is what was truly seen. By people who were there not as observers — but as witnesses. Who knew which corridor to stand in, which face to watch, which moment was arriving before it arrived." },
              { text: "That is what we do. Not because we were told to. Because we have done this long enough to know that a wedding is not one event. It is a hundred unrepeatable moments happening simultaneously — in every corner, all day, all night. The only way to catch them is a team that knows exactly where to be, without being asked." },
              { text: "One person cannot see a wedding. A team that has worked together long enough to move like a single instinct — can. That is Oaks.", lead: true },
              { text: "We are not here to document your wedding. We are here so that twenty years from now — when that evening comes — you have everything you need to return to this day completely.", lead: true },
            ]}
          />
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
