import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function Transition1() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const CORE_X = 85; // percentage
  const CORE_Y = 50;

  // Create 22 structured neural paths
  const lines = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const stopPoints = [40, 55, 70, 85];
        return {
          id: i,
          top: 10 + i * 3.5,
          stop: stopPoints[i % stopPoints.length],
          shift:
            i % 3 === 0
              ? 8
              : i % 3 === 1
              ? -8
              : 0,
        };
      }),
    []
  );

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

        {lines.map((line, index) => {
          const start = index * 0.03;
          const mid = start + 0.2;
          const end = start + 0.35;

          const width = useTransform(
            scrollYProgress,
            [start, mid],
            ["0%", `${line.stop}%`]
          );

          const verticalHeight = useTransform(
            scrollYProgress,
            [mid, end],
            ["0%", `${line.shift}%`]
          );

          const finalWidth = useTransform(
            scrollYProgress,
            [end, end + 0.2],
            [`${line.stop}%`, `${CORE_X}%`]
          );

          return (
            <div key={line.id}>

              {/* First horizontal growth */}
              <motion.div
                style={{ width, top: `${line.top}%` }}
                className="absolute left-0 h-[2px] bg-cyan-400"
              />

              {/* Vertical shift */}
              {line.shift !== 0 && (
                <motion.div
                  style={{
                    height: verticalHeight,
                    top: `${line.top}%`,
                    left: `${line.stop}%`,
                  }}
                  className="absolute w-[2px] bg-cyan-400"
                />
              )}

              {/* Final horizontal toward core */}
              <motion.div
                style={{
                  width: finalWidth,
                  top: `${line.top + line.shift}%`,
                }}
                className="absolute left-0 h-[2px] bg-cyan-300"
              />

            </div>
          );
        })}

        {/* White AI Core */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-white"
          style={{
            top: `${CORE_Y}%`,
            left: `${CORE_X}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 80px white, 0 0 150px #00ffff",
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

      </div>
    </div>
  );
}
