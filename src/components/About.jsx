import RevealSection from "./RevealSection";

const VALUES = [
  { icon: "🤝", title: "Community",  body: "A supportive network of 340+ screen professionals across Kenya." },
  { icon: "🏆", title: "Excellence", body: "Raising the bar on craft, business practice, and industry standards." },
  { icon: "🌐", title: "Global Reach",body: "Connecting Kenyan stories to screens, markets, and financiers worldwide." },
  { icon: "🔒", title: "Advocacy",   body: "Protecting producer rights and championing favourable industry policy." },
];

function ValueCard({ icon, title, body }) {
  return (
    <div
      style={{
        background: "#F8FAFF",
        border: "1px solid #E5EAF5",
        borderRadius: 8,
        padding: "24px 22px",
      }}
    >
      <div style={{ fontSize: 26, marginBottom: 10 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 18, fontWeight: 700, marginBottom: 8,
        }}
      >
        {title}
      </div>
      <p
        className="sans"
        style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.6, color: "#6B7280" }}
      >
        {body}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 56px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealSection>
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            {/* Left — copy */}
            <div>
              <div className="section-label">Who We Are</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, marginBottom: 28 }}>
                Built by producers,<br />
                <em style={{ color: "#1B3A6B" }}>for producers.</em>
              </h2>
              <p
                className="sans"
                style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4B5563", marginBottom: 22 }}
              >
                Founded in 2014, the Producers Guild of Kenya is the premier professional
                body representing screen producers working in film, television, digital
                content, and documentary across Kenya and East Africa.
              </p>
              <p
                className="sans"
                style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4B5563", marginBottom: 40 }}
              >
                We exist to elevate the role of the producer — the central creative and
                commercial architect of every screen project — through advocacy, education,
                networking, and international market access.
              </p>
              <button className="btn-outline">Read Our Story</button>
            </div>

            {/* Right — value cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {VALUES.map((v, i) => (
                <RevealSection key={v.title} delay={i * 80}>
                  <ValueCard {...v} />
                </RevealSection>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}