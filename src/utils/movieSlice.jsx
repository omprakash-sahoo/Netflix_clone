import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    addBannerPlayingMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addBannerPlayingMovie: (state, action) => {
      state.addBannerPlayingMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addBannerPlayingMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
