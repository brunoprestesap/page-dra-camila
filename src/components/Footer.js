import React from "react";
import logoImg from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bg-stone-700 p-5 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div>
          <img src={logoImg} className="w-5/6" alt="logo"/>
          <h2 className="text-xl font-bold text-stone-200 my-5">Sobre mim</h2>
          <h2 className="text-sm text-stone-200">
            Psiquiatra formada no Albert Einstein do Rio de Janeiro/RJ
          </h2>
          <a
            href="https://wa.me/5596981163765"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-2xl text-stone-200 my-5">55(96)981163765</h2>
          </a>
          <h2 className="text-base text-stone-200">
            contato@dracamilaneiva.com.br
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-bold text-stone-200">Navegação</h2>
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
        <div>
          <h2 className="text-xl font-bold text-stone-200">Redes Sociais</h2>
          <a
            href="https://www.instagram.com/dra.camilaneiva/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-1">
              <FaInstagram color="white" size={25} />
              <h2 className="text-base my-3 mx-3 text-stone-200">Instagram</h2>
            </div>
          </a>
          <a
            href="https://www.facebook.com/camilaneiva.psiquiatra"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-1">
              <FaFacebookF color="white" size={25} />
              <h2 className="text-base my-3 mx-3 text-stone-200">Facebook</h2>
            </div>
          </a>
          <a
            href="https://wa.me/5596981163765"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-1">
              <FaWhatsapp color="white" size={25} />
              <h2 className="text-base my-3 mx-3 text-stone-200">Whatsapp</h2>
            </div>
          </a>

          <div className="flex items-center gap-1">
            <FaYoutube color="white" size={25} />
            <h2 className="text-base my-3 mx-3 text-stone-200">Youtube</h2>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-stone-200">
            Reencontre sua paz<br/> e bem-estar
          </h2>
          <h2 className="text-xl text-stone-200 my-5">
            Agende sua consulta<br/> agora conosco
          </h2>
          <button className="p-3 w-72 text-white rounded-2xl transform duration-500 hover:-translate-y-1 bg-[#CDBCA8] hover:bg-stone-700 hover:border-2 hover:border-stone-200">
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
    </div>
  );
};

export default Footer;
