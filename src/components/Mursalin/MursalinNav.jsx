import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { name: "INIT", id: "hero" },
  { name: "SKILLS", id: "skills" },
  { name: "ABOUT", id: "about" },
  { name: "PROJECTS", id: "projects" },
  { name: "CONTACT", id: "contact" },
];

export default function MursalinNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [glitchLabel, setGlitchLabel] = useState("");
  const [time, setTime] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    tick();
    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
      const pos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= pos) { setActiveSection(NAV_LINKS[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const glitch = (name) => {
    const chars = "!@#$%^&*<>[]{}";
    let count = 0;
    const iv = setInterval(() => {
      setGlitchLabel(name.split("").map(c => count < 5 ? chars[Math.floor(Math.random() * chars.length)] : c).join(""));
      count++;
      if (count > 8) { clearInterval(iv); setGlitchLabel(""); }
    }, 40);
  };

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 12px 24px;
          transition: all 0.3s;
        }
        .nav-root.scrolled {
          background: rgba(0,0,0,0.95);
          border-bottom: 1px solid rgba(0,255,180,0.15);
          box-shadow: 0 0 40px rgba(0,255,180,0.05);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Courier New', monospace;
          font-size: 14px; letter-spacing: 0.2em;
          color: rgba(0,255,180,0.9);
          display: flex; flex-direction: column; line-height: 1.2;
        }
        .nav-logo span:first-child { color: rgba(0,255,180,0.4); font-size: 10px; }
        .nav-links { display: flex; gap: 4px; align-items: center; }
        .nav-link {
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.18em;
          padding: 6px 14px; cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.2s; position: relative;
          color: rgba(255,255,255,0.45);
          background: none; text-transform: uppercase;
        }
        .nav-link:hover { color: rgba(0,255,180,0.9); border-color: rgba(0,255,180,0.25); }
        .nav-link.active {
          color: #00ffb4;
          border-color: rgba(0,255,180,0.5);
          background: rgba(0,255,180,0.05);
        }
        .nav-link.active::before {
          content: '> '; color: rgba(0,255,180,0.5);
        }
        .nav-time {
          font-family: 'Courier New', monospace;
          font-size: 11px; color: rgba(0,255,180,0.35);
          letter-spacing: 0.1em; min-width: 70px; text-align: right;
        }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
        .hamburger span {
          width: 24px; height: 1.5px; background: rgba(0,255,180,0.7);
          transition: all 0.3s; display: block;
        }
        .mobile-menu {
          position: fixed; inset: 0; background: rgba(0,0,0,0.97);
          z-index: 99; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 32px;
        }
        .mobile-link {
          font-family: 'Courier New', monospace; font-size: 24px;
          letter-spacing: 0.25em; color: rgba(255,255,255,0.5);
          cursor: pointer; transition: color 0.2s;
          border: none; background: none;
        }
        .mobile-link.active, .mobile-link:hover { color: #00ffb4; }
        @media (max-width: 768px) {
          .nav-links, .nav-time { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <span>// PORTFOLIO</span>
            <span>MURSALIN.DEV</span>
          </div>
          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                className={`nav-link${activeSection === l.id ? " active" : ""}`}
                onClick={() => scrollTo(l.id)}
                onMouseEnter={() => glitch(l.name)}
              >
                {glitchLabel && activeSection !== l.id ? glitchLabel : l.name}
              </button>
            ))}
          </div>
          <div className="nav-time">{time}</div>
          <div className="hamburger" onClick={() => setMenuOpen(m => !m)}>
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <button key={l.id} className={`mobile-link${activeSection === l.id ? " active" : ""}`} onClick={() => scrollTo(l.id)}>
              {l.name}
            </button>
          ))}
        </div>
      )}

      <div style={{ height: 64 }} />
    </>
  );
}