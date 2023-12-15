import { Link } from "react-router-dom";

import "./exploreHeader.scss";
import { useState } from "react";
import SpeechTotexte from "../../../../components/speechtotexte/SpeechTotexte";
import LogoIcon from "/supericon.png";
import CardNotification from "./content/card/CardNotification";

function ExploreHeader() {
  const [viewNotification, setViewNotification] = useState(false);
  const [viewAssistant, setViewAssistant] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  const handleclickViewNotification = () => {
    setViewNotification(!viewNotification);
  };
  const handleclickAssistantVocale = () => {
    setViewAssistant(!viewAssistant);
  };
  const handleClose = () => {
    setViewAssistant(false);
  };

  const handleClickAvatar = () => {
    setViewProfile(!viewProfile);
  };

  const [dataNotification, setDataNotification] = useState([
    {
      titre: "Meteo",
      description: "Temps Fort",
      contenu: "faite attention veuillez rentrez chez vous",
    },
    {
      titre: "Election",
      description: "Temps Fort",
      contenu: "faite attention veuillez rentrez chez vous",
    },
    {
      titre: "Boutique ouvert",
      description: "Temps Fort",
      contenu: "faite attention veuillez rentrez chez vous",
    },
  ]);

  const handlecloseNotif = (index) => {
    console.log(index);
    const datacopy = [...dataNotification];

    const dataCopyFIltrer = datacopy.filter(
      (data) => index !== datacopy.indexOf(data)
    );

    console.log(dataCopyFIltrer);
    setDataNotification(dataCopyFIltrer);
  };
  return (
    <div className="explore-header flex-space-between">
      <div className="w-p95 pad-top-px20 pad-bottom-px20">
        <div className="left-head">
          <div className="logo">
            <img src={LogoIcon} alt="logo" className="marge-right-px10" />
            <span>RealIT.</span>
          </div>

          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input type="text" placeholder="Recherhe" />
            <button>Recherche</button>
          </div>
        </div>

        <div className="right-header">
          <div className="shorcut">
            <Link className="shorcut-link">Tableau de bord</Link>
            <Link className="shorcut-link">Actualités</Link>
            <Link className="shorcut-link">Jeux</Link>
          </div>

          <div className="icons">
            <div className="svg-container-explore">
              <div className="rounded"></div>
              <svg
                onClick={handleclickViewNotification}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{
                  backgroundColor: `${
                    viewNotification ? "var(--primaryColor)" : ""
                  }`,
                  border: "solid 2px rgba(245, 247, 250, 0)",
                }}
              >
                <path
                  onClick={handleclickAssistantVocale}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              {viewNotification && (
                <div className="notification-container">
                  <div>
                    {dataNotification.map((notif, index) => (
                      <div key={index}>
                        <CardNotification
                          handleClose={handlecloseNotif}
                          index={index}
                          title={notif.titre}
                          description={notif.description}
                          content={notif.contenu}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="svg-container-explore2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={handleclickAssistantVocale}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                />
              </svg>

              {viewAssistant && (
                <div className="voice-assistant">
                  <SpeechTotexte />
                  <div className="close" onClick={handleClose}>
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="white" />
                      <path
                        d="M7 17L16.8995 7.10051"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 7.00001L16.8995 16.8995"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="account" onClick={handleClickAvatar}>
            <div className="avatar">Avatar</div>
            <div className="info">
              <small>MyName</small>
              <small>Citoyen simple</small>
            </div>
            <img src="" alt="" />

            {viewProfile && (
              <div className="drop-downAvatar">
                <p>Parametre</p>
                <p>Deconnection</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHeader;
