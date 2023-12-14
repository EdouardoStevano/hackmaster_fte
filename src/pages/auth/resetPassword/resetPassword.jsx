import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// helpers import
import { getBaseUrl } from '@utils/helpers/baseUrl';

import './__resetPassword.scss'

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const baseUrl = getBaseUrl();

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/password/email`, {
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        const data =response.data;
        toast.info(data.message)
        setShowVerification(true);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
      });
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/password/verify-code`, {
        email: email,
        code: code,
      })
      .then((response) => {
        console.log(response.data); 
        setShowResetForm(true);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Le code de vérification est incorrect. Veuillez réessayer.');
      });
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseUrl}/password/reset`, {
        email: email,
        code: code,
        password: password,
        password_confirmation: confirmPassword,
      })
      .then((response) => {
        console.log(response.data); 
        // Réinitialisation réussie, rediriger ou afficher un message de succès
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Une erreur s\'est produite. Veuillez réessayer.');
      });
  };

  return (
    <div className="resetPassword_container">
      {!showVerification && !showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Réinitialisation de mot de passe</h2>
          <small>Entrer votre Adresse email afin qu nous puissons vous envoyer une code de verification, qui est une code d'accès pour pouvoir reinitialiser votre mot de passe</small>
          <form onSubmit={handleEmailSubmit}>
            <div className="email_verify">
              <input
                type="text"
                placeholder="Entrez votre adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword-btn">
              Envoyer
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
        </div>
        </div>
      )}

      {showVerification && !showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Vérification du code</h2>
          <form onSubmit={handleVerificationSubmit}>
            <div className="email_verify">
              <input
                type="text"
                placeholder="Entrez le code de vérification"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword_btn">
              Valider
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
          </div>
        </div>
      )}

      {showResetForm && (
        <div className="resetPassword_item">
          <div>
          <h2 className="resetPassword_title">Changement de mot de passe</h2>
          <form onSubmit={handleResetSubmit}>
            <div className="email_verify">
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="email_verify">
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="resetPassword_btn">
              Changer le mot de passe
            </button>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
          </form>
        </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;