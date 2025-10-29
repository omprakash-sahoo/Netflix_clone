import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  // guard against null/undefined slice while data is loading
  const nowPlayingResults = movies?.nowPlayingMovies?.results ?? [];
  const popularMovies = movies?.popularMovies?.results ?? [];
  const topRatedMovies = movies?.topRatedMovies?.results ?? [];

  return (
    <div className="-mt-80 relative z-10">
      <MovieList title={"Now Playing"} movies={nowPlayingResults} />
      <MovieList title={"Popular Movies"} movies={popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
      {/* 
    MovieList - Popular
      -Card
    */}
    </div>
  );
}
