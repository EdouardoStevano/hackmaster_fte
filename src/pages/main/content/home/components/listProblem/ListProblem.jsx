import React from "react";
import "./ListProblem.scss";
import { Tilt } from "react-tilt";

import img21 from "../../../../../../assets/branding/img/pexels-oscar-portan-6837539.jpg";
import img5 from "../../../../../../assets/branding/img/pexels-energepiccom-313690.jpg";
import img3 from "../../../../../../assets/branding/img/400x500/img3.jpg";
import DrawCat from "../../../../../../components/DrawCat/DrawCat";
import SappinAnnimer from "../../../../../../components/sapinNoelAnnimer/SappinAnnimer";
const ListProblem = () => {

  const tiltOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="list-problem-bloc super-global-container">
      <div className="drawcat-contenaire">
        <DrawCat />
      </div>

      <div className="listpbm">
        <div className="section-list-problem  side-50">
        <Tilt options={tiltOptions}>
          <div className="img-container-list-problem" data-aos="flip-left" data-aos-duration="1000">
            <img src={img21} alt="" width={'450px'}/>
            <div className="card_behind"></div>
          </div>
          </Tilt>

          <div className="message-content-list-problem" data-aos="zoom-in-up" data-aos-delay="1100">
            <div className="content-sticky-list-problem">
              <div className="title">
                <h1><span>Problème de</span> mobilité : </h1>
                {/* <p>Se révèle à travers les défis persistants liés aux transports en commun, aux embouteillages incessants, aux zones à risque et aux caprices météorologiques.</p> */}
              </div>
              
              <p>
              Ces défis englobent les tracas liés aux transports en commun, aux embouteillages, aux zones à risque, ainsi qu'aux caprices des conditions météorologiques. De plus, ils nécessitent une vigilance constante face aux alertes concernant d'éventuelles situations d'urgence comme les routes barrées. Des technologies innovantes promettent de rendre nos villes plus résilientes, connectées et sécurisées, garantissant ainsi un avenir urbain plus fluide et plus sûr pour tous."
              </p>
            </div>
          </div>
        </div>
        <div className="section-list-problem">
        <Tilt options={tiltOptions}>
          <div className="img-container-list-problem" data-aos="flip-right" data-aos-duration="1000">
            <img src={img5} alt="" width={'450px'}/>
            <div className="card_behind"></div>
          </div>
          </Tilt>
          <div className="message-content-list-problem" data-aos="zoom-in-up" data-aos-delay="1100">
            <div className="content-sticky-list-problem">
              <div className="title">
              <h1><span>Problème de</span>  disponibilité</h1>
              </div>
              <p>
              L'accomplissement des tâches quotidiennes peut être sérieusement entravé par l'inaccessibilité de certains services à des moments particuliers, ajoutant ainsi une couche d'inégalité à l'accès pour tous, tout en étant également conditionné par la disponibilité individuelle..
              </p>
            </div>
          </div>
        </div>
        {/* <div className="section-list-problem">
          <div className="img-container-list-problem">
            <img src={img3} alt="" />
            <div className="card_behind"></div>
          </div>
          <div className="message-content-list-problem">
            <div className="content-sticky-list-problem">
              <h1>Problem 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nemo eveniet excepturi perspiciatis tempora tempore pariatur
                exercitationem temporibus odit quis necessitatibus non error
              </p>
            </div>
          </div>

          <div>
            <SappinAnnimer /> 
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ListProblem;
