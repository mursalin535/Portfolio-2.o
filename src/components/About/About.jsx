import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PixelatedCanvas } from "../ui/pixelated-canvas";
import { TypingAnimation } from "../ui/typing-animation"

export default function About() {
  const [selected, setSelected] = useState(1);
  const name = '<Afiujjaman Mursalin/>'

  return (
    <AnimatePresence mode="wait">
      {selected === 1 ? (
        <motion.div
          key="about-main"
          className="w-full min-h-screen bg-black flex"
          style={{ perspective: 1000 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT */}
          <motion.div
            className="w-1/2 h-screen flex flex-col justify-center items-end relative gap-8 sm:gap-12 md:gap-20"
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: "url('/aboutMeBg.webp')",
              backgroundSize: "200% 100%",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ rotateY: -180 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black opacity-75 z-0" />

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold lilita text-white z-10 border-t-2 border-t-red-300 rounded-4xl border-l-2 border-l-red-400 pr-2">
              Abou
            </h1>

            <span
              className="text-base sm:text-lg text-purple-300 z-10 cursor-pointer lilita pr-2"
              onClick={() => setSelected(2)}
            >
              Ta
            </span>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="w-1/2 h-screen flex flex-col justify-center items-start relative gap-8 sm:gap-12 md:gap-20"
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: "url('/aboutMeBg.webp')",
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
            initial={{ rotateY: 180 }}
            whileInView={{ rotateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-black opacity-75 z-0" />

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold lilita text-white z-10 border-b-2 border-b-green-300 rounded-4xl border-r-2 border-r-green-400 pl-2">
              tMe?
            </h1>

            <span
              className="text-base sm:text-lg text-purple-300 z-10 cursor-pointer lilita pl-2"
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
          {/* LEFT SCROLL AREA */}
          <div className="w-full md:w-[60%] h-[60vh] md:h-screen flex justify-center items-center py-4 md:py-0">
            <div className="w-[90%] h-[90%] rounded-4xl border-r-4 border-cyan-200 outline-r-2 outline-white overflow-y-scroll">

              {/* SCHOOL */}
              <div className="w-full min-h-[75vh] flex flex-col gap-3 items-center justify-center py-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold lilita text-center px-4">
                  2010-2022 (OG Days)
                </h1>
                <div className="w-[30%] h-[2px] bg-gray-400" />
                <span className="text-sm sm:text-base md:text-lg font-medium lilita text-gray-300 text-center px-4 sm:px-6">
                  Best 10 Years of life, OG unreplacable school days.
                  Free minded, exploring, outdoor lover kid who loved adventures
                  with a little bit of studies.
                </span>

                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[80%] h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  {["/scl.jpeg", "/clg1.jpg", "/scl3.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 h-[25vh] sm:h-[28vh] md:h-[30vh] flex flex-col justify-start items-center">
                      <div className="w-[2%] h-[40%] bg-gray-400 rounded-3xl" />
                      <div className="w-[8%] h-[10%] bg-gray-500 rounded-full" />
                      <div className="w-[75%] sm:w-[70%] h-[50%]">
                        <img
                          src={img}
                          className="w-full h-full rounded-4xl grayscale border-2 border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UNIVERSITY */}
              <div className="w-full min-h-[75vh] flex flex-col gap-3 items-center justify-center py-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold lilita text-center px-4">
                  University Era (Dream Phase)
                </h1>
                <div className="w-[30%] h-[2px] bg-gray-400" />
                <span className="text-sm sm:text-base md:text-lg font-medium lilita text-gray-300 text-center px-4 sm:px-6">
                  After school & college, I got the chance to study in one of my
                  dream places — an Engineering University. Living my dreams now.
                  Totally different experience. Every day new learning, growing
                  day by day, gaining maturity and shaping my future.
                </span>

                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[80%] h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  {["/uni.jpeg", "/uni2.jpeg", "/me2.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 h-[25vh] sm:h-[28vh] md:h-[30vh] flex flex-col justify-start items-center">
                      <div className="w-[2%] h-[40%] bg-gray-400 rounded-3xl" />
                      <div className="w-[8%] h-[10%] bg-gray-500 rounded-full" />
                      <div className="w-[75%] sm:w-[70%] h-[50%]">
                        <img
                          src={img}
                          className="w-full h-full rounded-4xl grayscale border-2 border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CURRENT */}
              <div className="w-full min-h-[75vh] flex flex-col gap-3 items-center justify-center py-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold lilita text-center px-4">
                  Coding Era (Present & Beyond)
                </h1>
                <div className="w-[30%] h-[2px] bg-gray-400" />
                <span className="text-sm sm:text-base md:text-lg font-medium lilita text-gray-300 text-center px-4 sm:px-6">
                  Soon I came in touch with coding & programming. What started
                  as curiosity slowly became interest in Web Development.
                  Now Alhamdulillah, I am a Full Stack Developer. The fire of
                  coding keeps getting hotter day by day. What was once just an
                  interest is now an obsession, addiction, and vision.
                  I hope to give my very best in this field and keep evolving.
                </span>

                <div className="w-full flex flex-row justify-center items-center">
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                  <div className="w-[80%] h-[1vh] bg-gray-400 rounded-4xl" />
                  <div className="w-[3%] h-[4vh] bg-gray-400 rounded-full" />
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  {["/current1.png", "/current2.jpg", "/current3.jpg"].map((img, i) => (
                    <div key={i} className="w-1/3 h-[25vh] sm:h-[28vh] md:h-[30vh] flex flex-col justify-start items-center">
                      <div className="w-[2%] h-[40%] bg-gray-400 rounded-3xl" />
                      <div className="w-[8%] h-[10%] bg-gray-500 rounded-full" />
                      <div className="w-[75%] sm:w-[70%] h-[50%]">
                        <img
                          src={img}
                          className="w-full h-full rounded-4xl border-2 grayscale border-white object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[40%] h-[40vh] md:h-screen bg-black flex flex-col justify-center items-center gap-2 pb-6 md:pb-0">
            <PixelatedCanvas
              src="/ME.png"
              width={200}
              height={250}
              cellSize={1}
              dotScale={0.5}
              shape="square"
              backgroundColor="#000000"
              dropoutStrength={0.2}
              interactive
              distortionStrength={5}
              distortionRadius={30}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={4}
              jitterSpeed={4}
              sampleAverage
              tintColor="#EFFFFF"
              tintStrength={0.1}
              className="rounded-xl border border-black shadow-lg"
            />

            <h1 className="text-lg sm:text-xl md:text-2xl text-cyan-200/90 font-light lilita text-center px-4">
              <TypingAnimation>{name}</TypingAnimation>
            </h1>
            <span className="text-xs sm:text-sm lilita text-white/80 text-center">
              Full Stack Developer, Programmer
            </span>

            <button
              onClick={() => setSelected(1)}
              className="text-white border-2 border-white/80 hover:text-black hover:bg-white rounded-3xl lilita mt-3 px-4 py-1 transition"
            >
              Go Back
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}