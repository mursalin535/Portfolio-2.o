import PhotonBeam from "../ui/photon-beam";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🔥 Smooth the scroll signal (this is the magic)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  /* ================= TEXT ================= */

  const firstTextOpacity = useTransform(smoothProgress, [0, 0.2, 0.33], [0, 1, 0]);
  const firstTextScale = useTransform(smoothProgress, [0, 0.2], [0.8, 1]);
  const firstTextY = useTransform(smoothProgress, [0, 0.33], [100, 0]);

  const secondTextOpacity = useTransform(smoothProgress, [0.33, 0.5, 0.66], [0, 1, 0]);
  const secondTextScale = useTransform(smoothProgress, [0.33, 0.5], [0.8, 1]);
  const secondTextY = useTransform(smoothProgress, [0.33, 0.66], [100, 0]);

  const thirdTextOpacity = useTransform(smoothProgress, [0.66, 0.8, 1], [0, 1, 1]);
  const thirdTextScale = useTransform(smoothProgress, [0.66, 0.8], [0.8, 1]);
  const thirdTextY = useTransform(smoothProgress, [0.66, 1], [100, 0]);

  /* ================= BEAMS ================= */

  const beam1Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
  const beam1Rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  const beam2Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
  const beam2Rotate = useTransform(smoothProgress, [0, 1], [180, 540]);

  const glowIntensity = useTransform(smoothProgress, [0, 1], [0.3, 1]);

  const progressText = useTransform(smoothProgress, (latest) =>
    `${Math.round(latest * 100)}%`
  );

  return (
    <div ref={containerRef} className="w-full h-[300vh] bg-black relative rounded-4xl">
      <div className="w-full h-screen sticky top-0 overflow-hidden">

        {/* Beam 1 */}
        <motion.div
          className="absolute inset-0 z-1 will-change-transform"
          style={{
            opacity: beam1Opacity,
            rotate: beam1Rotate,
          }}
        >
          <PhotonBeam
            colorBg="#080808"
            colorLine="#005f6f"
            colorSignal="#00d9ff"
            colorSignal2="#00ffff"
            colorSignal3="#00b8d4"
            lineCount={80}
            spreadHeight={50}
            signalCount={94}
            speedGlobal={0.345}
            trailLength={3}
            bloomStrength={3.0}
            bloomRadius={0.5}
          />
        </motion.div>

        {/* Beam 2 */}
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            opacity: beam2Opacity,
            rotate: beam2Rotate,
          }}
        >
          <PhotonBeam
            colorBg="#080808"
            colorLine="#005f6f"
            colorSignal="#00d9ff"
            colorSignal2="#00ffff"
            colorSignal3="#00b8d4"
            lineCount={80}
            spreadHeight={50}
            signalCount={94}
            speedGlobal={0.345}
            trailLength={3}
            bloomStrength={3.0}
            bloomRadius={0.5}
          />
        </motion.div>

        {/* Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 pointer-events-none"
          style={{ opacity: glowIntensity }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex justify-center items-center">

          <motion.div
            className="absolute w-full flex justify-center will-change-transform"
            style={{
              opacity: firstTextOpacity,
              scale: firstTextScale,
              y: firstTextY,
            }}
          >
            <h1 className="text-8xl font-extrabold lilita text-white text-center px-4">
              "Let's Collaborate
            </h1>
          </motion.div>

          <motion.div
            className="absolute w-full flex justify-center will-change-transform"
            style={{
              opacity: secondTextOpacity,
              scale: secondTextScale,
              y: secondTextY,
            }}
          >
            <h1 className="text-8xl font-extrabold lilita text-cyan-300 text-center">
              and
            </h1>
          </motion.div>

          <motion.div
            className="absolute w-full flex justify-center will-change-transform"
            style={{
              opacity: thirdTextOpacity,
              scale: thirdTextScale,
              y: thirdTextY,
            }}
          >
            <h1 className="text-8xl font-extrabold lilita text-white text-center px-4">
              Do Something Cool"
            </h1>
          </motion.div>

        </div>

        {/* Progress */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-300 font-mono"
          style={{ opacity: useTransform(smoothProgress, [0.9, 1], [0, 1]) }}
        >
          <motion.span>{progressText}</motion.span>
        </motion.div>

      </div>
    </div>
  );
}
