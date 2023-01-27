import React from "react";
import bgHero from "../assets/hero.jpg";
import CardExperience from "./CardExperience";
import imgLogo from "../assets/logo.png";
import { FaWhatsapp } from 'react-icons/fa';

function Hero({ color }) {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover md:object-top"
        src={bgHero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/50">
        <div className="invisible lg:visible absolute lg:top-0 lg:left-0 w-52 md:w-64 lg:w-80 p-5 lg:rounded-br-xl bg-[#CDBCA8] bg-opacity-60">
          <img src={imgLogo} alt="logomarca" />
        </div>

        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div className="flex flex-col md:absolute md:bottom-0 md:left-0 max-w-[700px] m-auto h-full justify-end md:justify-left px-5 py-12">
          {/* <div className="backdrop-blur-sm lg:invisible w-52 md:w-64 lg:w-80 px-8 py-5 lg:rounded-br-xl bg-[#CDBCA8]">
            <img src={imgLogo} alt="logomarca" />
          </div> */}

          <h1 className="text-left text-3xl mb-5 md:text-4xl font-bold text-stone-700">
            Dra. Camila Neiva
          </h1>

          <h2 className="backdrop-blur-sm text-sm text-justify md:text-lg rounded-2xl bg-[#CDBCA8] text-stone7400 p-5 leading-6 bg-opacity-60">
            Tenho 38 anos, sou goiana de coração, médica formada pela
            Universidade Federal do Amapá. Cursei pós-graduação em Psiquiatria
            pelo Albert Einstein do RJ e Psiquiatria Intervencionista pelo
            HC-USP. Além disso, fiz Enfermagem e Mestrado pela UNICAMP. Trabalho
            desde 2019 ajudando pessoas a encontrar equilíbrio e tranquilidade
            emocional. Já trabalhei também em CAPS infantil, CAPS Álcool e
            drogas e Clínica de Reabilitação. Prezo pelo atendimento responsável
            e humanizado e será uma grande satisfação atender você e poder te
            ajudar também.
          </h2>

          <button
            className="p-3 md:p-5 w-80 my-5 text-white rounded-2xl transform duration-500 hover:-translate-y-1 bg-[#CDBCA8] hover:bg-stone-700">
            <a
              href="https://wa.me/5596981163765"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center gap-3 md:gap-5">
                <FaWhatsapp size={30} />
                <h2 className="text-sm md:text-xl">Agende sua consulta</h2>
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
