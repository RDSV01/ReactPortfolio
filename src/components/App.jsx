import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import DonneesPersonnelles from "../pages/DonneesPersonnelles";
import Page404 from "./Page404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
