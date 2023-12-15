import React from "react";
import "./cardNotification.scss";
const CardNotification = ({
  index,
  title,
  description,
  content,
  handleClose,
}) => {
  return (
    <div className="CardNotification-bloc">
      <p className="Titre">{title}</p>
      <hr />
      <p>{description}</p>
      <p>{content}</p>

      <div className="btn-close">
        <button onClick={() => handleClose(index)}>x</button>
      </div>
    </div>
  );
};

export default CardNotification;
