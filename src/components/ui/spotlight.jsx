import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default  function Spotlight({
  children,
  className,
  spotlightColor = "#4332CF",
  spotlightIntensity = 49,
  enableAnimations = true,
  ...props
}) {
  const containerRef = useRef(null);
  const normalizedIntensity = spotlightIntensity / 100;

  const baseVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    pulse: {
      opacity: [
        normalizedIntensity * 0.3,
        normalizedIntensity * 0.4,
        normalizedIntensity * 0.3,
      ],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const middleVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    pulse: {
      opacity: [
        normalizedIntensity * 0.6,
        normalizedIntensity * 0.7,
        normalizedIntensity * 0.6,
      ],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  const mainVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    pulse: {
      opacity: [
        normalizedIntensity,
        normalizedIntensity * 1.1,
        normalizedIntensity,
      ],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  // Convert hex color to RGB for rgba calculations
  const getRGBA = (color, opacity) => {
    // Default color if parsing fails
    const defaultColor = "67, 50, 207"; // #4332CF in RGB
    
    // Handle hex colors
    if (color.startsWith("#")) {
      const hex = color.replace("#", "");
      let r, g, b;
      
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      } else {
        // Fallback to default
        [r, g, b] = defaultColor.split(", ").map(Number);
      }
      
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    // Handle rgb/rgba colors
    if (color.startsWith("rgb")) {
      // Extract rgb values from rgb/rgba string
      const match = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const [, r, g, b] = match;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    }
    
    // Fallback to default color
    return `rgba(${defaultColor}, ${opacity})`;
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden bg-black", className)}
      {...props}
    >
      <AnimatePresence>
        <motion.div
          key="base-layer"
          className="z-8 absolute inset-0 w-full"
          initial="initial"
          animate={enableAnimations ? "pulse" : "animate"}
          variants={baseVariants}
          style={{
            background: `radial-gradient(ellipse at 50% 100%, 
              ${spotlightColor} 0%,
              ${getRGBA(spotlightColor, 0.4)} 25%,
              ${getRGBA(spotlightColor, 0.1)} 50%,
              transparent 80%)`,
            mixBlendMode: "screen",
          }}
        />

        <motion.div
          key="middle-layer"
          className="z-9 absolute inset-0 w-full"
          initial="initial"
          animate={enableAnimations ? "pulse" : "animate"}
          variants={middleVariants}
          style={{
            background: `radial-gradient(ellipse at 50% 100%, 
              ${spotlightColor} 0%,
              ${getRGBA(spotlightColor, 0.6)} 20%,
              ${getRGBA(spotlightColor, 0.2)} 40%,
              transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />

        <motion.div
          key="main-layer"
          className="absolute inset-0 z-10 w-full"
          initial="initial"
          animate={enableAnimations ? "pulse" : "animate"}
          variants={mainVariants}
          style={{
            background: `radial-gradient(ellipse at 50% 100%, 
              ${spotlightColor} 0%, 
              ${getRGBA(spotlightColor, 0.8)} 15%,
              ${getRGBA(spotlightColor, 0.3)} 35%,
              transparent 70%)`,
            mixBlendMode: "screen",
          }}
        />
        <div key="content" className="relative z-20">
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}