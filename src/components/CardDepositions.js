import React from "react";
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

function CardDepositions({ img, depText, depName }) {
  return (
    <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl md:mt-5 py-5 group transform duration-500 hover:-translate-y-2 dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-3/5 lg:w-36 mb-3 object-cover"
          src={img}
          alt="avatar depoimento"
        />
        <div className="flex justify-center gap-2">
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
        </div>
      </div>

      <div className="leading-normal">
        <div className="p-4">
          <div className="md:flex md:items-center text-base md:text-xl font-normal md:gap-5">
            <FaQuoteLeft className="invisible md:visible" size={25} />
            {depText}
            <FaQuoteRight className="invisible md:visible" size={25} />
          </div>
          <div className="flex flex-row mt-5 items-center font-medium tracking-tight">
            <FaGoogle color="#FF884B" size={25} />
            <div className="text-sm md:text-xl font-medium ml-5">{depName} - Google Locais</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDepositions;
