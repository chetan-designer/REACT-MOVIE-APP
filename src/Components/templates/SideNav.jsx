import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
 
 

  return (
    <div className="w-[20%] h-full border-zinc-400 border-r-2 p-8">
      <h1 className="text-white text-2xl font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>MOVIE APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-sm gap-3 mb-4 font-semibold">
        <h1 className="text-white font-semibold text-xl mt-4 mb-2">
          New Feeds
        </h1>

        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-magic-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-user-3-fill"></i> People
        </Link>
      </nav>

      <hr />


      <nav className="flex flex-col text-zinc-400 text-sm font-semibold gap-3">
        <h1 className="text-white font-semibold text-xl mt-4 mb-2">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-information-2-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-2 transition-all">
          <i className="mr-2 ri-contacts-fill"></i> Contact Us
        </Link>
        
      </nav>
    </div>
  );
};

export default SideNav;
