import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './_aiNavigation.css'

// Importation de ressources
import ClosePanel from '../../assets/image/icon/png/icons8_delete_48px.png'
import microOff from '../../assets/image/icon/png/icons8_mute_unmute_26px.png'
import microOn from '../../assets/image/icon/png/icons8_microphone_26px.png'


function AiNavigation() {
    const [isVisible, setIsVisible] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState(null);
    const [isStarted, setIsStarted] = useState(false);
    const [activeAi, setActiveAi] = useState(false);


    const handleClose = () => {
        setIsVisible(false);
      };

      const addGreaterThanSigns = (text) => {
        const words = text.split(' ');

        const newText = words.map(word => `${word} >`).join(' ');

        return newText;
    };

      const commands = [
          {
              command: ["aller à *", "ouvrir *", "*"],
              callback: (redirectPage) => setRedirectUrl(redirectPage),
          }
      ];
  
      const { transcript, listening  } = useSpeechRecognition({ commands });
  
      const pages = ["traduction", "galerie", "login", "inscription", "authentification", "accueil", "retour"];
      const urls = {
          traduction: "/traduction",
          galerie: "/gallery",
          login: "/login",
          inscription: "/login/signup",
          authentification: "/login",
          accueil: "/",
          retour: "../"
      };
  
  
      if (!SpeechRecognition.browserSupportsSpeechRecognition) {
          return null;
      }

      
      const handleStart = () => {
        SpeechRecognition.startListening({ continuous: true });
        setIsStarted(true);
      };
    
      const handleStop = () => {
        SpeechRecognition.stopListening();
        SpeechRecognition.abortListening();
        setIsStarted(false);
      };
  
      let redirect = "";
  
      if (redirectUrl) {
          if (pages.includes(redirectUrl)) {
              redirect = <Navigate to={urls[redirectUrl]} />;
          } else {
              redirect = <p>Introuvable</p>;
          }
      }

      const disable_ainavigation= () =>{
        localStorage.setItem('ainavigation', "noactive");
        setActiveAi(false);
        window.location.reload();
        }

      
  return (
    (localStorage.getItem('ainavigation')==="active") && (
    <div className={`aiNavigation`}>
        {listening && (
        <div class="demo">
            <div class="blur-loader">
                <span class="blur-loader__dot"></span>
                <span class="blur-loader__dot"></span>
                <span class="blur-loader__dot"></span>
            </div>
        </div>
        )}

        <div className="close-button" onClick={handleClose}>
            <img src={ClosePanel} alt="close panel" width={'25px'} onClick={()=>disable_ainavigation()}/>
        </div>

        {!listening && (
                <div className='content'>
                        <div className='activeMicro' onClick={() => SpeechRecognition.startListening({ continuous: true })}>
                            <img src={microOff} alt="micro" width={'30px'}/>
                            <span>Desactivé</span>
                        </div>
                        <input type="text" placeholder={isStarted ? 'Dites quelque chose' : 'Mentione votre destination...' } readOnly value={addGreaterThanSigns(transcript)}/>
                </div>
        )}
        {listening && (
                <div className='content'>
            
                <div className='activeMicro' onClick={handleStop}>
                    <img src={microOn} alt="micro" width={'30px'}/>
                    <span>Activé</span>
                </div>
                <input className={'aiNavigation_input'} type="text" placeholder={isStarted ? 'Dites quelque chose' : 'Mentione votre destination...' } readOnly value={addGreaterThanSigns(transcript)}/>
                {redirect &&
                    <p className='errorPage'>{redirect}</p>
                }
            </div> 
         )}

    </div>
    )
  )
}

export default AiNavigation