import React from "react";

const CardInicial = () => {
  return (
    <div id="vocesabia" className="group my-8 md:my-12 lg:my-16">
      <div className="w-full">
        <h2 className="text-xl md:text-3xl font-bold text-center text-[#CDBCA8] uppercase">
          Você
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#003E53] uppercase underline decoration-[#7C5A12] underline-offset-8">
            sabia?
        </h2>
      </div>

      <div className="w-full m-auto py-4 relative flex justify-center items-center">
        <div className="w-5/6 h-full rounded-2xl bg-center bg-cover duration-500">
          <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl py-5 group transform duration-500 cursor-pointer">
            <div className="w-full">
              <div className="px-5">
                <div className="md:flex md:items-center md:gap-5">
                  <h2 className="text-justify leading-6 text-stone-900 text-base md:text-xl font-medium">
                    Existem mais de 20.000 artigos científicos sobre o uso medicinal dos fitocanabinoides.<br />
                    Você não precisa esperar os sintomas piorarem para iniciar seu tratamento. Veja você mesmo os benefícios do uso dessa planta milenar.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInicial;
