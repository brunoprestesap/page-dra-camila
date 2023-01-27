import HeroContent from "../components/Hero";
import BtnUp from "../components/BtnUp";
// import NavBar from "../components/NavBar";
import ContentsVideo from "../components/ContentsVideo.js"
import Depositions from "../components/Depositions";
import Diferentials from "../components/Diferential";
import Treatment from "../components/Treatment";
import FormScheduler from "../components/FormScheduler";
import Contact from "../components/Contact";

function HomePage() {
  const colors = ["#CDBCA8", "#A1412B", "#DF854F", "#F1EDDB", "#244B5A", "#53575A"];

  const currentColor = colors[0];
  const currentMode = "white";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div
        className="bg-[#CDBCA8] text-stone-700 dark:bg-main-dark-bg
      dark:text-gray-200"
      >
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="transform mx-auto duration-500">
          {/* NavBar Component */}
          {/* <NavBar color={currentColor} /> */}

          {/* Hero area */}
          <HeroContent color={currentColor} />

          {/* Treatments area */}
          <Treatment />

          {/* Depolimentos Area */}
          <Depositions color={currentColor} />

          {/* Diferentials area */}
          <Diferentials />

          {/* Content Area */}
          <ContentsVideo color={currentColor} />

          {/* Form Agendamento */}
          <FormScheduler color={currentColor} />

          {/* Form Agendamento */}
          <Contact color={currentColor} />          

        </div>
      </div>
    </div>
  );
}

export default HomePage;
