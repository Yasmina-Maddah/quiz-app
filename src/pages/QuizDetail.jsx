import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { quizzes } from "../utils/quizzesData";

const QuizDetail = () => {
  const { id } = useParams(); // Correct way to use the useParams hook
  const quiz = quizzes.find((quiz) => quiz.id === parseInt(id)); // Ensure quiz is fetched properly
  const [currentQuestion, setCurrentQuestion] = useState(0); // Properly declared at the top
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  // Ensure all hooks are at the top of the functional component and are not inside conditions/loops

  const handleAnswer = () => {
    const question = quiz.questions[currentQuestion];
    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer("");
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz Complete! Your score is ${score + 1}`);
    }
  };

  // Add a check for invalid quizzes to prevent null errors
  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.questions[currentQuestion].text}</p>
      {quiz.questions[currentQuestion].options ? (
        <div>
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => setUserAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      )}
      <button onClick={handleAnswer}>Submit</button>
    </div>
  );
};

export default QuizDetail;