import { useState, useRef, useEffect } from "react";

const TIMELINE = [
  {
    year: "2010–2022",
    tag: "ORIGIN_PHASE",
    title: "The OG Days",
    body: "Free-spirited, outdoor-loving kid who balanced adventures with studies. Built the foundation—curiosity, resilience, and an eye for how things work.",
    accent: "#00ffb4",
  },
  {
    year: "2022–PRESENT",
    tag: "UNIVERSITY_ERA",
    title: "Engineering University",
    body: "Got into my dream engineering university. Every day new learning, growing day by day, gaining maturity and shaping my future. The structured chaos of engineering life accelerated everything.",
    accent: "#00d4ff",
  },
  {
    year: "2023–PRESENT",
    tag: "CODING_ERA",
    title: "Full Stack Developer",
    body: "Curiosity became obsession. What started as HTML on a Sunday is now full-stack applications, competitive programming, and a growing body of work. The fire keeps burning hotter.",
    accent: "#ff6b9d",
  },
];

function TimelineEntry({ entry, index, visible }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (visible) { const t = setTimeout(() => setActive(true), index * 200); return () => clearTimeout(t); }
  }, [visible, index]);

  return (
    <>
      <style>{`
        .tl-entry {
          display: grid; grid-template-columns: 140px 1px 1fr;
          gap: 0 32px; margin-bottom: 48px;
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s, transform 0.6s;
        }
        .tl-entry.active { opacity: 1; transform: translateY(0); }
        .tl-year-col {
          text-align: right; padding-top: 4px;
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.3); line-height: 1.6;
        }
        .tl-year { color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 700; }
        .tl-line-col { position: relative; display: flex; flex-direction: column; align-items: center; }
        .tl-dot {
          width: 10px; height: 10px; border-radius: 50%;
          border: 2px solid; margin-top: 4px; flex-shrink: 0;
          position: relative; z-index: 2;
          box-shadow: 0 0 12px currentColor;
        }
        .tl-connector { flex: 1; width: 1px; background: rgba(255,255,255,0.06); margin-top: 4px; }
        .tl-content-col { padding-bottom: 16px; }
        .tl-tag {
          font-family: 'Courier New', monospace; font-size: 9px;
          letter-spacing: 0.3em; margin-bottom: 8px;
        }
        .tl-title {
          font-family: 'Courier New', monospace; font-size: 22px;
          font-weight: 700; color: #fff; margin-bottom: 12px;
        }
        .tl-body {
          font-family: 'Courier New', monospace; font-size: 13px;
          line-height: 1.8; color: rgba(255,255,255,0.45);
          max-width: 500px;
        }
        @media (max-width: 600px) {
          .tl-entry { grid-template-columns: 80px 1px 1fr; gap: 0 16px; }
          .tl-year-col { font-size: 9px; }
        }
      `}</style>
      <div className={`tl-entry${active ? " active" : ""}`}>
        <div className="tl-year-col">
          <div className="tl-year">{entry.year.split("–")[0]}</div>
          <div>{entry.year.includes("–") ? "– " + entry.year.split("–")[1] : ""}</div>
        </div>
        <div className="tl-line-col">
          <div className="tl-dot" style={{ borderColor: entry.accent, color: entry.accent }} />
          <div className="tl-connector" />
        </div>
        <div className="tl-content-col">
          <div className="tl-tag" style={{ color: entry.accent }}>// {entry.tag}</div>
          <div className="tl-title">{entry.title}</div>
          <div className="tl-body">{entry.body}</div>
        </div>
      </div>
    </>
  );
}

export default function About() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .about-root {
          background: #000; padding: 100px 40px;
          position: relative;
        }
        .about-root::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,180,0.4), transparent);
        }
        .about-inner { max-width: 1200px; margin: 0 auto; }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 80px; align-items: start; margin-top: 60px;
        }
        .about-left {}
        .about-id-card {
          border: 1px solid rgba(0,255,180,0.15);
          padding: 32px; background: rgba(0,255,180,0.02);
          position: relative; margin-bottom: 24px;
        }
        .about-avatar-wrap {
          width: 120px; height: 120px; border-radius: 50%;
          border: 1px solid rgba(0,255,180,0.3);
          overflow: hidden; margin-bottom: 20px;
          box-shadow: 0 0 30px rgba(0,255,180,0.1);
        }
        .about-avatar-wrap img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(40%) contrast(1.1); }
        .about-id-name {
          font-family: 'Courier New', monospace; font-size: 18px;
          font-weight: 700; color: #fff; margin-bottom: 6px;
        }
        .about-id-role {
          font-family: 'Courier New', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(0,255,180,0.6);
          margin-bottom: 20px;
        }
        .about-id-rows {}
        .about-id-row {
          display: flex; justify-content: space-between;
          font-family: 'Courier New', monospace; font-size: 11px;
          padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.4);
        }
        .about-id-row:last-child { border-bottom: none; }
        .about-id-row span:last-child { color: rgba(255,255,255,0.7); }
        .about-values {
          border: 1px solid rgba(255,255,255,0.06);
          padding: 24px;
        }
        .about-values-title {
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.3em; color: rgba(0,255,180,0.4);
          margin-bottom: 16px;
        }
        .value-pill {
          display: inline-block; margin: 4px;
          font-family: 'Courier New', monospace; font-size: 11px;
          letter-spacing: 0.1em; padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-root { padding: 60px 20px; }
        }
      `}</style>

      <section className="about-root" ref={rootRef}>
        <div className="about-inner">
          <div className="section-label" style={{ fontFamily: "'Courier New', monospace", fontSize: 11, letterSpacing: "0.3em", color: "rgba(0,255,180,0.5)", marginBottom: 12 }}>// 03. ORIGIN_STORY</div>
          <h2 style={{ fontFamily: "'Courier New', monospace", fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
            ABOUT<span style={{ color: "#00ffb4" }}>_</span>ME
          </h2>

          <div className="about-grid">
            <div className="about-left">
              <div className="about-id-card">
                <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "2px solid rgba(0,255,180,0.6)", borderLeft: "2px solid rgba(0,255,180,0.6)" }} />
                <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: "2px solid rgba(0,255,180,0.6)", borderRight: "2px solid rgba(0,255,180,0.6)" }} />
                <div className="about-avatar-wrap">
                  <img src="/ME.png" alt="Mursalin" />
                </div>
                <div className="about-id-name">Afiujjaman Mursalin</div>
                <div className="about-id-role">FULL_STACK_DEVELOPER</div>
                <div className="about-id-rows">
                  {[["LOCATION", "Bangladesh"], ["STATUS", "Available"], ["LEVEL", "Developer"], ["FOCUS", "Web + CP"]].map(([k, v]) => (
                    <div className="about-id-row" key={k}><span>{k}</span><span>{v}</span></div>
                  ))}
                </div>
              </div>
              <div className="about-values">
                <div className="about-values-title">CORE_VALUES://</div>
                {["Curiosity", "Precision", "Growth", "Open Source", "Clean Code", "Performance"].map(v => (
                  <span key={v} className="value-pill">{v}</span>
                ))}
              </div>
            </div>

            <div>
              {TIMELINE.map((entry, i) => (
                <TimelineEntry key={entry.tag} entry={entry} index={i} visible={visible} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}