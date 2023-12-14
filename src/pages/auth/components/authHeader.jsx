import React, { useState as state} from 'react'
import { Link } from 'react-router-dom'

// styles importation
import './_authHeader.css'

// assets importation
// import siriusLogo from '../../../assets/image/logo/LogoSirius.png'

function authHeader() {
  return (
    <div className='authHeader-container'>
        {/* <img src={siriusLogo} alt="Sirius Logo" /> */}
        <Link to={'/'} className='authBack-btn'>retour</Link>
    </div>
  )
}

export default authHeader