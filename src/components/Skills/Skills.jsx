import { useState, useEffect } from "react"
import SpotlightCard from "../ui/SpotlightCard"
import { motion, AnimatePresence } from "framer-motion"

import WDComponent from "./WD"
import CPComponent from "./CP"

export default function Skills() {
  const [h, setH] = useState(100)
  const [select, setSelect] = useState("parent")
  const [bgPosition, setBgPosition] = useState("50% 10%")
  const [bgSize, setBgSize] = useState("cover")

  // Adjust background based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      
      // Mobile
      if (width < 640) {
        setBgSize("contain")
        setBgPosition("center 20%")
      } 
      // Tablet
      else if (width < 1024) {
        setBgSize("contain")
        setBgPosition("50% 15%")
      } 
      // Desktop
      else {
        setBgSize("cover")
        setBgPosition("50% 10%")
      }
    }

    // Set initial values
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className="w-full h-[150vh] sm:h-[180vh] md:h-[200vh] flex justify-center items-end relative"
      style={{
        backgroundImage: `url('/skillBg.png')`,
        backgroundSize: bgSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: bgPosition,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div
        className="w-full bg-black/40 backdrop-blur-xl relative z-10"
        style={{ height: `${h}vh` }}
      >
        <AnimatePresence mode="wait">

          {/* ================= PARENT VIEW ================= */}
          {select === "parent" && (
            <motion.div
              key="parent"
              className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 px-4 py-6 sm:py-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >

              {/* Web Dev Card */}
              <div className="w-full sm:w-[50%] h-[45%] sm:h-full flex items-center justify-center">
                <SpotlightCard
                  className="w-[90%] h-[80%] sm:h-[70%] cursor-pointer relative overflow-hidden flex justify-center items-center"
                  spotlightColor="rgba(111, 185, 235, 0.71)"
                  onClick={() => {
                    setSelect("WD")
                    setH(100)
                  }}
                >
                  <motion.h1
                    className="absolute font-bold lilita text-3xl sm:text-4xl md:text-5xl lg:text-6xl pointer-events-none text-center px-2"
                    animate={{
                      x: [-60, 0, 60, 0],
                      y: [-30, 30, -30],
                      color: [
                        "#78e8be",
                        "#6ec6e7",
                        "#f091c6",
                        "#c191f0",
                        "#eae587"
                      ]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Web Development
                  </motion.h1>
                </SpotlightCard>
              </div>

              {/* CP Card */}
              <div className="w-full sm:w-[50%] h-[45%] sm:h-full flex items-center justify-center">
                <SpotlightCard
                  className="w-[90%] h-[80%] sm:h-[70%] cursor-pointer relative overflow-hidden flex justify-center items-center"
                  spotlightColor="rgba(233, 83, 201, 0.8)"
                  onClick={() => {
                    setSelect("CP")
                    setH(100)
                  }}
                >
                  <motion.h1
                    className="absolute font-bold lilita text-3xl sm:text-4xl md:text-5xl lg:text-6xl pointer-events-none text-center px-2"
                    animate={{
                      x: [60, 0, -60, 0],
                      y: [30, -30, 30],
                      color: [
                        "#f2d48c",
                        "#ec8ce9",
                        "#7379e8",
                        "#c191f0",
                        "#eae587"
                      ]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Competitive Programming
                  </motion.h1>
                </SpotlightCard>
              </div>

            </motion.div>
          )}

          {/* ================= WD VIEW ================= */}
          {select === "WD" && (
            <motion.div
              key="wd"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <WDComponent goBack={() => setSelect("parent")} />
            </motion.div>
          )}

          {/* ================= CP VIEW ================= */}
          {select === "CP" && (
            <motion.div
              key="cp"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <CPComponent goBack={() => setSelect("parent")} />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}