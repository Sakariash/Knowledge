import React from "react";

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-6xl font-bold">Knowledge is power</h1>
      <button
        onClick={startQuiz}
        className="border-2 rounded-xl text-[#616a94] bg-[#161a31] select-none cursor-pointer py-4 px-10 hover:bg-[#22242e] mt-8"
      >
        Begin Quiz
      </button>
    </div>
  );
};

export default Start;
