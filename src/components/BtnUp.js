import { FaWhatsapp } from "react-icons/fa";

function BtnUp({ color }) {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <button
        type="button"
        onClick={() => {}}
        style={{ background: '#03C988', borderRadius: "50%" }}
        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <a href="https://wa.me/5596981163765" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </button>
    </div>
  );
}

export default BtnUp;
