import React, { useState } from "react";

import MursalinNav from "./MursalinNav";
import MursalinHero from "./MursalinHero";
import Skills from "../Skills/Skills";
import Welcome from "./WelCome";
import About from "../About/About";
import Project from '../Project/Project'
import Contact from "../Contact/Contact";
import Contact2 from '../Contact/Contact2'

function Mursalin() {

  return (
    <>
      <div>
        <MursalinNav/>
      </div>

      <div className="w-full flex flex-col justify-center items-center pt-[10vh] gap-20 bg-black">

        {/* Hero Section */}
        <div id="hero" className="w-full">
          <MursalinHero/>
        </div>

        {/* Welcome Section */}
        <div className="w-full">
          <Welcome/>
        </div>

        {/* Skills Section */}
        <div id="skills" className="w-full">
          <Skills/>
        </div>

        {/* About Section */}
        <div id="about" className="w-full">
          <About/>
        </div>

        {/* Projects Section */}
        <div id="projects" className="w-full">
          <Project/>
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full">
          <Contact/>
        </div>

        {/* Contact2 Section */}
        <div className="w-full">
          <Contact2/> 
        </div>

      </div>
    </>
  );
}

export default Mursalin;