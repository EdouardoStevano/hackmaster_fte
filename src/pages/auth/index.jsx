import React from 'react'
import { Outlet } from 'react-router-dom';

// Importation des composants
import __AUTH_HEAD from './components/authHeader'
import __AUTH_FOOTER from './components/authFooter'

// Importation des styles
import './styles.scss'

function Authentification() {
  return (
    <div className='authentification-container'>
      <div className="authentification-content container">
        <__AUTH_HEAD />
          <Outlet />
        <__AUTH_FOOTER />
      </div>
    </div>
  )
}

export default Authentification