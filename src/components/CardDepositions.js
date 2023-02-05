import React from "react";
import { RiUserStarFill } from 'react-icons/ri'
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

function CardDepositions({ depText, depName }) {
  return (
    <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl md:mt-5 py-5 group transform duration-500 cursor-pointer">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full border-2 p-5 bg-[#003E53]/30 border-[#003E53] my-3">
          <RiUserStarFill size={50}/>
        </div>
        <div className="flex justify-center gap-2 mb-5">
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
          <FaStar color="FF884B" />
        </div>
      </div>

      <div className="w-full">
        <div className="px-5">
          <div className="md:flex md:items-center text-base md:text-xl font-normal md:gap-5">
            <FaQuoteLeft className="invisible md:visible" size={25} />
            <h2 className="leading-6">{depText}</h2>
            <FaQuoteRight className="invisible md:visible" size={25} />
          </div>
          <div className="flex flex-row items-center font-medium">
            <FaGoogle color="#003E53" size={25} />
            <div className="text-sm md:text-xl font-bold ml-5">{depName} - Google Locais</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDepositions;
