import React, { useState } from "react";
import "./mock.css";
import Navbar from "../../../navbar/navbar";
function Mock() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is HTML?",
      options: [
        { id: 0, text: "HYPER TEXT MAKEUP LANGUAGE", isCorrect: false },
        { id: 1, text: "HIPER TEXT MAKEUP LANGUAGE", isCorrect: false },
        { id: 2, text: "HYPER TEXT MAKEUP LOGIC", isCorrect: false },
        { id: 3, text: "HYPER TEXT MARKUP LANGUAGE", isCorrect: true },
      ],
    },
    {
      text: "Whic is server side language?",
      options: [
        { id: 0, text: "php", isCorrect: true },
        { id: 1, text: "html", isCorrect: false },
        { id: 2, text: "js", isCorrect: false },
        { id: 3, text: "css", isCorrect: false },
      ],
    },
    {
      text: "What is DBMS?",
      options: [
        { id: 0, text: "DATA BASE MANAGEMENT SYSTEM", isCorrect: true },
        { id: 1, text: "DATA BASE MANI SYSTEM", isCorrect: false },
        { id: 2, text: "DATA BASE MANY SYSTEM", isCorrect: false },
        { id: 3, text: "DATA BASE MANO SYSTEM", isCorrect: false },
      ],
    },
    {
      text: "What is js?",
      options: [
        { id: 0, text: "jangeli", isCorrect: false },
        { id: 1, text: "javascript", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "jay", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is correct?",
      options: [
        { id: 0, text: "notcorrect", isCorrect: false },
        { id: 1, text: "correct", isCorrect: true },
        { id: 2, text: "notcorrect", isCorrect: true },
        { id: 3, text: "coorectnot", isCorrect: false },
      ],
    },{
        text: "Which of the following is correct?",
        options: [
          { id: 0, text: "notcorrect", isCorrect: false },
          { id: 1, text: "correct", isCorrect: true },
          { id: 2, text: "notcorrect", isCorrect: true },
          { id: 3, text: "coorectnot", isCorrect: false },
        ],
      },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="Apps">
     <Navbar/>
      {/* 1. Header  */}
      <h1>Mock Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Mock;