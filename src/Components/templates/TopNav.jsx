import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utilis/axios";
import noimage from "/noimage.jpg"

const TopNav = () => {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(d.data);
      setsearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <>
      <div className="w-full h-[10vh] relative flex justify-start items-center ml-[20%] ">
        <i className="text-zinc-400 text-2xl ri-search-line"></i>
        <input
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white"
          type="text"
          placeholder="Search any thing..."
        />

        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="text-zinc-400 text-2xl ri-close-fill cursor-pointer"
          ></i>
        )}

        <div className="z-[100] w-[50%] rounded max-h-[50vh] absolute top-[90%] bg-zinc-200 overflow-auto left-[8%]">
          {search.map((s, i) => (
            <Link to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:bg-zinc-300 hover:font-semibold duration-200 transition-all w-[100%] flex justify-start border-b-2 border-zinc-100 items-center p-10"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5"
                src={  s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${
                  s.backdrop_path || s.profile_path
                }`: noimage}
                alt=""
              />
              <span>
                {s.title || s.name || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNav;
