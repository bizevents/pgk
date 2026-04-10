import { PROGRAMS } from "../constants/data";
import RevealSection from "./RevealSection";

function ProgramCard({ icon, title, desc, color }) {
  return (
    <div className="program-card" style={{ borderTopColor: color }}>
      <div style={{ fontSize: 30, marginBottom: 18 }}>{icon}</div>
      <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 12, color: "#111827" }}>{title}</h3>
      <p className="sans" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: "#4B5563" }}>
        {desc}
      </p>
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" style={{ padding: "120px 56px", background: "#F8FAFF", borderTop: "1px solid #E5EAF5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <RevealSection>
          <div
            style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", marginBottom: 64,
              flexWrap: "wrap", gap: 24,
            }}
          >
            <div>
              <div className="section-label">What We Do</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>
                Programs &<br /><em style={{ color: "#1B3A6B" }}>Initiatives</em>
              </h2>
            </div>
            <p
              className="sans"
              style={{ fontSize: 15, fontWeight: 300, color: "#6B7280", maxWidth: 340, lineHeight: 1.75 }}
            >
              Six pillars of support designed to meet producers wherever they are
              in their career and project journey.
            </p>
          </div>
        </RevealSection>

        <div
          className="programs-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {PROGRAMS.map((p, i) => (
            <RevealSection key={p.title} delay={i * 70}>
              <ProgramCard {...p} />
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  );
}