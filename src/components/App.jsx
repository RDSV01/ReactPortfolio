import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonneesPersonnelles from "../pages/DonneesPersonnelles";
import Page404 from "./Page404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
