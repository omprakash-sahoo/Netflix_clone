import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="pl-2 pr-2">
      <div>
        <h1 className="text-white font-bold mb-3 uppercase">{title}</h1>
        <div className="flex items-start overflow-x-auto py-1 px-1">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
