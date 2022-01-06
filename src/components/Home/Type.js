import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Part-Time Ski Bum",
          "MERN Stack Developer",
          "Student at the University of Utah",
          "Fullstack Academy Graduate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
