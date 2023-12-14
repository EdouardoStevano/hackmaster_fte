import React, { useState as state} from 'react'
import { Link } from 'react-router-dom';

// styles importation
import './__signUpStyle.scss'

// Assets importation
import mailIcon from '@assets/icon/png/icons8_email_sign_60px_1.png'
import passwordIcon from '@assets/icon/png/icons8_good_pincode_60px.png'
import doneIcon from '@assets/icon/png/icons8_ok_60px.png'
import cancelIcon from '@assets/icon/png/icons8_cancel_60px.png'
import loadIcon from '@assets/icon/png/icons8_stream_60px.png'
import SignUpImage from '@assets/branding/SignUp_Image.png'

function SignUp() {
  const [inputText, setInputText] = state('');
  const [selectedEmoji, setSelectedEmoji] = state(null);
  const [text, setText] = state('');
  const [isValid, setIsValid] = state(false);
  const [isLoading, setIsLoading] = state(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setInputText((prevInputText) => prevInputText + emoji.emoji);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    setIsLoading(true);

    setTimeout(() => {
      const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      setIsValid(emailPattern.test(inputText));

      setIsLoading(false);
    }, 1000); 
  };

  const handleCancelClick = () => {
    setText('');
  };

  return (
    <div className='SignUp2 MiddleContent'>
      <div className="signIn-right">
        <img src={SignUpImage} alt={"SignUp Illustration"} width={'500px'}/>
      </div>

      <div className="signIn-left">
        <h1>Inscrivez vous</h1>
        <span>Faite partie de la communauté!</span>
        <p>La porte vers l'apprentissage en ligne de demain. Connectez-vous pour explorer un univers de connaissances infini.</p>

        <div className="signForm-overflow">
        <div className="signForm">
            <div className="inputform">
                <div className="input-content">
                  <img src={mailIcon} alt="email icon" width={"20px"}/>
                  <input type="text" value={text} placeholder='Adresse email' onChange={handleChange}/>

                  {isLoading && (
                  <img
                    src={loadIcon}
                    alt="Indicator"
                    width="30px"
                    className="authLoadIcon"
                  />
                )}
                {text && !isLoading && (
                  isValid ? (
                    <img
                      src={doneIcon}
                      alt="Indicator"
                      width="30px"
                    />
                  ) : (
                    <img
                      src={cancelIcon}
                      alt="Indicator"
                      width="30px"
                      onClick={handleCancelClick}
                    />
                  )
                )}
                              
                </div>
                
            </div>

            <div className="inputform">
                <div className="input-content">
                  <img src={mailIcon} alt="email icon" width={"20px"}/>
                  <input type="text" value={text} placeholder='Adresse email' onChange={handleChange}/>

                  {isLoading && (
                  <img
                    src={loadIcon}
                    alt="Indicator"
                    width="30px"
                    className="authLoadIcon"
                    data-tip="Chargement en cours"
                    data-for="loadingTooltip"
                  />
                )}
                {text && !isLoading && (
                  isValid ? (
                    <img
                      src={doneIcon}
                      alt="Indicator"
                      width="30px"
                      data-tip="Adresse e-mail valide"
                      data-for="validTooltip"
                    />
                  ) : (
                    <img
                      src={cancelIcon}
                      alt="Indicator"
                      width="30px"
                      onClick={handleCancelClick}
                      data-tip="Adresse e-mail invalide"
                      data-for="invalidTooltip"
                    />
                  )
                )}
                              
                </div>
                
            </div>
            <div className="inputform">
                <div className="input-content">
                  <img src={passwordIcon} alt="password icon" width={"20px"}/>
                  <input type="password" placeholder='Mot de passe'/>
                  {/* <img src={cancelIcon} alt="Indicator" width={"20px"}/> */}
                </div>
            </div>
        </div>
        </div>

        <div className="btn-signForm">
          <div className="remreber-check">
            <input type="checkbox" name="remenber" id="remenber" />
            <label htmlFor="remenber">J'accepte les termes et conditions d'utilisations ainsi que le politique de confidentialité</label>
          </div>
        </div>

        <div className="btn-group">
          <Link to="/login" className='btn-signUp'>j'ai déjà un compte</Link>
          <button type="button" className='btn-login'>s'inscrire</button>
        </div>
        
      </div>
    </div>
  )
}

export default SignUp