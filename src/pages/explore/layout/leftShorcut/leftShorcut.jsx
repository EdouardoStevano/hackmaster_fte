import React, { useEffect, useState } from "react";
import "./leftShorcut.scss";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardMunicipales from "./component/card/CardMunicipales";

import img from "../../../../assets/branding/img/480x320/img10.jpg";
import img20 from "../../../../assets/branding/img/480x320/img20.jpg";
import img16 from "../../../../assets/branding/img/480x320/img16.jpg";
import img29 from "../../../../assets/branding/img/480x320/img16.jpg";
import img25 from "../../../../assets/branding/img/480x320/img25.jpg";
import securite from "../../../../assets/branding/img/480x320/securite.png";
import img11 from "../../../../assets/branding/img/480x320/img11.jpg";
import img36 from "../../../../assets/branding/img/480x320/img36.jpg";
function SpeedLink() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isXExpanded, setIsXExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleX = () => {
    setIsXExpanded(!isXExpanded);
  };

  const line1Style = isXExpanded ? { transform: "rotate(45deg)" } : {};
  const line2Style = isXExpanded
    ? { transform: "rotate(-45deg)", height: "16px" }
    : {};
  const line3Style = isXExpanded ? { opacity: "0", dipslay: "none" } : {};

  const handleMouseOver = () => {
    toggleX();
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  const Municipales = [
    {
      image: img29,
      title: "Services administratifs",
    },
    {
      image: img20,
      title: "Service des Affaires Générales",
    },
    {
      image: img25,
      title: "Service des Finances",
    },
    {
      image: img,
      title: "Service de l’Urbanisme",
    },
    {
      image: securite,
      title: "Service de la Sécurité",
    },
    {
      image: img11,
      title: "Service de l’Etat Civil",
    },
    {
      image: img16,
      title: "Service de la Population",
    },
    {
      image: img36,
      title: "Service de la Santé",
    },
  ];
  const [openDialog, SetOpenDialog] = useState(false);

  const handleclickDialogMunicipale = () => {
    SetOpenDialog(!openDialog);
  };
  const handleCloseDialogMunicipale = () => {
    SetOpenDialog(false);
  };

  return (
    <div>
      <div className={`speedLink-container`}>
        <div className={`link-button`}>
          <span onClick={handleMouseOver}>menu</span>

          <div className="x-container" onClick={handleMouseOver}>
            <div className="x-line line1" style={line1Style}></div>
            <div className="x-line line3" style={line3Style}></div>
            <div className="x-line line2" style={line2Style}></div>
          </div>
        </div>

        <div className={`speedLink-menu ${isMenuVisible ? "active" : ""}`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 close-speedLink"
              onClick={handleMouseOver}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div className={"speedLink-content"}>
              <div className="globalMap">
                <div className="globalMap-content">
                  <h1>Explorer votre ville</h1>
                  <small>
                    Naviguer à travers notre carte de la ville bien dataillé,
                    consulter votre destination avant même de s'y rendre.
                  </small>
                  <Link to={"/maps"} className="btn-explore">
                    Explorer
                  </Link>
                </div>
              </div>

              <h1>Exploration :</h1>
              <small>Choisissez le lieux que vous voulez explorer.</small>

              <div className="location-container">
                <Link to={'/map/path'} class="category">TRAJET</Link>
                <Link to={'/map/hopitals'} class="category">HÔPITAL</Link>
                <Link to={'/map/path'} class="category">SÉCURITÉ</Link>
                <span to={'/map/ecole'} class="category">ÉCOLE</span>
                <span to={'/map/pharmacie'} class="category">PHARMACIE</span>
                <span to={'/map/path'} class="category">BOUTIQUE</span>
                <span to={'/map/path'} class="category">BÂTIMENT ADMINISTRATIF</span>
                <span to={'/map/path'} class="category">STATION ESSENCE</span>
                <span to={'/map/path'} class="category">CIMETIÈRE</span>
                <span to={'/map/path'} class="category">BAR</span>
                <span to={'/map/path'} class="category">SECOURS</span>
                <span to={'/map/path'} class="category">TOILETTE PUBLIC</span>
                <span to={'/map/path'} class="category">KIOSQUE</span>
                <span to={'/map/path'} class="category">HOTELS & RESATURANTS</span>
                <span to={'/map/casino'} class="category">CASINO</span>
                <span to={'/map/airport'} class="category">AÉROPORT</span>
                <span to={'/map/restaurant'} class="category">RESTAURANT</span>
                <span to={'/map/cyber'} class="category">CYBER CAFE</span>
              </div>

              <h1>Services :</h1>
              <small>Choisissez le lieux que vou voulez explorer.</small>
              <div className="location-container">
                <span onClick={handleclickDialogMunicipale} class="category">
                  Municipales
                </span>
                <span class="category">Juridiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openDialog && (
        <div className="">
          <div className="back-drop"></div>
          <div className="dialog-municipales">
            <div className="Close" onClick={handleCloseDialogMunicipale}>
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Menu / Close_SM">
                  <path
                    id="Vector"
                    d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="bloc-choix-municipales">
              {Municipales.map((municipale, index) => (
                <div className="card-maper" key={index}>
                  <CardMunicipales
                    img={municipale.image}
                    title={municipale.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpeedLink;
