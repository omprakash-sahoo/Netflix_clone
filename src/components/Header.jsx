import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    setIsDropdownOpen(false);
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      })
      .finally(() => setIsSigningOut(false));
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex items-center">
      <img src="/Logonetflix.png" alt="logo" className="h-[40px] w-[140px]" />

      {/* right side user avatar + dropdown */}
      {user && (
        <div className="ml-auto relative">
          <button
            onClick={() => setIsDropdownOpen((s) => !s)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className="flex items-center gap-2 text-white focus:outline-none"
          >
            <img
              src={
                !user.photoURL
                  ? "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                  : user.photoURL
              }
              alt="user"
              className="h-9 w-9 rounded-sm object-cover border border-gray-700"
            />
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            role="menu"
            className={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 text-white rounded-md shadow-lg z-30 ring-1 ring-white/10 ${
              isDropdownOpen ? "" : "hidden"
            }`}
          >
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-white/5">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-white/5">
              Manage Profiles
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-white/5">
              Account
            </button>
            <div className="border-t border-white/10" />
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-white/5"
              onClick={handleSignOut}
              disabled={isSigningOut}
            >
              {isSigningOut ? "Signing out..." : "Sign out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
