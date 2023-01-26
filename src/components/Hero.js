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

        <div className="invisible md:visible absolute top-0 left-0 md:w-64 lg:w-80 p-5 bg-gray-700 rounded-br-xl">
          <img src={imgLogo} alt="logomarca"/>
        </div>

        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div className="max-w-[700px] m-auto h-full flex flex-col justify-end px-5 py-20">
          <h1 className="text-3xl text-center mb-5 md:text-4xl font-bold text-gray-800">
            Encontre ajuda para seus problemas emocionais com a Dra. Camila
            Neiva
          </h1>
          <h2 className="text-xl text-justify md:text-2xl font-bold text-gray-200 rounded-2xl bg-gray-800 p-8">
            Estou aqui para ouvir suas preocupações e junto com você buscar
            maneiras de melhorar sua saúde mental e reencontrar sua paz e
            bem-estar. Vamos juntos definir o melhor plano de tratamento para
            você, seja ele com terapia, mudanças no estilo de vida, medicamentos
            ou uma combinação deles.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
