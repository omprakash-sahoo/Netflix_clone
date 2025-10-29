import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addPopularMovies } from "../../utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(movieList);
    dispatch(addPopularMovies(json));
  };
  useEffect(() => {
    getPopularMoview();
  });
};
export default usePopularMovies;
