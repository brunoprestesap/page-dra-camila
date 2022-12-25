import Presentation from "./Presentation";
import hero from "../assets/hero.jpg";

function Hero({ color }) {
  return (
    <div id="hero" className="p-5">
      <div className="transform duration-500 hover:shadow-2xl hover:-translate-y-1 relative">
        <img className="xl:max-w-6xl" src={hero} alt="hero"></img>

        <Presentation color={color} />
      </div>
    </div>
  );
}

export default Hero;
