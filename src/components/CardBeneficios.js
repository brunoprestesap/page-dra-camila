import React from 'react'

function CardBeneficios({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2"
    >
      <div className="p-5">
        <div className="flex justify-center">
          {icon}
        </div>
        <div className='w-full py-5'>
          <h5 className="text-2xl font-bold text-center tracking-tight">{title}</h5>
          <p className='text-base mt-3 md:leading-7 text-stone-800'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBeneficios;
