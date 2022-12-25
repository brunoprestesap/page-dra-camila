import React from "react";
import { Routes, Route } from "react-router-dom";
import AgendamentoPage from "./Pages/AgendamentoPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scheduler" element={<AgendamentoPage />} />
      </Routes>
    </div>
  );
}

export default App;
