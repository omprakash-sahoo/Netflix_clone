import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addBannerPlayingMovie } from "../../utils/movieSlice";

const useMovieBanner = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovieVideos() {
      try {
        const id = movieId; // fallback if movieId not provided
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await res.json();
        if (!json || !Array.isArray(json.results)) return;
        const trailers = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = trailers[0];
        if (trailer && trailer.key) {
          dispatch(addBannerPlayingMovie(trailer.key));
        }
      } catch (err) {
        console.error("useMovieBanner: failed to fetch videos", err);
      }
    }

    getMovieVideos();
  }, [dispatch, movieId]);
};

export default useMovieBanner;
