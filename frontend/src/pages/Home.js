import React from 'react'
import ParticlesJS from '../components/particles/ParticlesJS'
import ScriptW from '../components/Script'
import About from './About'
import Languages from './Languages'

function Home() {
    return (
        <div>
      <div className="banner"><ParticlesJS/></div>
      <ScriptW/>
      <About/>
      <Languages/>
        </div>
    )
}

export default Home

