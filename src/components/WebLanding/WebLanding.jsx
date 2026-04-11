import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MatrixBG() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const cols = Math.floor(w / 16);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコ<>{}[]|\\/*-+=@!?";
    let raf;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "12px 'Courier New'";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const first = y * 12 < 24;
        ctx.fillStyle = first ? "rgba(180,255,230,0.9)" : "rgba(0,255,180,0.45)";
        ctx.fillText(char, i * 16, y * 12);
        drops[i] = y * 12 > h + Math.random() * 5000 ? 0 : y + 1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.7 }} />;
}

function GlitchText({ text }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150 + Math.random() * 200);
    }, 3000 + Math.random() * 3000);
    return () => clearInterval(iv);
  }, []);
  return (
    <span style={{
      position: "relative",
      textShadow: glitch ? "3px 0 rgba(255,0,100,0.7), -3px 0 rgba(0,200,255,0.7)" : "none",
      display: "inline-block",
    }}>{text}</span>
  );
}

export default function WebLanding() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <>
      <style>{`
        .landing-root {
          position: relative; min-height: 100vh; background: #000;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; text-align: center; padding: 40px 20px;
        }
        .landing-scan {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,180,0.01) 2px, rgba(0,255,180,0.01) 4px);
        }
        .landing-content {
          position: relative; z-index: 10;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.8s, transform 0.8s;
        }
        .landing-content.loaded { opacity: 1; transform: translateY(0); }
        .landing-tag {
          font-family: 'Courier New', monospace; font-size: 11px;
          letter-spacing: 0.4em; color: rgba(0,255,180,0.5);
          margin-bottom: 32px; display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .landing-tag::before, .landing-tag::after { content: ''; width: 40px; height: 1px; background: rgba(0,255,180,0.3); }
        .landing-heading {
          font-family: 'Courier New', monospace;
          font-size: clamp(36px, 8vw, 100px); font-weight: 900;
          color: #fff; line-height: 1; margin-bottom: 16px;
        }
        .landing-heading .acc { color: #00ffb4; }
        .landing-heading .dim { color: rgba(255,255,255,0.2); }
        .landing-sub {
          font-family: 'Courier New', monospace;
          font-size: 14px; letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35); margin-bottom: 56px;
          text-transform: uppercase;
        }
        .landing-btn {
          font-family: 'Courier New', monospace; font-size: 13px;
          letter-spacing: 0.25em; padding: 18px 44px;
          border: 1px solid #00ffb4; background: #00ffb4;
          color: #000; cursor: pointer; transition: all 0.25s;
          text-transform: uppercase; font-weight: 700;
          position: relative; overflow: hidden;
        }
        .landing-btn:hover { background: transparent; color: #00ffb4; }
        .landing-footer {
          position: absolute; bottom: 32px;
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.3em; color: rgba(0,255,180,0.2);
          display: flex; gap: 32px;
        }
        .corner { position: absolute; width: 16px; height: 16px; border-color: rgba(0,255,180,0.4); border-style: solid; }
        .corner-tl { top: 24px; left: 24px; border-width: 2px 0 0 2px; }
        .corner-tr { top: 24px; right: 24px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 24px; left: 24px; border-width: 0 0 2px 2px; }
        .corner-br { bottom: 24px; right: 24px; border-width: 0 2px 2px 0; }
      `}</style>

      <div className="landing-root">
        <MatrixBG />
        <div className="landing-scan" />
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className={`landing-content${loaded ? " loaded" : ""}`}>
          <div className="landing-tag">PORTFOLIO // ONLINE</div>
          <h1 className="landing-heading">
            <span className="dim">{"<"}</span>
            <GlitchText text="Hey" />
            <span className="acc">,,,</span><br />
            Welcome<span className="dim">{"/>"}</span>
          </h1>
          <p className="landing-sub">to the portfolio of Afiujjaman Mursalin</p>
          <button className="landing-btn" onClick={() => navigate("/mursalin")}>
            ./ENTER_PORTFOLIO
          </button>
        </div>

        <div className="landing-footer">
          <span>FULL_STACK_DEV</span>
          <span>COMP_PROG</span>
          <span>BUILDER</span>
        </div>
      </div>
    </>
  );
}