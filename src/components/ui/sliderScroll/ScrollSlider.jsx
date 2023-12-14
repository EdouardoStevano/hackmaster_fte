import React, { useEffect, useState } from 'react';
import './_ScrollSlider.css';

const ScrollSlider = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScroll) * 100;
      setScrollProgress(scrollPercentage);

      // Ajoutez une condition pour afficher ou masquer le slider
      if (scrollTop >= 300 && scrollTop <= maxScroll) {
        const scrollPercentage = ((scrollTop - 300) / (maxScroll - 300)) * 100;
        setScrollProgress(scrollPercentage);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`slider-content ${scrollProgress === 0 ? 'hidden' : ''}`}>
      <span className={'slider-text'}>Scroll {Math.round(scrollProgress)}% </span>
    <div className="slider-container">
      <div
        className="slider"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="progress-ball" style={{ left: `${scrollProgress}%` }}>
        {/* {Math.round(scrollProgress)}% */}
      </div>
    </div>
    </div>
  );
};

export default ScrollSlider;
