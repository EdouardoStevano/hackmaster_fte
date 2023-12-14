import React from 'react';

// IMPORTAION CSS (STYLE)
import './_modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
