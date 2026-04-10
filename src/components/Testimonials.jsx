import { TESTIMONIALS } from "../constants/data";
import RevealSection from "./RevealSection";

function TestimonialCard({ name, role, quote, initials, color }) {
  return (
    <div className="testimonial-card">
      <div
        style={{
          fontSize: 52, color: "#1B3A6B",
          fontFamily: "Georgia, serif", lineHeight: 1,
          marginBottom: 20, opacity: 0.2,
        }}
      >
        "
      </div>
      <p
        className="sans"
        style={{
          fontSize: 15, fontWeight: 300, lineHeight: 1.85,
          color: "#374151", marginBottom: 32, fontStyle: "italic",
        }}
      >
        {quote}
      </p>
      <div
        style={{
          display: "flex", alignItems: "center", gap: 14,
          borderTop: "1px solid #E5EAF5", paddingTop: 24,
        }}
      >
        <div className="avatar" style={{ background: color }}>{initials}</div>
        <div>
          <div className="sans" style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>{name}</div>
          <div className="sans" style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 300 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="members" style={{ padding: "120px 56px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <RevealSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Member Voices</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>
              What Our Members <em style={{ color: "#1B3A6B" }}>Say</em>
            </h2>
          </div>
        </RevealSection>

        <div
          className="testimonials-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <RevealSection key={t.name} delay={i * 110}>
              <TestimonialCard {...t} />
            </RevealSection>
          ))}
        </div>

      </div>
    </section>
  );
}