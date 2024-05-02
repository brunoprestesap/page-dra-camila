import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function BtnUp({ color }) {
  return (
    <a
      href="https://wa.me/5596991354590"
      target="_blank"
      rel="noreferrer"
      className="btn-agendar"
    >
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <button
          type="button"
          onClick={() => {}}
          style={{ background: "#03C988", borderRadius: "50%" }}
          className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <FaWhatsapp />
        </button>
      </div>
    </a>
  );
}

export default BtnUp;
