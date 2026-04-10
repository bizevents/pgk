import RevealSection from "./RevealSection";

export default function CTABanner() {
  return (
    <section
      style={{
        padding: "100px 56px",
        background: "#1B3A6B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative shapes */}
      <div
        style={{
          position: "absolute", top: 0, right: 0, width: "35%", height: "100%",
          background: "rgba(46,91,168,0.35)",
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: -60, left: -60,
          width: 280, height: 280, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: -100, left: -100,
          width: 380, height: 380, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      />

      <RevealSection>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2
            style={{ fontSize: 50, fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: "#FFFFFF" }}
          >
            The Kenyan screen industry<br /><em>is yours to shape.</em>
          </h2>
          <p
            className="sans"
            style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 48 }}
          >
            Join over 340 producers already using the Guild to fund, make, and distribute
            world-class Kenyan stories.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              style={{
                background: "#FFFFFF", color: "#1B3A6B",
                fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                border: "none", padding: "15px 34px", cursor: "pointer",
                borderRadius: 3, transition: "opacity 0.2s",
              }}
            >
              Become a Member
            </button>
            <button className="btn-outline-white">Download Our Brochure</button>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}