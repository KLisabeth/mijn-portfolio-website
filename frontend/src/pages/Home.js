import React from "react";
import Footer from "../components/Footer";
import ParticlesJS from "../components/particles/ParticlesJS";
import ScriptW from "../components/Script";
import About from "./About";
import Languages from "./Languages";

function Home() {
  return (
    <div>
      <div className="banner">
        <ParticlesJS />
      </div>
      <ScriptW />
      <About />
      <Languages />
      <Footer />
    </div>
  );
}

export default Home;
