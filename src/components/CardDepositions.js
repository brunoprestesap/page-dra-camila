import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

function CardDepositions({ img, depText, depName }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group transform duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden cursor-pointer">
      <img
        className="w-full md:w-52 object-cover"
        src={img}
        alt="avatar depoimento"
      />
      <div className="leading-normal">
        <div className="p-4">
          <div className="flex gap-5 mb-3">
            <FaQuoteLeft size={100} />
            {depText}
            <FaQuoteRight size={100} />
          </div>
          <div className="flex gap-2 pl-10 mb-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="flex flex-row-reverse items-center justify-between pl-10 mb-2 font-bold tracking-tight">
            <div>
              <FaMapMarkedAlt />
            </div>
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
