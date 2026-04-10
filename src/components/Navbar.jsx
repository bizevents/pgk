import { useState } from "react";
import { NAV_LINKS } from "../constants/data";
import { useNavScroll } from "../hooks";

// Maps each nav label to the id of the section it should scroll to
const NAV_TARGETS = {
  About:    "about",
  Members:  "members",
  Programs: "programs",
  Projects: "projects",
  Events:   "events",
  Contact:  "membership",
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <div
        style={{
          width: 38, height: 38,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <img src="images/pgk-logo.jpg" style={{width:"60px"}}/>
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700, fontSize: 16, lineHeight: 1.1, color: "#111827",
          }}
        >
          Producers Guild
        </div>
        <div
          className="sans"
          style={{
            fontSize: 10, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#2E5BA8", fontWeight: 600,
          }}
        >
          of Kenya
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onClose }) {
  return (
    <div className="mobile-menu">
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 24, right: 24,
          background: "none", border: "none",
          color: "#111827", fontSize: 26, cursor: "pointer",
        }}
      >
        ✕
      </button>
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          className="nav-link"
          style={{ fontSize: 20 }}
          onClick={() => {
            scrollTo(NAV_TARGETS[link]);
            onClose();
          }}
        >
          {link}
        </button>
      ))}
      <button
        className="btn-primary"
        onClick={() => {
          scrollTo("membership");
          onClose();
        }}
      >
        Join the Guild
      </button>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 56px", height: "72px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #E5EAF5" : "1px solid transparent",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        <Logo />

        <div className="desktop-nav" style={{ display: "flex", gap: "40px" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="nav-link"
              onClick={() => scrollTo(NAV_TARGETS[link])}
            >
              {link}
            </button>
          ))}
        </div>

        <button
          className="btn-primary sans"
          style={{ fontSize: 11, padding: "10px 22px" }}
          onClick={() => scrollTo("membership")}
        >
          Join the Guild
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          style={{ background: "none", border: "none", color: "#111827", cursor: "pointer", fontSize: 22 }}
        >
          ☰
        </button>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}