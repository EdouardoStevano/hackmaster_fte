import React from "react";
import Spline from "@splinetool/react-spline";

import "./mainExplore.scss";

function MainExplore() {
  return (
    <div className="middle-explore">
      <div className="exploreTitle">
        <h1>Bienvenue sur RealIT </h1>
        <p>
          Vous pouvez naviguer à travers notre RealCity et clique sur le destination que vous voulez. Ci dessous les commandes de navigation.{""}
        </p>

        <div className="guide-navigation">
          <div className="direction up">
            w <span>haut</span>
          </div>
          <div className="horizontal">
            <div className="direction left">
              A <span>Gauche</span>
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

        {/* <Spline scene="https://prod.spline.design/kmzDCfKfrGw8amdS/scene.splinecode" /> */}
      </div>
    </div>
  );
}

export default MainExplore;
