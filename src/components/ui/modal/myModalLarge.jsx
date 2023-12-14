import React from 'react';
// IMPORTAION CSS (STYLE)
import './_modal.css'; 

const ModalLarge = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal large">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default ModalLarge;
