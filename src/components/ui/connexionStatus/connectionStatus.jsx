import React, { useState, useEffect } from 'react';

// Importation des fichiers CSS
import './connectionStatus.scss';

function ConnectionStatus() {
  const [isOnline, setIsOnline] = useState(null);
  const [isVisible, setIsVisible] = useState(false);


  // Effet pour vérifier l'état de la connexion Internet et gérer l'affichage
  useEffect(() => {
    function checkOnlineStatus (){
      setIsOnline(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };
    
    function checkofflineStatus (){
      setIsOnline(false);
      setIsVisible(true);
    };


    // Écoute des événements de changement d'état de la connexion
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkofflineStatus);

    // Retirer les écouteurs d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkofflineStatus);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (

    <div className={`ConnectionStatus ${isOnline ? 'online' : 'offline'}`}>
      <div className="close-button" onClick={handleClose}>
        {/* <img src={ClosePanel} alt="close panel" /> */}
      </div>
      {isOnline === false || isOnline === null  ? (
      <div>
        <h1>😭 Pas d'accès Internet</h1>
        <p>Il semble que vous n'ayez actuellement pas accès à Internet. Nous vous recommandons de vérifier votre connexion Internet.</p>
      </div>
      ):(
        <div>
        <h1>😊 Connexion rétablie</h1>
        <p>Votre connexion internet est rétablie.</p>
        </div>
      )}
    </div>
  ) : null;
}

export default ConnectionStatus;