import React from "react";
import logoImg from "../assets/logo.png";

import {
  FaFacebookF,
  FaHeadset,
  FaHospital,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#003E53] p-5 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <img src={logoImg} className="w-5/6 mb-5" alt="logo" />

          <div>
            <h2 className="text-xl font-bold text-[#CDBCA8] uppercase">
              Redes Sociais
            </h2>
            <div className="flex gap-3 my-3">
              <div>
                <a
                  href="https://www.instagram.com/dra.camilaneiva/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-1">
                    <FaInstagram color="white" size={25} />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/camilaneiva.psiquiatra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-1">
                    <FaFacebookF color="white" size={25} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full my-5">
            <h2 className="text-base font-bold text-[#CDBCA8] my-5">
              PSIQUIATRA MACAPÁ - DRA CAMILA NEIVA
            </h2>
            <div className="flex gap-3 items-center mb-3">
              <FaHeadset size={30} color="CDBCA8" />
              <h2 className="text-xl text-stone-200">55(96)981163765</h2>{" "}
            </div>
            <div className="flex gap-3 items-center mb-3">
              <FaHospital size={30} color="CDBCA8" />
              <h2 className="text-base text-stone-200">
                Rua Manoel Eudóxio Pereira, 826 <br /> Centro / Macapá-Amapá
              </h2>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <FaMailBulk size={30} color="CDBCA8" />
              <h2 className="text-base text-stone-200">
                contato@dracamilaneiva.com.br
              </h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#CDBCA8] uppercase">
            Navegação
          </h2>
          <a href="#hero">
            <h2 className="text-base my-2 mx-3 text-stone-200">Home</h2>
          </a>
          <a href="#sobre">
            <h2 className="text-base my-2 mx-3 text-stone-200">Sobre</h2>
          </a>
          <a href="#tratamentos">
            <h2 className="text-base my-2 mx-3 text-stone-200">Tratamentos</h2>
          </a>
          <a href="#depoimentos">
            <h2 className="text-base my-2 mx-3 text-stone-200">Depoimentos</h2>
          </a>
          <a href="#diferenciais">
            <h2 className="text-base my-2 mx-3 text-stone-200">Diferenciais</h2>
          </a>
          <a href="#conteudos">
            <h2 className="text-base my-2 mx-3 text-stone-200">Conteúdos</h2>
          </a>
          <a href="#contact">
            <h2 className="text-base my-2 mx-3 text-stone-200">Localização</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
