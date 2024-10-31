import React from "react";
import SearchBox from "./Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[88vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="../../images/hero.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-blue-800 to-transparent opacity-70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col z-10 text-center px-4">
        <h1 className="text-white text-[28px] sm:text-[36px] lg:text-[50px] font-bold uppercase tracking-widest mb-4 shadow-md">
          Let's enjoy the journey
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-xl font-medium tracking-wide mb-8">
          Get the best experience with us
        </p>

        {/* Search Box */}
        <SearchBox />
        <Link
          href={""}
          className="rounded px-14 md:px-28 mt-[-1rem] py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-linear"></span>
          <span className="relative font-bold">Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
