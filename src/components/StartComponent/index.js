import React from "react";

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <div className="pt-48 text-center">
      <h1 className="text-6xl">Knowledge is power.</h1>
      <button onClick={startQuiz} className="mt-8">
        Begin
      </button>
    </div>
  );
};

export default Start;
