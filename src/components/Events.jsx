import { EVENTS, EVENT_TAG_STYLES } from "../constants/data";
import RevealSection from "./RevealSection";

function EventRow({ date, title, location, type }) {
  const [month, day] = date.split(" ");
  const ts = EVENT_TAG_STYLES[type] || { bg: "#F3F4F6", fg: "#374151" };

  return (
    <div className="event-row">
      {/* Date */}
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700, fontSize: 28, color: "#1B3A6B", lineHeight: 1,
          }}
        >
          {day}
        </div>
        <div
          className="sans"
          style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginTop: 4 }}
        >
          {month} 2026
        </div>
      </div>

      {/* Title + location */}
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, marginBottom: 5 }}>
          {title}
        </div>
        <div className="sans" style={{ fontSize: 13, color: "#6B7280", fontWeight: 300 }}>
          📍 {location}
        </div>
      </div>

      {/* Type badge */}
      <div className="event-tag-cell">
        <span className="event-tag" style={{ background: ts.bg, color: ts.fg }}>
          {type}
        </span>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" style={{ padding: "120px 56px", background: "#F8FAFF", borderTop: "1px solid #E5EAF5" }}>
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
              <div className="section-label">What's On</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1 }}>
                Upcoming<br /><em style={{ color: "#1B3A6B" }}>Events</em>
              </h2>
            </div>
            <button className="btn-outline" style={{ fontSize: 11 }}>Full Calendar</button>
          </div>
        </RevealSection>

        <RevealSection delay={100}>
          {EVENTS.map((e) => (
            <EventRow key={e.title} {...e} />
          ))}
        </RevealSection>

      </div>
    </section>
  );
}