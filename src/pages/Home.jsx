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

const Home = () => {
  return (
    <div className="home">
      <Background />
      <Navbar />
      <Card />
      <Projets />
      <Experience />
      <Formations />
      <Competences />
      <Contact />
      <Totop />
      <Footer />
    </div>
  );
};

export default Home;
