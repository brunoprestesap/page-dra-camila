import React from 'react'
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

function CardDepositions({ img, depText, depName }) {
  return (
    <div className="flex flex-wrap justify-center shadow-lg mx-auto max-w-3xl md:mt-5 group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
      <div className='w-3/5 lg:w-36 flex justify-center items-center'>
        <img
          className="object-cover lg:w-full"
          src={img}
          alt="avatar depoimento"
        />
      </div>
      <div className="leading-normal">
        <div className="p-4">
          <div className="flex items-center text-xl md:text-xl font-normal gap-5 mb-3">
            <FaQuoteLeft size={100} />
            {depText}
            <FaQuoteRight size={100} />
          </div>
          <div className="flex gap-2 pl-10 mb-3">
            <FaStar color='FF884B' />
            <FaStar color='FF884B' />
            <FaStar color='FF884B' />
            <FaStar color='FF884B' />
            <FaStar color='FF884B' />
          </div>
          <div className="flex flex-row-reverse items-center justify-between pl-10 mb-2 font-bold tracking-tight">
            <h2 className='text-3xl'>
              <FaGoogle color='#FF884B' />
            </h2>
            <div>
              {depName} - Google Locais
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDepositions;
