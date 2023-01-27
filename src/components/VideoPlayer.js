import React from 'react';

function VideoPlayer({ id, title, videoId, poster }) {

  return (
    <div
      key={id}
      className="mx-5 group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2"  
    >
      <h2 className='text-xl font-bold m-5 text-center text-stone-700'>{title}</h2>
      <video className='w-full h-[550px] rounded-2xl' controls poster={poster}>
        <source src={videoId} type="video/mp4"/>
      </video>
    </div>
  );
}

export default VideoPlayer;