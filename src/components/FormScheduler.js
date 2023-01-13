import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function FormScheduler({ color }) {
  return (
    <div id="scheduler" className="flex items-center flex-col p-5">
      <h2 className="text-[26px] mt-5 font-bold text-center uppercase">
        AGENDE SEU CONSULTA AGORA
      </h2>

      <div className="flex flex-col items-center w-full mt-5 bg-white md:p-12 p-5 lg:max-w-4xl shadow-2xl dark:bg-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold text-center">
          Não deixe seus problemas de saúde mental afetarem sua vida, agende uma
          consulta agora e juntos encontraremos um plano de
          tratamento para aliviar seus sintomas e melhorar seu bem-estar.
        </h2>
        <button
          className="p-5 w-80 m-5 text-white rounded-full transform duration-500 hover:-translate-y-1"
          style={{ background: color }}
        >
          <a href="https://wa.me/5596981163765" target="_blank">
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

export default FormScheduler;
