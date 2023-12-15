import React from "react";
import Spline from "@splinetool/react-spline";

import "./mainExplore.scss";

function MainExplore() {
  return (
    <div className="middle-explore">
      <div className="exploreTitle">
        <h1>Bienvenue sur Athènes </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          odit, vel minus libero quam voluptatibus ad{" "}
        </p>

        <div className="guide-navigation">
          <div className="direction up">
            Z <span>haut</span>
          </div>
          <div className="horizontal">
            <div className="direction left">
              Q <span>Gauche</span>
            </div>
            <div className="direction right">
              D <span>Droite</span>
            </div>
          </div>

          <div className="direction down">
            S <span>Bas</span>
          </div>
        </div>
      </div>

      <div className="cityExplore">
        {/* <h1>Test</h1> */}

        <Spline scene="https://prod.spline.design/kmzDCfKfrGw8amdS/scene.splinecode" />
      </div>
    </div>
  );
}

export default MainExplore;
