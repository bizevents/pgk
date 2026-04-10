import { FEATURED_PRODUCTIONS } from "../constants/data";
import RevealSection from "./RevealSection";

function FilmCard({ title, year, type, director }) {
  return (
    <div className="film-card">
      <div
        className="sans"
        style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2E5BA8", fontWeight: 600 }}
      >
        {type} · {year}
      </div>
      <h4 style={{ fontSize: 21, fontWeight: 700, marginTop: 10, marginBottom: 8, lineHeight: 1.2 }}>
        <em>{title}</em>
      </h4>
      <p className="sans" style={{ fontSize: 13, color: "#9CA3AF", fontWeight: 300 }}>
        Dir. {director}
      </p>
    </div>
  );
}

export default function Productions() {
  return (
    <section id="projects" style={{ padding: "120px 56px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <RevealSection>
          <div
            style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", marginBottom: 56,
              flexWrap: "wrap", gap: 24,
            }}
          >
            <div>
              <div className="section-label">Member Work</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>
                Notable<br /><em style={{ color: "#1B3A6B" }}>Productions</em>
              </h2>
            </div>
            <button className="btn-outline" style={{ fontSize: 11 }}>View Full Catalogue</button>
          </div>
        </RevealSection>

        <div
          className="films-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
        >
          {FEATURED_PRODUCTIONS.map((f, i) => (
            <RevealSection key={f.title} delay={i * 60}>
              <FilmCard {...f} />
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  );
}