import React from 'react'

function CardTreatment({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800"
    >
      <div className="p-5">
        <div className="mb-5 flex justify-center text-6xl">{icon}</div>
        <div className="pl-5 pr-5">
          <h5 className="text-2xl font-bold tracking-tight">{title}</h5>
          <p className="pt-5">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
