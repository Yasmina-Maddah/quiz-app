import React from "react";
import { Link } from "react-router-dom";
import { quizzes } from "../utils/quizzesData";

const QuizList = () => {
  return (
    <div>
      <h2>Available Quizzes</h2>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h3>{quiz.title}</h3>
          <Link to={`/quizzes/${quiz.id}`}>Take Quiz</Link>
        </div>
      ))}
    </div>
  );
};

export default QuizList;