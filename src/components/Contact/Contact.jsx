import { useState, useRef } from "react";

const SOCIALS = [
  { label: "GITHUB", handle: "@afiujjaman", href: "https://github.com/your-username", icon: "GH" },
  { label: "LINKEDIN", handle: "afiujjaman", href: "https://www.linkedin.com/in/afiujjaman/", icon: "LI" },
  { label: "FACEBOOK", handle: "afiujjaman.mursalin", href: "https://www.facebook.com/afiujjaman.mursalin.2025", icon: "FB" },
  { label: "INSTAGRAM", handle: "@murs.alin105", href: "https://www.instagram.com/murs.alin105/", icon: "IG" },
  { label: "WHATSAPP", handle: "+8801841258255", href: "https://wa.me/8801841258255", icon: "WA" },
];

function ScanLine() {
  return (
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
      background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,180,0.012) 2px, rgba(0,255,180,0.012) 4px)"
    }} />
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const rootRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 2000);
  };

  return (
    <>
      <style>{`
        .contact-root {
          background: #000; padding: 100px 40px;
          position: relative; min-height: 100vh;
        }
        .contact-root::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,255,180,0.4), transparent);
        }
        .contact-inner { max-width: 1200px; margin: 0 auto; }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; margin-top: 60px; align-items: start;
        }
        .contact-form-wrap {
          border: 1px solid rgba(0,255,180,0.15); padding: 40px;
          background: rgba(0,10,5,0.5); position: relative;
        }
        .cf-topbar {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 28px; padding-bottom: 16px;
          border-bottom: 1px solid rgba(0,255,180,0.08);
        }
        .cf-dot { width: 8px; height: 8px; border-radius: 50%; }
        .cf-title {
          font-family: 'Courier New', monospace; font-size: 10px;
          letter-spacing: 0.25em; color: rgba(0,255,180,0.4); margin-left: 8px;
        }
        .cf-group { margin-bottom: 20px; }
        .cf-label {
          display: block; font-family: 'Courier New', monospace;
          font-size: 10px; letter-spacing: 0.25em;
          color: rgba(0,255,180,0.5); margin-bottom: 8px;
        }
        .cf-input {
          width: 100%; background: rgba(0,255,180,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          font-family: 'Courier New', monospace; font-size: 13px;
          padding: 12px 14px; outline: none;
          transition: border-color 0.2s; box-sizing: border-box;
        }
        .cf-input:focus { border-color: rgba(0,255,180,0.4); background: rgba(0,255,180,0.05); }
        .cf-input::placeholder { color: rgba(255,255,255,0.2); }
        .cf-textarea { resize: vertical; min-height: 120px; }
        .cf-submit {
          width: 100%; font-family: 'Courier New', monospace;
          font-size: 12px; letter-spacing: 0.25em;
          padding: 14px; border: 1px solid #00ffb4;
          background: #00ffb4; color: #000;
          cursor: pointer; transition: all 0.2s;
          text-transform: uppercase; margin-top: 8px;
        }
        .cf-submit:hover { background: transparent; color: #00ffb4; }
        .cf-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .cf-sent {
          text-align: center; padding: 40px 0;
          font-family: 'Courier New', monospace;
        }
        .cf-sent-icon { font-size: 48px; color: #00ffb4; margin-bottom: 16px; }
        .cf-sent-msg { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.8; }
        .contact-right { display: flex; flex-direction: column; gap: 48px; }
        .contact-copy {
          font-family: 'Courier New', monospace;
        }
        .contact-copy-tag { font-size: 11px; letter-spacing: 0.2em; color: rgba(0,255,180,0.5); margin-bottom: 16px; }
        .contact-copy-heading { font-size: clamp(20px, 3vw, 32px); font-weight: 700; color: #fff; line-height: 1.3; margin-bottom: 20px; }
        .contact-copy-body { font-size: 13px; line-height: 1.9; color: rgba(255,255,255,0.4); }
        .socials-list { display: flex; flex-direction: column; gap: 4px; }
        .social-link {
          display: flex; align-items: center; gap: 16px;
          padding: 14px 16px; border: 1px solid rgba(255,255,255,0.05);
          text-decoration: none; transition: all 0.2s;
          position: relative; overflow: hidden;
        }
        .social-link:hover { border-color: rgba(0,255,180,0.25); background: rgba(0,255,180,0.03); }
        .social-link:hover .social-arrow { color: #00ffb4; transform: translateX(4px); }
        .social-icon {
          font-family: 'Courier New', monospace; font-size: 10px;
          font-weight: 900; letter-spacing: 0.1em;
          width: 32px; height: 32px; border: 1px solid rgba(0,255,180,0.2);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,255,180,0.7); flex-shrink: 0;
        }
        .social-info { flex: 1; }
        .social-label { font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.2em; color: rgba(255,255,255,0.6); }
        .social-handle { font-family: 'Courier New', monospace; font-size: 12px; color: rgba(255,255,255,0.3); }
        .social-arrow { font-family: 'Courier New', monospace; font-size: 14px; color: rgba(255,255,255,0.2); transition: all 0.2s; }
        .contact-footer {
          border-top: 1px solid rgba(0,255,180,0.08); margin-top: 80px; padding-top: 32px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
        }
        .footer-copy { font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.15em; color: rgba(255,255,255,0.2); }
        .footer-sig { font-family: 'Courier New', monospace; font-size: 11px; color: rgba(0,255,180,0.3); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-root { padding: 60px 20px; }
        }
      `}</style>

      <section className="contact-root" ref={rootRef}>
        <ScanLine />
        <div className="contact-inner">
          <div style={{ fontFamily: "'Courier New',monospace", fontSize: 11, letterSpacing: "0.3em", color: "rgba(0,255,180,0.5)", marginBottom: 12 }}>// 05. OPEN_CHANNEL</div>
          <h2 style={{ fontFamily: "'Courier New',monospace", fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>
            CONTACT<span style={{ color: "#00ffb4" }}>_</span>ME
          </h2>

          <div className="contact-grid">
            <div className="contact-form-wrap">
              <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "2px solid rgba(0,255,180,0.6)", borderLeft: "2px solid rgba(0,255,180,0.6)" }} />
              <div style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: "2px solid rgba(0,255,180,0.6)", borderRight: "2px solid rgba(0,255,180,0.6)" }} />
              <div className="cf-topbar">
                <div className="cf-dot" style={{ background: "#ff5f57" }} />
                <div className="cf-dot" style={{ background: "#febc2e" }} />
                <div className="cf-dot" style={{ background: "#28c840" }} />
                <span className="cf-title">NEW_MESSAGE.exe</span>
              </div>

              {sent ? (
                <div className="cf-sent">
                  <div className="cf-sent-icon">✓</div>
                  <div className="cf-sent-msg">
                    MESSAGE_TRANSMITTED<br />
                    <span style={{ color: "rgba(0,255,180,0.5)" }}>// will get back to you soon</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cf-group">
                    <label className="cf-label">NAME://</label>
                    <input className="cf-input" placeholder="your_name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                  </div>
                  <div className="cf-group">
                    <label className="cf-label">EMAIL://</label>
                    <input className="cf-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                  </div>
                  <div className="cf-group">
                    <label className="cf-label">MESSAGE://</label>
                    <textarea className="cf-input cf-textarea" placeholder="let's build something..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                  </div>
                  <button className="cf-submit" type="submit" disabled={sending}>
                    {sending ? "TRANSMITTING..." : "./SEND_MESSAGE"}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-right">
              <div className="contact-copy">
                <div className="contact-copy-tag">// LET'S_COLLABORATE</div>
                <div className="contact-copy-heading">
                  "Let's build something<br />
                  <span style={{ color: "#00ffb4" }}>cool together."</span>
                </div>
                <div className="contact-copy-body">
                  I'm always open to new projects, ideas, and opportunities.
                  Whether it's a startup, an open-source contribution, or a wild idea —
                  drop me a line. I read every message.
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Courier New',monospace", fontSize: 10, letterSpacing: "0.3em", color: "rgba(0,255,180,0.4)", marginBottom: 12 }}>FIND_ME://</div>
                <div className="socials-list">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                      <div className="social-icon">{s.icon}</div>
                      <div className="social-info">
                        <div className="social-label">{s.label}</div>
                        <div className="social-handle">{s.handle}</div>
                      </div>
                      <span className="social-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-footer">
            <div className="footer-copy">© 2024 AFIUJJAMAN_MURSALIN // ALL_RIGHTS_RESERVED</div>
            <div className="footer-sig">&lt;BUILT_WITH_PASSION /&gt;</div>
          </div>
        </div>
      </section>
    </>
  );
}