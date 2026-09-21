import { useState } from "react";
import { OAKS_GALLERY } from "@/lib/labelknot-images";

type Cell =
  | { kind: "img"; src: string; idx: number }
  | { kind: "text"; line: string };

// 9 sand interstitial / text cells at their fixed grid positions.
const TEXT_CELLS: Record<number, string> = {
  4: "Frames of Pure Emotion",
  9: "Love That Lives On",
  11: "Sacred Vows",
  17: "Timeless in Soft Light",
  22: "Stolen Glances",
  27: "Golden Hours",
  34: "Cherished forever.",
  42: "Quiet Grace",
  44: "Forever Yours",
};

const TAGLINES = [
  "The moment before everything changed.",
  "Two families becoming one.",
  "Light that only exists at golden hour.",
  "The laugh nobody planned.",
  "Quiet joy between the rituals.",
  "A glance that said everything.",
  "The dress, the light, the stillness.",
  "Sacred. Unhurried. Real.",
  "Every detail was worth it.",
  "The ones who flew across the world.",
];

function buildCells(): Cell[] {
  const cells: Cell[] = [];
  let imgIdx = 0;
  for (let i = 0; i < 45; i++) {
    if (TEXT_CELLS[i]) {
      cells.push({ kind: "text", line: TEXT_CELLS[i] });
    } else {
      cells.push({ kind: "img", src: OAKS_GALLERY[imgIdx], idx: imgIdx });
      imgIdx++;
    }
  }
  // "Timeless in Soft Light" moves to the cell holding Frame 24,
  // and that frame takes over the vacated text cell.
  const textCell = 17;
  const frame24Cell = cells.findIndex((c) => c.kind === "img" && c.idx === 23);
  if (frame24Cell !== -1) {
    const tmp = cells[textCell];
    cells[textCell] = cells[frame24Cell];
    cells[frame24Cell] = tmp;
  }
  return cells;
}

function getPosition(i: number): string {
  const m = i % 9;
  if (m === 0) return "center 20%";
  if (m === 1) return "center 50%";
  if (m === 2) return "center 30%";
  if (m === 3) return "center 70%";
  if (m === 5) return "center 15%";
  if (m === 6) return "center 40%";
  if (m === 8) return "center 60%";
  return "center center";
}

function cellImages(idx: number, primary: string): string[] {
  const n = OAKS_GALLERY.length;
  const a = OAKS_GALLERY[(idx * 3 + 1) % n];
  const b = OAKS_GALLERY[(idx * 3 + 2) % n];
  const out = [primary];
  for (const s of [a, b]) out.push(out.includes(s) ? OAKS_GALLERY[(OAKS_GALLERY.indexOf(s) + 5) % n] : s);
  return out.slice(0, 3);
}

const MultiIcon = () => (
  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, pointerEvents: "none" }}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="1" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8" fill="none" />
      <rect x="1" y="5" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8" fill="white" fillOpacity="0.15" />
      <rect x="1" y="5" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8" fill="none" />
    </svg>
  </div>
);

function ImageCell({
  images,
  position,
  tagline,
  eager,
  onExpand,
}: {
  images: string[];
  position: string;
  tagline: string;
  eager: boolean;
  onExpand: (images: string[], start: number) => void;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <figure
      className="relative overflow-hidden bg-[var(--milk)] aspect-[4/5] cursor-pointer"
      style={{ transition: "filter 0.3s ease" }}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.04)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      <div
        className="absolute inset-0"
        onClick={() => onExpand(images, activeSlide)}
      >
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={tagline}
            loading={eager && i === 0 ? "eager" : "lazy"}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: position,
              opacity: i === activeSlide ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        ))}
      </div>

      <MultiIcon />

      {/* Dot indicators (visual multi-image cue only) */}
      <div
        style={{
          position: "absolute",
          bottom: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "4px",
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeSlide ? "16px" : "5px",
              height: "5px",
              borderRadius: "3px",
              background: "white",
              opacity: i === activeSlide ? 0.95 : 0.45,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </figure>
  );
}

const arrowStyle: React.CSSProperties = {
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.3)",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  color: "white",
  fontSize: "22px",
  lineHeight: 1,
  cursor: "pointer",
  backdropFilter: "blur(8px)",
};

export function Gallery() {
  const cells = buildCells();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <section
      id="gallery"
      className="relative pt-32 md:pt-44 pb-[2px]"
      style={{ backgroundColor: "var(--sand)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-14 md:mb-20 text-center">
        <h2
          className="editorial-headline text-4xl md:text-6xl mx-auto max-w-4xl uppercase tracking-tight"
          style={{ color: "var(--everest)" }}
        >
          For Everything Words Couldn't Hold
        </h2>
        <p
          className="font-display italic mt-6 mx-auto max-w-2xl text-lg md:text-2xl"
          style={{ color: "var(--everest)" }}
        >
          Some feelings were never meant to be explained — only noticed, beautifully framed, and carried with you forever.
        </p>
      </div>

      {/* Full bleed 3 col grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {cells.map((c, i) =>
          c.kind === "img" ? (
            <ImageCell
              key={i}
              images={cellImages(c.idx, c.src)}
              position={getPosition(i)}
              tagline={TAGLINES[c.idx % TAGLINES.length]}
              eager={i < 6}
              onExpand={(images, start) => setLightbox({ images, index: start })}
            />
          ) : (
            <div
              key={i}
              className="aspect-[4/5] flex items-center justify-center"
              style={{ backgroundColor: "var(--sand)" }}
            >
              <p
                style={{
                  fontFamily: "'Pinyon Script', cursive",
                  fontSize: "clamp(1.6rem, 5.2vw, 2.5rem)",
                  lineHeight: 1.35,
                  color: "var(--everest)",
                  textAlign: "center",
                  padding: "0 8%",
                  opacity: 0.88,
                }}
              >
                {c.line}
              </p>
            </div>
          ),
        )}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={lightbox.images[lightbox.index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "94vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "2px" }}
          />
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            ×
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) =>
                l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l,
              );
            }}
            style={{ position: "absolute", left: "20px", ...arrowStyle }}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.images.length } : l));
            }}
            style={{ position: "absolute", right: "20px", ...arrowStyle }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
