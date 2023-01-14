import React from 'react'

import CardBeneficios from "./CardBeneficios";
import {
  FaLaptopMedical,
  FaHandHoldingHeart,
  FaUserFriends,
  FaPrayingHands,
  FaClock,
  FaHands,
  FaUsers,
  FaUserMd,
} from "react-icons/fa";

function Diferentials() {
  const contents = [
    {
      icon: <FaLaptopMedical />,
      title: "Atendimento online",
      text: "O uso da telemedicina tem ajudado milhares de pessoas a buscarem tratamento para diversos tipos de doenças e transtornos. A sensação é de estar presente junto ao psiquiatra, que irá realizar a avaliação dos sintomas e orientar o tratamento de acordo com os dados colhidos do paciente",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Tratamento Humanizado",
      text: "Cuidado e humanização no atendimento por meio da escuta acolhedora. Formamos uma equipe de confiança, atualizada em conhecimentos e tecnologias que facilitam os tratamentos. Atuamos com base na ética profissional, empatia e respeito pela vida.",
    },
    {
      icon: <FaUserFriends />,
      title: "Tratamento individual",
      text: "Somos confiáveis e respeitamos o seu sigilo. Entendemos sua situação e sabemos as técnicas para tratar doenças, distúrbios e transtornos relacionados à saúde da mente, mas nos preocupamos em, além disso, melhorar sua qualidade de vida.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Tratamento especializado",
      text: "Os tratamentos para a melhora da saúde da mente evoluíram, tornando-se menos medicamentosos e mais próximos de quem é atendido. Abordagens simples e mudanças na rotina podem ser suficientes para promover qualidade de vida, sempre sustentadas por condutas cientificamente eficazes",
    },
    {
      icon: <FaClock />,
      title: "Hora Marcada",
      text: "As consultas são realizadas com hora marcada, seja nas modalidades de atendimento presencial e por vídeo/telemedicina",
    },
    {
      icon: <FaHands />,
      title: "Escuta Humanizada",
      text: "A cada encontro o paciente tem um espaço garantido para relatar seus enfrentamentos, sofrimentos e angústias, sendo-lhe assegurado uma escuta atenta e humanizada.",
    },
    {
      icon: <FaUsers />,
      title: "Acolhimento familiar",
      text: "Um diferencial que marca a minha história profissional é o espaço concedido aos familiares. O propósito da melhora integral do paciente inclui disponibilidade , acesso ao familiar para esclarecimento de dúvidas e participação no tratamento.",
    },
    {
      icon: <FaUserMd />,
      title: "Medicina sem fronteiras",
      text: "Graças ao avanço das tecnologias, a telemedicina surgiu para ampliar as possibilidades de atuação dos profissionais na área da saúde, com isso, é possível atender pacientes que residem em outros estados e em outros países, devido a facilidade dos encontros através das vídeos chamadas e também pela possibilidade do envio de receitas digitais.",
    },
  ];

  return (
    <div id="diferenciais" className="pl-5 pr-5">
      <div className="p-5 pt-10">
        <div className="text-[26px] font-bold text-center uppercase">
          Meus Diferenciais
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-5 pt-5">
        {contents.map((content, idx) => {
          return (
            <CardBeneficios
              id={idx}
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
