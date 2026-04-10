import { MEMBERSHIP_TIERS } from "../constants/data";
import RevealSection from "./RevealSection";

function TierCard({ tier, price, period, desc, featured, benefits }) {
  return (
    <div
      className={`membership-tier${featured ? " featured" : ""}`}
      style={{ position: "relative" }}
    >
      {featured && (
        <div
          className="sans"
          style={{
            position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
            background: "#2E5BA8", color: "white",
            fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "5px 16px", borderRadius: 20,
          }}
        >
          Most Popular
        </div>
      )}

      <div
        className="sans"
        style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600,
          color: featured ? "rgba(255,255,255,0.55)" : "#9CA3AF",
          marginBottom: 12,
        }}
      >
        {tier}
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 38, fontWeight: 700,
            color: featured ? "#FFFFFF" : "#1B3A6B",
          }}
        >
          {price}
        </span>
        <span
          className="sans"
          style={{ fontSize: 13, color: featured ? "rgba(255,255,255,0.45)" : "#9CA3AF" }}
        >
          {period}
        </span>
      </div>

      <p
        className="sans"
        style={{
          fontSize: 13, fontWeight: 300, lineHeight: 1.6,
          color: featured ? "rgba(255,255,255,0.65)" : "#6B7280",
          marginBottom: 28,
        }}
      >
        {desc}
      </p>

      <div style={{ marginBottom: 36 }}>
        {benefits.map((b) => (
          <div key={b} className="check-item">
            <span style={{ color: featured ? "#93C5FD" : "#2E5BA8", fontWeight: 600, fontSize: 14 }}>✓</span>
            <span style={{ color: featured ? "rgba(255,255,255,0.8)" : "#4B5563" }}>{b}</span>
          </div>
        ))}
      </div>

      <button
        style={{
          width: "100%", padding: "14px",
          fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer",
          border: featured ? "none" : "1.5px solid #1B3A6B",
          background: featured ? "#FFFFFF" : "transparent",
          color: "#1B3A6B",
          borderRadius: 4, transition: "all 0.2s",
        }}
      >
        Apply Now
      </button>
    </div>
  );
}

export default function Membership() {
  return (
    <section id="membership" style={{ padding: "120px 56px", background: "#F8FAFF", borderTop: "1px solid #E5EAF5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Join the Guild</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 18 }}>
              Membership <em style={{ color: "#1B3A6B" }}>Tiers</em>
            </h2>
            <p
              className="sans"
              style={{ fontSize: 16, fontWeight: 300, color: "#6B7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.75 }}
            >
              Choose the membership that matches your career stage and production ambitions.
            </p>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="tiers-row" style={{ display: "flex", gap: 20, alignItems: "stretch" }}>
            {MEMBERSHIP_TIERS.map((t) => (
              <TierCard key={t.tier} {...t} />
            ))}
          </div>
        </RevealSection>

      </div>
    </section>
  );
}