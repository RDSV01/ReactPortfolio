import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <Background />
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
