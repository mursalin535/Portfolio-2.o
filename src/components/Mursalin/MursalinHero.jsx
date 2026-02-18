"use client"

import { MorphingText } from "../ui/morphing-text"
import { SpinningText } from "../ui/spinning-text"

export default function MursalinHero() {
  const texts = ["{Hello}", "{Hi}", "{Wassup}", "{Hey}", "{Greetings}"]
  const bruh = "<"

  return (
    <div className="w-full min-h-screen bg-black flex flex-col lg:flex-row overflow-hidden">

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-12 lg:pl-[10vw] py-16 gap-6">

        {/* Morphing text */}
        <div className="w-full sm:w-[70%] flex items-center">
          <span className="text-sm sm:text-base lilita text-cyan-200">
            <MorphingText texts={texts} />
          </span>
        </div>

        {/* Subtitle */}
        <div className="w-full flex items-center">
          <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white/70 font-serif">
            This is ,
          </span>
        </div>

        {/* Name line 1 */}
        <div className="w-full flex items-center">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90 lilita leading-tight">
            <span>{bruh}</span>Afiujjaman
          </span>
        </div>

        {/* Name line 2 + spinner */}
        <div className="w-full sm:w-[80%] flex justify-start lg:justify-end items-center gap-4 sm:gap-6 flex-wrap">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90 lilita leading-tight">
            Mursalin /&gt;
          </span>

          <div className="relative scale-75 sm:scale-90 lg:scale-100">
            <SpinningText
              className="w-full h-full text-blue-300 text-xs tracking-wide"
              radius={4.5}
              duration={10}
            >
              learn * code * grow
            </SpinningText>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[50%] min-h-[60vh] lg:min-h-full relative rounded-none lg:rounded-3xl overflow-hidden">

        {/* Main image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/HeroMe.png"
            alt="Hero"
            className="w-full h-full object-cover object-[50%_5%] opacity-35 lg:rounded-3xl"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 lg:rounded-3xl"></div>
        </div>

        {/* Spotlight container */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">

          <div className="relative w-[250px] sm:w-[320px] lg:w-[400px] aspect-square opacity-60">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/20 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 rounded-full animate-spin-slow"></div>

            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/90 rounded-full"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-40 lg:w-48 aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>

          <div className="absolute inset-0 opacity-7">
            <img
              src="/spotlight.jpg"
              alt="Spotlight Texture"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 sm:w-20 aspect-square bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-lg opacity-90"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-24 sm:w-32 aspect-square bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-lg animate-pulse delay-1000 opacity-90"></div>

      </div>
    </div>
  )
}
