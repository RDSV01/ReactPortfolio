import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Card from "../components/Card";
import Competences from "../components/Competences";
import Projets from "../components/Projets";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Formations from "../components/Formations";
import Totop from "../components/Totop";
import Recomandations from "../components/Recomandations";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";
import { useState } from "react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`${isDarkMode ? 'light-mode' : ''} home`}>
      <Background />
      <Navbar />
      <ToggleDarkModeButton toggleDarkMode={toggleDarkMode} />
      <Card />
      <Projets />
      <Experience />
      <Formations />
      <Competences />
      <Recomandations/>
      <Contact />
      <Totop />
      <Footer />
    </div>
  );
};

export default Home;
