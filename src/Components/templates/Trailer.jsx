import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
   <div className='absolute w-screen h-screen flex items-center justify-center top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)]'>
     <Link
          onClick={() => navigate(-1)}
          className="absolute hover:text-[#6556CD] cursor-pointer ri-close-fill text-white text-2xl right-5 top-2"
        ></Link>

    <ReactPlayer 
     controls
    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
   </div>
  )
}

export default Trailer 