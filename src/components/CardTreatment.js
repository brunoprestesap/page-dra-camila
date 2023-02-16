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
          <h2 className="text-2xl text-center font-bold text-white uppercase">{title}</h2>
        </div>
        <div>
          <h2 className="text-sm text-justify leading-6 text-slate-900 xl:px-10">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default CardTreatment;
