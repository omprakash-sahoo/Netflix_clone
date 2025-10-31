import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      // If an explicit boolean payload is provided, set it; otherwise toggle.
      if (typeof action.payload === "boolean") {
        state.showGptSearch = action.payload;
      } else {
        state.showGptSearch = !state.showGptSearch;
      }
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
