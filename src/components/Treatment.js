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
      text: "Se você está se sentindo triste, desanimado ou sem esperança, pode ser que esteja lidando com uma depressão. Não deixe esses sentimentos controlarem sua vida. O tratamento da depressão pode ajudá-lo a se sentir melhor e recuperar sua qualidade de vida.",
    },
    {
      icon: <FaFrownOpen />,
      title: "Ansiedade",
      text: "A ansiedade é comum e tratável. Trabalhando juntos, podemos encontrar um plano de tratamento personalizado, que pode incluir terapia, medicamentos ou ambos. Não enfrente sozinho, agende uma consulta conosco para começarmos a trabalhar juntos e melhorar sua qualidade de vida.",
    },
    {
      icon: <FaMehRollingEyes />,
      title: "Insônia",
      text: "Se você está lutando com a insônia, sabe que pode afetar sua vida diária e saúde geral. Isso pode afetar sua capacidade de se concentrar, aumentar o estresse e deixá-lo com baixa energia. Não deixe que a insônia controle sua vida, existe ajuda disponível.",
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