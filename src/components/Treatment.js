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
      text: "Depressão em psiquiatria tem uma conotação diferente do que muitos usam no cotidiano. É um diagnóstico apresentando um conjunto de sintomas que podem alterar apetite, sono, energia, disposição, concentração e até mesmo a capacidade de sentir prazer",
    },
    {
      icon: <FaFrownOpen />,
      title: "Ansiedade",
      text: "O termo é abrangente, mas na psiquiatria pode ser entendido como um grupo de doenças que tem como características antecipações de eventos que podem causar medo, angústia, raiva, tristeza e até pânico",
    },
    {
      icon: <FaMehRollingEyes />,
      title: "Insônia",
      text: "A avaliação da qualidade do sono é fundamental na Psiquiatria pois costuma ser o primeiro sintoma surgido ou percebido por pessoas acometidas por transtorno mental",
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