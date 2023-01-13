import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";

function Presentation({ color, showForm }) {
  return (
    <div className="content bg-white md:p-12 p-4 pt-8 lg:max-w-3xl w-full lg:absolute top-40 right-5 shadow-2xl dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold">
        Encontre ajuda para seus problemas emocionais com a Dra. Camila Neiva
      </h1>

      <h2 className="text-base mt-5">
        Estou aqui para ouvir suas preocupações e trabalhar com você para
        encontrar maneiras de melhorar sua saúde mental e bem-estar. Nós vamos
        trabalhar juntos para encontrar o melhor plano de tratamento para você,
        seja ele terapia, medicamentos ou uma combinação dos dois.
      </h2>

      <div className="text-center text-[20px] pt-10 pb-10">
        <button
          className="p-5 w-80 text-white rounded-full transform duration-500 hover:-translate-y-1"
          style={{ background: color }}
        >
          <a href="https://wa.me/5596981163765" target="_blank" rel="noreferrer">
            <div className="flex">
              <span className="text-2xl ml-5 mr-5">
                <BsFillCalendarDateFill />
              </span>
              <h2 className="text-2xl">Agende sua consulta</h2>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Presentation;
