import { useEffect, useRef, useState } from "react";

function TerminalTyper({ lines, loop = false }) {
  const [displayed, setDisplayed] = useState([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (done && !loop) return;
    if (curLine >= lines.length) {
      if (loop) {
        setTimeout(() => { setDisplayed([]); setCurLine(0); setCurChar(0); setDone(false); }, 2000);
      } else setDone(true);
      return;
    }
    const line = lines[curLine];
    if (curChar < line.length) {
      timerRef.current = setTimeout(() => {
        setDisplayed(prev => {
          const copy = [...prev];
          copy[curLine] = (copy[curLine] || "") + line[curChar];
          return copy;
        });
        setCurChar(c => c + 1);
      }, 28 + Math.random() * 20);
    } else {
      timerRef.current = setTimeout(() => { setCurLine(l => l + 1); setCurChar(0); }, 180);
    }
    return () => clearTimeout(timerRef.current);
  }, [curLine, curChar, done, lines, loop]);

  return (
    <div className="terminal-typer">
      {displayed.map((l, i) => (
        <div key={i} className="terminal-line">
          <span className="terminal-prompt">{i === curLine && !done ? "▸" : " "}</span>
          <span className="terminal-text">{l}</span>
          {i === curLine && !done && <span className="terminal-cursor">_</span>}
        </div>
      ))}
    </div>
  );
}

function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const cols = Math.floor(w / 18);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ<>{}[]|\\/*-+=#@!?";

    let raf;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "13px 'Courier New'";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const progress = y / (h / 13);
        const alpha = progress < 0.3 ? 1 : Math.max(0, 1 - (progress - 0.3) * 2);
        ctx.fillStyle = `rgba(0,255,180,${alpha * 0.5})`;
        if (y === 1) ctx.fillStyle = `rgba(180,255,230,${alpha})`;
        ctx.fillText(char, i * 18, y * 13);
        drops[i] = y > h / 13 + Math.random() * 20 ? 0 : y + 1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

export default function MursalinHero() {
  const [booted, setBooted] = useState(false);
  useEffect(() => { setTimeout(() => setBooted(true), 400); }, []);

  const terminalLines = [
    "$ whoami",
    "> Afiujjaman Mursalin",
    "$ cat skills.txt",
    "> Full Stack Developer",
    "> Competitive Programmer",
    "> Problem Solver",
    "$ status --live",
    "> Building the future. One commit at a time.",
  ];

  return (
    <>
      <style>{`
        .hero-root {
          position: relative; min-height: 100vh;
          background: #000; overflow: hidden;
          display: flex; align-items: center;
        }
        .matrix-canvas {
          position: absolute; inset: 0;
          width: 100%; height: 100%; opacity: 0.35;
        }
        .hero-scan {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,255,180,0.012) 2px,
            rgba(0,255,180,0.012) 4px
          );
        }
        .hero-content {
          position: relative; z-index: 10;
          width: 100%; max-width: 1200px;
          margin: 0 auto; padding: 80px 40px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center;
        }
        .hero-left {}
        .hero-tag {
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.3em;
          color: rgba(0,255,180,0.5);
          margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .hero-tag::before { content: ''; width: 32px; height: 1px; background: rgba(0,255,180,0.4); }
        .hero-name {
          font-size: clamp(42px, 6vw, 80px);
          font-weight: 900; line-height: 1.0;
          font-family: 'Courier New', monospace;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 8px;
        }
        .hero-name .accent { color: #00ffb4; }
        .hero-name .dim { color: rgba(255,255,255,0.25); font-size: 0.6em; }
        .hero-sub {
          font-family: 'Courier New', monospace;
          font-size: 13px; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35);
          margin-bottom: 48px;
          text-transform: uppercase;
        }
        .hero-cta {
          display: flex; gap: 16px; flex-wrap: wrap;
        }
        .btn-primary {
          font-family: 'Courier New', monospace;
          font-size: 12px; letter-spacing: 0.2em;
          padding: 14px 28px;
          border: 1px solid #00ffb4;
          color: #000; background: #00ffb4;
          cursor: pointer; transition: all 0.2s;
          text-transform: uppercase;
        }
        .btn-primary:hover { background: transparent; color: #00ffb4; }
        .btn-secondary {
          font-family: 'Courier New', monospace;
          font-size: 12px; letter-spacing: 0.2em;
          padding: 14px 28px;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6); background: transparent;
          cursor: pointer; transition: all 0.2s;
          text-transform: uppercase;
        }
        .btn-secondary:hover { border-color: rgba(0,255,180,0.5); color: #00ffb4; }
        .hero-right {}
        .terminal-box {
          background: rgba(0,10,5,0.85);
          border: 1px solid rgba(0,255,180,0.2);
          padding: 0;
          font-family: 'Courier New', monospace;
          position: relative;
          box-shadow: 0 0 80px rgba(0,255,180,0.08), inset 0 0 40px rgba(0,255,180,0.03);
        }
        .terminal-topbar {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0,255,180,0.1);
          background: rgba(0,255,180,0.03);
        }
        .t-dot { width: 10px; height: 10px; border-radius: 50%; }
        .t-title {
          font-size: 10px; letter-spacing: 0.2em;
          color: rgba(0,255,180,0.4); margin-left: 8px;
        }
        .terminal-body { padding: 24px 20px; min-height: 240px; }
        .terminal-typer {}
        .terminal-line { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; min-height: 20px; }
        .terminal-prompt { color: rgba(0,255,180,0.5); font-size: 13px; width: 10px; flex-shrink: 0; }
        .terminal-text { color: rgba(200,255,235,0.85); font-size: 13px; line-height: 1.4; }
        .terminal-cursor { color: #00ffb4; animation: blink 1s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-stats {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; margin-top: 1px;
          border-top: 1px solid rgba(0,255,180,0.1);
        }
        .stat-cell {
          padding: 16px 20px;
          border-right: 1px solid rgba(0,255,180,0.08);
          text-align: center;
        }
        .stat-cell:last-child { border-right: none; }
        .stat-num {
          font-family: 'Courier New', monospace;
          font-size: 22px; font-weight: 900;
          color: #00ffb4; display: block;
        }
        .stat-label {
          font-family: 'Courier New', monospace;
          font-size: 9px; letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3); text-transform: uppercase;
        }
        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute; width: 12px; height: 12px;
          border-color: rgba(0,255,180,0.6);
          border-style: solid;
        }
        .corner-tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .corner-tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
        .hero-scroll-hint {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.3em; color: rgba(0,255,180,0.3);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          animation: fadeInUp 2s 2s both;
        }
        .scroll-arrow { animation: bounce 2s ease-in-out infinite; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateX(-50%) translateY(16px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; padding: 40px 20px; gap: 40px; }
        }
      `}</style>

      <div className="hero-root">
        <MatrixRain />
        <div className="hero-scan" />

        <div className="hero-content">
          <div className="hero-left" style={{ animation: booted ? "none" : "none", opacity: booted ? 1 : 0, transition: "opacity 0.8s 0.3s" }}>
            <div className="hero-tag">PORTFOLIO_V3.0 // INITIALIZED</div>
            <h1 className="hero-name">
              <span className="dim">&lt;</span>
              <span className="accent">Afiujjaman</span>
              <br />
              Mursalin
              <span className="dim"> /&gt;</span>
            </h1>
            <p className="hero-sub">Full Stack Developer &nbsp;·&nbsp; Competitive Programmer</p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                ./view_projects
              </button>
              <button className="btn-secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                ./contact_me
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="terminal-box">
              <div className="corner-tl" /><div className="corner-tr" /><div className="corner-bl" /><div className="corner-br" />
              <div className="terminal-topbar">
                <div className="t-dot" style={{ background: "#ff5f57" }} />
                <div className="t-dot" style={{ background: "#febc2e" }} />
                <div className="t-dot" style={{ background: "#28c840" }} />
                <span className="t-title">MURSALIN@DEV:~$</span>
              </div>
              <div className="terminal-body">
                {booted && <TerminalTyper lines={terminalLines} />}
              </div>
              <div className="hero-stats">
                <div className="stat-cell">
                  <span className="stat-num">4+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Tech Stack</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <span className="scroll-arrow">▼</span>
        </div>
      </div>
    </>
  );
}