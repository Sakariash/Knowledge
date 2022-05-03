import React, { useState, useEffect } from "react";
import GameOver from "../GameOver";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPoints(points + 1);

    setNumber(number + 1);
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) =>
        setQuiz(
          data.results.map((item) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          }))
        )
      );
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      {quiz[number] && (
        <div className="flex flex-col justify-items-center items-center">
          <div
            className="w-[70%] margin-0 font-semibold text-2xl md:text-4xl mb-14"
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          />
          <div className="flex flex-col w-4/5 items-center">
            {quiz[number].options.map((item, index) => (
              <button
                className="answer border-2 rounded-xl text-[#616a94] bg-[#161a31] select-none cursor-pointer mb-4 w-[430px] py-7 hover:bg-[#22242e]"
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></button>
            ))}
          </div>
        </div>
      )}
      {number === 10 && <GameOver points={points} />}
    </div>
  );
}
