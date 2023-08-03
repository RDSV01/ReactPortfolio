import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Vanta from "../components/Vanta";

const Home = () => {
  return (
    <div className="home">
      <Vanta />
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
