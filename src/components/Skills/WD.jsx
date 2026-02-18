import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WD({ goBack }) {

  const [which, setWhich] = useState('font')

  const front = [
    {
      name: "HTML",
      des: "Markup language used to structure content of web pages.",
      progressBarValues: [90, 95, 85],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    {
      name: "CSS",
      des: "Used to style and design beautiful responsive layouts.",
      progressBarValues: [88, 92, 84],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      des: "Adds logic and interactivity to web applications.",
      progressBarValues: [85, 80, 90],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    {
      name: "React",
      des: "Component-based UI library for scalable front-end apps.",
      progressBarValues: [87, 82, 88],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    {
      name: "Framer Motion",
      des: "Powerful animation library for React animations.",
      progressBarValues: [80, 85, 78],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
      color: "#0055FF"
    },
    {
      name: "GSAP",
      des: "High-performance animation toolkit for advanced motion.",
      progressBarValues: [75, 70, 80],
      logo: "https://assets.codepen.io/16327/gsap-logo.svg",
      color: "#88CE02"
    }
  ]

  const backend = [
    {
      name: "Node.js",
      des: "JavaScript runtime used for scalable backend systems.",
      progressBarValues: [85, 82, 88],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    {
      name: "Express.js",
      des: "Minimal and flexible Node.js web framework.",
      progressBarValues: [88, 85, 90],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#aaaaaa"
    },
    {
      name: "SQL",
      des: "Structured Query Language for relational databases.",
      progressBarValues: [80, 78, 82],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1"
    },
    {
      name: "REST API",
      des: "Architectural style for building scalable APIs.",
      progressBarValues: [90, 88, 92],
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#FF6B6B"
    }
  ]

  const expertiseLabels = ["Proficiency", "Experience", "Confidence"]

  const [activeTab, setActiveTab] = useState("front")
  const [selected, setSelected] = useState(front[0])

  const currentData = activeTab === "front" ? front : backend

  const Simple3DLogo = ({ logo, color, isSelected }) => {
    return (
      <motion.div
        className="relative"
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
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain"
          />
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-full flex justify-center items-center overflow-hidden"
        exit={{ scale: 0, y: -2000 }}
        transition={{ delay: 0.3, duration: 1, ease: 'backOut' }}
      >
        <div className="w-[95%] h-[95%] flex flex-col gap-3 sm:gap-5">

          {/* TOGGLE HEADER */}
          <div className="w-full shrink-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 py-2">

            {/* Go Back Button */}
            <button
              className="text-sm sm:text-lg text-white lilita bg-black opacity-70 border-2 border-white rounded-4xl px-3 py-1 hover:text-black hover:bg-white transition"
              onClick={() => goBack()}
            >
              Go Back⬅
            </button>

            {/* Tabs Row */}
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-8">

              {/* Frontend side */}
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                {which === 'font' && (
                  <motion.div
                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border-t-4 border-l-4 border-r-4 border-green-400 rounded-full flex justify-center items-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-[60%] h-[60%] rounded-full border-b-4 border-l-4 border-r-4 border-cyan-400" />
                  </motion.div>
                )}
                <button
                  onClick={() => {
                    setActiveTab("front")
                    setSelected(front[0])
                    setWhich('font')
                  }}
                  className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl font-semibold transition lilita text-sm sm:text-base ${
                    activeTab === "front"
                      ? "bg-cyan-500/30 border border-cyan-300 text-white"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  Frontend
                </button>
              </div>

              {/* Backend side */}
              <div className="flex flex-row items-center gap-2 sm:gap-3">
                {which === 'End' && (
                  <motion.div
                    className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] border-t-4 border-l-4 border-r-4 border-purple-400 rounded-full flex justify-center items-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-[60%] h-[60%] rounded-full border-b-4 border-l-4 border-r-4 border-cyan-400" />
                  </motion.div>
                )}
                <button
                  onClick={() => {
                    setActiveTab("backend")
                    setSelected(backend[0])
                    setWhich('End')
                  }}
                  className={`px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl font-semibold transition lilita text-sm sm:text-base ${
                    activeTab === "backend"
                      ? "bg-purple-500/30 border border-purple-300 text-white"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  Backend
                </button>
              </div>

            </div>
          </div>

          {/* BODY */}
          <div className="w-full flex-1 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 min-h-0 overflow-auto">

            {/* LEFT GRID */}
            <div className="w-full md:w-[49%] grid grid-cols-3 gap-3 md:gap-4 shrink-0 md:h-full">
              {currentData.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-center items-center gap-2 p-2 sm:p-3
                  ${selected.name === item.name
                    ? "bg-cyan-500/20 border border-cyan-300"
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
            <div className="w-full md:w-[49%] flex items-center min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm"
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