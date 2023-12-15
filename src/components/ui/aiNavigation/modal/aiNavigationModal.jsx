import React, { useState as state, useEffect as effect} from 'react'
import './_aiNavigation.css'
import ClosePanel from '../../../assets/image/icon/png/icons8_delete_48px.png'

const AiNavigationModal= ({ isOpen, onClose}) => {
  const [activeAi, setActiveAi] = state(false);

  const closeModal = () => {
    onClose();
  };

  const disableScroll = () => {
    document.body.classList.add('modal-open');
  };

  const enableScroll = () => {
    document.body.classList.remove('modal-open');
  };

  effect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isOpen]);

  const active_ainavigation= () =>{
        localStorage.setItem('ainavigation', "active");
        setActiveAi(false);
        closeModal();
        window.location.reload();
  }

  return (
    isOpen && (
    <div className='aiNavigation-modal'>
      <div className="ain-modal-content">
          <img src={ClosePanel} className='aiNavigation-modal-close' alt="close ai modal" width={'25px'} onClick={closeModal}/>
          <div className="ain-modal-text"></div>

            <div className="ain-modal-text">
                <span>Notre priorité, rendre votre navigation facile</span>
                <h1>Faciliter votre navigation avec SpaceBot</h1>
                <p>la solution intelligente qui redéfinit votre expérience de navigation. Notre IA de pointe utilise la puissance de la reconnaissance vocale pour vous permettre de diriger votre voyage en utilisant simplement votre voix.</p>
                <button onClick={()=>active_ainavigation()}>Essayer dès maintenant</button>
            </div>
         </div>
    </div>
    )
  );
};

export default AiNavigationModal