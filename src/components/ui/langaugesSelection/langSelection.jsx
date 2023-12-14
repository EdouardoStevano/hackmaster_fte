import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

import './_langSelection.scss'

// importations des ressources
import mgFlacg from '@assets/icon/svg/flags/1x1/mg.svg'
import frFlacg from '@assets/icon/svg/flags/1x1/fr.svg' 
import enFlacg from '@assets/icon/svg/flags/1x1/us.svg' 
import arrowCollapse from '@assets/icon/png/icons8_expand_arrow_15px_1.png'



function LangSelection() {
  const [DropdownOpen,isDropdownOpen] = useState('');
  const [selectedLanguage,isSelectedLanguage] = useState('');
  const { t, i18n} = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    isSelectedLanguage(selectedLanguage);
    i18n.changeLanguage(event.target.value);
  };

  const toggleDropdown = () => {
    isDropdownOpen(!DropdownOpen);
  };

  return (
     <div class="language-picker">
      <div className={`language-picker ${DropdownOpen ? 'open' : ''}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <div className="language-picker-toggle">
            <img src={localStorage.getItem("i18nextLng") === 'mg' ? mgFlacg : localStorage.getItem("i18nextLng") === 'fr' ? frFlacg : enFlacg} className='flagSelected' alt="Malagasy Flag" width={'14px'}/> 
             <span className='langSelected'>{localStorage.getItem("i18nextLng")}</span>    
            <img src={arrowCollapse} className='arrowlanCollapse' alt="Malagasy Flag" width={'12px'}/>
         </div>

         <div className="language-picker-list">           
            <div>
              <button
                  className={`language-picker-item ${localStorage.getItem("i18nextLng") == "mg" ? 'selected' : ''}`}
                  onClick={handleLanguageChange}
                  value="mg"
                >
                  <img src={mgFlacg} alt="Malagasy Flag" width={'12px'}/> Malagasy
                </button>
              </div>

          <div>
            <button
              className={`language-picker-item ${localStorage.getItem("i18nextLng") == "fr"  ? 'selected' : ''}`}
              onClick={handleLanguageChange}
              value="fr"
            >
              <img src={frFlacg} alt="French Flag" width={'12px'}/> Français
            </button>
          </div>

          <div>
            <button
              className={`language-picker-item ${localStorage.getItem("i18nextLng") == "en"  ? 'selected' : ''}`}
              onClick={handleLanguageChange}
              value="en"
            >
              <img src={enFlacg} alt="English Flag" width={'12px'}/> English
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LangSelection