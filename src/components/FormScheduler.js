import React from "react";

import { FaWhatsapp } from "react-icons/fa";

function FormScheduler() {
  return (
    <div id="cta" className="flex justify-center my-8">
      <div className="flex flex-col w-full md:w-2/5 mx-5 items-center shadow-2xl shadow-gray-500/50 bg-orange-100 rounded-xl p-5">
        <h2 className="text-base md:text-xl leading-7 text-left md:text-center">
          O acompanhamento psiquiátrico é uma das ferramentas do tratamento do
          sofrimento mental. Assim como o corpo, nossa mente também precisa de
          atenção. Agende sua consulta e juntos encontraremos o melhor plano de
          cuidados para você.
        </h2>

        <button
          className="p-3 md:p-5 w-80 my-5 text-white rounded-2xl transform duration-500 hover:-translate-y-1 bg-[#CDBCA8] hover:bg-stone-700"
        >
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
  );
}

export default FormScheduler;
