import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

export default function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      {/* 
        Main Connainer
          -VideoBackground
          -Video Title
        SecondaryContainer
          -Movie List * n
            - Card * n
      */}
    </div>
  );
}
