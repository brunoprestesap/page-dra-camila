import React from "react";
import bgHero from "../assets/hero.jpg";
import CardExperience from "./CardExperience";
import imgLogo from "../assets/logo.png"

function Hero({ color }) {
  return (
    <div id="hero">
      <img
        className='w-full h-screen object-cover object-top'
        src={bgHero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/50">

        <div className="invisible md:visible absolute top-0 left-0 md:w-64 lg:w-80 p-5 rounded-br-xl bg-orange-900">
          <img src={imgLogo} alt="logomarca"/>
        </div>

        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div className="max-w-[700px] m-auto h-full flex flex-col justify-end px-5 py-12">
          <h1 className="text-3xl text-center mb-5 md:text-4xl font-bold text-orange-900">
            Dra. Camila Neiva
          </h1>
          <h2 className="text-sm text-justify md:text-lg text-orange-900 rounded-2xl bg-orange-100 p-3 leading-6">
          Tenho 38 anos, sou goiana de coração, médica formada pela Universidade Federal do Amapá.
          Cursei pós-graduação em Psiquiatria pelo Albert Einstein do Rio de Janeiro e Psiquiatria Intervencionista pelo Hospital de Clínicas da USP. Além disso, fiz Enfermagem e Mestrado pela UNICAMP.
          Trabalho desde 2019 ajudando pessoas a encontrar equilíbrio e tranquilidade emocional. 
          Já trabalhei também em Centro de Atenção Psicossocial infantil (CAPSi), Centro de Atenção Psicossocial álcool e drogas (CAPSAd) e Clínica de Reabilitação. Prezo pelo atendimento responsável e humanizado e será uma grande satisfação atender você e poder te ajudar também.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
