import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { PixelatedCanvas } from "../ui/pixelated-canvas";
import { TypingAnimation } from "../ui/typing-animation"

export default function About() {
  const [selected, setSelected] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const name = '<Afiujjaman Mursalin/>'

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {selected === 1 ? (
        <motion.div
          key="about-main"
          className="w-full min-h-screen bg-black flex flex-row"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT - always side by side, never stacked */}
          <motion.div
            className="w-1/2 h-screen flex flex-col justify-center items-end relative gap-3 sm:gap-4 md:gap-8 lg:gap-12"
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: "url('/aboutMeBg.webp')",
              backgroundSize: isMobile ? "cover" : "200% 100%",
              backgroundPosition: isMobile ? "center" : "left center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ rotateY: isMobile ? 0 : -180 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black opacity-75 z-0" />

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lilita text-white z-10 border-t-2 border-t-red-300 rounded-4xl border-l-2 border-l-red-400 px-2 pr-2 text-right">
              Abou
            </h1>

            <span
              className="text-xs sm:text-sm md:text-lg text-purple-300 z-10 cursor-pointer lilita px-2 pr-2 text-right"
              onClick={() => setSelected(2)}
            >
              Ta
            </span>
          </motion.div>

          {/* RIGHT - always side by side, never stacked */}
          <motion.div
            className="w-1/2 h-screen flex flex-col justify-center items-start relative gap-3 sm:gap-4 md:gap-8 lg:gap-12"
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: "url('/aboutMeBg.webp')",
              backgroundSize: isMobile ? "cover" : "200% 100%",
              backgroundPosition: isMobile ? "center" : "right center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ rotateY: isMobile ? 0 : 180 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-black opacity-75 z-0" />

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lilita text-white z-10 border-b-2 border-b-green-300 rounded-4xl border-r-2 border-r-green-400 px-2 pl-2 text-left">
              tMe?
            </h1>

            <span
              className="text-xs sm:text-sm md:text-lg text-purple-300 z-10 cursor-pointer lilita px-2 pl-2 text-left"
              onClick={() => setSelected(2)}
            >
              p☝🏻
            </span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="about-second"
          className="w-full min-h-screen bg-black flex flex-col md:flex-row"
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1000, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT SCROLL AREA - Takes full width on mobile, 60% on desktop */}
          <div className="w-full md:w-[60%] h-[60vh] md:h-screen flex justify-center items-center py-2 md:py-0 px-2 sm:px-4">
            <div className="w-full h-[98%] md:h-[95%] rounded-3xl md:rounded-4xl border-r-2 md:border-r-4 border-cyan-200 outline-r-1 md:outline-r-2 outline-white overflow-y-scroll custom-scrollbar">
              
              {/* SCHOOL SECTION */}
              <div className="w-full min-h-[70vh] md:min-h-[75vh] flex flex-col gap-2 sm:gap-3 items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold lilita text-center px-2">
                  2010-2022 (OG Days)
                </h1>
                <div className="w-[40%] sm:w-[30%] h-[2px] bg-gray-400" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium lilita text-gray-300 text-center px-2 sm:px-4">
                  Best 10 Years of life, OG unreplacable school days.
                  Free minded, exploring, outdoor lover kid who loved adventures
                  with a little bit of studies.
                </span>

                <div className="w-full flex flex-row justify-center items-center my-2">
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[70%] sm:w-[80%] h-[0.8vh] sm:h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-1 sm:gap-2">
                  {["/scl.jpeg", "/clg1.jpg", "/scl3.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 flex flex-col justify-start items-center">
                      <div className="w-[1px] sm:w-[2px] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-3xl" />
                      <div className="w-[4px] sm:w-[8px] h-[4px] sm:h-[8px] bg-gray-500 rounded-full my-1" />
                      <div className="w-[85%] sm:w-[80%] md:w-[75%] h-[15vh] sm:h-[18vh] md:h-[20vh] lg:h-[25vh]">
                        <img
                          src={img}
                          className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl grayscale border-2 border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UNIVERSITY SECTION */}
              <div className="w-full min-h-[70vh] md:min-h-[75vh] flex flex-col gap-2 sm:gap-3 items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold lilita text-center px-2">
                  University Era (Dream Phase)
                </h1>
                <div className="w-[40%] sm:w-[30%] h-[2px] bg-gray-400" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium lilita text-gray-300 text-center px-2 sm:px-4">
                  After school & college, I got the chance to study in one of my
                  dream places — an Engineering University. Living my dreams now.
                  Totally different experience. Every day new learning, growing
                  day by day, gaining maturity and shaping my future.
                </span>

                <div className="w-full flex flex-row justify-center items-center my-2">
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[70%] sm:w-[80%] h-[0.8vh] sm:h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-1 sm:gap-2">
                  {["/uni.jpeg", "/uni2.jpeg", "/me2.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 flex flex-col justify-start items-center">
                      <div className="w-[1px] sm:w-[2px] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-3xl" />
                      <div className="w-[4px] sm:w-[8px] h-[4px] sm:h-[8px] bg-gray-500 rounded-full my-1" />
                      <div className="w-[85%] sm:w-[80%] md:w-[75%] h-[15vh] sm:h-[18vh] md:h-[20vh] lg:h-[25vh]">
                        <img
                          src={img}
                          className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl grayscale border-2 border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CURRENT SECTION */}
              <div className="w-full min-h-[70vh] md:min-h-[75vh] flex flex-col gap-2 sm:gap-3 items-center justify-center py-4 sm:py-6 md:py-8 px-2 sm:px-4">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold lilita text-center px-2">
                  Coding Era (Present & Beyond)
                </h1>
                <div className="w-[40%] sm:w-[30%] h-[2px] bg-gray-400" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium lilita text-gray-300 text-center px-2 sm:px-4">
                  Soon I came in touch with coding & programming. What started
                  as curiosity slowly became interest in Web Development.
                  Now Alhamdulillah, I am a Full Stack Developer. The fire of
                  coding keeps getting hotter day by day. What was once just an
                  interest is now an obsession, addiction, and vision.
                  I hope to give my very best in this field and keep evolving.
                </span>

                <div className="w-full flex flex-row justify-center items-center my-2">
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[70%] sm:w-[80%] h-[0.8vh] sm:h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[2%] sm:w-[3%] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center gap-1 sm:gap-2">
                  {["/current1.png", "/current2.jpg", "/current3.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 flex flex-col justify-start items-center">
                      <div className="w-[1px] sm:w-[2px] h-[3vh] sm:h-[4vh] bg-gray-400 rounded-3xl" />
                      <div className="w-[4px] sm:w-[8px] h-[4px] sm:h-[8px] bg-gray-500 rounded-full my-1" />
                      <div className="w-[85%] sm:w-[80%] md:w-[75%] h-[15vh] sm:h-[18vh] md:h-[20vh] lg:h-[25vh]">
                        <img
                          src={img}
                          className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl grayscale border-2 border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - Profile section */}
          <div className="w-full md:w-[40%] h-[40vh] md:h-screen bg-black flex flex-col justify-center items-center gap-2 pb-4 md:pb-0 px-4 md:px-0">
            
            {/* Profile Image Container */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 flex justify-center items-center">
              <PixelatedCanvas
                src="/ME.png"
                width={isMobile ? 150 : 200}
                height={isMobile ? 180 : 250}
                cellSize={1}
                dotScale={0.5}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.2}
                interactive={!isMobile}
                distortionStrength={isMobile ? 3 : 5}
                distortionRadius={isMobile ? 20 : 30}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={isMobile ? 2 : 4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#EFFFFF"
                tintStrength={0.1}
                className="rounded-xl border border-black shadow-lg w-full h-full object-contain"
              />
            </div>

            {/* Name and Title */}
            <div className="w-full text-center space-y-1">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-200/90 font-light lilita px-4">
                <TypingAnimation>{name}</TypingAnimation>
              </h1>
              <span className="text-xs sm:text-sm lilita text-white/80 block">
                Full Stack Developer, Programmer
              </span>
            </div>

            {/* Go Back Button */}
            <button
              onClick={() => setSelected(1)}
              className="text-white border-2 border-white/80 hover:text-black hover:bg-white rounded-3xl lilita mt-2 sm:mt-3 px-3 sm:px-4 py-1 text-xs sm:text-sm transition duration-300"
            >
              ← Go Back
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Add this to your global CSS or as a style tag
const styles = `
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
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(78, 205, 196, 0.5);
  }
`;