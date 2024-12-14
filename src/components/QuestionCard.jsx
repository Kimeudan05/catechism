import React, { useState } from "react";
import BibleVerseLink from "./BibleVerseLink";

const QuestionCard = ({ question, answers }) => {
  const [showAnswers, setShowAnswers] = useState(false);

  const handleToggleAnswers = () => {
    setShowAnswers(!showAnswers); // Toggle answers visibility
  };

  return (
    <div className="p-4 border-b-2 hover:bg-gray-100 rounded-md shadow-lg transition-all duration-200 ease-in-out mb-4">
      {/* Question section with color and cursor pointer */}
      <h3
        className="text-xl font-semibold text-teal-600 cursor-pointer hover:text-teal-800"
        onClick={handleToggleAnswers}
      >
        {question}
      </h3>

      {/* Answers section with color and margin */}
      {showAnswers && (
        <div className="mt-4 space-y-4">
          {answers.map((answer, index) => (
            <div
              key={index}
              className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md"
            >
              <p className="font-medium text-gray-800">{answer.answer}</p>
              <div className="mt-2 space-y-2">
                {answer.scriptures.map((verse, idx) => (
                  <BibleVerseLink key={idx} verse={verse} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
