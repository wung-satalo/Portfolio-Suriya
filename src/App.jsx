import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />

      <section id='home'>
        <HeroSection />
      </section>

      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
    </>
  );
}

export default App;
