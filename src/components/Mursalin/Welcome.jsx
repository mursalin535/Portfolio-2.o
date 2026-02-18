"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import FuzzyText from "../ui/FuzzyText"

export default function Welcome() {
  const ref = useRef(null)

  // Track scroll inside this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Horizontal text movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-48%"])
  const smoothX = useSpring(x, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  })

  // Bars width scroll-based
  const widthProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  )

  const smoothWidth = useSpring(widthProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.3,
  })

  return (
    <section ref={ref} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen flex justify-start items-center overflow-hidden">

        {/* Background Growing Bars */}
        <div className="w-full h-full absolute z-0 flex flex-col justify-center items-start gap-3 sm:gap-4 md:gap-5 opacity-22">

          {[
            "bg-red-500",
            "bg-blue-500",
            "bg-green-600",
            "bg-amber-500",
            "bg-pink-500",
            "bg-purple-500",
            "bg-indigo-500",
            "bg-violet-500",
            "bg-green-200",
            "bg-blue-300",
            "bg-red-500",
          ].map((color, i) => (
            <motion.div
              key={i}
              style={{ width: smoothWidth }}
              className={`h-[5%] ${color} rounded-sm border-2 border-cyan-200`}
            />
          ))}

        </div>

        {/* Moving Text */}
        <motion.div
          style={{ x: smoothX }}
          className="flex w-[600vw] sm:w-[500vw] md:w-[400vw] lg:w-[350vw]"
        >
          <h1
            className="
              text-[clamp(2.5rem,10vw,9rem)]
              font-extrabold lilita
              text-cyan-300/90
              whitespace-nowrap
              w-full
              tracking-[0.12em]
              leading-tight
            "
          >
            <FuzzyText>
              WELCOME&nbsp;TO&nbsp;MY&nbsp;CODING&nbsp;KINGDOM&nbsp;_
            </FuzzyText>
          </h1>
        </motion.div>

      </div>
    </section>
  )
}