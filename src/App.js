import React from "react";
import { faker } from "@faker-js/faker";
import {
  BsList,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsArrowBarUp,
} from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import conteudo01 from "./assets/conteudo01.png";
import conteudo02 from "./assets/conteudo02.png";
import conteudo03 from "./assets/conteudo03.png";
import conteudo04 from "./assets/conteudo04.png";

function App() {
  const colors = ["#A1412B", "#DF854F", "#F1EDDB", "#244B5A", "#53575A"];

  const menuClass = `p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500 hover:-translate-y-1 
  dark:hover:bg-gray-600`;
  const menuClassActived = `p-2 pl-5 pr-5 rounded-lg bg-gray-200 hover:ease-in-out duration-500 hover:-translate-y-1
  dark:bg:gray-600`;
  const isActive = true;
  const currentColor = colors[1];
  const currentMode = "dark";
  const depoimentos = [
    {
      name: "José Amanjás",
      depoimento:
        "É um prazer poder falar como foi minha experiência nesse lugar, fui bem recebida, acolhida com carinho, uma experiência satisfatória e gratificante. Obrigada Dra Neiva por nos fazer sentir confiança em seu trabalho",
    },
    {
      name: "Giuliana Martins",
      depoimento:
        "A Dra Camila é uma profissional sem igual, um atendimento humanizado incrível, fora o espaço de atendimento que é super aconchegante, recomendo sem medo!",
    },
    {
      name: "Laura Cardoso",
      depoimento:
        "Um lugar que tem um atendimento diferenciado, acolhedor e profissionais excelentes que tem o olhar humanizado pelos pacientes.",
    },
    {
      name: "Nayana Duarte",
      depoimento:
        "Atendimento de excelência. Uma ótima profissional. Recomendo.",
    },
  ];

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div
        className="bg-gray-50 text-gray-700 dark:bg-main-dark-bg
      dark:text-gray-200"
      >
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <button
            type="button"
            onClick={() => {}}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <a href="#home">
              <BsArrowBarUp />
            </a>
          </button>
        </div>
        <div className="container mx-auto transform duration-500">
          <div id="home" className="pl-4 pr-4 pt-5 pb-3">
            <div className="flex justify-between items-center align-middle">
              <div className="flex items-center gap-3">
                <span className="text-2xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:ease-in-out duration-500 dark:hover:bg-gray-600">
                  <BsList />
                </span>
                <img
                  src={logo}
                  alt="logo brand"
                  className="object-cover w-18 h-10 pr-5"
                ></img>
              </div>
              <div className="font-bold lg:flex justify-center hidden">
                <div className={menuClassActived}>
                  <a
                    href="#home"
                    style={{ color: isActive ? currentColor : "" }}
                  >
                    Home
                  </a>
                </div>
                <div className={menuClass}>
                  <a href="#sobre">Sobre mim</a>
                </div>
                <div className={menuClass}>
                  <a href="#conteudo">Conteúdo</a>
                </div>
                <div className={menuClass}>
                  <a href="#depoimentos">Depoimentos</a>
                </div>
                <div className={menuClass}>
                  <a href="#contato">Onde atendo</a>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
                  <a href="https://www.facebook.com/dra.camilaneiva">
                    <BsFacebook />
                  </a>
                </div>
                <div className="text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
                  <a href="https://www.instagram.com/dra.camilaneiva/">
                    <BsInstagram />
                  </a>
                </div>
                <div className="text-2xl p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
                  <a href="https://wa.me/5596981163765">
                    <BsWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="hero" className="p-5">
            <div className="transform duration-500 hover:shadow-2xl hover:-translate-y-1 relative">
              <img className="xl:max-w-6xl" src={hero} alt="hero"></img>
              <div className="content bg-white md:p-12 p-6 pt-8 lg:max-w-3xl w-full lg:absolute top-48 right-5 shadow-2xl dark:bg-gray-800 dark:text-gray-200">
                <div className="flex justify-between font-bold text-sm">
                  <p>SOBRE MIM</p>
                  <p>CRM/AP 1789</p>
                </div>
                <h2 className="text-3xl font-bold mt-4 md:mt-10 uppercase">
                  {" "}
                  Dra. Camila Neiva
                </h2>
                <p className="pt-5">
                  Sou Médica formada pela Universidade Federal do Amapá, fiz
                  psiquiatria pelo Albert Einstein do Rio de Janeiro, também me
                  formei em Enfermagem pela UNICAMP em 2007, e terminei meu
                  mestrado em 2009.
                </p>
                <p className="pt-5">
                  Sou casada há 8 anos e tenho 2 filhos, estamos juntos há 16
                  anos e tenho dois filhos maravilhosos: Pedro Paulo, hoje com 6
                  anos e Helena com 5.
                </p>
                <p className="text-center text-[20px] pt-10 pb-10">
                  <a href="https://wa.me/5596981163765">
                    <button
                      className="p-5 w-70 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1"
                      style={{ background: currentColor }}
                    >
                      Agende sua consulta
                    </button>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="conteudo" className="pl-5 pr-5">
            <div className="p-5 pt-10">
              <div className="text-[26px] font-bold text-center uppercase">
                Meus Conteúdos
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5 pt-5">
              <div className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800">
                <img
                  className="object-cover w-full rounded-2xl h-64"
                  src={conteudo01}
                  alt="primeira consulta"
                />
                <div className="p-5">
                  <div className="pl-5 pr-5">
                    <h5 className="text-2xl font-bold tracking-tight">
                      Como é a 1º consulta com a psiquiatra?
                    </h5>
                    <p className="pt-5">
                      Vem que vou te contar como funciona a consulta comigo.
                    </p>
                  </div>
                  <div className="p-5 flex flex-row justify-between items-baseline">
                    <p className="font-bold text-2xl"></p>
                    <div>
                      <a href="https://www.instagram.com/reel/CmNEHrnpJ1i/?utm_source=ig_web_button_share_sheet">
                        <button
                          className="rounded-full p-2 w-36 font-bold text-gray-50"
                          style={{ background: currentColor }}
                        >
                          Assista agora
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800">
                <img
                  className="object-cover w-full rounded-2xl h-64"
                  src={conteudo02}
                  alt="sobre a depressão"
                />
                <div className="p-5">
                  <div className="pl-5 pr-5">
                    <h5 className="text-2xl font-bold tracking-tight">
                      Vamos falar sobre a Depressão?
                    </h5>
                    <p className="pt-5">
                      Você já passou por isso ou conhece alguém que luta todos
                      os dias?
                    </p>
                  </div>
                  <div className="p-5 flex flex-row justify-between items-baseline">
                    <p className="font-bold text-2xl"></p>
                    <div>
                      <a href="https://www.instagram.com/reel/ClHbJ8vJdQV/?utm_source=ig_web_button_share_sheet">
                        <button
                          className="rounded-full p-2 w-36 font-bold text-gray-50"
                          style={{ background: currentColor }}
                        >
                          Assista agora
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800">
                <img
                  className="object-cover w-full rounded-2xl h-64"
                  src={conteudo03}
                  alt="depressão é falta de Deus"
                />
                <div className="p-5">
                  <div className="pl-5 pr-5">
                    <h5 className="text-2xl font-bold tracking-tight">
                      Depressão é falta de Deus
                    </h5>
                    <p className="pt-5">
                      Depressão é falta de Deus? Assista meu vídeo sobre.
                    </p>
                  </div>
                  <div className="p-5 flex flex-row justify-between items-baseline">
                    <p className="font-bold text-2xl"></p>
                    <div>
                      <a href="https://www.instagram.com/reel/Cl4axDEJOLg/?utm_source=ig_web_button_share_sheet">
                        <button
                          className="rounded-full p-2 w-36 font-bold text-gray-50"
                          style={{ background: currentColor }}
                        >
                          Assista agora
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800">
                <img
                  className="object-cover w-full rounded-2xl h-64"
                  src={conteudo04}
                  alt="primeira consulta"
                />
                <div className="p-5">
                  <div className="pl-5 pr-5">
                    <h5 className="text-2xl font-bold tracking-tight">
                      Você precisa ir ao psiquiatra?
                    </h5>
                    <p className="pt-5">
                      Geralmente quem fala isso, é quem mais precisa. Veja meu
                      post.
                    </p>
                  </div>
                  <div className="p-5 flex flex-row justify-between items-baseline">
                    <p className="font-bold text-2xl"></p>
                    <div>
                      <a href="https://www.instagram.com/reel/Clj25D1JLlV/?utm_source=ig_web_button_share_sheet">
                        <button
                          className="rounded-full p-2 w-36 font-bold text-gray-50"
                          style={{ background: currentColor }}
                        >
                          Assista agora
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="depoimentos" className="pl-5 pr-5">
            <div className="p-5 pt-10">
              <div className="text-[26px] font-bold text-center uppercase">
                Depoimentos
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 pt-5">
              <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  className="w-full md:w-52 object-cover"
                  src={faker.image.fashion(640, 480, true)}
                  alt="avatar depoimento"
                />
                <div className="leading-normal">
                  <div className="p-4">
                    <div className="flex gap-5 mb-3">
                      <FaQuoteLeft size={100} />
                      <p>{depoimentos[0].depoimento}</p>
                      <FaQuoteRight size={100} />
                    </div>
                    <div className="flex gap-2 pl-10 mb-3">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="pl-10">
                      <p className="mb-2 font-bold tracking-tight">
                        {depoimentos[0].name} - Google Locais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  className="w-full md:w-52 object-cover"
                  src={faker.image.fashion(640, 480, true)}
                  alt="avatar depoimento"
                />
                <div className="leading-normal">
                  <div className="p-4">
                    <div className="flex gap-5 mb-3">
                      <FaQuoteLeft size={100} />
                      <p>{depoimentos[1].depoimento}</p>
                      <FaQuoteRight size={100} />
                    </div>
                    <div className="flex gap-2 pl-10 mb-3">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="pl-10">
                      <p className="mb-2 font-bold tracking-tight">
                        {depoimentos[1].name} - Google Locais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  className="w-full md:w-52 object-cover"
                  src={faker.image.fashion(640, 480, true)}
                  alt="avatar depoimento"
                />
                <div className="leading-normal">
                  <div className="p-4">
                    <div className="flex gap-5 mb-3">
                      <FaQuoteLeft size={100} />
                      <p>{depoimentos[2].depoimento}</p>
                      <FaQuoteRight size={100} />
                    </div>
                    <div className="flex gap-2 pl-10 mb-3">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="pl-10">
                      <p className="mb-2 font-bold tracking-tight">
                        {depoimentos[2].name} - Google Locais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
                <img
                  className="w-full md:w-52 object-cover"
                  src={faker.image.fashion(640, 480, true)}
                  alt="avatar depoimento"
                />
                <div className="leading-normal">
                  <div className="p-4">
                    <div className="flex gap-5 mb-3">
                      <FaQuoteLeft size={100} />
                      <p>{depoimentos[3].depoimento}</p>
                      <FaQuoteRight size={100} />
                    </div>
                    <div className="flex gap-2 pl-10 mb-3">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="pl-10">
                      <p className="mb-2 font-bold tracking-tight">
                        {depoimentos[3].name} - Google Locais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="contato" className="pl-5 pr-5">
            <div className="p-5 pt-10">
              <div className="text-[26px] font-bold text-center uppercase">
                Onde atendo
              </div>
            </div>
            <div
              className="group transform duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-3xl rounded-t-2xl"
              overflow-hidden
            >
              <img
                className="object-cover w-full h-[380px]"
                src={faker.image.city(640, 480, true)}
                alt="avatar profile"
              />
              <div className="md-flex md:justify-between gap-5 p-10 sm:p-5 md:p-10">
                <div className="w-1/2 text-2xl font-semibold">
                  Onde eu atendo
                </div>
                <div className="w-full">{faker.lorem.paragraphs()}</div>
              </div>
              <div className="md:flex md:justify-between gap-5 p-10 sm:p-5 md:p-10">
                <div className="w-1/2 text-2xl font-semibold">Contate-me</div>
                <div className="w-full">
                  <p>Telefone: {faker.phone.number()}</p>
                  <p>E-mail: {faker.internet.email()}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="social" className="pl-5 pr-5"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
