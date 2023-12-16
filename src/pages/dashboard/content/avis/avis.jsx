import React from "react";
import "./avis.scss";
import img1 from "../../../../assets/branding/img/480x320/jan-huber-1XGxOs10UL0-unsplash.jpg";
import img2 from "../../../../assets/branding/img/480x320/kelvin-zyteng-dH0g9xGd33o-unsplash.jpg";
const Avis = () => {
  return (
    <div className="avis-user-bloc">
      <div className="Article-Publier">
        <h1>Activité recent</h1>
        <div className="card-article">
          <p>Annonces Recrutement</p>
          <img src={img1} alt="" />
        </div>
        <div className="card-article">
          <p>Nouveux Produit Lancer</p>
          <img src={img2} alt="" />
        </div>
        <div className="card-article">
          <p>Recherche</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="Article-Publier">
        <h1>Suggestion </h1>
        <div className="card-article">
          <p>Boutique One a Lancer un Nouveux Produit</p>
        </div>
        <div className="card-article">
          <p>Evenement Tech </p>
        </div>
      </div>
    </div>
  );
};

export default Avis;
