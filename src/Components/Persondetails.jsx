import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import HorizontalCard from "./templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";

function Persondetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  const [category, setcategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] w-screen flex flex-col bg-[#1F1E24] h-[220vh]">
      <nav className="h-[10vh] w-full text-zinc-200 flex gap-10 items-center text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex">
        {/* part 2 left poster and details */}

        <div className="w-[20%] ">
          <img
            title={info.provider_name}
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[40vh] rounded-lg h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />

          <hr className="m-5" />

          <div className="text-xl flex gap-x-5 text-white">
            {/* social media links  */}
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://x.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
          {/* personal information  */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">
            Personal Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Know For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Deathday</h1>
          <h1 className="text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Zinda hu Bhai"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold">
            Place of Birth
          </h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>

          <h1 className="text-lg text-zinc-400 font-semibold">Also Known As</h1>
          <h1 className="text-zinc-400">
            {info.detail.also_known_as.join(",")}
          </h1>
        </div>

        {/* part 3 right details and info  */}

        <div className="w-[80%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 font-black my-5">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-300 m-5">{info.detail.biography}</p>

          <h1 className="text-lg text-zinc-400 font-semibold">Summary</h1>

          <HorizontalCard data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>

            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-white shadow-lg p-5 mt-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="hover:text-white duration-300 cursor-pointer">
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {" "}
                    {c.title ||
                      c.name ||
                      c.original_name ||
                      c.original_title}
                  </span>
                  <span className="block">{c.character}</span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Persondetails;
