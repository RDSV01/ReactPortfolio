import React from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Card from "../components/Card";
import Competences from "../components/Competences";
import Projets from "../components/Projets";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <Background />
      <Navbar />
      <Card />
      <Projets />
      <Experience />
      <Competences />
      <Contact />
    </div>
  );
};

export default Home;
