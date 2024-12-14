import React, { useState } from "react";
import { fetchVerse } from "../services/apis";

const BibleVerseLink = ({ verse }) => {
  const [verseText, setVerseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //function to handle the verse click
  const handleVerseClick = async () => {
    setIsLoading(true);
    try {
      const data = await fetchVerse(verse);

      if (data && data.text) {
        setVerseText(data.text);
      } else {
        setVerseText("Could not fetch the verse.");
      }
    } catch (error) {
      console.error("Error fetching verse", error);
      setVerseText("An error occurred while fetching the verse.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <span
        className="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline"
        onClick={handleVerseClick}
      >
        {verse}
      </span>
      {isLoading && <p className="text-sm text-gray-500 mt-2">Loading...</p>}
      {verseText && (
        <div className="text-blue-700 mt-2 p-2 border-l-4 border-indigo-500">
          <p>{verseText}</p>
        </div>
      )}
    </div>
  );
};

export default BibleVerseLink;
