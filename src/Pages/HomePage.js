import HeroContent from "../components/Hero";
import BtnUp from "../components/BtnUp";
// import NavBar from "../components/NavBar";
import ContentsVideo from "../components/ContentsVideo.js"
import Depositions from "../components/Depositions";
import Diferentials from "../components/Diferential";
import Treatment from "../components/Treatment";
import FormScheduler from "../components/FormScheduler";
import Contact from "../components/Contact";
import CardCta from "../components/CardCta"
import Footer from "../components/Footer";
import Apresentation from "../components/Apresentation";

function HomePage() {
  const colors = ["#003E53", "#A1412B", "#DF854F", "#F1EDDB", "#244B5A", "#53575A"];

  const currentColor = colors[0];
  const currentMode = "white";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div
        className="bg-white text-[#003E53] dark:bg-main-dark-bg
      dark:text-gray-200"
      >
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="transform mx-auto duration-500">
          {/* NavBar Component */}
          {/* <NavBar color={currentColor} /> */}

          {/* Hero area */}
          <HeroContent color={currentColor} />

          {/* Apresentation area */}
          <Apresentation color={currentColor} />

          <CardCta color={currentColor} />

          {/* Treatments area */}
          <Treatment />

          {/* Depolimentos Area */}
          <Depositions color={currentColor} />

          {/* Diferentials area */}
          <Diferentials />

          {/* Content Area */}
          <ContentsVideo color={currentColor} />

          {/* Form Agendamento */}
          <FormScheduler />

          {/* Contact area */}
          <Contact color={currentColor} />

          {/* Contact area */}
          <Footer />

        </div>
      </div>
    </div>
  );
}

export default HomePage;
