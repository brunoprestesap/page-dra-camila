import React from 'react'

function CardBeneficios({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-orange-100 dark:bg-gray-800"
    >
      <div className="p-5">
        <div className="my-5 flex justify-center text-6xl">
          {icon}
        </div>
        <div>
          <h5 className="text-2xl font-bold text-center tracking-tight text-stone-700">{title}</h5>
          <p className='mt-3 leading-7 text-stone-700'>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBeneficios;
