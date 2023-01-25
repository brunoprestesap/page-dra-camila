import React from "react";
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

function CardDepositions({ img, depText, depName }) {
  return (
    <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl md:mt-5 group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
      <div className="flex flex-col justify-center">
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
          <div className="flex items-center text-xl md:text-xl font-normal gap-5 mb-3">
            <FaQuoteLeft size={100} />
            {depText}
            <FaQuoteRight size={100} />
          </div>
          <div className="flex flex-row-reverse items-center justify-between font-medium tracking-tight">
            <h2 className="text-3xl">
              <FaGoogle color="#FF884B" />
            </h2>
            <div>{depName} - Google Locais</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDepositions;
