import React, { useState } from "react"
import { Link, NavLink } from 'react-router-dom';

// Style importation
import './mainfooter.scss'

// Assets Importaion
// import logo from '../../../../assets/image/logo/LogoSiriusWhite.png';
// componets importation

function MainFooter() {
  const [termModal, setTermModal] = useState(false);
  const [politicModal, setPoliticModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);

  const openTermModal = () => {
    setTermModal(true);
  };

  const closeTermModal = () => {
    setTermModal(false);
  };

  const openPoliticModal = () => {
    setPoliticModal(true);
  };

  const closePoliticTermModal = () => {
    setPoliticModal(false);
  };

  const openVideo = () => {
    setVideoModal(true);
  };

  const closevideo = () => {
    setVideoModal(false);
  };

  return (
    <div className='foot_container'>
        <div className='foot_content'>
            <div className='leftside'>
              {/* <img src={logo} alt="user-icon" width='200px' /> */}
              <p> plateforme d'apprentissage en ligne révolutionnaire mettant l'accent sur l'accès à des ressources éducatives de haute qualité et une facilité d'utilisation inégalée.</p>
              
            </div>

            <div className='rightside'>
              <div className='part'>
                  <h5>Raccourcis</h5>
                  <div className='raccourci'>
                    <a href='#banner' className={"rac_btn"}>Accueil</a>
                    <a href='#about' className={"rac_btn"}>A propos</a>
                    <a href='#solution' className={"rac_btn"}>Solutions</a>
                    <a href='#school' className={"rac_btn"}>Ecoles</a>
                    <a href='#contact' className={"rac_btn"}>Contact</a>
                  </div>
                  
              </div>

              <div className='part'>
              <h5>Accès</h5>
                  <div className='raccourci'>
                    <Link to={"/login/signup"} className={"rac_btn"}>S'inscrire</Link>
                    <Link to={"/login"} className={"rac_btn"}>Se connecter</Link>
                  </div>

                <h5>Utiles</h5>
                  <div className='raccourci'>
                    <Link to={"/dashboard/course"} className={"rac_btn"}>Cours</Link>
                    <Link to={"/dashboard/rpofile"} className={"rac_btn"}>profile</Link>
                    <Link to={"/dashboard/bag"} className={"rac_btn"}>Cartable</Link>
                  </div>
                  
              </div>

              <div className='part'>
                <h5>Extensions</h5>
                    <div className='raccourci'>
                      <Link to={"/librairies/intro"}  className={"rac_btn"}>Bibliothèque numérique</Link>
                      <Link to={"/game/studio"} className={"rac_btn"}>Espace Jeux</Link>
                    </div>
                <h5>Utiles</h5>
                    <div className='raccourci'>
                      <Link to={"/help"} className={"rac_btn"}>Aide</Link>
                      <span className={"rac_btn"} onClick={() => openVideo()} >Video presentation</span>
                    </div>
              </div>
            </div>
        </div>

        <div className="foot-shorcut">

        </div>

        <div className="foot-bottom">
          <small className='jurid_message'>copyright©2023 Sirius. Devellopé par Supernova Team</small>
          <div className="politic-link">
            <span onClick={()=> openTermModal()} className='juridic-btn'>Termes et conditions d'utilisations</span>
            <span onClick={()=> openPoliticModal()}  className='juridic-btn'>politique de confidentialité</span>
          </div>
        </div>
    </div>
  )
} 

export default MainFooter