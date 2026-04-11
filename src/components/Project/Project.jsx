import { useState, useEffect, useRef } from "react";

const PROJECTS = [
  {
    id: "P01",
    title: "Portfolio 1.0",
    desc: "My first project — a bold first step into what I'd learned. Raw, honest, and the beginning of everything.",
    img: "/portfolio1.png",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GSAP"],
    learned: "React component architecture, responsive design principles, and the discipline of shipping.",
    link: "https://afiujjaman.netlify.app/",
    status: "DEPLOYED",
    year: "2023",
  },
  {
    id: "P02",
    title: "Bariwala",
    desc: "A real-world problem solver. A platform helping students find accommodation when living away from family.",
    img: "/Bariwala (2).png",
    stack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind", "Framer Motion"],
    learned: "Full-stack architecture, REST APIs, relational databases, and user authentication flows.",
    link: "https://bariwala.netlify.app/",
    status: "LIVE",
    year: "2023",
  },
  {
    id: "P03",
    title: "Gariseba",
    desc: "All-in-one car platform: buy/sell, insurance, fuel prices, and servicing in one unified experience.",
    img: "/gariseba.png",
    stack: ["React", "GSAP", "Framer Motion", "Tailwind"],
    learned: "Advanced React patterns, complex state management, and crafting intuitive multi-feature UX.",
    link: "https://gaariseba.netlify.app/",
    status: "LIVE",
    year: "2024",
  },
  {
    id: "P04",
    title: "Portfolio 2.0",
    desc: "The upgraded successor. Futuristic touches, refined motion design, and a more cohesive personal brand.",
    img: "/Portfolio2.png",
    stack: ["React", "Framer Motion", "GSAP", "Tailwind"],
    learned: "3D transforms, scroll-driven animations, and the art of purposeful motion design.",
    link: "https://afiujjaman2.netlify.app/",
    status: "LIVE",
    year: "2024",
  },
];

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.9);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s;
        }
        .modal-box {
          background: #030f08; border: 1px solid rgba(0,255,180,0.2);
          max-width: 860px; width: 100%; max-height: 90vh;
          overflow-y: auto; position: relative;
          animation: slideUp 0.3s cubic-bezier(0.25,1,0.5,1);
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        .modal-img { width: 100%; height: 260px; object-fit: cover; display: block; filter: grayscale(20%); }
        .modal-body { padding: 32px; }
        .modal-id {
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.3em; color: rgba(0,255,180,0.4);
          margin-bottom: 8px;
        }
        .modal-title {
          font-family: 'Courier New', monospace; font-size: 32px;
          font-weight: 900; color: #fff; margin-bottom: 16px;
        }
        .modal-desc {
          font-family: 'Courier New', monospace; font-size: 13px;
          line-height: 1.8; color: rgba(255,255,255,0.5);
          margin-bottom: 28px;
        }
        .modal-section-label {
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.3em; color: rgba(0,255,180,0.5);
          margin-bottom: 12px;
        }
        .modal-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .modal-tag {
          font-family: 'Courier New', monospace; font-size: 11px;
          letter-spacing: 0.1em; padding: 5px 12px;
          border: 1px solid rgba(0,255,180,0.2);
          color: rgba(0,255,180,0.7); background: rgba(0,255,180,0.04);
        }
        .modal-learned {
          font-family: 'Courier New', monospace; font-size: 13px;
          line-height: 1.8; color: rgba(255,255,255,0.4);
          border-left: 2px solid rgba(0,255,180,0.3); padding-left: 16px;
          margin-bottom: 32px;
        }
        .modal-actions { display: flex; gap: 12px; }
        .modal-close {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Courier New', monospace; font-size: 18px;
          background: rgba(0,0,0,0.8); border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6); width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s; z-index: 10;
        }
        .modal-close:hover { border-color: rgba(0,255,180,0.5); color: #00ffb4; }
      `}</style>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          <img src={project.img} alt={project.title} className="modal-img" />
          <div className="modal-body">
            <div className="modal-id">// {project.id} · {project.year} · {project.status}</div>
            <div className="modal-title">{project.title}</div>
            <div className="modal-desc">{project.desc}</div>
            <div className="modal-section-label">TECH_STACK://</div>
            <div className="modal-tags">{project.stack.map(s => <span key={s} className="modal-tag">{s}</span>)}</div>
            <div className="modal-section-label">LEARNING_OUTPUT://</div>
            <div className="modal-learned">{project.learned}</div>
            <div className="modal-actions">
              <a href={project.link} target="_blank" rel="noreferrer" style={{ fontFamily: "'Courier New',monospace", fontSize: 12, letterSpacing: "0.2em", padding: "12px 24px", border: "1px solid #00ffb4", color: "#000", background: "#00ffb4", textDecoration: "none", transition: "all 0.2s" }}>
                ./OPEN_LIVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, onClick, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .proj-card {
          border: 1px solid rgba(255,255,255,0.07);
          background: #060f0a; cursor: pointer;
          transition: all 0.3s; position: relative;
          overflow: hidden;
          opacity: 0; transform: translateY(24px);
        }
        .proj-card.visible { opacity: 1; transform: translateY(0); }
        .proj-card:hover { border-color: rgba(0,255,180,0.3); }
        .proj-img { width: 100%; height: 180px; object-fit: cover; display: block; filter: grayscale(60%); transition: filter 0.4s; }
        .proj-card:hover .proj-img { filter: grayscale(10%) contrast(1.1); }
        .proj-img-overlay {
          position: absolute; top: 0; left: 0; right: 0; height: 180px;
          background: linear-gradient(to bottom, transparent 40%, #060f0a);
        }
        .proj-content { padding: 20px; }
        .proj-meta {
          display: flex; justify-content: space-between;
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.2em; color: rgba(0,255,180,0.45);
          margin-bottom: 8px;
        }
        .proj-title {
          font-family: 'Courier New', monospace; font-size: 18px;
          font-weight: 700; color: #fff; margin-bottom: 10px;
        }
        .proj-desc {
          font-family: 'Courier New', monospace; font-size: 12px;
          line-height: 1.7; color: rgba(255,255,255,0.38);
          margin-bottom: 16px;
        }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .proj-tag {
          font-family: 'Courier New', monospace; font-size: 10px;
          padding: 3px 8px; border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.35);
        }
        .proj-hover-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: #00ffb4;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s;
        }
        .proj-card:hover .proj-hover-line { transform: scaleX(1); }
        .proj-open-hint {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Courier New', monospace; font-size: 9px;
          letter-spacing: 0.2em; padding: 4px 8px;
          background: rgba(0,0,0,0.8); color: rgba(0,255,180,0.7);
          border: 1px solid rgba(0,255,180,0.2);
          opacity: 0; transition: opacity 0.2s;
        }
        .proj-card:hover .proj-open-hint { opacity: 1; }
      `}</style>
      <div
        ref={ref}
        className={`proj-card${visible ? " visible" : ""}`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => onClick(project)}
      >
        <img src={project.img} alt={project.title} className="proj-img" />
        <div className="proj-img-overlay" />
        <div className="proj-open-hint">./OPEN</div>
        <div className="proj-content">
          <div className="proj-meta">
            <span>{project.id}</span>
            <span>{project.year} · {project.status}</span>
          </div>
          <div className="proj-title">{project.title}</div>
          <div className="proj-desc">{project.desc}</div>
          <div className="proj-tags">{project.stack.slice(0, 4).map(s => <span key={s} className="proj-tag">{s}</span>)}</div>
        </div>
        <div className="proj-hover-line" />
      </div>
    </>
  );
}

export default function Project() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        .project-root {
          background: #000; padding: 100px 40px;
          position: relative;
        }
        .project-root::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,180,0.4), transparent);
        }
        .project-inner { max-width: 1200px; margin: 0 auto; }
        .project-header { margin-bottom: 60px; }
        .proj-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;
        }
        @media (max-width: 768px) {
          .proj-grid { grid-template-columns: 1fr; }
          .project-root { padding: 60px 20px; }
        }
      `}</style>

      <section className="project-root">
        <div className="project-inner">
          <div className="project-header">
            <div style={{ fontFamily: "'Courier New',monospace", fontSize: 11, letterSpacing: "0.3em", color: "rgba(0,255,180,0.5)", marginBottom: 12 }}>// 04. WORK_LOG</div>
            <h2 style={{ fontFamily: "'Courier New',monospace", fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
              PROJECTS<span style={{ color: "#00ffb4" }}>_</span>
            </h2>
            <p style={{ fontFamily: "'Courier New',monospace", fontSize: 13, color: "rgba(255,255,255,0.35)", marginTop: 16, letterSpacing: "0.05em" }}>
              // "just the start of many. click to inspect."
            </p>
          </div>
          <div className="proj-grid">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onClick={setSelected} />
            ))}
          </div>
        </div>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </section>
    </>
  );
}