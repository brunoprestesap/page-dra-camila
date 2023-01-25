import React from 'react'

function CardBeneficios({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800"
    >
      <div className="p-5">
        <div className="mt-8 mb-8 flex justify-center text-6xl">
          {icon}
        </div>
        <div>
          <h5 className="text-2xl font-bold text-center tracking-tight">{title}</h5>
          <p className='mt-3 leading-7'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBeneficios;
