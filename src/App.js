import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleShow = (show) => {
    setShowQuiz(!show);
  };
  return (
    <div className="App">
      <div className="App-header">
        {showQuiz ? (
          <div>Quiz stuff</div>
        ) : (
          <>
            <h1 className="App-logo text-8xl font-black">?</h1>
            <p>Welcome to our not-so-fancy quiz-maker/taker.</p>
            <button
              onClick={() => toggleShow(showQuiz)}
              className="App-link text-3xl p-4 underline focus:outline-none"
            >
              Create Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
