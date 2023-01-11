import React from "react";
import { Link } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";

function Presentation({ color, showForm }) {
  return (
    <div className="content bg-white md:p-12 p-6 pt-8 lg:max-w-3xl w-full lg:absolute top-48 right-5 shadow-2xl dark:bg-gray-800 dark:text-gray-200">
      <div className="flex flex-column justify-between font-bold text-sm">
        <p>SOBRE MIM</p>
        <p>CRM/AP 1789</p>
      </div>
      <h2 className="text-3xl font-bold mt-4 md:mt-10 uppercase">
        {" "}
        Dra. Camila Neiva
      </h2>
      <p className="pt-5">
        Sou Médica formada pela Universidade Federal do Amapá, fiz psiquiatria
        pelo Albert Einstein do Rio de Janeiro, também me formei em Enfermagem
        pela UNICAMP em 2007, e terminei meu mestrado em 2009.
      </p>
      <p className="pt-5">
        Sou casada há 8 anos e tenho 2 filhos, estamos juntos há 16 anos e tenho
        dois filhos maravilhosos: Pedro Paulo, hoje com 6 anos e Helena com 5.
      </p>
      <div className="text-center text-[20px] pt-10 pb-10">
        <button
          className="p-5 w-80 text-white rounded-full transform duration-500 hover:-translate-y-1"
          style={{ background: color }}
        >
            <Link to="/scheduler">
          <div className="flex">
              <span className="text-2xl ml-5 mr-5">
                <BsFillCalendarDateFill />
              </span>
              Agende sua consulta
          </div>
            </Link>
        </button>
      </div>
    </div>
  );
}

export default Presentation;
