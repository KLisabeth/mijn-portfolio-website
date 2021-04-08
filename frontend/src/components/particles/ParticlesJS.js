import React from 'react';
import Particles from "react-tsparticles"

function ParticlesJS() {
    return (
        <div>
           <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#282c34",
            },
          },
          fpsLimit: 60,
          interactivity: {
    detect_on: "canvas",
    events: {
      ondiv: {
        enable: true,
        elementId: "login",
        mode: "bubble",
        type: "rectangle"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 5,
        speed: 3,
        color: ["#ff0000", "#ff7700"]
      }
    }
  },
  particles: {
    color: {
      value: ["#ffffff", "#1254ef"]
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      collisions: true,
      direction: "none",
      enable: true,
      out_mode: "bounce",
      random: false,
      speed: 3,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
      random: true,
      value: 0.5
    },
    shape: {
      type: "square"
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 2,
        speed: 1,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 2
      },
      value: 4
    }
  },
          
        }}
      />
        </div>
    )
}

export default ParticlesJS
