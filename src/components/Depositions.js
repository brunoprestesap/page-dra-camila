import CardDepositions from "./CardDepositions";
import { faker } from "@faker-js/faker";

function Depositions() {
  const testimonials = [
    {
      img: faker.image.fashion(640, 480, true),
      name: "José Amanjás",
      text: "É um prazer poder falar como foi minha experiência nesse lugar, fui bem recebida, acolhida com carinho, uma experiência satisfatória e gratificante. Obrigada Dra Neiva por nos fazer sentir confiança em seu trabalho",
    },
    {
      img: faker.image.fashion(640, 480, true),
      name: "Giuliana Martins",
      text: "A Dra Camila é uma profissional sem igual, um atendimento humanizado incrível, fora o espaço de atendimento que é super aconchegante, recomendo sem medo!",
    },
    {
      img: faker.image.fashion(640, 480, true),
      name: "Laura Cardoso",
      text: "Um lugar que tem um atendimento diferenciado, acolhedor e profissionais excelentes que tem o olhar humanizado pelos pacientes.",
    },
    {
      img: faker.image.fashion(640, 480, true),
      name: "Nayana Duarte",
      text: "Atendimento de excelência. Uma ótima profissional. Recomendo.",
    },
  ];

  return (
    <div id="depoimentos" className="pl-5 pr-5">
      <div className="p-5 pt-10">
        <div className="text-[26px] font-bold text-center uppercase">
          Depoimentos
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 pt-5">
        {testimonials.map((dep) => {
          return (
            <CardDepositions
              img={dep.img}
              depText={dep.text}
              depName={dep.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Depositions;
