import React from 'react';

function VideoPlayer({ id, title, videoId, poster }) {

  return (
    <div key={id}>
      <h2 className='text-xl font-medium mb-2 text-center'>{title}</h2>
      <video className='w-full h-[600px] rounded-2xl' controls poster={poster}>
        <source src={videoId} type="video/mp4"/>
      </video>
    </div>
  );
}

export default VideoPlayer;