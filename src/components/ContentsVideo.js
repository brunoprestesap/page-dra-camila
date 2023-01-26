import React from 'react'

import VideoPlayer from "./VideoPlayer.js";
import depressao from '../assets/depressao.mp4'
import babyblues from '../assets/babyblues.mp4'
import depressaoCoisaSeria from '../assets/depressao-coisa-seria.mp4'
import mitos from '../assets/mitos.mp4'
import depressaoCapa from '../assets/capa/depressao.jpg'
import babybluesCapa from '../assets/capa/baby-blues.jpg'
import depressaoCoisaSeriaCapa from '../assets/capa/depresao-coisa-seria.jpg'
import mitosCapa from '../assets/capa/depressao.jpg'

function Contents({ color }) {
  const contents = [
    {
      id: '1',
      title: 'Depressão',
      videoId: depressao,
      poster: depressaoCapa
    },
    {
        id: '2',
        title: 'Baby Blues',
        videoId: babyblues,
        poster: babybluesCapa
      },
      {
        id: '3',
        title: 'Depressão é coisa séria',
        videoId: depressaoCoisaSeria,
        poster: depressaoCoisaSeriaCapa
      },
      {
        id: '4',
        title: 'Mitos',
        videoId: mitos,
        poster: mitosCapa
      },
  ];

  return (
    <div id="conteudo" className="pl-5 pr-5">
      <h2 className="text-[26px] font-bold text-center mt-8">Meus conteúdos</h2>
      <div className="grid lg:flex lg:justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5 md:mt-5">
        {contents.map((content, i) => {
          return (
            <VideoPlayer
              key={content.id}
              title={content.title}
              videoId={content.videoId}
              poster={content.poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
