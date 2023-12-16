import React from "react";

import "./demmandeGennnerer.scss";
const DemmandeGennerer = ({
  nom,
  prenom,
  age,
  adresse,
  sexe,
  date,
  lieuDeNaissance,
  imgSignature,
}) => {
  return (
    <div className="content-demmmande">
      <h3>Demmande d'autorisation</h3>

      <div className="header-demmande">
        <p>Recapitulatif de votre saisie</p>
      </div>

      <div className="body-demmande">
        <p>nom : {nom} </p>

        <p>prenom : {prenom}</p>
        <p>age : {age}</p>
        <p>date de naissance : {date}</p>
        <p>lieu de naissance : {lieuDeNaissance}</p>
        <p>Adresse : {adresse}</p>
        <p>sexe : {sexe}</p>
      </div>

      <div className="footer-demmande">
        <p>j'ateste sur l'honneur que les information fournies sont exactes</p>

        <div className="signature-bloc">
          <p>Signature</p>

          <div className="signature-container">
            {imgSignature && <img src={imgSignature} alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemmandeGennerer;
