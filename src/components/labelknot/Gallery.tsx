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

export function Gallery() {
  const cells = buildCells();
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
          The Frames That Felt Like Breathing
        </h2>
        <p
          className="font-display italic mt-6 mx-auto max-w-2xl text-lg md:text-2xl"
          style={{ color: "var(--everest)" }}
        >
          Everything the eye almost missed — we were already watching before it happened.
        </p>
      </div>


      {/* Full bleed 3 col grid */}
      <div className="grid grid-cols-3 gap-[2px]">
        {cells.map((c, i) =>
          c.kind === "img" ? (
            <figure key={i} className="relative overflow-hidden group bg-[var(--milk)] aspect-[4/5]">
              <img
                src={c.src}
                alt={`Label Knot frame ${i + 1}`}
                loading={i < 6 ? "eager" : "lazy"}
                style={{ objectPosition: getPosition(i) }}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
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
    </section>
  );
}
