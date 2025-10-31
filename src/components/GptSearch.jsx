import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

export default function GptSearch() {
  return (
    <div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}
