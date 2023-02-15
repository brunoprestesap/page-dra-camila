import React from "react";

const CardTratamento = ({ id, icon, title, text }) => {
  return (
    <div key={id} className="group p-5">

        <div className="mb-3 flex flex-col lg:flex-row justify-center items-center">
          <div>
            {icon}
          </div>
          <div>
            <h2 className="text-2xl text-center font-bold text-white uppercase">
              {title}
            </h2>
          </div>
        </div>

        <div>
          <h2 className="text-sm md:text-base text-justify text-slate-900">
            {text}
          </h2>
        </div>
    </div>
  );
};

export default CardTratamento;
