import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import axios from "axios";
import "./tailwind.css";

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./assets/questions.json");
        console.log(response.data);
        setQuestionsData(response.data); // Store the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="p-6 container mx-auto lg:ml-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Kavuku ka Kilasi
      </h1>

      {/* Loop through the different Kilungu sections */}
      {Object.entries(questionsData).map(([kilungu, sections], index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">{kilungu}</h2>

          {/* Loop through each section in the Kilungu */}
          {Object.entries(sections).map(
            ([section, questions], sectionIndex) => (
              <div key={sectionIndex} className="mt-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {section}
                </h3>

                {/* Loop through the questions in the section */}
                {questions.map((questionData, questionIndex) => (
                  <QuestionCard
                    key={questionIndex}
                    question={questionData.question}
                    answers={questionData.answers}
                  />
                ))}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
