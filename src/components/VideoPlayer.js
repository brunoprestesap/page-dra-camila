import React from 'react';

function VideoPlayer({ id, title, videoId }) {

  return (
    <div key={id}>
      <h2 className='text-2xl font-bold mb-2 text-center'>{title}</h2>
      <iframe
        title={title}
        src={videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '600px' }}
      />
    </div>
  );
}

export default VideoPlayer;