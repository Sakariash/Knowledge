import React, { useState, useEffect } from "react";
import GameOver from "../GameOver";
import styles from "./QuizComponent.module.css";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [checked, setChecked] = useState(false);

  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  // let timeleft = 13;

  // let countDown = setInterval(function () {
  //   timeleft--;
  //   if (timeleft <= -1) {
  //     setNumber(number + 1);
  //     clearInterval(countDown);
  //     timeleft = 12;
  //   }
  //   document.querySelector(".countdown").textContent = timeleft;
  // }, 1200);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;
    if (userAnswer === quiz[number].answer) {
      setChecked(true);
      setPoints(points + 1);
    } else {
      setChecked(true);
    }
    setTimeout(function () {
      setChecked(false);
      setNumber(number + 1);
    }, 300);
  };

  useEffect(() => {}, [checked]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple"
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
      {/* {console.log(number + 1)} */}
      {quiz[number] && (
        <div className="flex flex-col justify-items-center items-center">
          <div
            className="min-w-[325px] md:w-[600px] p-10 font-semibold text-base md:text-4xl lg:bg-white rounded-t-3xl select-none text-white lg:text-black"
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          ></div>
          <div className=" md:w-[600px] text-white lg:text-black font-semibold lg:bg-white pb-5">
            {number + 1} / 15
          </div>
          {/* <div className="countdown min-w-[325px] md:w-[600px] font-semibold lg:bg-red-50 pb-5"></div> */}
          <div className="flex flex-wrap justify-around lg:flex-col lg:items-center lg:mb-10 lg:bg-blue-50 py-12 min-w-[325px] md:w-[600px] lg:rounded-b-3xl">
            {quiz[number].options.map((item, index) => (
              <button
                className={`answer rounded-xl text-black bg-white select-none cursor-pointer lg:mb-4 w-[170px] md:w-[430px] h-20 py-7 mb-3 hover:bg-[#F79673] hover:text-white font-bold
                ${checked && item === quiz[number].answer ? styles.correct : ""}
                ${
                  checked && item !== quiz[number].answer
                    ? styles.incorrect
                    : ""
                }`}
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></button>
            ))}
          </div>
        </div>
      )}
      {number === 15 && <GameOver points={points} />}
    </div>
  );
}
