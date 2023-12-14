import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Main Route config
import RouteConfig from '@config/routes/routes'

// Style import
import './assets/styles/_mixStyle.scss'
import './assets/styles/_mixStyle.css'
import 'react-toastify/dist/ReactToastify.css'
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  </React.StrictMode>,
)
