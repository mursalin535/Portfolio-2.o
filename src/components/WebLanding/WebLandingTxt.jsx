"use client";
import React from "react";
import ColourfulText from "../ui/colourful-text";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

export function WebLandingTxt() {

    const gsapref=useRef();


    useGSAP(()=>{
     gsap.from(gsapref.current, {
        opacity: 0,
        x: -500,
        duration: 2,
        delay:1,
        stagger: 2,
      });
    })


  return (
    <div className="z-30 flex items-center justify-center overflow-hidden px-4">
      <h1 className="text-white font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
        <span className="text-cyan-400 lilita text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mr-4" ref={gsapref}>
          Heyy,,,
        </span>
        <ColourfulText text="Welcome" />
        <span className="ml-4 lilita" ref={gsapref}>to My Portfolio</span>
      </h1>
    </div>
  );
}

export default WebLandingTxt;
