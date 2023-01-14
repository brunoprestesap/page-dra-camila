import React from 'react'

import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

function FormScheduling({ color }) {
  return (
    <div id="hero" className="p-5">
      <div className="transform duration-500 hover:shadow-2xl hover:-translate-y-1 relative">
        <img className="md:max-w-2xl xl:max-w-6xl" src={hero} alt="hero"></img>

        <div className="content bg-white md:p-12 p-6 pt-8 lg:max-w-3xl w-full lg:absolute top-48 right-5 shadow-2xl dark:bg-gray-800 dark:text-gray-200">
          <h2 className="text-2xl font-bold mt-2 md:mt-3 uppercase">
            {" "}
            AGENDAMENTO DE CONSULTA
          </h2>
          <form>
            <div className="flex flex-col font-bold text-sm mt-4 md:mt-6 uppercase">
              <label>Nome:</label>
              <input
                type="text"
                class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                placeholder="Insira seu nome"
              ></input>
              <label>E-mail:</label>
              <input
                type="email"
                class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                placeholder="Insira seu e-mail preferido"
              ></input>
              <label>Whatsapp:</label>
              <input
                type="number"
                class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                placeholder="Insira seu whatsapp para contato futuro"
              ></input>
              <label>Data:</label>
              <input
                type="date"
                class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                placeholder="Insira seu e-mail preferido"
              ></input>
              <div className="text-center text-[20px] pt-10">
                <button
                  className="p-5 w-70 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1"
                  style={{ background: color }}
                >
                  Agendar
                </button>
                <Link to="/">
                  <button
                    className="ml-5 p-5 w-70 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1"
                    style={{ background: color }}
                  >
                    Voltar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormScheduling;
