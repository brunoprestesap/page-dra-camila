import React from "react";

import { BsWhatsapp, BsFillHouseFill, BsFillAwardFill } from "react-icons/bs";
import { FaMapMarkedAlt, FaPhoneAlt, FaStar, FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar({ color }) {
  const menuClassActived = `px-3 py-2 rounded-lg bg-gray-200 hover:ease-in-out duration-500 hover:-translate-y-1
    dark:bg:gray-600`;
  const menuClass = `px-3 py-2 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500 hover:-translate-y-1 
  dark:hover:bg-gray-600`;
  const isActive = true;

  return (
    <div id="home" className="pl-4 pr-4 pt-5 pb-3">
      <div className="flex justify-between items-center align-middle">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo brand"
            className="object-contain max-w-xs w-18 h-10"
          ></img>
        </div>
        <div className="md:flex justify-center 2xl:gap-4 hidden">
          <div className={menuClassActived}>
            <Link to="/" style={{ color: isActive ? color : "" }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <BsFillHouseFill />
                </span>
                Home
              </div>
            </Link>
          </div>
          <div className={menuClass}>
            <a
              href="https://wa.me/5596981163765"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaPhoneAlt />
                </span>
                Agendar consulta
              </div>
            </a>
          </div>
          <div className={menuClass}>
            <a href="#tratamentos">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaUserMd />
                </span>
                Tratamentos
              </div>
            </a>
          </div>
          <div className={menuClass}>
            <a href="#depoimentos">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <BsFillAwardFill />
                </span>
                Depoimentos
              </div>
            </a>
          </div>
          <div className={menuClass}>
            <a href="#diferenciais">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaStar />
                </span>
                Meus diferenciais
              </div>
            </a>
          </div>
          <div className={menuClass}>
            <a href="#contact">
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  <FaMapMarkedAlt />
                </span>
                Onde estamos
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="text-2xl md:p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
            <a
              href="https://wa.me/5596981163765"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
