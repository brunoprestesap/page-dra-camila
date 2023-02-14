import React from "react";
import { Routes, Route } from "react-router-dom";
import Cannabis from "./Pages/Cannabis";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cannabis" element={<Cannabis />} />
      </Routes>
    </div>
  );
}

export default App;
