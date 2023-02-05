import React, { useState } from "react";

import VideoPlayer from "./VideoPlayer.js";
import depressao from "../assets/depressao.mp4";
import babyblues from "../assets/babyblues.mp4";
import depressaoCoisaSeria from "../assets/depressao-coisa-seria.mp4";
import mitos from "../assets/mitos.mp4";
import depressaoCapa from "../assets/capa/depressao.jpg";
import babybluesCapa from "../assets/capa/baby-blues.jpg";
import depressaoCoisaSeriaCapa from "../assets/capa/depresao-coisa-seria.jpg";
import mitosCapa from "../assets/capa/depressao.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Contents({ color }) {
  const contents = [
    {
      id: "1",
      title: "Depressão",
      videoId: depressao,
      poster: depressaoCapa,
    },
    {
      id: "2",
      title: "Baby Blues",
      videoId: babyblues,
      poster: babybluesCapa,
    },
    {
      id: "3",
      title: "Depressão é coisa séria",
      videoId: depressaoCoisaSeria,
      poster: depressaoCoisaSeriaCapa,
    },
    {
      id: "4",
      title: "Mitos",
      videoId: mitos,
      poster: mitosCapa,
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
    <div id="depoimentos" className="p-5 flex justify-center flex-col items-center">
      <div className="flex justify-center gap-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center uppercase text-[#CDBCA8]">
          Meus
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-center uppercase">
          conteúdos
        </h2>
      </div>

      <div className="w-full md:w-2/5 py-4 relative flex justify-center">
        <div className="w-full md:w-5/6 bg-center bg-cover duration-500">
          <VideoPlayer
            key={contents[currentIndex].poster}
            title={contents[currentIndex].title}
            videoId={contents[currentIndex].videoId}
            poster={contents[currentIndex].poster}
          />
        </div>
        {/* Left Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] left-1 md:left-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] right-1 md:right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
