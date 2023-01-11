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
        Bem-vindo à minha página! Meu nome é Camila Neiva e sou psiquiatra. Estou aqui para ouvir suas preocupações e trabalhar com você para encontrar maneiras de melhorar sua saúde mental e bem-estar.
        Eu entendo que falar sobre sua saúde mental pode ser difícil, mas estou aqui para oferecer uma escuta compreensiva e não-julgadora.
        Nós vamos trabalhar juntos para encontrar o melhor plano de tratamento para você, seja ele terapia, medicamentos ou uma combinação dos dois.
        Lembre-se, você não está sozinho nesta jornada e eu estou aqui para apoiá-lo. 
        Estou ansioso por conhecê-lo melhor."
      </p>
      <p className="pt-5">
        Não importa quão difícil possa parecer, tenha a certeza de que está tomando a decisão certa para si mesmo ao buscar ajuda.
        Não deixe que esses sentimentos o controlem, agende uma consulta conosco hoje e comece a trilhar o caminho para uma vida mais equilibrada e saudável.
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
