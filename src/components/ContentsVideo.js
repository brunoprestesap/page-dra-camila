import React, { useState } from "react";

import VideoPlayer from "./VideoPlayer";

import depressao from "../assets/videos/depressao.mp4";
import depressaoCapa from "../assets/capa/capa_depressao.jpg";

import depressaoCoisaSeria from "../assets/videos/depressao-coisa-seria.mp4";
import depressaoCoisaSeriaCapa from "../assets/capa/depressao_falta_deus.jpg";

import depressao2 from '../assets/videos/depressao_.mp4'
import depressaoCapa2 from '../assets/capa/depressao_capa.jpg'

import cansacoMental from '../assets/videos/cansaco_mental.mp4'
import cansacoMentalCapa from '../assets/capa/capa_casanco.jpg'

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Contents({ color }) {
  const contents = [
    {
      id: "1",
      videoId: depressao,
      poster: depressaoCapa,
    },
    {
      id: "3",
      videoId: depressaoCoisaSeria,
      poster: depressaoCoisaSeriaCapa,
    },
    {
      id: "4",
      videoId: depressao2,
      poster: depressaoCapa2,
    },
    {
      id: "5",
      videoId: cansacoMental,
      poster: cansacoMentalCapa,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? contents.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === contents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div id="depoimentos" className="mx-5 flex justify-center flex-col items-center">

      {/* Title div */}
      <div className="flex justify-center gap-2 mb-3">
        <h2 className="text-4xl font-bold text-center uppercase text-[#CDBCA8]">
          Meus
        </h2>
        <h2 className="text-4xl font-bold text-center uppercase underline decoration-[#7C5A12] underline-offset-8">
          conteúdos
        </h2>
      </div>

      {/* Div do Video */}
      <div className="w-full md:w-[350px] relative flex justify-center">
        <div className="w-full md:w-6/6 object-cover duration-500">
          <VideoPlayer
            key={contents[currentIndex].poster}
            videoId={contents[currentIndex].videoId}
            poster={contents[currentIndex].poster}
          />
        </div>

        {/* Left Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] left-1 rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] right-1  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      <div className="flex top-4 justify-center py-2">
        {contents.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contents;
