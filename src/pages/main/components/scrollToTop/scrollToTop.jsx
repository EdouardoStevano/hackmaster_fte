import React, { useState as state, useEffect as effect} from 'react';

import './_scrollToTop.css'

// Asset Import
import scrolltop from '../../assets/icon/png/scrollToTopIcon.png'

function ScrollToTop() {

    const [isVisible, setIsVisible] = state(false);

    effect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setIsVisible(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    return (
        <div
          className={`scroll-to-bottom-button ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}>
            <img src={scrolltop} width="43px" />
        </div>
    )
}

export default ScrollToTop