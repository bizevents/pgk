import { FOOTER_COLUMNS } from "../constants/data";

function FooterLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
      <div
        style={{
          width: 38, height: 38, background: "#2E5BA8",
          borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 18 }}>🎬</span>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700, fontSize: 16, lineHeight: 1.1, color: "#FFFFFF",
          }}
        >
          Producers Guild
        </div>
        <div
          className="sans"
          style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#93C5FD", fontWeight: 600 }}
        >
          of Kenya
        </div>
      </div>
    </div>
  );
}

function FooterColumn({ heading, links }) {
  return (
    <div>
      <div
        className="sans"
        style={{
          fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)", fontWeight: 600, marginBottom: 20,
        }}
      >
        {heading}
      </div>
      {links.map((l) => (
        <a key={l} href="#" className="footer-link">
          {l}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0F1F3D", padding: "80px 56px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top grid */}
        <div
          className="footer-cols"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: 64 }}
        >
          {/* Brand blurb */}
          <div>
            <FooterLogo />
            <p
              className="sans"
              style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.4)", maxWidth: 280 }}
            >
              The professional body for screen producers across Kenya and East Africa.
              A member of the International Federation of Film Producers Associations (FIAPF).
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn key={col.heading} {...col} />
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 32,
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 16,
          }}
        >
          <p className="sans" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontWeight: 300 }}>
            © 2026 Producers Guild of Kenya. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use", "Contact"].map((l) => (
              <a
                key={l}
                href="#"
                className="footer-link"
                style={{ marginBottom: 0, fontSize: 12, color: "rgba(255,255,255,0.35)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}