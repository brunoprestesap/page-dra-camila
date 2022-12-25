import NavBar from "../components/NavBar";

import FormScheduling from "../components/FormScheduling";

function AgendamentoPage() {
  const colors = ["#A1412B", "#DF854F", "#F1EDDB", "#244B5A", "#53575A"];
  const currentColor = colors[1];
  const currentMode = "dark";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div
        className="bg-gray-50 text-gray-700 dark:bg-main-dark-bg
      dark:text-gray-200"
      >
        <div className="container mx-auto transform duration-500">
          {/* NavBar Component */}
          <NavBar color={currentColor} />

          {/* Hero area */}
          <FormScheduling color={currentColor} />
        </div>
      </div>
    </div>
  );
}

export default AgendamentoPage;
