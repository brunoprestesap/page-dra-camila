import React from 'react'
import logoImg from '../assets/logoNude.png'

const Apresentation = () => {
  return (
    <div className='w-full flex justify-center md:my-8'>
        <div className='w-full md:w-5/6 xl:w-4/6 md:flex md:items-center bg-white p-8 md:shadow-md md:shadow-slate-400'>
            <div className='w-full md:flex justify-center'>
                <img className='w-full' src={logoImg} alt='/' />
            </div>
            <div className='my-5 md:w-4/6 md:mx-8'>
                <h2 className='text-stone-900 font-medium text-justify leading-7 text-xl'>
                    Estou aqui para ouvir suas preocupações e junto com você buscar maneiras de melhorar sua saúde mental e reencontrar sua paz e bem-estar. Vamos juntos definir o melhor plano de tratamento para você, seja ele com terapia, mudanças no estilo de vida, medicamentos ou uma combinação deles.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Apresentation