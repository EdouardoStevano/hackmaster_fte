import { Link } from "react-router-dom";

import "./exploreHeader.scss";
import { useState } from "react";
import SpeechTotexte from "../../../../components/speechtotexte/SpeechTotexte";

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
  return (
    <div className="explore-header flex-space-between">
      <div className="w-p95 pad-top-px20 pad-bottom-px20">
        <div className="left-head">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                clipRule="evenodd"
              />
            </svg>
            <span>Citadel.</span>
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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, vel illo rem delectus repudiandae laboriosam! Sunt
                    quo vitae commodi iusto veniam, optio omnis et ut minus
                    alias, fugiat magnam corrupti hic facilis ab mollitia error
                    facere, eum ipsam? Asperiores maiores laudantium, temporibus
                    magni eveniet vel rem? Ut eos fugit quo?
                  </p>
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
