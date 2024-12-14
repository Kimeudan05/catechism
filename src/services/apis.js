// src/services/apis.js

export const fetchVerse = async (verse) => {
  const baseUrl = "https://bible-api.com/"; // Bible API URL
  const encodedVerse = encodeURIComponent(verse); // Encode the verse to handle special characters
  const url = `${baseUrl}${encodedVerse}`; // Create the URL

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch the verse");
    }

    const data = await response.json(); // Parse the response as JSON
    return data;
  } catch (error) {
    console.error("Error fetching Bible verse:", error);
    return null;
  }
};
