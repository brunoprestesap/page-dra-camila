import { BsArrowBarUp } from "react-icons/bs";

function BtnUp({ color }) {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <button
        type="button"
        onClick={() => {}}
        style={{ background: color, borderRadius: "50%" }}
        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <a href="#home">
          <BsArrowBarUp />
        </a>
      </button>
    </div>
  );
}

export default BtnUp;
