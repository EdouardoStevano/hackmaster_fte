import React from 'react'
import { Link } from 'react-router-dom'

import './exploreFooter.scss'

import SwitchMode from '@components/ui/switchMode/switchMode' 

function ExploreFooter() {
  return (
    <div className='explore-footer flex-space-between'>
        <div className="w-p95 pad-top-px20 pad-bottom-px20">
            <div className="left flex">
              <p className='marge-right-px12'>Copyright &copy; RealIT. Devellopé par Team Supernova</p>
              <SwitchMode/>
            </div>
            
            <div className="right">
              <Link className='footer-shorcut'>Services Municipales</Link>
              <Link className='footer-shorcut'>Carte de la ville</Link>
            </div>
        </div>
    </div>
  )
}

export default ExploreFooter
