import { BsFacebook, BsInstagram, BsList, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar({ color }) {
  const menuClassActived = `p-2 pl-5 pr-5 rounded-lg bg-gray-200 hover:ease-in-out duration-500 hover:-translate-y-1
    dark:bg:gray-600`;
  const menuClass = `p-2 pl-5 pr-5 hover:bg-gray-200 rounded-lg hover:ease-in-out duration-500 hover:-translate-y-1 
  dark:hover:bg-gray-600`;
  const isActive = true;

  return (
    <div id="home" className="pl-4 pr-4 pt-5 pb-3">
      <div className="flex justify-between items-center align-middle">
        <div className="flex items-center md:gap-2">
          <span className="text-2xl cursor-pointer hover:bg-gray-200 p-2 rounded-full hover:ease-in-out duration-500 dark:hover:bg-gray-600">
            <BsList />
          </span>
          <img
            src={logo}
            alt="logo brand"
            className="object-contain max-w-xs w-18 h-10"
          ></img>
        </div>
        <div className="font-bold lg:flex justify-center hidden">
          <div className={menuClassActived}>
            <Link to="/" style={{ color: isActive ? color : "" }}>
              Home
            </Link>
          </div>
          <div className={menuClass}>
            <a href="#sobre">Sobre mim</a>
          </div>
          <div className={menuClass}>
            <a href="#conteudo">Conteúdo</a>
          </div>
          <div className={menuClass}>
            <a href="#depoimentos">Depoimentos</a>
          </div>
          <div className={menuClass}>
            <a href="#contato">Onde atendo</a>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="text-2xl md:p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
            <a href="https://www.facebook.com/dra.camilaneiva">
              <BsFacebook />
            </a>
          </div>
          <div className="text-2xl md:p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
            <a href="https://www.instagram.com/dra.camilaneiva/">
              <BsInstagram />
            </a>
          </div>
          <div className="text-2xl md:p-2 rounded-full hover:bg-gray-200 hover:ease-in-out duration-500 cursor-pointer dark:hover:bg-gray-600">
            <a href="https://wa.me/5596981163765">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
