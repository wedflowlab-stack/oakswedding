const BG_TEXTURE =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778165415/Black_and_White_Minimalist_Aesthetic_Scrapbook_Motivational_Reminder_Quote_Instagram_Post_eqd0vd.png";
const BG_VIDEO =
  "https://res.cloudinary.com/dtembvivw/video/upload/q_auto/f_auto/v1778169387/From_KlickPin_CF_Fresh_real_talk_lines_with_timeless_style_with_charm_and_practical_value_for_meaningful_moments_-_Pin-59320920088049034_opf6od.mp4";

const CORNER_TL = "KEPT, NOT STAGED.";
const CORNER_TR = "WRITTEN IN LIGHT.";
const CORNER_BL = "FELT, THEN REMEMBERED.";
const CORNER_BR = "HELD FOR A LIFETIME.";

const CARDS = [
  {
    name: "REEYAA NAIR & MR KHANJO",
    year: "2024",
    image: "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232495/SaveClip.App_743975215_18460390114112437_838627506860467206_n_yxpd6w.jpg",
    review:
      "We didn't realise how much we needed those photographs until we sat with them three weeks later. Every frame felt like we were back there in that beach — just the two of us, in that light, in that silence between everything happening around us. four fold pictures didn't photograph our wedding. They photographed us. That difference is something I will never be able to fully explain.",
  },
  {
    name: "PRACHETA & CARL",
    year: "2025",
    image: "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232496/SaveClip.App_642535060_18438073714112437_9189815022439365238_n_cgvu8n.jpg",
    review:
      "There were a hundred people around us that day. But when I look at our photographs now, it feels like there was no one else in the world. Just him looking at me like that. four fold pictures caught something I didn't even know was happening in real time. That is not photography. That is something I don't have a word for yet.",
  },
  {
    name: "SONALI & RONAK",
    year: "2022",
    image: "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232488/ChatGPT_Image_Jul_28_2026_03_19_07_PM_jzzhvk.webp",
    review:
      "The wedding planning felt enormous at the time. Every decision, every vendor, every number. A year later, I cannot tell you what most of it cost. I can tell you exactly what four fold pictures cost — because it is the only thing I would pay again without a second thought. Everything else from that day is a receipt. This is the only thing that is still real, and I still keep coming back to it.",
  },
  {
    name: "ANU & LOVELY COUSINS",
    year: "2025",
    image: "https://res.cloudinary.com/rqyl0ifl/image/upload/v1785232503/SaveClip.App_660801966_18444324925112437_3863561727846764138_n_j1vmac.jpg",
    review:
      "My cousins haven't all been in the same place since we were children. Different cities, different lives, different versions of ourselves. That day they wore all theirs — and four fold pictures caught a moment between us that none of us staged, none of us planned, none of us ever noticed happening. When I saw that frame I completely fell apart. Because I knew, without anyone saying it, that we will never all be in the same room like that again.",
  },
];

const cornerStyle: React.CSSProperties = {
  fontFamily:
    "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
  fontSize: "9px",
  letterSpacing: "0.15em",
  color: "#1a1a1a",
  lineHeight: 1.7,
  textTransform: "uppercase",
  margin: 0,
};

export function Reviews() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "var(--milk)",
        paddingTop: "clamp(64px, 8vw, 96px)",
        paddingBottom: "clamp(64px, 8vw, 96px)",
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "640px", textAlign: "center" }}
      >
        <p
          className="font-display uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            color: "var(--sage)",
            opacity: 0.6,
            marginBottom: "20px",
          }}
        >
          03 — Letters Received
        </p>
        <h2
          className="font-display"
          style={{
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "var(--everest)",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Words That Keep Us Going
        </h2>
        <p
          className="font-display"
          style={{
            fontSize: "clamp(16px, 1.8vw, 20px)",
            color: "var(--sage)",
            lineHeight: 1.75,
            maxWidth: "44ch",
            margin: "0 auto",
          }}
        >
          These are not reviews. They are the moments our couples wrote back to
          tell us about — long after the wedding was over, long after the
          flowers were gone.
        </p>
      </div>

      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2"
        style={{
          maxWidth: "1200px",
          gap: "clamp(16px, 2.5vw, 32px)",
          marginTop: "clamp(48px, 6vw, 72px)",
          paddingLeft: "clamp(0px, 0.3vw, 32px)",
          paddingRight: "clamp(0px, 0.3vw, 32px)",
        }}
      >
        {CARDS.map((c, i) => (
          <article
            key={i}
            style={{
              position: "relative",
              padding: "clamp(20px, 4%, 40px)",
              border: "1px solid #18442A",
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            {/* Background video */}
            <video
              src={BG_VIDEO}
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                if (video.currentTime >= 3.95) {
                  video.currentTime = 0;
                  void video.play();
                }
              }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              }}
            />
            {/* Inner white card */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                backgroundColor: "#ffffff",
                padding: "clamp(20px, 4%, 36px)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Top corner texts */}
              <div
                className="grid grid-cols-2"
                style={{ gap: "16px" }}
              >
                <p style={{ ...cornerStyle, textAlign: "left" }}>{CORNER_TL}</p>
                <p style={{ ...cornerStyle, textAlign: "right" }}>
                  {CORNER_TR}
                </p>
              </div>

              {/* Centre photo */}
              <div
                className="mx-auto"
                style={{
                  marginTop: "clamp(20px, 3vw, 32px)",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{
                    width: "clamp(180px, 22vw, 240px)",
                    height: "clamp(220px, 28vw, 300px)",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>

              {/* Couple name */}
              <p
                style={{
                  fontFamily:
                    "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.25em",
                  color: "#1a1a1a",
                  textAlign: "center",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {c.name}
              </p>
              {/* Year */}
              <p
                style={{
                  fontFamily:
                    "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, 'Courier New', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  color: "#1a1a1a",
                  opacity: 0.55,
                  textAlign: "center",
                  marginTop: "6px",
                }}
              >
                {c.year}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  borderTop: "1px solid #1a1a1a",
                  opacity: 0.35,
                  margin: "16px auto",
                }}
              />

              {/* Review */}
              <p
                style={{
                  fontFamily:
                    "Georgia, 'Cormorant Garamond', 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: "#1a1a1a",
                  lineHeight: 1.7,
                  textAlign: "center",
                  padding: "0 clamp(4px, 1vw, 16px)",
                  marginBottom: "clamp(24px, 3vw, 36px)",
                }}
              >
                {c.review}
              </p>

              {/* Bottom corner texts */}
              <div
                className="grid grid-cols-2 mt-auto"
                style={{ gap: "16px" }}
              >
                <p style={{ ...cornerStyle, textAlign: "left" }}>{CORNER_BL}</p>
                <p style={{ ...cornerStyle, textAlign: "right" }}>
                  {CORNER_BR}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center px-6" style={{ marginTop: "64px" }}>
        <p
          className="font-display italic"
          style={{
            fontSize: "clamp(18px, 1.8vw, 22px)",
            color: "var(--everest)",
            opacity: 0.7,
          }}
        >
          Every word above arrived without us asking.
        </p>
      </div>
    </section>
  );
}
