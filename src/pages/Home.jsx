import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Card from "../components/Card";
import Competences from "../components/Competences";

const Home = () => {
  return (
    <div className="home">
      <Background />
      <Navbar />
      <Card />
      <Competences />
    </div>
  );
};

export default Home;
