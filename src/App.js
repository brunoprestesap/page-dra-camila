import React from "react";
import { Routes, Route } from "react-router-dom";
import Cannabis from "./Pages/Cannabis";
import HomePage from "./Pages/HomePage";

import TagManager from "gtm-for-react";

const tagManagerArgs = {
  gtmId: "GTM-KMRWN8G3",
};

TagManager.initialize(tagManagerArgs);

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
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
