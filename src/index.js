import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change HashRouter to BrowserRouter
import Home from "./App/home.js";
import PrivacyPolicy from "./privacyPolicy.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:urlParam" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
