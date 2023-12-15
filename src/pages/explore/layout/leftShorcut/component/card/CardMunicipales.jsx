import React from "react";
import "./cardMunicipales.scss";

const CardMunicipales = ({img,title}) => {
  return (
    <div className="main-container-card-muni">
      <img src={img} />
      <p>{title}</p>
    </div>
  );
};

export default CardMunicipales;
