import React, { useRef, useState } from "react";
import openai from "../utils/openai";
import deepSeek from "../utils/deepseek";

export default function GptSearchBar() {
  const searchText = useRef(null);
  const [aiResponse, setaiResponse] = useState("");
  const handleGptSearchClick = async () => {
    const value = searchText.current?.value ?? "";
    if (!value) return;
    const query =
      "Act as a movie recomendation system sugget some movies for the query: " +
      value +
      ", Only Give me name of 5 movies, comma separated like the exapmpe result given ahead. Example Result: Name1, Name2, Name3";

    const aiModelResponse = await deepSeek(query);
    aiModelResponse.split(",").map((res) => {});
    console.log("DeeSeek: " + aiModelResponse);
  };

  // don't call deepSeek() at top-level here unless you want an immediate call
  // const deepSeekResponse = deepSeek();
  // console.log(deepSeekResponse);
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center p-6 bg-[#071021]">
        <form
          className="flex gap-2.5 items-center p-4 rounded-xl
                                     bg-gradient-to-b from-[rgba(7,16,33,0.9)] to-[rgba(2,8,20,0.6)]
                                     shadow-[0_8px_30px_rgba(0,119,255,0.08),0_0_10px_rgba(0,230,255,0.04)_inset]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder="What would you like to watch today ?"
            className="min-w-[300px] px-4 py-2 rounded-lg border border-[rgba(0,170,255,0.12)]
                                         bg-gradient-to-b from-[#021022] to-[#061427] text-[#dff6ff] outline-none
                                         shadow-[inset_0_6px_18px_rgba(0,119,255,0.06)]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg font-semibold text-[#00101a]
                                         bg-gradient-to-r from-[#00e0ff] to-[#0077ff]
                                         shadow-[0_8px_24px_rgba(0,119,255,0.25)] cursor-pointer border-0"
            onClick={handleGptSearchClick}
          >
            Ask AI
          </button>
        </form>
      </div>
    </div>
  );
}
