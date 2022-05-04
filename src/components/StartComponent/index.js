import React from "react";

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-3xl md:text-6xl font-bold">Knowledge is power</h1>
      <button
        onClick={startQuiz}
        className=" rounded-xl text-black bg-white  select-none cursor-pointer py-4 px-10 hover:bg-[#F79673] hover:text-white mt-8 font-bold"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
