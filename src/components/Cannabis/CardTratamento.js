import React from "react";

const CardTratamento = ({ id, icon, title, text }) => {
  return (
    <div key={id} className="group px-5">
      <div>

        <div className="mb-3 flex justify-center items-center gap-3">
          {icon}
          <h2 className="text-2xl text-center font-bold text-white uppercase">
            {title}
          </h2>
        </div>

        <div>
          <h2 className="text-base text-justify text-slate-900">{text}</h2>
        </div>

      </div>
    </div>
  );
};

export default CardTratamento;
