import React from 'react'

import VideoPlayer from "./VideoPlayer.js";
import depressao from '../assets/depressao.mp4'
import babyblues from '../assets/babyblues.mp4'
import depressaoCoisaSeria from '../assets/depressao-coisa-seria.mp4'
import mitos from '../assets/mitos.mp4'
import primeiraConsulta from '../assets/primeira-consulta.mp4'
import estadio from '../assets/reels-estadio.mp4'
import reels from '../assets/reels.mp4'

function Contents({ color }) {
  const contents = [
    {
      id: 'VmTexoCHuVQ',
      title: 'Depressão',
      videoId: depressao
    },
    {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: babyblues
      },
      {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: depressaoCoisaSeria
      },
      {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: mitos
      },
      {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: primeiraConsulta
      },
      {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: estadio
      },
      {
        id: 'VmTexoCHuVQ',
        title: 'Depressão',
        videoId: reels
      },
  ];

  return (
    <div id="conteudo" className="pl-5 pr-5">
      <h2 className="text-[26px] font-bold text-center uppercase mt-8">Meus conteúdos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5">
        {contents.map((content, idx) => {
          return (
            <VideoPlayer
              id={content.id}
              videoId={content.videoId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
