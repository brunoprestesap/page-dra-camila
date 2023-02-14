import React from "react";
import BtnUp from "../components/BtnUp";
import CardInicial from "../components/Cannabis/CardInicial";
import Hero from "../components/Cannabis/Hero";
import Tratamentos from "../components/Cannabis/Tratamentos";

const Cannabis = () => {
  const colors = [
    "#003E53",
    "#A1412B",
    "#DF854F",
    "#F1EDDB",
    "#244B5A",
    "#53575A",
  ];

  const currentColor = colors[0];
  const currentMode = "white";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div className="bg-white text-[#003E53] dark:bg-main-dark-bg dark:text-gray-200">
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="transform mx-auto duration-500">

          {/* Hero area */}
          <Hero color={currentColor} />

          {/* Card inicial area */}
          <CardInicial />

          {/* Card inicial area */}
          <Tratamentos />
        </div>
      </div>
    </div>
  );
};

export default Cannabis;
