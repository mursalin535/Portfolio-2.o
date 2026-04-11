import { useRef, useEffect, useState } from "react";

export default function Welcome() {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const progressRef = useRef(0);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      progressRef.current = Math.max(0, Math.min(1, scrolled / total));
    };

    const animate = () => {
      const p = progressRef.current;
      const maxShift = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${p * maxShift}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    // Random glitch trigger
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200 + Math.random() * 300);
    }, 3000 + Math.random() * 4000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
      clearInterval(glitchInterval);
    };
  }, []);

  const text = "WELCOME_TO_MY_CODING_KINGDOM_";

  return (
    <>
      <style>{`
        .welcome-root {
          position: relative; height: 300vh; background: #000;
        }
        .welcome-sticky {
          position: sticky; top: 0; height: 100vh;
          overflow: hidden; display: flex; align-items: center;
        }
        .welcome-bars {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          justify-content: center; gap: 3px;
          pointer-events: none;
        }
        .w-bar {
          height: 2px; background: rgba(0,255,180,0.12);
          transform-origin: left;
        }
        .welcome-track {
          display: flex; align-items: center;
          white-space: nowrap; will-change: transform;
          position: relative; z-index: 2;
        }
        .welcome-bigtext {
          font-family: 'Courier New', monospace;
          font-size: clamp(60px, 10vw, 140px);
          font-weight: 900; letter-spacing: 0.05em;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0,255,180,0.35);
          text-transform: uppercase; user-select: none;
          padding: 0 40px;
          transition: all 0.05s;
        }
        .welcome-bigtext.solid {
          color: rgba(0,255,180,0.08);
          -webkit-text-stroke: 1.5px rgba(0,255,180,0.5);
        }
        .welcome-bigtext.glitch {
          -webkit-text-stroke: 2px #00ffb4;
          text-shadow: 3px 0 rgba(255,0,100,0.6), -3px 0 rgba(0,200,255,0.6);
          animation: glitchShift 0.1s steps(1) infinite;
        }
        @keyframes glitchShift {
          0% { clip-path: inset(0 0 85% 0); transform: translateX(4px); }
          25% { clip-path: inset(40% 0 40% 0); transform: translateX(-4px); }
          50% { clip-path: inset(75% 0 5% 0); transform: translateX(2px); }
          75% { clip-path: inset(15% 0 65% 0); transform: translateX(-2px); }
          100% { clip-path: inset(0 0 85% 0); transform: translateX(0); }
        }
        .welcome-label {
          position: absolute; bottom: 48px; right: 48px;
          font-family: 'Courier New', monospace;
          font-size: 11px; letter-spacing: 0.25em;
          color: rgba(0,255,180,0.3);
          display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
        }
        .welcome-progress-bar {
          width: 120px; height: 1px; background: rgba(0,255,180,0.15);
          position: relative; overflow: hidden;
        }
        .welcome-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: rgba(0,255,180,0.6);
          transition: width 0.1s;
        }
      `}</style>

      <section className="welcome-root" ref={sectionRef}>
        <div className="welcome-sticky">
          <div className="welcome-bars">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-bar" style={{ width: `${40 + i * 4}%`, opacity: 0.4 + i * 0.04 }} />
            ))}
          </div>

          <div className="welcome-track" ref={trackRef}>
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`welcome-bigtext${n === 2 ? " solid" : ""}${glitching ? " glitch" : ""}`}
              >
                {text}
              </span>
            ))}
          </div>

          <WelcomeProgress sectionRef={sectionRef} />
        </div>
      </section>
    </>
  );
}

function WelcomeProgress({ sectionRef }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const s = sectionRef.current;
      if (!s) return;
      const rect = s.getBoundingClientRect();
      const total = s.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setPct(Math.max(0, Math.min(100, (scrolled / total) * 100)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionRef]);
  return (
    <div className="welcome-label">
      <span>{Math.round(pct)}%</span>
      <div className="welcome-progress-bar">
        <div className="welcome-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}