import React from "react";

import CardBeneficios from "../CardBeneficios";
import { FaHandHoldingHeart, FaClock, FaUserMd } from "react-icons/fa";

const Diferentials = () => {
  const contents = [
    {
      icon: <FaHandHoldingHeart size={50} color="CDBCA8" />,
      title: "Atendimento humanizado ",
      text: "Fazemos questão de uma escuta atenta e humanizada. Prezamos pelo cuidado e humanização nos atendimentos por meio de um atendimento acolhedor. Atuamos com base na ética, empatia e respeito pela vida, com objetivo de melhorar cada vez mais sua qualidade de vida.",
    },
    {
      icon: <FaClock size={50} color="CDBCA8" />,
      title: "Hora Marcada",
      text: "As consultas são realizadas por hora marcada, seja na modalidade de atendimento presencial ou por telemedicina. Em cada encontro, a pessoa tem seu espaço garantido para relatar suas dificuldades, sofrimento e angústias, respeitando seu sigilo.",
    },
    {
      icon: <FaUserMd size={50} color="CDBCA8" />,
      title: "Telemedicina",
      text: "Graças ao avanço das tecnologias, a telemedicina ajuda milhares de pessoas a buscar tratamento para os diversos tipos de transtornos. É possível atender pessoas que residem em outros estados e em outros países, devido a facilidade dos encontros por meio das vídeochamadas e também pela possibilidade do envio de receitas digitais. A sensação é de estar presente junto ao médico, como numa consulta presencial.",
    },
  ];

  return (
    <div id="diferenciais" className="px-5 py-16 w-full flex flex-col">
      <div className="flex w-full justify-center items-center gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#CDBCA8] uppercase">
          Nossos
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase underline decoration-[#7C5A12] underline-offset-8">
          diferenciais
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-5 items-center">
        {contents.map((content, idx) => {
          return (
            <CardBeneficios
              key={idx}
              icon={content.icon}
              title={content.title}
              text={content.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Diferentials;
