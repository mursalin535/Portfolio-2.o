import * as React from "react";
import { cn } from "@/lib/utils";

export default function HolographicCard({
  children,
  className,
  holographicIntensity = 0.4,
  rotationFactor = 12,
  glowIntensity = 0.8,
  prismaticEffect = true,
  backgroundColor = "#040505",
  darkBackgroundColor = "#040505",
  scanlineEffect = false,
  refractionPattern = "none",
  depthEffect = false,
  glitchEffect = false,
  shadowColor = "#78f0e0",
  ...props
}) {
  const cardRef = React.useRef(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [glitchOffset, setGlitchOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!glitchEffect || !isHovered) return;

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.92) {
        setGlitchOffset({
          x: (Math.random() - 0.5) * 10,
          y: (Math.random() - 0.5) * 10,
        });
        setTimeout(() => setGlitchOffset({ x: 0, y: 0 }), 50);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [glitchEffect, isHovered]);

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const percentX = x / rect.width;
      const percentY = y / rect.height;

      setMousePosition({ x: percentX, y: percentY });

      const rotateY = (percentX - 0.5) * rotationFactor;
      const rotateX = (0.5 - percentY) * rotationFactor;

      const angle =
        Math.atan2(y - rect.height / 2, x - rect.width / 2) *
        (180 / Math.PI);

      const scale = isHovered ? 1.02 : 1;
      const translateZ = depthEffect ? (isHovered ? "50px" : "0px") : "0px";

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
        translateZ(${translateZ})
        translate(${glitchOffset.x}px, ${glitchOffset.y}px)
      `;

      if (prismaticEffect) {
        const hue = (angle + 360) % 360;
        const gradient = `
          linear-gradient(
            ${angle}deg,
            hsl(${hue},100%,60%) 0%,
            hsl(${(hue + 60) % 360},100%,60%) 50%,
            hsl(${(hue + 120) % 360},100%,60%) 100%
          )
        `;
        card.style.setProperty("--holographic-gradient", gradient);
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", () => setIsHovered(true));
    card.addEventListener("mouseleave", () => setIsHovered(false));

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotationFactor, depthEffect, glitchOffset, isHovered, prismaticEffect]);

  const customStyle = {
    "--mouse-x": `${mousePosition.x * 100}%`,
    "--mouse-y": `${mousePosition.y * 100}%`,
    backgroundColor,
    boxShadow: `
      0 10px 30px -10px ${shadowColor},
      0 0 ${glowIntensity * 20}px rgba(255,255,255,0.1)
    `,
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-200",

        // CLICK SAFE OVERLAYS
        "before:absolute before:inset-0 before:z-10 before:pointer-events-none",
        "before:bg-[var(--holographic-gradient)] before:opacity-20 before:mix-blend-overlay",

        "after:absolute after:inset-0 after:z-20 after:pointer-events-none",
        "after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.2)_0%,transparent_80%)]",

        className
      )}
      style={customStyle}
      {...props}
    >
      <div className="relative z-30">{children}</div>
    </div>
  );
}