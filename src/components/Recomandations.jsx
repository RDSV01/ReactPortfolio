import React, { useState } from "react";
import "../styles/Recomandations.css";

const Recomandations = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <div>
      <div className="outerdiv">
        <h2>Recommandations</h2>
        <div className="innerdiv">
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/icones/user-circle-2.svg" alt=""></img>
              </div>
              <div className="detbox">
                <p className="name">Laurent M.</p>
                <p className="designation">
                  Responsable Marketing / 3D Dental Store
                </p>
              </div>
            </div>
            <div className="review">
              <p>
                {showMore1
                  ? "\"Consciencieux et respectueux des procédures, Raphaël est un collaborateur précieux sachant faire preuve de pro-activité et d'autonomie. Intégré en qualité de développeur Web, les activités du service m'ont conduit à lui confier l'élaboration, la gestion et la réalisation de projets dont il s'est acquitté avec brio. La conjoncture économique n'ayant malheureusement pas permis de convertir son alternance en CDI, je vous invite à saisir au plus vite l'opportunité de le recruter !!! Vous n'en trouverez pas deux comme lui.\""
                  : "\"Consciencieux et respectueux des procédures, Raphaël est un collaborateur précieux sachant faire preuve de pro-activité et d'autonomie..."}
              </p>
              {showMore1 ? (
                <button onClick={toggleShowMore1}>Afficher moins</button>
              ) : (
                <button onClick={toggleShowMore1}>Afficher plus</button>
              )}
            </div>
          </div>
          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/icones/user-circle-2.svg" alt=""></img>
              </div>
              <div className="detbox">
                <p className="name">Maud D.</p>
                <p className="designation">La maison des journalistes</p>
              </div>
            </div>
            <div className="review">
              <p>
                “Rapide, efficace, poli, n'hésitez pas à confier vos missions à
                Raphaël ! ”
              </p>
            </div>
          </div>
          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src="./assets/icones/user-circle-2.svg" alt=""></img>
              </div>
              <div className="detbox">
                <p className="name">Sophie J.</p>
                <p className="designation">DRH / 3D Dental Store</p>
              </div>
            </div>
            <div className="review">
              <p>
                {showMore2
                  ? "“Dès notre première rencontre et alors même que nous n’étions pas en recherche de développeur Web, Raphaël nous a fait telle impression que nous nous sommes projetés sur l’opportunité d’ouvrir de nouveaux projets pouvant d’une part lui correspondre et d’autre part profiter à notre société. Tout au long de son alternance chez nous Raphaël a confirmé et dépassé l’excellente première impression qu’il nous a donné. Il a su s’intégrer en un clin d’œil chez nous, alors même que son positionnement, consistant à faire l’interface entre les équipes dédiées à l’ERP / Le service Woocommerce et les webdesigners, n’était pas sans difficulté. Sans connaître préalablement l’écosystème wordpress et encore moins son environnement de commerce (woocommerce), Raphaël a su rapidement en appréhender les enjeux et la logique pour être en mesure de développer des plugins sur-mesure dédiés à notre site internet. En compréhension rapide des enjeux de l’entreprise et de ses projets, il a même été force de proposition pertinente dans l’ajout de fonctionnalités techniques ET marketing au site. Sa technicité, sa compréhension des enjeux de l’entreprise et de ses collaborateurs, sa capacité de synthèse et son excellente écoute ont fait de lui le candidat idéal pour débuter nos projets de growth-hacking. Raphaël allie un calme olympien à une efficacité redoutable, le travail est toujours fourni avec rapidité, réflexion et pertinence. C’est un réel plaisir et une véritable promenade de santé que de travailler avec lui. Grâce à son professionnalisme et à sa maturité Raphaël a su s’imposer comme un collègue clé sachant faire avancer les projets à tel point que ses journées d’école se faisaient ainsi réellement sentir. Pour toutes ces raisons et bien plus encore, je me permets de vous recommander chaleureusement Raphaël pour une intégration au sein de vos équipes.”"
                  : "“Dès notre première rencontre et alors même que nous n’étions pas en recherche de développeur Web, Raphaël nous a fait telle impression que nous nous sommes projetés..."}
              </p>
              {showMore2 ? (
                <button onClick={toggleShowMore2}>Afficher moins</button>
              ) : (
                <button onClick={toggleShowMore2}>Afficher plus</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomandations;
