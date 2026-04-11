import MursalinNav from "./MursalinNav";
import MursalinHero from "./MursalinHero";
import Welcome from "./Welcome";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

function Mursalin() {
  return (
    <div className="mursalin-root">
      <MursalinNav />
      <div className="w-full flex flex-col bg-black">
        <div id="hero"><MursalinHero /></div>
        <div id="welcome"><Welcome /></div>
        <div id="skills"><Skills /></div>
        <div id="about"><About /></div>
        <div id="projects"><Project /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
}

export default Mursalin;