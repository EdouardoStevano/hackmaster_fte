import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
import SpeechTotexte from "../../../../components/speechtotexte/SpeechTotexte";

import data from './data.json';
import "./exploreHeader.scss";

import LogoIcon from "/supericon.png";
import CardNotification from "./content/card/CardNotification";


import avatar from '../../../../assets/branding/img/400x500/img27.jpg'

function ExploreHeader() {
  const [viewNotification, setViewNotification] = useState(false);
  const [viewAssistant, setViewAssistant] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
;

  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  // const decodedToken = TokenDecoder();

  const handleSearch = (value) => {
    setSearchValue(value);
    const selectedSuggestion = data.find((item) => item.name === value);
    if (selectedSuggestion) {
      navigate.push(`/map/${selectedSuggestion.route}`);
    }
  };

  const logOut = async() =>{
    const isConfirm = await Swal.fire({
        title: 'Deconnexion',
        text: "Etes-vous sur de vouloir vous deconnecter?",
        icon: 'info',
        allowEnterKey: true,
        customClass:{
            container: 'swalModal'
        },
        showCancelButton: true,
        confirmButtonColor: '#439F47',
        cancelButtonColor: '#df0b0b',
        focusCancel:true,
        showLoaderOnConfirm: true,
        confirmButtonText: 'Oui, je confirme!',
        cancelButtonText: 'annuler'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }else{
        localStorage.removeItem('token')
        localStorage.removeItem('urlToAccess')
        Swal.fire({
            text: 'Déconnexion effectuée. Nous espérons vous revoir bientôt !',
            icon: 'info',
            allowEnterKey: true,
            color: '#fff',
            customClass:{
                container: 'swalModal'
            },
            background:'#444',
          })
          setTimeout(() => {
            Swal.close();
          }, 2000);
        navigate('/login')
      }

}

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

            <input
              type="text"
              placeholder="Recherhe"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)} 
            />
            {/* Affichage des suggestions s'il y a du texte dans la recherche */}
            {searchValue && (
              <div className="suggestions">
                {data
                  .filter((suggestion) =>
                    suggestion.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <Link
                      key={index}
                      to={`/map/${suggestion.route}`}
                      onClick={() => handleSearch(suggestion.name)}
                      className="suggestion-item"
                    >
                      {suggestion.name}
                    </Link>
                  ))}
                {data.filter((suggestion) =>
                  suggestion.name.toLowerCase().includes(searchValue.toLowerCase())
                ).length === 0 && (
                  <p className="no-results">Aucun résultat trouvé</p>
                )}
              </div>
            )}
            <button>Recherche</button>
          </div>
        </div>

        <div className="right-header">
          <div className="shorcut">
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
            {/* <div
            className="avatar"
              style={{
                backgroundImage: `url(../../../../assets/branding/img/400x500/img27.jpg)`,
                backgroundSize: `cover`
            }}
            ></div> */}
            <img src={avatar} alt="" className="avatar" />
            <div className="info">
              <small>Edouardo Stevano</small>
              <small>Citoyen</small>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 w-px20 marge-left-px10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>


            {viewProfile && (
              <div className="drop-downAvatar">
                <Link to={'/dashboard'} className='user-rac'>Tableau de bord</Link>
                <p className='user-rac' onClick={logOut}>Deconnection</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHeader;
