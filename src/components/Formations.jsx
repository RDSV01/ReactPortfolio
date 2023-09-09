import React from "react";
import "../styles/Formations.css";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Formations = () => {
  return (
    <div className="formations" id="formations">
      <h2>Formations & Certifications</h2>
      <Fade>
        <div className="groupformations">
          <Swiper
            modules={[Pagination, Scrollbar, Autoplay]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              680: {
                slidesPerView: 2,
              },
              968: {
                slidesPerView: 3,
              },
              1285: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="containerformations">
                <h3>Licence Informatique</h3>
                <span>2022 - 2023</span>
                <p>Campus La Châtaigneraie</p>
                <ul>
                  <li>Gestion de projets</li>
                  <li>Programmation</li>
                  <li>Cybersécurité</li>
                  <li>Réseau</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerformations">
                <h3>BTS SIO</h3>
                <span>2020 - 2022</span>
                <p>Campus La Châtaigneraie</p>
                <ul>
                  <li>Développement Web</li>
                  <li>Développement Applicatif</li>
                  <li>Cybersécurité</li>
                  <li>Réseau</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerformations">
                <h3>Certification RGPD</h3>
                <span>2021</span>
                <ul>
                  <li>
                    Certification relative au Règlement Général sur la
                    Protection des Données
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerformations">
                <h3>Certification ANSSI</h3>
                <span>2021</span>
                <ul>
                  <li>
                    Certification relative à l'Agence Nationale de la Sécurité
                    des Systèmes d'Information
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
    </div>
  );
};

export default Formations;
