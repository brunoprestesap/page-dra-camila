import React from "react";
import bgHero from "../assets/hero.jpg";
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

        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div id="sobre" className="flex absolute bottom-24 left-7">

          <div className="backdrop-opacity-10 rounded-2xl bg-white p-5 bg-opacity-60 shadow-2xl shadow-stone-500/50">

            <h1 className="text-6xl lg:text-6xl font-bold">
              Dra.<br /> Camila<br />Neiva
            </h1>
            <hr className="w-full lg:w-full border mt-3 mb-5 border-[#003E53]" />
            <div className="my-10">
              <h2 className="text-2xl lg:text-4xl font-medium">
                Psiquiatra em Macapa/AP
              </h2>
              <h2 className="text-lg lg:text-2xl">
                Atendimento on-line e presencial
              </h2>
            </div>

            <div className="w-full flex justify-center">
              <button className="bg-[#003E53] rounded-lg w-full lg:w-4/6 py-5 px-8 text-center hover:border hover:border-stone-100 hover:shadow-xl my-5">
                <h2 className="text-white uppercase font-bold">
                  Agende sua consulta
                </h2>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
