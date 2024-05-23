import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../Utilis/axios";
import Header from "./templates/Header";
import HorizontalCard from "./templates/HorizontalCard";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Home Page";

  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getHeaderwallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomvalue =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomvalue);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderwallpaper();
  }, [category]);


  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-y-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className="p-5 flex justify-between">
          <h1 className="text-xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setcategory(e.target.value)} />
        </div>
        <HorizontalCard data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
