import React from "react";
import bgHero from "../assets/hero.png";
import CardExperience from "./CardExperience";
import imgLogo from "../assets/logo.png";

function Hero({ color }) {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover object-top"
        src={bgHero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/50">
        <div className="invisible lg:visible absolute lg:top-0 lg:left-0 w-52 md:w-64 lg:w-80 p-5 lg:rounded-br-xl bg-[#003E53] bg-opacity-60 shadow-2xl shadow-stone-200/50">
          <img src={imgLogo} alt="logomarca" />
        </div>

        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div id="sobre" className="flex flex-col md:absolute md:bottom-0 md:left-0 max-w-[700px] m-auto h-full justify-end md:justify-left px-5 py-12">
          {/* <div className="backdrop-blur-sm lg:invisible w-52 md:w-64 lg:w-80 px-8 py-5 lg:rounded-br-xl bg-[#CDBCA8]">
            <img src={imgLogo} alt="logomarca" />
          </div> */}


          <div className="backdrop-blur-sm rounded-2xl bg-[#003E53]/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500/50">

            <h1 className="text-4xl lg:text-6xl font-bold text-stone-200">
              Dra. Camila Neiva
            </h1>
            <hr className="w-4/6 lg:w-5/6 text-white my-5" />
            <h2 className="text-2xl lg:text-4xl font-medium text-stone-200">
              Cuide da sua saude mental e mude de vida a partir da primeira consulta
            </h2>
            <h2 className="text-lg lg:text-2xl mt-3 text-stone-200">
              Sua vida vai ser dividida entre antes e depois desta consulta onde vamos decidir juntos qual sera o melhor tratamento para voce
            </h2>

            <div className="my-5 bg-[#003E53] p-2 lg:p-5 rounded-lg lg:w-3/6">
              <h2 className="text-stone-200 font-bold">
                Consulta de seg. a sexta
              </h2>
              <hr className="w-full my-3 text-white" />
              <h2 className="text-stone-200 font-bold">
                Consultorio de saude mental<br />Centro de Macapa - AP
              </h2>
            </div>

            <div className="bg-[#003E53] w-full lg:w-4/6 py-5 px-8 text-center hover:border hover:border-stone-100 hover:shadow-xl my-5">
              <h2 className="text-white uppercase font-bold">
                Quero agendar uma consulta
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
