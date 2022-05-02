import React, { useState } from "react";
import "./App.css";
import Start from "./components/StartComponent";
import Quiz from "./components/QuizComponent";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz w-screen h-screen bg-[#101427] text-white">
      {start ? <Quiz /> : <Start props={setStart} />}
    </div>
  );
}

export default App;
