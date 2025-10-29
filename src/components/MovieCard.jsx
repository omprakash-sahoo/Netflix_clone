import React from "react";
import { IMG_CDN } from "../utils/constant";

export default function MovieCard({ movie }) {
  return (
    <div className="flex items-center gap-4 min-w-[224px]">
      <div className="overflow-hidden rounded-md shadow-lg">
        <img
          className="w-90 h-60 object-fit transition duration-300 ease-in-out hover:scale-110"
          src={IMG_CDN + movie.poster_path}
          alt={movie.title || "Movie poster"}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-black font-semibold text-sm truncate">
          {movie.title || movie.name}
        </h3>
        {/* optional: show release date or overview */}
        {/* <p className="text-sm text-white/70 truncate">{movie.release_date}</p> */}
      </div>
    </div>
  );
}
