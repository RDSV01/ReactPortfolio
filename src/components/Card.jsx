import "../styles//Card.css";
import { JackInTheBox, Slide} from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import BoutonsReseaux from "./BoutonsReseaux";

const Card = () => {
  return (
    <div className="card">
        <JackInTheBox className="emoji_1">
          <img src="./assets/img/emoji_hand.png" className="float_emoji"  alt="" />
        </JackInTheBox>
        <JackInTheBox className="emoji_2">
          <img src="./assets/img/emoji_laptop.png" className="float_emoji" id="emoji_2" alt="" />
        </JackInTheBox>
        <JackInTheBox className="emoji_3">
          <img src="./assets/img/emoji_rocket.gif" className="float_emoji" id="emoji_3" alt="" />
        </JackInTheBox>
      <Slide duration={800} triggerOnce>
        <div className="texte">
          <p>Bienvenue ! Je suis</p>
          <h2>
            Raphaël <span>Da Silva</span>
          </h2>
          <h1>Développeur FullStack</h1>
          <h3>"Passion pour le code, création sans limite."</h3>
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
