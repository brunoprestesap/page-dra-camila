import React from "react";

const CardInicial = () => {
  return (
    <div
      id="vocesabia"
      className="group p-5 bg-[#CDBCA8] lg:h-96 flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#113614] uppercase">
          Você
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#003E53] uppercase underline decoration-[#7C5A12] underline-offset-8">
          sabia?
        </h2>
      </div>

      <div className="w-full md:w-3/6 mt-5 p-5 shadow-md shadow-[#7C5A12]/50">
        <h2 className="text-justify leading-6 text-stone-900 text-sm md:text-lg font-medium">
          Existem mais de 20.000 artigos científicos sobre o uso medicinal dos
          fitocanabinoides.
          <br />
          Você não precisa esperar os sintomas piorarem para iniciar seu
          tratamento. Veja você mesmo os benefícios do uso dessa planta milenar.
        </h2>
      </div>
    </div>
  );
};

export default CardInicial;
