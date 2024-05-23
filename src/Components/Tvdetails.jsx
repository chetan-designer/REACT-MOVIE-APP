import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import HorizontalCard from '../Components/templates/HorizontalCard';

const Tvdetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));

    return () => {
      dispatch(removetv());
    };
  }, [id]);

  return (
    info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)),
        url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative h-[140vh] px-[10%] overflow-x-hidden"
    >
      <nav className="h-[10vh] w-full text-zinc-200 flex gap-10 items-center text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line"
        ></Link>

        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i className="ri-star-fill"></i>
          imdb
        </a>
      </nav>

      <div className="w-full flex">
        <img
          title={info.provider_name}
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[40vh] rounded-lg h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content mx-10 text-white">
          <h1 className="text-5xl font-black">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-xl font-bold text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex items-center text-zinc-100 gap-x-5">
            {info.detail.vote_average && (
              <span className="text-white w-[5vh] h-[5vh] rounded-full flex justify-center items-center bg-yellow-600">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
            )}
            <h1 className="font-semibold text-2xl w-[60px] leading-6">
              user score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-1xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl mt-2 mb-1">Overview</h1>
          <p className="mb-10">{info.detail.overview}</p>

          <Link
            className="px-8 bg-[#6556CD] rounded-lg py-5 hover:bg-zinc-100 hover:text-[#6556CD]"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-10 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w,i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-10 items-center">
            <h1 className="text-white">Available to Buy</h1>
            {info.watchproviders.buy.map((w,i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-10 items-center">
            <h1 className="text-white">Available on Rent</h1>
            {info.watchproviders.rent.map((w,i) => (
              <img
               key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <hr className="m-10"/>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-white mb-10">Seasons</h1>
       <div className="w-[100%] flex overflow-hidden mb-5 p-5">
        {info.detail.seasons.map((s,i)=>(
          <div className="mr-[7%] w-[15vh]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[20vh] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              s.poster_path 
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold">
            {s.title || s.name || s.original_name || s.original_title}
          </h1>
          </div>
        ))}
       
       </div>

      </div>
       
      <hr className="m-10"/>

      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-white mb-10">Recommendations & Similar Stuff</h1>
      <HorizontalCard data={
        info.recommendations>0 ? info.recommendations : info.similar
      }/>


      </div>


      <Outlet/>
      
    </div>
  ) : (
    <Loading />
  )
  )
}

export default Tvdetails