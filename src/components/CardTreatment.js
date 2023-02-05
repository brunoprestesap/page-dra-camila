import React from 'react'

function CardTreatment({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="group"
    >
      <div>
        <div className="mb-3 flex justify-center text-6xl">{icon}</div>
        <div>
          <h2 className="text-2xl text-center font-bold uppercase my-5">{title}</h2>
          <h2 className="text-lg text-justify leading-7 text-white xl:px-16">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
