import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function BtnUp({ color }) {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <a href="https://wa.me/5596991354590" target="_blank" rel="noreferrer">
        <button
          type="button"
          // style={{ background: "#03C988", borderRadius: "50%" }}
          className="bg-[#03C988] rounded-full text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <span className="btn-wup">
            <FaWhatsapp />
          </span>
        </button>
      </a>
    </div>
  );
}

export default BtnUp;
