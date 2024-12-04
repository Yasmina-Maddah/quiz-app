import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Quiz App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/results">Results</Link>
      </div>
    </nav>
  );
};

export default Navbar;