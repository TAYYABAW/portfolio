import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  if (typeof window === "object") {
    AOS.init();
  }
  return (
    <div className="mb-10">
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
