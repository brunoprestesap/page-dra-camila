import HeroContent from "../components/Hero";
import BtnUp from "../components/BtnUp";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents";
import Depositions from "../components/Depositions";
import Diferentials from "../components/Diferential";
import Treatment from "../components/Treatment";

function HomePage() {
  const colors = ["#A1412B", "#DF854F", "#F1EDDB", "#244B5A", "#53575A"];

  const currentColor = colors[1];
  const currentMode = "dark";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div
        className="bg-gray-50 text-gray-700 dark:bg-main-dark-bg
      dark:text-gray-200"
      >
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="container mx-auto transform duration-500">
          {/* NavBar Component */}
          <NavBar color={currentColor} />

          {/* Hero area */}
          <HeroContent color={currentColor} />

          {/* Diferentials area */}
          <Diferentials />

          {/* Content Area */}
          <Contents color={currentColor} />

          {/* Treatments area */}
          <Treatment />

          {/* Depolimentos Area */}
          <Depositions color={currentColor} />

          {/* <div id="contato" className="pl-5 pr-5">
            <div className="p-5 pt-10">
              <div className="text-[26px] font-bold text-center uppercase">
                Onde atendo
              </div>
            </div>
            <div
              className="group transform duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-3xl rounded-t-2xl"
              overflow-hidden
            >
              <img
                className="object-cover w-full h-[380px]"
                src={faker.image.city(640, 480, true)}
                alt="avatar profile"
              />
              <div className="md-flex md:justify-between gap-5 p-10 sm:p-5 md:p-10">
                <div className="w-1/2 text-2xl font-semibold">
                  Onde eu atendo
                </div>
                <div className="w-full">{faker.lorem.paragraphs()}</div>
              </div>
              <div className="md:flex md:justify-between gap-5 p-10 sm:p-5 md:p-10">
                <div className="w-1/2 text-2xl font-semibold">Contate-me</div>
                <div className="w-full">
                  <p>Telefone: {faker.phone.number()}</p>
                  <p>E-mail: {faker.internet.email()}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="social" className="pl-5 pr-5"></div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
