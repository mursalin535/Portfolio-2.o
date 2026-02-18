import { TypingAnimation } from "../ui/typing-animation";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact2() {


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const leftCardVariants = {
    hidden: { x: -100, opacity: 0, rotateY: -15 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 1,
      },
    },
  };

  const rightSectionVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        staggerChildren: 0.15,
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.3,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {/* Main container with full height and no overflow */}
      <motion.div
        className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-50px" }}
      >
        {/* LEFT CARD */}
        <motion.div
          variants={leftCardVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(56,189,248,0.5)" }}
          className="
            w-full max-w-[380px] lg:max-w-[420px]
            bg-gradient-to-b from-[#0a192f]/70 to-[#020617]/80
            backdrop-blur-xl
            border border-cyan-400/30
            rounded-3xl
            shadow-[0_0_30px_rgba(56,189,248,0.3)]
            p-5 sm:p-6
            flex flex-col items-center
            transition-all duration-300
          "
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="aspect-square w-40 sm:w-48 md:w-52 rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_30px_rgba(56,189,248,0.9)]"
          >
            <img
              src="me2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-4 lilita font-bold text-center text-[clamp(1.5rem,2.5vw,2.5rem)] text-cyan-300"
          >
            Afiujjaman Mursalin
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-center lilita text-white/80 text-[clamp(0.9rem,1.8vw,1.2rem)]"
          >
            Full Stack Web Developer <br />
            Competitive Programmer <br />
            Tech Enthusiast
          </motion.p>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          variants={rightSectionVariants}
          className="
            w-full max-w-2xl
            flex flex-col
            justify-center
            h-auto max-h-[90vh]
            overflow-y-auto
            pr-2
            scrollbar-thin scrollbar-thumb-cyan-500/30
          "
        >
          <motion.h1
            variants={itemVariants}
            className="
              lilita font-bold
              text-[clamp(1.8rem,3.5vw,3.5rem)]
              text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-green-200 to-purple-500
              drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]
            "
          >
            <TypingAnimation>
              Wanna Get In Touch With Me?
            </TypingAnimation>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl lilita text-white/80 text-[clamp(0.9rem,1.5vw,1.2rem)]"
          >
            Let's collaborate, innovate, and build something meaningful together.
            I'm always open to projects, ideas, and opportunities to grow.
          </motion.p>

          {/* SOCIAL MEDIA ICONS */}
          <motion.div
            variants={itemVariants}
            className="mt-10"
          >
            <motion.div
              className="grid grid-cols-3 sm:grid-cols-5 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { Icon: FaFacebook, color: "text-cyan-300", href: "https://www.facebook.com/afiujjaman.mursalin.2025", glow: "rgba(56,189,248,0.8)" },
                { Icon: FaInstagram, color: "text-pink-400", href: "https://www.instagram.com/murs.alin105/", glow: "rgba(244,114,182,0.8)" },
                { Icon: FaWhatsapp, color: "text-green-400", href: "https://wa.me/8801841258255", glow: "rgba(74,222,128,0.8)" },
                { Icon: FaLinkedin, color: "text-blue-400", href: "https://www.linkedin.com/in/afiujjaman/", glow: "rgba(96,165,250,0.8)" },
                { Icon: FaGithub, color: "text-gray-300", href: "https://github.com/your-username", glow: "rgba(209,213,219,0.8)" },
              ].map(({ Icon, color, href, glow }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  custom={index}
                  className="flex justify-center"
                >
                  <Icon
                    className={`${color} text-3xl sm:text-4xl transition-all`}
                    style={{
                      filter: `drop-shadow(0 0 10px ${glow})`,
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add custom scrollbar styles */}
      <style>
        {`
          .scrollbar-thin::-webkit-scrollbar {
            width: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.1);
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: rgba(56,189,248,0.3);
            border-radius: 10px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: rgba(56,189,248,0.5);
          }
        `}
      </style>
    </div>
  );
}