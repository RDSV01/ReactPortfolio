import "../styles//Card.css";
import { JackInTheBox, Slide} from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import BoutonsReseaux from "./BoutonsReseaux";
import React, { useState } from "react";



const Card = () => {
  const [rocketAnimation, setRocketAnimation] = useState(false);

  const handleRocketClick = () => {
    setRocketAnimation(true);

    setTimeout(() => {
      setRocketAnimation(false);
    }, 1000); 
  };
  
  return (
    <div className="card">
        <JackInTheBox className="emoji_1" delay={100}>
          <img src="./assets/img/emoji_hand.png" className="float_emoji"  alt="" />
        </JackInTheBox>
        <JackInTheBox className="emoji_2" delay={250}>
          <img src="./assets/img/emoji_laptop.png" className="float_emoji" id="emoji_2" alt="" />
        </JackInTheBox>
        <JackInTheBox className="emoji_3" delay={400}>
           <img src="./assets/img/emoji_rocket-min.gif" className={`float_emoji ${rocketAnimation ? "rocketAnimation" : ""}`} id="emoji_3" alt="" onClick={handleRocketClick} />
        </JackInTheBox>
      <Slide duration={800} triggerOnce>
        <div className="texte">
          <p className="bienvenue">Bienvenue ! Je suis</p>
          <h2 className="nomprenomcard">
            Raphaël <span>Da Silva</span>
          </h2>
          <h1>Développeur Web FullStack</h1>
          <p className="citation">"Passion pour le code, création sans limite."</p>
          <BoutonsReseaux/>
        </div>
      </Slide>
      <Slide direction="right" duration={800} triggerOnce>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="photoprofile">
            <img src="./assets/img/pp2.webp" alt="Photo de profile du site" />
          </div>
        </Tilt>
      </Slide>
    </div>
  );
};

export default Card;
