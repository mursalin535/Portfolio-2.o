import { motion } from 'motion/react'
import { useState } from 'react'

export default function ProjectBody({
  tittle,
  des,
  used,
  learn,
  img,
  link,
  onClose
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Convert learn string to bullet points
  const learnPoints = learn ? learn.split(/[.,]\s*/).filter(point => point.trim().length > 0) : []

  const handleLiveDemoClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div 
      className="relative w-[95%] sm:w-[90%] max-w-4xl max-h-[90vh] bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-cyan-300/30 overflow-hidden shadow-2xl shadow-cyan-500/20"
      initial={{ scale: 0.8, y: 100, opacity: 0, rotateX: -15 }}
      animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
      exit={{ scale: 0.8, y: 100, opacity: 0, rotateX: 15 }}
      transition={{ 
        duration: 0.5, 
        type: "spring", 
        damping: 25,
        stiffness: 200
      }}
    >
      {/* Animated Background Glow Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(#4ecdc4 1px, transparent 1px),
                            linear-gradient(90deg, #4ecdc4 1px, transparent 1px)`,
          backgroundSize: '30px 30px sm:50px 50px'
        }}/>
      </div>
      
      {/* Close Button */}
      <motion.button
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/50 border-2 border-cyan-300/50 text-cyan-300 text-xl sm:text-2xl md:text-3xl flex items-center justify-center hover:text-white backdrop-blur-sm group"
        whileHover={{ 
          scale: 1.15, 
          backgroundColor: "rgba(78, 205, 196, 0.3)",
          borderColor: "#4ecdc4",
          rotate: 90,
          boxShadow: "0 0 20px #4ecdc4"
        }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
      >
        <span className="group-hover:block hidden">←</span>
        <span className="group-hover:hidden block">×</span>
      </motion.button>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8 overflow-y-auto max-h-[90vh] custom-scrollbar">
        
        {/* Left Side - Image */}
        <motion.div 
          className="w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-cyan-300/50 flex-shrink-0 relative group"
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(78, 205, 196, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <motion.img 
            src={img} 
            alt={tittle}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Image Overlay Text */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <p className="text-cyan-300 text-xs sm:text-sm">SYSTEM://{tittle.toUpperCase().replace(/\s/g, '_')}</p>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-5 text-white">
          
          {/* Title */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold lilita text-cyan-300 relative group"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            {tittle}
            <span className="absolute -inset-1 bg-cyan-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-300 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <p className="text-xs sm:text-sm md:text-base text-white/70 lilita leading-relaxed bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <span className="text-cyan-300 font-mono mr-2">&gt;</span>
              {des}
            </p>
          </motion.div>

          {/* Technologies Used */}
          {used && (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-300 rounded-full animate-pulse" />
                TECH_STACK://
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {used.split(',').map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-300/30 rounded-full text-xs sm:text-sm font-mono backdrop-blur-sm relative overflow-hidden group"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      boxShadow: "0 5px 15px rgba(78, 205, 196, 0.4)"
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <span className="relative z-10">{tech.trim()}</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20"
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* What I Learned - Expandable */}
          {learn && (
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ x: 5 }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-300 rounded-full animate-pulse" />
                  LEARNING_OUTPUT://
                </h3>
                <motion.div 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-500/20 border border-cyan-300/50 flex items-center justify-center"
                  animate={{ 
                    rotate: isExpanded ? 180 : 0,
                    backgroundColor: isExpanded ? "rgba(78, 205, 196, 0.3)" : "rgba(78, 205, 196, 0.1)"
                  }}
                >
                  <span className="text-cyan-300 text-xs sm:text-sm">▼</span>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-2 sm:mt-3 pl-2 space-y-1 sm:space-y-2">
                  {learnPoints.map((point, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 group/item"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-cyan-300 text-lg sm:text-xl mt-[-2px] group-hover/item:scale-125 transition-transform">✦</span>
                      <p className="text-white/80 flex-1 leading-relaxed text-xs sm:text-sm border-b border-white/5 pb-1 sm:pb-2">
                        {point.trim()}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Live Demo Button */}
          {link && (
            <motion.div 
              className="flex mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cyan-300/20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-full border border-cyan-300 relative overflow-hidden group text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px #4ecdc4"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLiveDemoClick}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>🚀</span> Live Demo
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>
          )}

          {/* System Status Bar */}
          <motion.div 
            className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-cyan-300/50 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
            <span>SYSTEM ONLINE // v2.0.1 // QUANTUM STABLE</span>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-20 h-20 sm:w-30 sm:h-30 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(78, 205, 196, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(78, 205, 196, 0.3);
          border-radius: 10px;
          border: 1px solid rgba(78, 205, 196, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(78, 205, 196, 0.5);
        }
      `}</style>
    </motion.div>
  )
}