import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addNowPlayingMovies } from "../../utils/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const movieList = await data.json();
    dispatch(addNowPlayingMovies(movieList));
    console.log(movieList);
  };
  useEffect(() => {
    getNowPlayingMoview();
  });
};
export default useNowPlayingMovies;
