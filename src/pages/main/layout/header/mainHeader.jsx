import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { t } from '@utils/helpers/translation/i18nHelper'

// Style importation
import './mainHeader.scss';

// Components importation
import LanguagesSelector from '@components/ui/langaugesSelection/langSelection';
import Modal from "@components/ui/modal/myModalLarge"
import SwitchMode from '@components/ui/switchMode/switchMode';

// Assests importation
import LogoIcon from '/supericon.png' 

function MainHeader() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [appIcon, setAppIcon] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [menuVisible, setMenuVisible] = useState(false);
  const [isChecked, setIsChecked] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [siriusModal, setSiriusModal] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

   const openSiriusModal = () => {
    setSiriusModal(true);
  };

  const closeSiriusModal = () => {
    setSiriusModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsFixed(scrollPosition > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const switchMode = () => {
    if (localStorage.getItem('SiriusMode') === "true") {
      localStorage.setItem('SiriusMode', "false");
      document.body.classList.remove('darkTheme');
      setIsThemeDark(false);
      setIsChecked(null);
      setAppIcon('usericon');
    } else {
      localStorage.setItem('SiriusMode', "true");
      document.body.classList.add('darkTheme');
      setIsThemeDark(true);
      setIsChecked('true');
      setAppIcon('moon_icon');
    }
  };

  return (
    <div className={isFixed ? 'navbar-container fixed-nav' : 'navbar-container'}>
      <nav className="navbar">
        <div className='left-navbar'>
          <div className="logo" onClick={() => openSiriusModal()}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
            </svg> */}
            <img src={LogoIcon} alt="logo" className='marge-right-px10'/>
            <span>RealIT.</span>
          </div>
          <div className={`menu ${menuVisible ? 'active' : ''}`}>
            <div className='menu-content'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="exit-menu w-6 h-6" onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className='btn' onClick={toggleMenu}><a href="#banner" className='menu-btn' onClick={toggleMenu}>{t('navbar.home')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#about" className='menu-btn'>{t('navbar.about')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#solution" className='menu-btn' onClick={toggleMenu}>{t('navbar.solution')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#school" className='menu-btn'>{t('navbar.school')}</a></div>            
              <div className='btn' onClick={toggleMenu}><a href="#contact" className='menu-btn'>{t('navbar.contact')}</a></div>
              <div className="btn-connet-mobile">
                <Link to={'/login'} className="login-button">{t('navbar.signIn')}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link to={'/login'} className="login-button">{t('navbar.signIn')}</Link>
          <div className="mode-btn">
            <SwitchMode  />
            <LanguagesSelector />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-button w-6 h-6" onClick={toggleMenu}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 w-px30">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainHeader;


// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';

// // Style importation
// import './mainHeader.scss';

// // Components importation
// import LanguagesSelector from '@components/ui/langaugesSelection/langSelection';
// import SwitchMode from '@components/ui/switchMode/switchMode';

// function MainHeader() {
//   const [isThemeDark, setIsThemeDark] = useState(false);
//   const [appIcon, setAppIcon] = useState();
//   const [selectedLanguage, setSelectedLanguage] = useState('fr');
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [isChecked, setIsChecked] = useState('');
//   const [isFixed, setIsFixed] = useState(false);
//   const [showSubMenu, setShowSubMenu] = useState(false);
//   const [siriusModal, setSiriusModal] = useState(false);


//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   const toggleSubMenu = () => {
//     setShowSubMenu(!showSubMenu);
//   };

//    const openSiriusModal = () => {
//     setSiriusModal(true);
//   };

//   const closeSiriusModal = () => {
//     setSiriusModal(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       setIsFixed(scrollPosition > 120);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={isFixed ? 'navbar-container fixed-nav' : 'navbar-container'}>
//       <nav className="navbar">
//         <div className='left-navbar'>
//           <div className="logo">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//               <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z" clipRule="evenodd" />
//             </svg>
//             <span>RealTy.</span>
//           </div>
//         </div>

//         <div className={`menu ${menuVisible ? 'active' : ''}`}>
//             <div className='menu-content'>
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="exit-menu w-6 h-6" onClick={toggleMenu}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//               <div className='btn' onClick={toggleMenu}><a href="#banner" className='menu-btn anim1' onClick={toggleMenu}>Accueil</a></div>
//               <div className='btn' onClick={toggleMenu}><a href="#about" className='menu-btn anim2'>A propos</a></div>
//               <div className='btn' onClick={toggleMenu}><a href="#solution" className='menu-btn anim3' onClick={toggleMenu}>Solution</a></div>
//               <div className='btn' onClick={toggleMenu}><a href="#solution" className='menu-btn anim4' onClick={toggleMenu}>Solution</a></div>
//               <div className="btn-connet-mobile">
//                 {/* <Link to={'/login/signup'} className="signup-button">S'inscrire</Link> */}
//                 <Link to={'/login'} className="login-button">Se connecter</Link>
//               </div>
//             </div>
//           </div>

//         <div className="buttons">
//           {/* <Link to={'/login/signup'} className="signup-button">S'inscrire</Link> */}
//           <Link to={'/login'} className="login-button">Se connecter</Link>
//           <div className="mode-btn">
//             <SwitchMode  />
//             <LanguagesSelector />
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-button w-6 h-6" onClick={toggleMenu}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default MainHeader;

