import React from "react";
import Navbar from "../components/Navbar";
import MultipleCard from "../components/MultipleCard";

const Experience = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="card experience">
        <MultipleCard />
        <MultipleCard />
        <MultipleCard />
        <MultipleCard />
      </div>
    </div>
  );
};

export default Experience;
