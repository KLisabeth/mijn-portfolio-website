import React, { useState, useEffect } from "react";
import "./style.css";

function ScriptW() {
  const words = [
    "I love coding",
    "Creating responsive websites",
    "Animating",
    "Styling",
    "with",
    "CSS & Sass",
    "Bootstrap!",
    "I love working with",
    "React hooks & JavaScript",
    "Node.js and MongoDb",
    "Learning never stops",
    "AND",
    "It's fascinating",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });


  return (
    <div>
      <h2 className="script">{words[current]}</h2>
    </div>
  );
}

export default ScriptW;
