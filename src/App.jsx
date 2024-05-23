import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Moviedetails from "./Components/Moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Persondetails from "./Components/Persondetails";
import Trailer from "./Components/templates/Trailer";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#1F1E24] flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
        <Route path="/movie/details/:id" element={<Moviedetails/>}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/tv/details/:id" element={<Tvdetails/>}>
        <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/person/details/:id" element={<Persondetails/>}/>
      </Routes>
    </div>
  );
};

export default App;
