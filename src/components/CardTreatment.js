import React from 'react'

function CardTreatment({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="mx-auto group rounded-b-2xl transform duration-500 hover:-translate-y-2"
    >
      <div className="p-5">
        <div className="mb-3 flex justify-center text-6xl">{icon}</div>
        <div>
          <h2 className="text-2xl text-center font-bold uppercase my-5">{title}</h2>
          <h2 className="text-lg text-justify leading-7 text-white">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
