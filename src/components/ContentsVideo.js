import React from 'react'

import VideoPlayer from "./VideoPlayer.js";
import depressao from '../assets/depressao.mp4'
import babyblues from '../assets/babyblues.mp4'
import depressaoCoisaSeria from '../assets/depressao-coisa-seria.mp4'
import mitos from '../assets/mitos.mp4'
import primeiraConsulta from '../assets/primeira-consulta.mp4'
import estadio from '../assets/reels-estadio.mp4'
import reels from '../assets/reels.mp4'
import depressaoCapa from '../assets/depressao.png'
import babybluesCapa from '../assets/babyblues.jpg'
import depressaoCoisaSeriaCapa from '../assets/depressao-coisa-seria.png'
import mitosCapa from '../assets/mitos.png'
import primeiraConsultaCapa from '../assets/primeira-consulta.png'
import reelsCapa from '../assets/reels.png'

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
      {
        id: '5',
        title: 'Primeira consulta',
        videoId: primeiraConsulta,
        poster: primeiraConsultaCapa
      },
      {
        id: '6',
        title: 'Reels Estádio',
        videoId: estadio,
        poster: reelsCapa
      },
      {
        id: '7',
        title: 'Reels',
        videoId: reels,
        poster: reelsCapa
      },
  ];

  return (
    <div id="conteudo" className="pl-5 pr-5">
      <h2 className="text-[26px] font-bold text-center uppercase mt-8">Meus conteúdos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5">
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
