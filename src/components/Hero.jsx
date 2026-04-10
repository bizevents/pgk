import { STATS } from "../constants/data";
import { useHeroEntrance } from "../hooks";

function HeroStats() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
      {STATS.map((s) => (
        <div
          key={s.label}
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 34, fontWeight: 700, color: "white", lineHeight: 1,
            }}
          >
            {s.value}
          </div>
          <div
            className="sans"
            style={{
              fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)", marginTop: 6, fontWeight: 400,
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ChairQuote() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 10,
        padding: "44px 40px",
      }}
    >
      <p
        style={{
          fontSize: 22, fontWeight: 400, lineHeight: 1.65,
          fontStyle: "italic", color: "rgba(255,255,255,0.92)", marginBottom: 32,
        }}
      >
        "Kenya has always had extraordinary stories. The Guild exists to ensure
        Kenyan producers have the tools, connections, and recognition to tell them
        on the world stage."
      </p>
      <div
        style={{
          display: "flex", alignItems: "center", gap: 14,
          borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24,
        }}
      >
        <div
          className="avatar"
          style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
        >
          NM
        </div>
        <div>
          <div className="sans" style={{ fontWeight: 600, fontSize: 14, color: "white" }}>
            Njeri Mwangi
          </div>
          <div className="sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
            Chair, Producers Guild of Kenya
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const loaded = useHeroEntrance();

  const fadeIn = (extraDelay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(24px)",
    transition: `opacity 0.8s ease ${0.15 + extraDelay}s, transform 0.8s ease ${0.15 + extraDelay}s`,
  });

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        paddingTop: 72, background: "#F8FAFF",
      }}
    >
      {/* Dot pattern */}
      <div
        className="hero-pattern"
        style={{ position: "absolute", inset: 0, opacity: 0.5, zIndex: 0 }}
      />

      {/* Navy panel — full right half */}
      <div
        style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "50%",
          background: "#1B3A6B",
          clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: 1,
        }}
      />

      {/* Decorative vertical lines on navy */}
      <div style={{ position: "absolute", right: "6%",  top: "18%", width: 1, height: "64%", background: "rgba(255,255,255,0.12)", zIndex: 2 }} />
      <div style={{ position: "absolute", right: "13%", top: "26%", width: 1, height: "48%", background: "rgba(255,255,255,0.07)", zIndex: 2 }} />

      {/* Content grid */}
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "120px 56px 80px",
          position: "relative", zIndex: 3, width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 60, alignItems: "center",
        }}
      >
        {/* Left — copy */}
        <div style={fadeIn(0)}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#EEF2FF", border: "1px solid #C7D2FE",
              borderRadius: 20, padding: "6px 16px", marginBottom: 32,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2E5BA8", display: "inline-block" }} />
            <span
              className="sans"
              style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2E5BA8" }}
            >
              Est. 2014 · Nairobi, Kenya
            </span>
          </div>

          <h1
            className="hero-title"
            style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, marginBottom: 28, letterSpacing: "-0.01em", color: "#111827" }}
          >
            Championing<br />
            the <em style={{ color: "#1B3A6B" }}>Kenyan</em><br />
            Storyteller
          </h1>

          <p
            className="sans"
            style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "#4B5563", marginBottom: 44, maxWidth: 480 }}
          >
            The Producers Guild of Kenya is the professional home for screen producers
            across East Africa — advancing craft, protecting rights, and connecting our
            industry to the world.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btn-primary">Become a Member</button>
            <button className="btn-outline">Explore Our Work</button>
          </div>
        </div>

        {/* Right — solid navy wrapper ensures cards are always visible */}
        <div
          style={{
            ...fadeIn(0.2),
            background: "#1B3A6B",
            borderRadius: 16,
            padding: "8px",
          }}
        >
          <ChairQuote />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}