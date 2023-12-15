import React from 'react'
import { Link } from 'react-router-dom'

import './backFromMap.scss' 

function BackFromMap() {
  return (
    <Link to={'/explore'} className='backFromMap'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Retour
    </Link>
  )
}

export default BackFromMap
