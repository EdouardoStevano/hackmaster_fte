import React, { useEffect, useState } from 'react';
import './leftShorcut.scss';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function SpeedLink() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isXExpanded, setIsXExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


  const toggleX = () => {
    setIsXExpanded(!isXExpanded);
  };

  const line1Style = isXExpanded ? { transform: 'rotate(45deg)' } : {};
  const line2Style = isXExpanded ? { transform: 'rotate(-45deg)',   height: '16px' } : {};
  const line3Style = isXExpanded ? { opacity: '0', dipslay: 'none' } : {};


  const handleMouseOver = () => {
    toggleX();
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={`speedLink-container`}>
        <div
            className={`link-button`}
        >
            <span
                onClick={handleMouseOver}
            >
                menu
            </span>
            
            <div className="x-container" onClick={handleMouseOver}>
                <div className="x-line line1" style={line1Style}></div>
                <div className="x-line line3" style={line3Style}></div>
                <div className="x-line line2" style={line2Style}></div>
                
            </div>
        </div>

      <div className={`speedLink-menu ${isMenuVisible ? 'active' : ''}`}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 close-speedLink" onClick={handleMouseOver}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className={'speedLink-content'}>
              <div className="globalMap">
                <div className="globalMap-content">
                 <h1>Explorer votre ville</h1>
                 <small>Naviguer à travers notre carte de la ville bien dataillé, consulter votre destination avant même de s'y rendre.</small> 
                 <Link to={'/maps'} className='btn-explore'>Explorer</Link>
                </div>
              </div> 

              <h1>Exploration :</h1>
              <small>Choisissez le lieux que vou voulez explorer.</small>

              <div className="location-container">
                <span class="category">TRANSPORT</span>
                <span class="category">HÔPITAL</span>
                <span class="category">SÉCURITÉ</span>
                <span class="category">ÉCOLE</span>
                <span class="category">PHARMACIE</span>
                <span class="category">BOUTIQUE</span>
                <span class="category">BÂTIMENT ADMINISTRATIF</span>
                <span class="category">STATION ESSENCE</span>
                <span class="category">ARRÊT TAXI</span>
                <span class="category">ARRÊT BUS</span>
                <span class="category">CIMETIÈRE</span>
                <span class="category">BAR</span>
                <span class="category">SECOURS</span>
                <span class="category">TOILETTE PUBLIC</span>
                <span class="category">KIOSQUE</span>
                <span class="category">HOTELS & RESATURANTS</span>
                <span class="category">CASINO</span>
                <span class="category">AÉROPORT</span>
                <span class="category">RESTAURANT</span>
                <span class="category">CYBER CAFE</span>
              </div>

              <h1>Services :</h1>
              <small>Choisissez le lieux que vou voulez explorer.</small>
              <div className="location-container">
                <span class="category">Municipales</span>
                <span class="category">Juridiques</span>
       
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedLink;
