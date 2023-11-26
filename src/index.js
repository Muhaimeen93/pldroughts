import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

import Home from "./App/home.js";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
