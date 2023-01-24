import React from 'react'

import CardBeneficios from "./CardBeneficios";
import {
  FaLaptopMedical,
  FaHandHoldingHeart,
  FaClock,
  FaUserMd,
} from "react-icons/fa";

function Diferentials() {
  const contents = [
    {
      icon: <FaLaptopMedical />,
      title: "Atendimento humanizado ",
      text: "Fazemos questão de uma escuta atenta e humanizada. Prezamos pelo cuidado e humanização nos atendimentos por meio de um atendimento acolhedor. Atuamos com base na ética, empatia e respeito pela vida, com objetivo de melhorar cada vez mais sua qualidade de vida.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Acolhimento familiar",
      text: "Um diferencial que marca nosso atendimento é o espaço concedido aos familiares. O propósito da melhora integral do paciente inclui disponibilidade, acesso ao familiar para esclarecimento de dúvidas e participação no tratamento, respeitando as individualidades da pessoa e seguindo o sigilo médico.",
    },
    {
      icon: <FaClock />,
      title: "Hora Marcada",
      text: "As consultas são realizadas por hora marcada, seja na modalidade de atendimento presencial ou por telemedicina. Em cada encontro, a pessoa tem seu espaço garantido para relatar suas dificuldades, sofrimento e angústias, respeitando seu sigilo.",
    },
    {
      icon: <FaUserMd />,
      title: "Medicina sem fronteiras",
      text: "Graças ao avanço das tecnologias, a telemedicina ajuda milhares de pessoas a buscar tratamento para os diversos tipos de transtornos. É possível atender pessoas que residem em outros estados e em outros países, devido a facilidade dos encontros por meio das vídeochamadas e também pela possibilidade do envio de receitas digitais. A sensação é de estar presente junto ao médico, como numa consulta presencial.",
    },
  ];

  return (
    <div id="diferenciais" className="pl-5 pr-5">
      <div className="p-5 pt-10">
        <div className="text-[26px] font-bold text-center uppercase">
          Porque as pessoas confiam na gente
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 pt-5">
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
}

export default Diferentials;
