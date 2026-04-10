const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    .sans { font-family: 'Inter', sans-serif; }

    /* ── Navigation ── */
    .nav-link {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #4B5563;
      cursor: pointer;
      transition: color 0.2s;
      background: none;
      border: none;
      padding: 4px 0;
      text-decoration: none;
    }
    .nav-link:hover { color: #1B3A6B; }

    /* ── Buttons ── */
    .btn-primary {
      background: #1B3A6B;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: none;
      padding: 14px 32px;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
      border-radius: 3px;
    }
    .btn-primary:hover { background: #243F72; transform: translateY(-1px); }

    .btn-outline {
      background: transparent;
      color: #1B3A6B;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 1.5px solid #1B3A6B;
      padding: 13px 32px;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      border-radius: 3px;
    }
    .btn-outline:hover { background: #1B3A6B; color: #FFFFFF; }

    .btn-outline-white {
      background: transparent;
      color: #FFFFFF;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: 1.5px solid rgba(255,255,255,0.6);
      padding: 13px 32px;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
      border-radius: 3px;
    }
    .btn-outline-white:hover { background: rgba(255,255,255,0.15); border-color: white; }

    /* ── Shared UI ── */
    .section-label {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #2E5BA8;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    .section-label::before {
      content: '';
      display: block;
      width: 32px;
      height: 2px;
      background: #2E5BA8;
      border-radius: 2px;
    }

    .avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 13px;
      color: white;
      flex-shrink: 0;
    }

    /* ── Cards ── */
    .program-card {
      background: #F8FAFF;
      border: 1px solid #E5EAF5;
      border-top: 3px solid #1B3A6B;
      padding: 32px 28px;
      border-radius: 6px;
      height: 100%;
      transition: transform 0.25s, box-shadow 0.25s, border-top-color 0.25s;
    }
    .program-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(27,58,107,0.10);
      border-top-color: #2E5BA8;
    }

    .film-card {
      background: #F8FAFF;
      border: 1px solid #E5EAF5;
      padding: 24px 22px;
      border-radius: 6px;
      transition: box-shadow 0.2s, transform 0.2s;
      cursor: default;
    }
    .film-card:hover { box-shadow: 0 8px 28px rgba(27,58,107,0.08); transform: translateY(-2px); }

    .testimonial-card {
      background: #FFFFFF;
      border: 1px solid #E5EAF5;
      padding: 40px 36px;
      border-radius: 8px;
      box-shadow: 0 4px 24px rgba(27,58,107,0.06);
    }

    .membership-tier {
      background: #FFFFFF;
      border: 1.5px solid #E5EAF5;
      padding: 40px 32px;
      border-radius: 8px;
      flex: 1;
      transition: border-color 0.25s, box-shadow 0.25s;
    }
    .membership-tier:hover { border-color: #2E5BA8; box-shadow: 0 8px 32px rgba(27,58,107,0.08); }
    .membership-tier.featured {
      background: #1B3A6B;
      border-color: #1B3A6B;
      color: #FFFFFF;
      box-shadow: 0 16px 48px rgba(27,58,107,0.25);
    }

    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 300;
      color: #4B5563;
      margin-bottom: 12px;
      line-height: 1.5;
    }
    .membership-tier.featured .check-item { color: rgba(255,255,255,0.8); }

    /* ── Events ── */
    .event-row {
      border-bottom: 1px solid #E5EAF5;
      padding: 28px 16px;
      display: grid;
      grid-template-columns: 100px 1fr auto;
      gap: 24px;
      align-items: center;
      transition: background 0.2s;
      cursor: pointer;
      border-radius: 4px;
    }
    .event-row:first-child { border-top: 1px solid #E5EAF5; }
    .event-row:hover { background: #F0F4FF; }

    .event-tag {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 20px;
    }

    /* ── Footer ── */
    .footer-link {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      color: rgba(255,255,255,0.45);
      cursor: pointer;
      transition: color 0.2s;
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
    }
    .footer-link:hover { color: #93C5FD; }

    /* ── Mobile menu ── */
    .mobile-menu {
      position: fixed;
      inset: 0;
      background: #FFFFFF;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 36px;
    }

    /* ── Hero ── */
    .hero-pattern {
      background-image: radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0);
      background-size: 28px 28px;
    }

    /* ── Responsive ── */
    @media (max-width: 768px) {
      .desktop-nav        { display: none !important; }
      .hero-grid          { grid-template-columns: 1fr !important; }
      .hero-title         { font-size: 44px !important; }
      .stats-grid         { grid-template-columns: 1fr 1fr !important; }
      .programs-grid      { grid-template-columns: 1fr !important; }
      .films-grid         { grid-template-columns: 1fr 1fr !important; }
      .testimonials-grid  { grid-template-columns: 1fr !important; }
      .tiers-row          { flex-direction: column !important; }
      .about-grid         { grid-template-columns: 1fr !important; }
      .event-row          { grid-template-columns: 80px 1fr !important; }
      .event-tag-cell     { display: none !important; }
      .footer-cols        { grid-template-columns: 1fr 1fr !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu-btn { display: none !important; }
    }
  `}</style>
);

export default GlobalStyles;