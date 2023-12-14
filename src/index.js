import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./App/home.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/:urlParam/*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
