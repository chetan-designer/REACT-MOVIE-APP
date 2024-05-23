import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),
      url(https://image.tmdb.org/t/p/original/${
        data.backdrop_path || data.profile_path
      })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white mt-2">
        {data.overview.slice(0, 200)}{" "}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">More...</Link>
      </p>
      <p className="text-white font-semibold mt-2">
        <i className="mr-3 text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "Coming soon..."}
        <i className="mx-3 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] p-4 rounded text-white mt-5">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
