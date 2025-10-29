import useMovieBanner from "./hooks/useMovieBanner";
import { useSelector } from "react-redux";

export default function VideoBackground({ movieId }) {
  useMovieBanner(movieId);
  const bannerKey = useSelector((store) => store.movies.addBannerPlayingMovie);

  // don't render invalid iframe while bannerKey is not yet available
  if (!bannerKey) return null;

  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${bannerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${bannerKey}&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
