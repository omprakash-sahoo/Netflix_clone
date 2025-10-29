import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const movieList = movies.results;
  const bannerMovie = movieList[0];
  const { title, overview, id } = bannerMovie;
  // console.log(bannerMovie);
  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
