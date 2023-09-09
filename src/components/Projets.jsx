import "../styles/Projets.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projets = () => {
  return (
    <div className="projets" id="projets">
      <div className="container">
        <p className="container-title">Projets</p>
        {/* <Marquee pauseOnHover autoFill speed={70}> */}
        <div className="gradient-card-projects">
          <Swiper
            modules={[Pagination, Scrollbar]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="card-project">
                <div className="container-card-project bg-blue-box">
                  <img
                    src="./assets/img/Cursella_1_2.webp"
                    alt="Photo du site web Cursella, location de biens saisonniers"
                  />
                  <p className="card-project-title">Cursella</p>
                  <p className="card-project-description">
                    Site web de location de biens saisonniers.
                  </p>
                  <div className="badge-techno-projet">
                    <p>PHP</p>
                    <p>Javascript</p>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-project">
                <div className="container-card-project bg-blue-box">
                  <img
                    src="./assets/img/WfiProd_2.webp"
                    alt="Photo du site web WfiProd, site d'un photographe vidéaste"
                  />
                  <p className="card-project-title">WfiProd</p>
                  <p className="card-project-description">
                    Portfolio d'un vidéaste/photographe.
                  </p>
                  <div className="badge-techno-projet">
                    <p>React</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-project">
                <div className="container-card-project bg-blue-box">
                  <img
                    src="./assets/img/3ds_faq_2.webp"
                    alt="Photo du site 3d dental store, site e-commerce pour dentiste et prothesistes dentaires"
                  />
                  <p className="card-project-title">3D Dental Store</p>
                  <p className="card-project-description">
                    Système de FAQ sur le site 3D Dental Store.
                  </p>
                  <div className="badge-techno-projet">
                    <p>Wordpress</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-project">
                <div className="container-card-project bg-blue-box">
                  <img
                    src="./assets/img/portfolio-min.webp"
                    alt="Photo du site 3d dental store, site e-commerce pour dentiste et prothesistes dentaires"
                  />
                  <p className="card-project-title">Raphds</p>
                  <p className="card-project-description">
                    Mon portfolio en tant que développeur.
                  </p>
                  <div className="badge-techno-projet">
                    <p>React</p>
                    <p>ViteJS</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-project">
                <div className="container-card-project bg-blue-box">
                  <img
                    style={{ backgroundColor: "white" }}
                    src="./assets/img/datagouv.webp"
                    alt="Photo du site 3d dental store, site e-commerce pour dentiste et prothesistes dentaires"
                  />
                  <p className="card-project-title">Base Adresse Nationale</p>
                  <p className="card-project-description">
                    API autocomplétion d'adresses avec la Base Adresse
                    Nationale.
                  </p>
                  <div className="badge-techno-projet">
                    <p>Javascript</p>
                    <p>JQuery</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* </Marquee> */}
        <h2>
          Et d'autres projets ! N'hésitez pas à{" "}
          <a href="#contact">me contacter</a> pour + d'infos.
        </h2>
      </div>
    </div>
  );
};

export default Projets;
