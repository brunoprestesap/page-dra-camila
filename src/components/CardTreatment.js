import React from 'react'

function CardTreatment({ id, icon, title, text }) {
  return (
    <div
      key={id}
      className="group"
    >
      <div>
        <div className="mb-3 flex justify-center items-center gap-3">
          {icon}
          <h2 className="text-2xl text-center font-bold text-white uppercase my-5">{title}</h2>
        </div>
        <div>
          <h2 className="text-lg text-justify leading-7 text-white xl:px-16">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
