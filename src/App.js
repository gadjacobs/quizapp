import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showTakeQuiz, setShowTakeQuiz] = useState(false);

  const toggleShowQuiz = (show) => {
    setShowQuiz(!show);
  };
  const toggleShowTakeQuiz = (show) => {
    setShowTakeQuiz(!show);
  };
  return (
    <div className="App">
      {showTakeQuiz ? (
        <div>Testing...</div>
      ) : showQuiz && !showTakeQuiz ? (
        <div className="bg-gray-700 flex justify-center items-center content-center h-screen align-middle">
          <div className="bg-white w-1/2 p-6 text-gray-500 rounded-lg">
            <h1>Please add your questions below</h1>
            <div class="relative m-4">
              <label
                for="question"
                className="text-left leading-7 text-sm text-gray-600"
              >
                Question:
              </label>
              <input
                type="text"
                id="question"
                name="question"
                placeholder="Enter your question here"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative m-4">
              <label
                for="options"
                className="text-left leading-7 text-sm text-gray-600"
              >
                Options:
              </label>
              <input
                type="text"
                id="options"
                name="options"
                placeholder="Press enter after each option"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative m-4">
              <label
                for="answer"
                className="text-left leading-7 text-sm text-gray-600"
              >
                Answer:
              </label>
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Make sure sure your answer matches one of the options"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button className="border py-2 px-4 text-white bg-blue-500">
              Add Question
            </button>
            <button
              onClick={() => toggleShowTakeQuiz(showTakeQuiz)}
              className="w-full mt-4 border border-blue-500 py-2 px-4 text-blue-500 bg-white"
            >
              Take Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="App-header">
          <h1 className="App-logo text-8xl font-black">?</h1>
          <p>Welcome to our not-so-fancy quiz-maker/taker.</p>
          <button
            onClick={() => toggleShowQuiz(showQuiz)}
            className="App-link text-3xl p-4 underline focus:outline-none"
          >
            Create Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
