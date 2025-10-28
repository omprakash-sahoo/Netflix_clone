import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

export default function Browse() {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
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
