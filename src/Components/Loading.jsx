import React from 'react';
import loader from '/loader.gif'

const Loading = () => {
  return (
    <div>
        <img className='w-screen h-screen object-center' src={loader} alt="" />
    </div>
  )
}

export default Loading