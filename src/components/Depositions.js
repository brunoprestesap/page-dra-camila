import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'

import CardDepositions from "./CardDepositions";
import { faker } from "@faker-js/faker";

function Depositions() {
  const testimonials = [
    {
      id: 1,
      img: faker.image.avatar(640, 480, true),
      name: "José Amanjás",
      text: "É um prazer poder falar como foi minha experiência nesse lugar, fui bem recebida, acolhida com carinho, uma experiência satisfatória e gratificante. Obrigada Dra Neiva por nos fazer sentir confiança em seu trabalho",
    },
    {
      id: 2,
      img: faker.image.avatar(640, 480, true),
      name: "Giuliana Martins",
      text: "A Dra Camila é uma profissional sem igual, um atendimento humanizado incrível, fora o espaço de atendimento que é super aconchegante, recomendo sem medo!",
    },
    {
      id: 3,
      img: faker.image.avatar(640, 480, true),
      name: "Laura Cardoso",
      text: "Um lugar que tem um atendimento diferenciado, acolhedor e profissionais excelentes que tem o olhar humanizado pelos pacientes.",
    },
    {
      id: 4,
      img: faker.image.avatar(640, 480, true),
      name: "Nayana Duarte",
      text: "Atendimento de excelência. Uma ótima profissional. Recomendo.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex)
  }


  return (
    <div id="depoimentos" className="p-5 pt-10">
      <div className="text-4xl font-bold text-center uppercase">
        Depoimentos
      </div>

      <div className="w-full m-auto py-4 px-2 relative">
        <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
          <CardDepositions
            key={testimonials[currentIndex].img}
            img={testimonials[currentIndex].img}
            depText={testimonials[currentIndex].text}
            depName={testimonials[currentIndex].name}
          />
        </div>
        {/* Left Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] left-1 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] right-1 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
        <div className="flex top-4 justify-center py-2">
          {testimonials.map((slide, slideIndex) => (
            <div key={slide.id} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
    </div>
  );
}

export default Depositions;
