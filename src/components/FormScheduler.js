import React from "react";

import { FaWhatsapp } from "react-icons/fa";

function FormScheduler({ color }) {
  return (
    <div id="cta" className="flex justify-center py-12">
      <div className="flex flex-col md:w-2/5 w-full mx-5 items-center bg-orange-100 backdrop-blur-sm rounded-xl py-5 px-5">
        <h2 className="text-xl leading-7 text-left md:text-center">
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
