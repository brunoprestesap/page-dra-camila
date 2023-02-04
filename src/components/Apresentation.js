import React from 'react'
import logoImg from '../assets/logo.png'

const Apresentation = () => {
  return (
    <div className='w-full bg-[#CDBCA8] p-5'>
        <div>
            <div className='w-full'>
                <img src={logoImg} alt='/' />
            </div>
            <div className='my-5'>
                <h2 className='text-white font-medium text-justify leading-7 text-xl'>
                    Estou aqui para ouvir suas preocupações e junto com você buscar maneiras de melhorar sua saúde mental e reencontrar sua paz e bem-estar. Vamos juntos definir o melhor plano de tratamento para você, seja ele com terapia, mudanças no estilo de vida, medicamentos ou uma combinação deles.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Apresentation