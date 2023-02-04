import React from 'react'

function CardBeneficios({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-[#003E53]/70 dark:bg-gray-800"
    >
      <div className="p-5">
        <div className="flex justify-center">
          {icon}
        </div>
        <div className='w-full py-5'>
          <h5 className="text-2xl font-bold text-center tracking-tight text-white">{title}</h5>
          <p className='mt-3 leading-7 text-white'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBeneficios;
