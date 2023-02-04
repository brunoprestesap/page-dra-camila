import React from 'react'
import logoImg from '../assets/logoBlack.png'

const Apresentation = () => {
  return (
    <div className='w-full flex justify-center md:my-8'>
        <div className='w-full md:w-5/6 xl:w-4/6 md:flex md:items-center bg-[#CDBCA8] p-8 md:shadow-md md:shadow-slate-400'>
            <div className='w-full md:flex justify-center bg-[#CDBCA8] opacity-40'>
                <img className='w-full' src={logoImg} alt='/' />
            </div>
            <div className='my-5 md:w-4/6 md:mx-8'>
                <h2 className='text-[white]/80 font-medium text-justify leading-7 text-xl'>
                    Estou aqui para ouvir suas preocupações e junto com você buscar maneiras de melhorar sua saúde mental e reencontrar sua paz e bem-estar. Vamos juntos definir o melhor plano de tratamento para você, seja ele com terapia, mudanças no estilo de vida, medicamentos ou uma combinação deles.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Apresentation