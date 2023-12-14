import React, { useState as state} from 'react'
import { Link } from 'react-router-dom'

// styles importation
import './_authFooter.css'

// Components importation
import SwitchMode from '@components/ui/switchMode/switchMode';

function authFooter() {
  return (
    <div className='authFooter-container'>
      <div className="authFooter-content">
        <div className="leftfooter">
          <p>copyright &copy; 2023 Sirius🚀</p>
        </div>

        <div className="rightfooter">
          <Link to={'/'} className='juridic-btn'>Termes et conditions d'utilisations</Link>
          <Link to={'/'} className='juridic-btn'>politique de confidentialité</Link>    
          <div className="mode-btn">
            <SwitchMode />
          </div>
        </div>
      </div>   
    </div>
  )
}

export default authFooter