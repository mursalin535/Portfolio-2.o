import { motion, AnimatePresence } from 'motion/react'
import { Howl } from 'howler'
import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import ProjectBody from './ProjectBody'

/* -------------------- MOVED OUTSIDE (NO RECREATION) -------------------- */

const Projects = [
  {
    tittle: "Portfolio 1",
    des: "It was my first project, tried to have a look of what i have learnt so far. Not that much good or professional i guess but hey its a first try",
    img: "/portfolio1.png",
    used: "HTML, CSS, JavaScript, React,Tailwind,Gsap",
    learn: "Learned the basics of React components, state management, and responsive design principles.",
    link:"https://afiujjaman.netlify.app/"
  },
  {
    tittle: 'Bariwala',
    des: "Second Project was a step toward solving a real life problem. Many Students have to live seperately from their family, its a platform for students to find accomodation.",
    img: '/Bariwala (2).png',
    used: "React, Node.js,Express.js,MySQL,HTML , Tailwind CSS,Framer Motion,Gsap",
    learn: "Full-stack development, API integration, database design, and user authentication.",
    link:'https://bariwala.netlify.app/'
  },
  {
    tittle: "Gariseba",
    des: "A single problem solving almost all dimension related to cars from buy and sell, insurance, fuel price to servicing",
    img: '/gariseba.png',
    used: "HTML,React,Framer-motion,Gsap, Tailwind CSS,",
    learn: "Advanced React patterns, real-time database management, payment integration.",
    link:"https://gaariseba.netlify.app/"
  },
  {
    tittle: "Portfolio 2.o",
    des: "Its the upgraded version of my portfolio. Changed and modified, tried to add futuristic touch to it.",
    img: '/Portfolio2.png',
    used: 'HTML,Css,React, Framer Motion,Gsap, Tailwind CSS,',
    learn: '3D animations, advanced motion effects, performance optimization.',
    link:"https://afiujjaman2.netlify.app/"
  }
]

/* -------------------- MEMOIZED CARD -------------------- */

const ProjectCard = memo(({ project, index, onHover, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="w-full h-full flex justify-center items-center cursor-pointer relative"
      style={{ willChange: "transform" }}
      onHoverStart={() => {
        setIsHovered(true)
        onHover()
      }}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
    >
      {/* Outer border ring */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ boxShadow: "0 0 0 0px rgba(80, 189, 233, 0)" }}
        animate={{
          boxShadow: isHovered 
            ? "0 0 0 2px rgba(80, 189, 233, 1)" 
            : "0 0 0 0px rgba(80, 189, 233, 0)"
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      <motion.div
        className="w-[95%] h-[95%] rounded-full flex flex-col justify-center items-center gap-1 sm:gap-2 relative"
        style={{ willChange: "transform" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {/* Inner border ring */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ boxShadow: "0 0 0 0px rgba(98, 228, 226, 0)" }}
          animate={{
            boxShadow: isHovered 
              ? "0 0 0 2px rgba(98, 228, 226, 1)" 
              : "0 0 0 0px rgba(98, 228, 226, 0)"
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />

        <img
          src={project.img}
          className="w-[80%] sm:w-[85%] md:w-[90%] h-[45%] sm:h-[50%] md:h-[55%] rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover border-2 border-white"
          alt={project.tittle}
          loading="lazy"
        />
        <h6 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white lilita text-center px-1 sm:px-2">
          {project.tittle}
        </h6>
      </motion.div>
    </motion.div>
  )
})

/* -------------------- MAIN COMPONENT -------------------- */

export default function Project() {
  const hoverSoundRef = useRef(null)
  const clickSoundRef = useRef(null)
  const [select, setSelect] = useState('parent')
  const [info, setInfo] = useState(null)

  useEffect(() => {
    hoverSoundRef.current = new Howl({
      src: ['/mixkit-select-click-1109.wav'],
      volume: 0.05,
      rate: 1.2
    })

    clickSoundRef.current = new Howl({
      src: ['/mixkit-modern-technology-select-3124.wav'],
      volume: 0.2,
      rate: 1.0
    })

    return () => {
      hoverSoundRef.current?.unload()
      clickSoundRef.current?.unload()
    }
  }, [])

  const playHoverSound = useCallback(() => {
    hoverSoundRef.current?.play()
  }, [])

  const playClickSound = useCallback((project) => {
    clickSoundRef.current?.play()
    setSelect(project.tittle)
    setInfo(project)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <div key="project-page" className="relative w-full min-h-screen lg:h-screen bg-fixed overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/projectBGvdo.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="z-10 w-full h-full flex flex-col lg:flex-row justify-center items-center py-4 sm:py-6 md:py-8 lg:py-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* LEFT SIDE - Text Content */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 px-4 lg:px-0 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lilita text-cyan-300 text-center lg:text-left">
              Projects
            </h1>

            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold lilita text-white/90 max-w-lg text-center lg:text-left px-4 lg:px-0 lg:pl-[5vw]">
              "I have made so far, Hope so its just the start of many"
            </span>
          </div>

          {/* RIGHT SIDE - Project Cards Grid */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-center px-4 lg:px-0">
            <div className="w-full h-auto lg:h-[85%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 z-10">
              {Projects.map((project, index) => (
                <div key={project.tittle} className="aspect-square w-full">
                  <ProjectCard
                    project={project}
                    index={index}
                    onHover={playHoverSound}
                    onClick={playClickSound}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {select !== 'parent' && info && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelect('parent')}
              />
              <ProjectBody {...info} onClose={() => setSelect('parent')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  )
}