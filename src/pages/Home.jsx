import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Quiz App!</h2>
      <p>Test your knowledge and earn points.</p>
      <Link to="/quizzes">Start a Quiz</Link>
    </div>
  );
};

export default Home;