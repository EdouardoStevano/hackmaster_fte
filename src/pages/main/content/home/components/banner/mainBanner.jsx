import React, { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { Link } from "react-router-dom";

// Styles importation
import "./mainBanner.scss";

// Assets importation
import box3d_Float from '@assets/branding/Illustration/3DFloatRound.png'
import SeCool_Star from '@assets/branding/Illustration/EpicRound1.png'
import BannerImage from '@assets/branding/Section_Image1.png'
import RoundStyle from '@assets/branding/RoundText-2.png'
import RoundStyle2 from '@assets/branding/RoundText.png'
import LineStyle from '@assets/branding/Line.png'

function MainBanner() {
  const animateRef = useRef();

  useEffect(() => {
    const bannerAnimate = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(".fade-component", {
        opacity: 1,
        delay: 0,
        ease:"power4.inOut",
        y: -40,
        duration: 0.5,
        stagger: 0.3,
      });
    });
  }, animateRef);

  return (
    <div className="super-global-container banner" ref={animateRef}>
      <div className="super-container-p80">
        {/* <div className="side-50">
          <div className="title-content">
            <div className="line1 fade-component">
              <h1 className="line1-text">Naviguez à travèrs</h1>
              
            </div>
            <div className="line2 fade-component">
              <h1>
                les <span>meilleures</span>
                <div className="border-radius-px100 floatBox">
                  <img src={box3d_Float} alt="3D floating box" width={"125px"} />
                </div>
              
              </h1>
              
            </div>

            <div className="end-line fade-component">
              <h1>écoles.</h1>
              <span>
                <img src={SeCool_Star} alt="3D floating box" width={"40px"} />
              </span>
            </div>

            <p className="fade-component">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quaerat omnis in fugit. Molestiae, laboriosam quo, minima at dolor
              iste, pariatur aliquam dolorum eum{" "}
            </p>

            <div className="form-banner flex box-shadow1 fade-component">
              <input
                type="text"
                placeholder="exemple: informatique, agronimie,..."
                name="search"
                id="searc"
                className="w-p70"
              />
              <button className="w-p30 ">Decouvrir</button>
            </div>
          </div>
          <h1></h1>
        </div>
        <div className="side-50 spline">
          <img src={BannerImage} alt="" width={'450px'} className="fade-component" />
        </div> */}

        <div className="w-p100">
          <small className="small-title">Connectons le présent au futur</small>
          <div className="lines-1">
              <h1>Transformons <img src={RoundStyle} alt="Round Style" width={'120px'}/>  notre ville</h1>
          </div>
          <div className="lines-2">
                <h1>en un</h1> <span>écosystème<img src={LineStyle} alt="Round Style" width={'400px'}/></span> <h1>urbain</h1>
          </div>
          <div className="lines-3">
          <h1><span>intelligent</span>pour tous. <img src={RoundStyle2} alt="Round Style" width={'60px'}/> </h1>
          </div>
          <p>Nous cherchons à rendre nos villes plus intelligentes, accessibles à tous. En utilisant des technologies novatrices, nous visons à améliorer la vie urbaine pour chacun, en créant des environnements durables et connectés.</p>

          <div className="btn-group">
            <a href="#presentation" className="read-more">en savoir plus</a>
            <Link to={"/explore"} className="begin">
              Commencer
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
