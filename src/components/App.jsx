import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "../pages/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
