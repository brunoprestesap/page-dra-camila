import CardTreatment from "./CardTreatment";
import {
  FaSadTear,
  FaFrownOpen,
  FaMehRollingEyes,
} from "react-icons/fa";

function Treatment() {
  const contents = [
    {
      icon: <FaSadTear />,
      title: "Depressão",
      text: "O uso da telemedicina tem ajudado milhares de pessoas a buscarem tratamento para diversos tipos de doenças e transtornos. A sensação é de estar presente junto ao psiquiatra, que irá realizar a avaliação dos sintomas e orientar o tratamento de acordo com os dados colhidos do paciente",
    },
    {
      icon: <FaFrownOpen />,
      title: "Ansiedade",
      text: "Cuidado e humanização no atendimento por meio da escuta acolhedora. Formamos uma equipe de confiança, atualizada em conhecimentos e tecnologias que facilitam os tratamentos. Atuamos com base na ética profissional, empatia e respeito pela vida.",
    },
    {
      icon: <FaMehRollingEyes />,
      title: "Sono",
      text: "Somos confiáveis e respeitamos o seu sigilo. Entendemos sua situação e sabemos as técnicas para tratar doenças, distúrbios e transtornos relacionados à saúde da mente, mas nos preocupamos em, além disso, melhorar sua qualidade de vida.",
    },
  ];

  return (
    <div id="tratamentos" className="pl-5 pr-5">
      <div className="p-5 pt-10">
        <div className="text-[26px] font-bold text-center uppercase">
          Tratamentos oferecidos
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 pt-5">
        {contents.map((content, idx) => {
          return (
            <CardTreatment
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

export default Treatment;