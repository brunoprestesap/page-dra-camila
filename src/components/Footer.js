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

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Column One */}
        <div className="w-full">
          {/* Logo div */}
          <div className="flex justify-center md:justify-start">
            <img src={logoImg} className="w-5/6 mb-5" alt="logo" />
          </div>

          {/* Social Netowrks Section */}
          <div className="w-full">
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

          {/* Contacts Section */}
          <div className="w-full my-5">
            <div className="flex my-5">
              <h2 className="text-xl font-bold text-[#CDBCA8]">
                PSIQUIATRA MACAPÁ - DRA CAMILA NEIVA
              </h2>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <FaHeadset size={30} color="CDBCA8" />
              <h2 className="lining-nums text-xl text-white subpixel-antialiased">
                (96) 98116-3765
              </h2>{" "}
            </div>
            <div className="flex gap-3 items-center mb-3">
              <FaHospital size={30} color="CDBCA8" />
              <h2 className="text-base text-white lining-nums">
              Rua Hamilton Silva, num 916 - Centro, Macapá - AP, CEP: 68900-068
              </h2>
            </div>
            <div className="flex gap-3 items-center mb-3">
              <FaMailBulk size={30} color="CDBCA8" />
              <h2 className="text-base text-white">
                clinicadracamilaneiva@gmail.com
              </h2>
            </div>
          </div>

        </div>

        {/* Navigation section */}
        <div>
          <h2 className="text-xl font-bold text-[#CDBCA8] uppercase">
            MENU
          </h2>
          <a href="#hero">
            <h2 className="text-base my-2 mx-3 text-white">Home</h2>
          </a>
          <a href="#sobre">
            <h2 className="text-base my-2 mx-3 text-white">Sobre</h2>
          </a>
          <a href="#tratamentos">
            <h2 className="text-base my-2 mx-3 text-white">Tratamentos</h2>
          </a>
          <a href="#depoimentos">
            <h2 className="text-base my-2 mx-3 text-white">Depoimentos</h2>
          </a>
          <a href="#diferenciais">
            <h2 className="text-base my-2 mx-3 text-white">Diferenciais</h2>
          </a>
          <a href="#conteudos">
            <h2 className="text-base my-2 mx-3 text-white">Conteúdos</h2>
          </a>
          <a href="#contact">
            <h2 className="text-base my-2 mx-3 text-white">Localização</h2>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
