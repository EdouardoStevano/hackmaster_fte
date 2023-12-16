import React, { useState, useEffect } from 'react';
import './didacticiel.scss';

function Didactiel() {
  const [showDidacticiel, setShowDidacticiel] = useState(true);

  const checkuser = () => {
    if (localStorage.getItem('newExplorer') === null) {
      localStorage.setItem('newExplorer', 'true'); // Stockez en tant que chaîne de caractères
    }
  };

  useEffect(() => {
    checkuser();
  }, []);

  const closeDidacticiel = () => {
    setShowDidacticiel(false);
    localStorage.setItem('newExplorer', 'false'); // Stockez en tant que chaîne de caractères
  };
  
  return (
    <>
      {showDidacticiel && localStorage.getItem('newExplorer') === 'true' && (
        <div className='didactiel-container'>
          <div className="intro-didactiel">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 close-icon" onClick={closeDidacticiel}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h1>DIDACTIEL</h1>
            <p>"Bienvenue sur RealIT, votre guide vers la ville intelligente ! Avec notre plateforme RealIT, découvrez comment transformer votre ville en un écosystème urbain moderne et connecté.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Didactiel;
