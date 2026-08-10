import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const EVEREST = "#4E0000";
const MILKY = "#FDFBF0";
const MUTED_4 = "rgba(253,251,240,0.4)";
const MUTED_75 = "rgba(253,251,240,0.75)";

export function WhyLabelKnot() {
  return (
    <section
      className="relative py-32 md:py-44 px-6 md:px-12"
      style={{ backgroundColor: EVEREST, color: MILKY }}
    >
      {/* Eyebrow */}
      <p
        className="font-display text-center mb-6"
        style={{
          fontSize: "11px",
          letterSpacing: "5px",
          color: MUTED_4,
          textTransform: "uppercase",
        }}
      >
        What We Create For You
      </p>

      {/* Main heading */}
      <h2
        className="font-display text-center mb-8 mx-auto"
        style={{
          fontWeight: 400,
          fontSize: "clamp(44px, 6vw, 80px)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          color: MILKY,
        }}
      >
        Why Four Fold Pictures
      </h2>

      {/* Subheading */}
      <p
        className="font-display text-center max-w-xl mx-auto"
        style={{
          fontWeight: 300,
          fontSize: "clamp(20px, 2.5vw, 28px)",
          lineHeight: 1.5,
          color: MUTED_75,
        }}
      >
        There are wedding photographs.
        <br />
        And then there are Fourfold photographs.
        <br />
        The difference is visible the moment you see one.
      </p>

      {/* Video */}
      <figure
        className="w-[92vw] md:w-[80vw] lg:w-[40vw] mx-auto max-w-full"
        style={{ marginTop: "48px" }}
      >
        <VideoPlayer />
      </figure>

      {/* CTA */}
      <div className="text-center" style={{ marginTop: "48px" }}>
        <Link
          to="/contact"
          className="inline-block font-display tracking-widest uppercase border border-current rounded-full px-8 py-4 transition-opacity hover:opacity-70"
          style={{ color: MILKY, fontSize: "11px", letterSpacing: "4px" }}
        >
          Check Availability
        </Link>
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
  const [muted, setMuted] = useState(true);
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
      }, 2500);
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
        src="https://res.cloudinary.com/pcodbmuo/video/upload/v1784896883/four_fold_call_bimumf.mp4"
        loop
        muted
        playsInline
        controls={false}
        preload="metadata"
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
        className="w-[52px] h-[52px] md:w-16 md:h-16"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
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
