import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home"; // make sure Home.js exists in the src folder
import Domain from "./Screens/Domain"; // make sure Domain.js exists in the src/Screens folder
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain" element={<Domain />} />
      </Routes>
    </Router>
  );
}

export default App;
