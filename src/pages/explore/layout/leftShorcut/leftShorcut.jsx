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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" close-speedLink w-6 h-6" onClick={handleMouseOver}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"  />
            </svg>
            <div className={'speedLink-content'}>
                <div className="menu-speedLink-content">
                  <div className="menu-speedLink">
                    <a href='#home' onClick={handleMouseOver}>Accueil</a>
                    <a href='#about' onClick={handleMouseOver}>A propos</a>
                    <a href='#service' onClick={handleMouseOver}>Services</a>
                    <a href='#skills' onClick={handleMouseOver}>Competences</a>
                    <a href='#experience' onClick={handleMouseOver}>Experiences</a>
                    <a href='#release' onClick={handleMouseOver}>Réalisations</a>
                  </div>
                  <div className="round-blur-back"></div>
                </div>
                    
            </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedLink;
