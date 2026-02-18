import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CP({ goBack }) {

  const cpData = [
    {
      name: "C",
      des: "Procedural programming language used for low-level systems and competitive programming speed optimization.",
      progressBarValues: [85, 80, 82],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC"
    },
    {
      name: "C++",
      des: "Powerful language widely used in competitive programming for STL and performance.",
      progressBarValues: [92, 90, 88],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C"
    },
    {
      name: "Python",
      des: "High-level language useful for fast implementation and algorithmic problem solving.",
      progressBarValues: [88, 85, 90],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    {
      name: "DSA",
      des: "Strong foundation in data structures like trees, graphs, stacks, queues, and heaps.",
      progressBarValues: [90, 87, 89],
      logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      color: "#FF6B6B"
    },
    {
      name: "Algorithms",
      des: "Efficient problem-solving using greedy, DP, recursion, graph algorithms and more.",
      progressBarValues: [91, 88, 90],
      logo: "https://cdn-icons-png.flaticon.com/512/4149/4149673.png",
      color: "#9B59B6"
    }
  ]

  const expertiseLabels = ["Proficiency", "Experience", "Confidence"]
  const [selected, setSelected] = useState(cpData[0])

  const Simple3DLogo = ({ logo, color, isSelected }) => (
    <motion.div
      style={{ perspective: 600 }}
      animate={{
        rotateY: isSelected ? 360 : 0,
        scale: isSelected ? 1.1 : 1
      }}
      transition={{
        duration: 4,
        ease: "linear",
        repeat: isSelected ? Infinity : 0
      }}
      whileHover={{
        rotateY: 180,
        rotateX: 10,
        transition: { duration: 0.6 }
      }}
    >
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex justify-center items-center"
        style={{
          background: `linear-gradient(135deg, ${color}30, ${color}10)`,
          border: `2px solid ${color}60`,
          boxShadow: `0 5px 15px ${color}40`
        }}
      >
        <img src={logo} className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain" alt={logo} />
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full flex justify-center items-center overflow-hidden"
        exit={{ scale: 0, y: -2000 }}
        transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
      >
        <div className="w-[95%] max-w-[1400px] h-full flex flex-col py-4 sm:py-6 gap-4 sm:gap-6">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 shrink-0">

            <button
              onClick={() => goBack()}
              className="text-sm sm:text-lg text-white lilita bg-black/70 border-2 border-white rounded-4xl px-4 py-1 hover:text-black hover:bg-white transition"
            >
              Go Back ⬅
            </button>

            <motion.div
              className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-t-4 border-l-4 border-r-4 border-yellow-400 rounded-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-[60%] h-[60%] rounded-full border-b-4 border-l-4 border-r-4 border-purple-400" />
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lilita text-white/80 text-center">
              Competitive Programming
            </h1>
          </div>

          {/* BODY */}
          <div className="flex flex-col md:flex-row flex-1 gap-6 md:gap-10 min-h-0 overflow-auto">

            {/* LEFT GRID */}
            <div className="w-full md:w-1/2 grid grid-cols-3 gap-3 md:gap-4">
              {cpData.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-xl cursor-pointer flex flex-col justify-center items-center gap-2 p-2 sm:p-4
                  ${selected.name === item.name
                    ? "bg-yellow-500/20 border border-yellow-300"
                    : "bg-white/10 hover:bg-white/20"}`}
                >
                  <Simple3DLogo
                    logo={item.logo}
                    color={item.color}
                    isSelected={selected.name === item.name}
                  />
                  <h2 className="text-white font-semibold lilita text-xs sm:text-sm text-center">
                    {item.name}
                  </h2>
                </motion.div>
              ))}
            </div>

            {/* RIGHT DETAILS */}
            <div className="w-full md:w-1/2 flex items-center min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm overflow-auto"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <img src={selected.logo} className="w-8 h-8 sm:w-12 sm:h-12" alt={selected.name} />
                    <h3
                      className="text-lg sm:text-2xl font-bold lilita"
                      style={{ color: selected.color }}
                    >
                      {selected.name}
                    </h3>
                  </div>

                  <p className="text-white/70 mb-4 sm:mb-6 lilita text-sm sm:text-base">
                    {selected.des}
                  </p>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    {selected.progressBarValues.map((value, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs sm:text-sm mb-1">
                          <span className="text-white/60">{expertiseLabels[i]}</span>
                          <span style={{ color: selected.color }}>{value}%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: selected.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}