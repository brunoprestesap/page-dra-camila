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
      text: "Vem que vou te contar como funciona a consulta comigo.",
      link: "https://www.instagram.com/reel/CmNEHrnpJ1i/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img02,
      title: "Vamos falar sobre a Depressão?",
      text: "Você já passou por isso ou conhece alguém que luta todos os dias?",
      link: "https://www.instagram.com/reel/ClHbJ8vJdQV/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img03,
      title: "Depressão é falta de Deus?",
      text: "Depressão é falta de Deus? Assista meu vídeo sobre.",
      link: "https://www.instagram.com/reel/Cl4axDEJOLg/?utm_source=ig_web_button_share_sheet",
    },
    {
      img: img04,
      title: "Você precisa ir ao psiquiatra?",
      text: "Geralmente quem fala isso, é quem mais precisa. Veja meu post",
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
