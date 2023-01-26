import React from 'react'

const CardExperience = () => {
  return (
    <div className="w-full mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 p-4 lg:py-8 lg:px-5">
        <h2 className='text-xl'>Experiência</h2>

        <div className='flex justify-between items-center mt-8 border-l-4 pl-2'>
            <h2 className='text-2xl lg:text-5xl'>4+</h2>
            <h2 className='text-sm lg:text-xl text-right'>Anos de<br/>experëncia</h2>
        </div>

        <div className='flex justify-between items-center mt-4 border-l-4 pl-2'>
            <h2 className='text-2xl lg:text-5xl'>1K+</h2>
            <h2 className='text-sm lg:text-xl text-right'>Pacientes<br/>atendidos</h2>
        </div>
        
    </div>
  )
}

export default CardExperience