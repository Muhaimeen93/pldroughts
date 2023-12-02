// index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import AppRoutes from "./appRoutes"; // Import the route configuration

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
