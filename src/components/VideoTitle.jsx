import React from "react";

export default function VideoTitle({ title, description }) {
  return (
    <div className="absolute pt-[20%] px-24 w-screen h-full bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
      <div className="video-overlay__content max-w-2xl text-white pointer-events-auto">
        <h1 className="video-overlay__title text-4xl sm:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="video-overlay__description mt-3 text-sm sm:text-base text-white/90">
          {description}
        </p>

        <div className="video-overlay__controls mt-6 flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-full px-5 py-2 shadow-lg transition-colors duration-150"
            aria-label="Play"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play-icon lucide-play"
            >
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
            </svg>
            <span className="btn__text text-sm">Play</span>
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white rounded-md px-4 py-2 transition-colors duration-150"
            aria-label="More info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-info-icon lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span className="btn__text text-sm">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
