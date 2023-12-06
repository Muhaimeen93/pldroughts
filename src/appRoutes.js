// AppRoutes.js

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./App/home.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/:urlParam/*" element={<Home />} />
      <Route path="/:urlParam/*/*" element={<Home />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;
