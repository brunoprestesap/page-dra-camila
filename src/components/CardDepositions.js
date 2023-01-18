import React from 'react'
import { FaGoogle, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import logoGoogle from '../assets/google.png'

function CardDepositions({ img, depText, depName }) {
  return (
    <div className="flex flex-wrap justify-center md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
      <img
        className="w-4/6 md:w-52 object-cover"
        src={logoGoogle}
        alt="avatar depoimento"
      />
      <div className="leading-normal">
        <div className="p-4">
          <div className="flex items-center text-xl md:text-2xl font-normal gap-5 mb-3">
            <FaQuoteLeft size={100} />
            {depText}
            <FaQuoteRight size={100} />
          </div>
          <div className="flex gap-2 pl-10 mb-3">
            <FaStar color='FF884B'/>
            <FaStar color='FF884B'/>
            <FaStar color='FF884B'/>
            <FaStar color='FF884B'/>
            <FaStar color='FF884B'/>
          </div>
          <div className="flex flex-row-reverse items-center justify-between pl-10 mb-2 font-bold tracking-tight">
            <h2 className='text-3xl'>
              <FaGoogle color='#FF884B'/>
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
