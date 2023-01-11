import img01 from "../assets/conteudo01.png";
import img02 from "../assets/conteudo02.png";
import img03 from "../assets/conteudo03.png";
import img04 from "../assets/conteudo04.png";
import CardContent from "./CardContent";

function Contents({ color }) {
  const contents = [
    {
      img: img01,
      title: "Como é a 1º consulta com a psiquiatra?",
      text: "Uma consulta com um psiquiatra é uma oportunidade para discutir suas preocupações de saúde mental e encontrar maneiras de melhorar seu bem-estar. Durante a sua consulta, você terá a oportunidade de falar comigo sobre seus sintomas, sua história médica e suas preocupações.",
      link: "https://www.instagram.com/reel/CmNEHrnpJ1i/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img02,
      title: "Vamos falar sobre a Depressão?",
      text: "Se você está se sentindo triste, desanimado ou sem esperança, pode ser que esteja lidando com uma depressão. Não deixe esses sentimentos controlarem sua vida. O tratamento da depressão pode ajudá-lo a se sentir melhor e recuperar sua qualidade de vida.",
      link: "https://www.instagram.com/reel/ClHbJ8vJdQV/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img03,
      title: "Depressão é falta de Deus?",
      text: "A crença de que a depressão é causada por falta de fé ou espiritualidade pode levar a julgamentos e estigmatização desnecessária de pessoas que sofrem com essa condição, e pode impedir que elas busquem ajuda médica.",
      link: "https://www.instagram.com/reel/Cl4axDEJOLg/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img04,
      title: "Você precisa ir ao psiquiatra?",
      text: "Se você está se sentindo triste, desanimado ou sem esperança, se está tendo dificuldade para dormir, se está com dificuldade para se concentrar, se está com falta de apetite ou mudanças no seu peso, se está sentindo ansioso ou com medo sem motivo aparente, esses são sinais de que pode ser benéfico consultar um psiquiatra.",
      link: "https://www.instagram.com/reel/Clj25D1JLlV/?utm_source=ig_web_button_share_sheet",
    },
  ];

  return (
    <div id="conteudo" className="pl-5 pr-5">
      <div className="p-5 pt-10">
        <div className="text-[26px] font-bold text-center uppercase">
          Meus Conteúdos
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5 pt-5">
        {contents.map((content, idx) => {
          return (
            <CardContent
              id={idx}
              imgContent={content.img}
              title={content.title}
              text={content.text}
              link={content.link}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Contents;
