//librairies
import {React, useState as state} from 'react'
import { Link, useNavigate as navigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import { getBaseUrl } from '../../../utils/helpers/baseUrl';

import './__signUp.css'

//assets
import done_icon from '../../../assets/image/icon/svg/done_icon.svg'
import lock_icon from '../../../assets/image/icon/png/icons8_password_48px.png'
import Illustration_Sign from '../../../assets/image/illustration/Illustration_SignUp.png'
import usericon from '../../../assets/image/icon/png/userColoreIcon.png'
import showeye from '../../../assets/image/icon/svg/showEye.svg'
import hideeye from '../../../assets/image/icon/svg/hideEye.svg'
import loadingicon from '../../../assets/image/icon/svg/loadingIcon.svg'
import phoneIcon from '../../../assets/image/icon/png/phone_icon.png'
import mailIcon from '../../../assets/image/icon/png/emailIcon.png'
import sexeIcon from '../../../assets/image/icon/png/sexe.png'
import birthIcon from '../../../assets/image/icon/png/birhday.png'
import addressIcon from '../../../assets/image/icon/png/address.png'


//components

function signUpPage() {
  /* states */
  const [userSeachLoad, setUserSearchLoad] = state(false);
  const [showPass, setShowPass] = state(false);
  const [showConfirmPass, setConfirmShowPass] = state(false);
  const [errorMessage, setErrorMessage] = state('');
  const [resultat, setResultat] = state('');
  
  const [username, setUsername] = state('');
  const [userlastname, setLastname] = state('');
  const [userEmail, setUserEmail] = state('');
  const [userpassword, setUserpassword] = state('');
  const [Confirmpassword, setConfirmpassword] = state('');
  const [telephone, setTelephone] = state('');
  const [validationError, setValidationError] = state()
  const [dateNaiss, setDateNaiss] = state('');
  const [sexe, setSexe] = state();
  const [adresse, setAdresse] = state();
  const [Age, setAge] = state();

  const [passwordError, setPasswordError] = state('');

  const nav = navigate()

  const baseUrl = getBaseUrl();

  const playErrorSound = () => {
    const audioElement = document.getElementById('errorSound');
    audioElement.play();
  };

  const storeData = async (event) => {
    event.preventDefault();

    if (userpassword !== Confirmpassword) {
      // setPasswordError('Les mots de passe ne correspondent pas');
      toast.error('Les mots de passe ne correspondent pas');
      playErrorSound();
      return;
    }
    await axios.post(`${baseUrl}/auth/patient/register?email=${userEmail}&password=${userpassword}&telephone=${telephone}&nom_patient=${username}&prenom_patient=${userlastname}&sexe=${sexe}&age=${Age}&adresse=${adresse}`).then(({ data }) => {

      toast.error(data.message);
      console.log(data); 
      localStorage.setItem('token', data.token)
      nav("/newuser")
    }).catch(({ response }) => {
      if (response.status === 422) {
        const errors = response.data.errors;
        const validationErrors = Object.keys(errors).reduce((acc, field) => {
          acc[field] = errors[field].map(error => error.message);
          return acc;
        }, {});
        setValidationError(validationErrors);
        toast.error(validationErrors);
      } else {
        console.log(response.data);
        toast.error(response.data.message);
        // Gérer les autres erreurs ici
      }
    })
  }

  const UserSearchIndicator = () => {
    if (userSeachLoad) {
        return (
          <img src={loadingicon} alt="done-icon" className='round-spinners' width='30px' />
        )
    }
    if (userSeachLoad === false) {
        return (
          <img src={done_icon} alt="done-icon" width='40px' />
        )
    }
  }

  return (
        <div className='signUp_content'>
           <ToastContainer
              position='top-right'
              theme='colored' 
              pauseOnHover={false}
              rtl={false}
            />  
            <audio id="errorSound">
              <source src="../../../assets/audio/Windows Unlock.wav" type="audio/wav" />
            </audio>
          <div className='signUp_content-left'>
            <img src={Illustration_Sign} alt='EMIT logo' className='Illustration_Sign' width='500px' />
          </div>

          <div className='signUp_content-right'>
            <span className='signUp-title'>Inscrivez-vous</span>
            <span className='signUp-minititle'> Dès maintenant</span>
            <p className='signUp_content-right-text'>Rejoignez @Dokoterako, notre plateforme de gestion de rendez-vous et simplifiez votre emploi du temps dès aujourd'hui. Inscrivez-vous sur notre plateforme de gestion de rendez-vous !</p>

            <form className={"signUp_content-form"} onSubmit={storeData}>
              <div className="input-content">
                <div className="input-section">
                    <img src={usericon} alt="user-icon" width='20px' />
                    <input
                      type="text"
                      name={"name"}
                      placeholder={"Nom / Anarana"}
                      value={username}
                      onChange={(e)=> setUsername(e.target.value)}
                      required/>
                </div>


                <div className="input-section">
                    <img src={usericon} alt="user-icon" width='20px' />
                    <input
                      type="text"
                      name={"lastname"}
                      placeholder={"Prenom / Fanampin\'anarana"}
                      value={userlastname}
                      onChange={(e)=> setLastname(e.target.value)}
                      required/>
                </div>

                <div className="input-section">
                    <img src={mailIcon} alt="user-icon" width='20px' />
                    <input
                      type="email"
                      placeholder={"Adresse email / Adiresy Mailaka"}
                      value={userEmail}
                      onChange={(e)=> setUserEmail(e.target.value)}
                      required/>
                </div>

                <div className="input-section">
                    <img src={sexeIcon} alt="user-icon" width='20px' />
                       <select
                       id="sexe"
                       name="sexe"
                       value={sexe}
                        onChange={(e)=> setSexe(e.target.value)}
                       required>
                        <option value="">Sexe / lahy na vavy</option>
                        <option value="M">Masculin / lahy</option>
                        <option value="F">Féminin / vavy</option>
                      </select>
                </div>

                
                <div className="input-section small">
                    <img src={usericon} alt="user-icon" width='20px' />
                    <input
                      type="number"
                      min={'0'}
                      placeholder={"Age / Taona"}
                      value={Age}
                      onChange={(e)=> setAge(e.target.value)}
                      required/>
                </div>

                <div className="input-section large">
                    <img src={phoneIcon} alt="user-icon" width='20px' />
                    <input
                      type="tel"
                      placeholder={"Numéro télephone / laharan-telefaona"}
                      value={telephone}
                      onChange={(e)=> setTelephone(e.target.value)}
                      required/>
                </div>
                <br />


                <div className="input-section">
                    <img src={lock_icon} alt="user-icon" width='20px' />
                    <input 
                      type={showPass ? "text" : "password"}
                      name={"password"}
                      placeholder={"Mot de passe / Teny miafina"} 
                      value={userpassword}
                      onChange={(e)=> setUserpassword(e.target.value)}
                      required/>
                    <img src={showPass ? showeye : hideeye} alt="done-icon" width='35px' className='showPassword_icon'
                     onClick={() => setShowPass(!showPass)} />
                </div>
                <br />

                <div className="input-section">
                    <img src={lock_icon} alt="user-icon" width='20px' />
                    <input 
                      type={showConfirmPass ? "text" : "password"}
                      name={"password"}
                      placeholder={"confirmer mot de passe / Hamarino ny teny miafina"}
                      value={Confirmpassword}
                      onChange={(e)=> setConfirmpassword(e.target.value)}
                      required
                      />
                    <img src={showConfirmPass ? showeye : hideeye} alt="done-icon" width='35px' className='showPassword_icon'
                     onClick={() => setConfirmShowPass(!showConfirmPass)} />
                </div>
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                <br />
              </div>

                <div className={"tools-section"}>
                  <span>
                    <input type={'checkbox'} name={'rember_me'} id={'rember_me'} required/>
                    {/* <label for={'rember_me'}>j'accepte les <span id='blueLink'>termes & conditions de utilisation </span> ainsi que le <span id='blueLink'>politique de confidentialité</span></label> */}
                    <label for={'rember_me'}>je confirme la création de mon <span id='blueLink'>ce compte</span> en tant que <span id='blueLink'>patient</span>.</label>
                  </span>
                </div>
                    
                <div className="submit-section">
                  <Link to={"/authentification"} className={"submit_section_NoAccount"}>J'ai déjà un compte</Link>
                  <button className={"ge-btn btn-hight submit-button"} type={"submit"}>S'inscrire</button>
                </div>
            </form>

          </div>
        </div>
  )
}

export default signUpPage
