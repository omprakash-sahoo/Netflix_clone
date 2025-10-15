import React, { useState } from "react";
import Header from "./Header";
import netflix_logo from "/Logonetflix.png";

export default function Login() {
  const [isSignInForm, setisSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  // Test
  return (
    <div className="">
      <Header />
      <div className="relative w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 px-16 py-12 rounded-md text-white flex flex-col gap-6 min-w-[350px] max-w-[400px] z-20 opacity-90">
          <h1 className="text-3xl font-bold mb-4 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 rounded bg-[#333] placeholder-gray-400 outline-none"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Full Name"
              className="p-3 rounded bg-[#333] placeholder-gray-400 outline-none"
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#333] placeholder-gray-400 outline-none"
          />
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded font-semibold text-lg mt-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
          <div className="text-gray-400 mt-8 text-sm">
            {" "}
            {isSignInForm ? "New to Netflix?" : "Already a registered "}
            <a
              href="#"
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? " Sign up now." : "Sign In"}
            </a>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
