import React from 'react'

function CardTreatment({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-orange-100 dark:bg-gray-800"
    >
      <div className="p-5">
        <div className="mb-5 flex justify-center text-6xl">{icon}</div>
        <div>
          <h5 className="text-2xl font-bold text-center tracking-tight mb-3 text-orange-900">{title}</h5>
          <p className="leading-7 text-orange-900">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
