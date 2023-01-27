import React from "react";

import { FaWhatsapp } from "react-icons/fa";

function FormScheduler({ color }) {
  return (
    <div id="scheduler" className="flex items-center flex-col my-8 p-5">
      <div className="flex flex-col items-center rounded-2xl bg-cover duration-500 w-full md:p-12 p-5 lg:max-w-4xl shadow-2xl">
        <h2 className="text-xl leading-7 text-left md:text-center">
          O acompanhamento psiquiátrico é uma das ferramentas do tratamento do
          sofrimento mental. Assim como o corpo, nossa mente também precisa de
          atenção. Agende sua consulta e juntos encontraremos o melhor plano de
          cuidados para você.
        </h2>
        <button
          className="p-3 md:p-5 w-80 my-5 text-white rounded-2xl transform duration-500 hover:-translate-y-1"
          style={{ background: color }}
        >
          <a
            href="https://wa.me/5596981163765"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-center items-center gap-3 md:gap-5">
              <FaWhatsapp size={30} />
              <h2 className="text-xl md:text-2xl">Agende sua consulta</h2>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}

export default FormScheduler;
