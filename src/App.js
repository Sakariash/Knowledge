import React, { useState } from "react";
import "./App.css";
import Start from "./components/StartComponent";
import Quiz from "./components/QuizComponent";

export default function App() {
  const [start, setStart] = useState(false);

  return (
    <div
      className="quiz w-screen h-screen bg-[rgb(2,0,36)]
      bg-[linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(89,110,235,1) 0%, rgba(51,149,242,1) 33%)]"
    >
      {start ? <Quiz /> : <Start props={setStart} />}
    </div>
  );
}
