import React from "react";
import { Link } from "react-router-dom";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full h-[50vh] flex gap-2 overflow-y-auto mb-5 px-2">
      {data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} 
        key={i} className="min-w-[20%] bg-zinc-900 overflow-hidden mb-5">
          <img
            className="w-[100%] h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="p-2">
            <h1 className="text-lg font-black text-white whitespace-nowrap">
              {d.title || d.name || d.original_name || d.original_title}
            </h1>
            <p className="text-white mt-2">
              {d.overview.slice(0, 100)}{" "}
              <span className="text-zinc-400"> More...</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCard;
