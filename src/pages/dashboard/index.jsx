import React from 'react'
import { Outlet } from 'react-router-dom'

// Imporattion du style
import './style.scss'

// Imporatation des layout
import Sidebar from './layout/sidebar/sidebar'
import Headbar from './layout/headbar/headbar'

function MainDashboard() {
  return (
    <div className='dashboard-container container'>
      <div className="dash-sidebar-container">
        <Sidebar/>
      </div>
      <div className="page-content">
        <Headbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainDashboard