import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./templates/TopNav";
import Cards from "./templates/Cards";
import axios from "../Utilis/axios";

const People = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      //   console.log(data);

      if (data.results.length > 0) {
        setpeople((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // setpeople(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setpage(1);
      setpeople([]);
      getPeople();
    }
  };

  //   console.log(people);
  useEffect(() => {
    refreshHandler();
  }, [category]);
  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[1%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold flex">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] cursor-pointer ri-arrow-left-line mx-2"
          ></i>{" "}
          People({category})
        </h1>

        <div className="flex items-center w-[91%]">
          <TopNav />

          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
