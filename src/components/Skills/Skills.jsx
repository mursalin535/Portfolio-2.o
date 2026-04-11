import { useState, useEffect, useRef } from "react";

const FRONTEND = [
  { name: "HTML", color: "#E34F26", pct: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", color: "#1572B6", pct: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", pct: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", color: "#61DAFB", pct: 87, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", color: "#06B6D4", pct: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GSAP", color: "#88CE02", pct: 75, logo: "https://assets.codepen.io/16327/gsap-logo.svg" },
];
const BACKEND = [
  { name: "Node.js", color: "#339933", pct: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", color: "#888", pct: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MySQL", color: "#4479A1", pct: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "REST API", color: "#FF6B6B", pct: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];
const CP = [
  { name: "C++", color: "#00599C", pct: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", color: "#3776AB", pct: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", color: "#A8B9CC", pct: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "DSA", color: "#FF6B6B", pct: 90, logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
  { name: "Algorithms", color: "#9B59B6", pct: 88, logo: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png" },
];

const CATS = [
  { key: "frontend", label: "FRONTEND", data: FRONTEND },
  { key: "backend", label: "BACKEND", data: BACKEND },
  { key: "cp", label: "COMP_PROG", data: CP },
];

function SkillBar({ item, visible }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(item.pct), 100 + Math.random() * 200);
      return () => clearTimeout(t);
    }
  }, [visible, item.pct]);
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-header">
        <img src={item.logo} alt={item.name} className="skill-logo" />
        <span className="skill-name">{item.name}</span>
        <span className="skill-pct" style={{ color: item.color }}>{item.pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%`, background: item.color, boxShadow: `0 0 8px ${item.color}60` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [cat, setCat] = useState("frontend");
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => { setVisible(false); setTimeout(() => setVisible(true), 50); }, [cat]);

  const current = CATS.find(c => c.key === cat);

  return (
    <>
      <style>{`
        .skills-root {
          background: #000; padding: 100px 40px;
          position: relative;
        }
        .skills-root::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,180,0.4), transparent);
        }
        .skills-header {
          max-width: 1200px; margin: 0 auto 60px;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 24px;
        }
        .section-label {
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.3em;
          color: rgba(0,255,180,0.5); margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Courier New', monospace;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900; color: #fff;
          line-height: 1;
        }
        .section-title .acc { color: #00ffb4; }
        .cat-tabs { display: flex; gap: 4px; }
        .cat-tab {
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.18em;
          padding: 8px 16px; border: 1px solid rgba(255,255,255,0.1);
          background: none; color: rgba(255,255,255,0.35);
          cursor: pointer; transition: all 0.2s;
          text-transform: uppercase;
        }
        .cat-tab:hover { border-color: rgba(0,255,180,0.3); color: rgba(0,255,180,0.7); }
        .cat-tab.active { border-color: #00ffb4; color: #00ffb4; background: rgba(0,255,180,0.06); }
        .skills-body {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px 80px; align-items: start;
        }
        .skill-bar-row { margin-bottom: 20px; }
        .skill-bar-header {
          display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
        }
        .skill-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
        .skill-name { font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 0.1em; color: rgba(255,255,255,0.7); flex: 1; }
        .skill-pct { font-family: 'Courier New', monospace; font-size: 12px; font-weight: 700; }
        .skill-track {
          width: 100%; height: 2px; background: rgba(255,255,255,0.06);
          position: relative; overflow: hidden;
        }
        .skill-fill { height: 100%; transition: width 1.2s cubic-bezier(0.25,1,0.5,1); position: relative; }
        .skill-fill::after {
          content: ''; position: absolute; right: 0; top: -2px;
          width: 4px; height: 6px; background: inherit;
          filter: brightness(2);
        }
        .skills-aside {
          display: flex; flex-direction: column; gap: 24px;
        }
        .skills-sys-panel {
          border: 1px solid rgba(0,255,180,0.12);
          padding: 24px; background: rgba(0,255,180,0.02);
          position: relative;
        }
        .sys-label {
          font-family: 'Courier New', monospace;
          font-size: 9px; letter-spacing: 0.3em;
          color: rgba(0,255,180,0.4); margin-bottom: 16px;
          text-transform: uppercase;
        }
        .sys-entry {
          display: flex; justify-content: space-between;
          font-family: 'Courier New', monospace; font-size: 12px;
          padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
        }
        .sys-entry:last-child { border-bottom: none; }
        .sys-entry span:last-child { color: rgba(0,255,180,0.7); }
        @media (max-width: 768px) {
          .skills-body { grid-template-columns: 1fr; }
          .skills-root { padding: 60px 20px; }
        }
      `}</style>

      <section className="skills-root" ref={rootRef}>
        <div className="skills-header">
          <div>
            <div className="section-label">// 02. CAPABILITIES</div>
            <h2 className="section-title">SKILL<span className="acc">_</span>MATRIX</h2>
          </div>
          <div className="cat-tabs">
            {CATS.map(c => (
              <button key={c.key} className={`cat-tab${cat === c.key ? " active" : ""}`} onClick={() => setCat(c.key)}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-body">
          <div>
            {current.data.map(item => (
              <SkillBar key={item.name} item={item} visible={visible} />
            ))}
          </div>
          <div className="skills-aside">
            <div className="skills-sys-panel">
              <div className="corner-tl" style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "2px solid rgba(0,255,180,0.6)", borderLeft: "2px solid rgba(0,255,180,0.6)" }} />
              <div className="corner-br" style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: "2px solid rgba(0,255,180,0.6)", borderRight: "2px solid rgba(0,255,180,0.6)" }} />
              <div className="sys-label">SYSTEM://INFO</div>
              {[
                ["MODE", "ACTIVE"],
                ["FOCUS", current.label],
                ["STATUS", "LEARNING++"],
                ["VERSION", "3.0.1"],
                ["BUILD", "STABLE"],
              ].map(([k, v]) => (
                <div className="sys-entry" key={k}><span>{k}</span><span>{v}</span></div>
              ))}
            </div>
            <div className="skills-sys-panel">
              <div className="sys-label">INTERESTS://</div>
              {["Open Source", "System Design", "Algorithms", "UI Engineering", "Performance"].map(i => (
                <div className="sys-entry" key={i}>
                  <span>▸ {i}</span><span>ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}