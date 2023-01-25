import React from 'react'

// import Presentation from "./Presentation";
import hero from "../assets/hero.jpg";

function Hero({ color }) {
  return (
    <div id="hero">

      <img className="w-full h-screen object-cover" src={hero} alt="hero"></img>

      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 justify-center'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center items-center'>
          <h1 className='text-xl md:text-4xl font-bold text-gray-700'>
            Encontre ajuda para seus problemas emocionais com a Dra. Camila Neiva
          </h1>
          <h2 className='text-xl md:text-2xl font-bold text-gray-700'>
            Estou aqui para ouvir suas preocupações e junto com você buscar maneiras de melhorar sua saúde mental e reencontrar sua paz e bem-estar.
            Vamos juntos definir o melhor plano de tratamento para você, seja ele com terapia, mudanças no estilo de vida, medicamentos ou uma combinação deles.
          </h2>
        </div>
      </div>

      {/* <div className="transform duration-500 hover:shadow-2xl hover:-translate-y-1 relative">
        <Presentation color={color} />
      </div> */}
    </div>
  );
}

export default Hero;
