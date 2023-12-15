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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam voluptas autem ea, ducimus voluptates, omnis iste distinctio quam veniam accusantium veritatis minima sint non odit necessitatibus voluptate temporibus! Dolore, nobis.</p>
            <span>voir tutoriel</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Didactiel;
