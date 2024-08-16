import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Typing() {
  const [text, count] = useTypewriter({
    words: [
      "Student",
      "UI/UX Designer",
      "Front-End Developer",
      "Full-stack Developer",
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  console.log(text); // Debug: Check if text updates

  return (
    <div>
      <h1 style={{ margin: "50px", color: "black " }} className="typing-head-2">
        Hi There! <br /> I'm <span style={{ color: "red" }}>Elamugilan</span>
        <br />
        <span style={{ fontWeight: "bold", color: "red" }} className="typing-1">
          {text}
        </span>
        <span style={{ color: "white" }} className="typing">
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
}

export default Typing;
