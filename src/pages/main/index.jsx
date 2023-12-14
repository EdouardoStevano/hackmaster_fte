import React, {useEffect, useState, useRef, useLayoutEffect} from "react";
import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";

// Assets importation
import "./style.scss";

// Layout importation
import __MAIN_HEADER__ from "@pages/main/layout/header/mainHeader";
import __MAIN_FOOTER__ from "@pages/main/layout/footer/mainFooter";

// Components importation
import ScroolToTop from "@components/ui/scrollToTop/scrollToTop";

function Main() {
  const [heigth, setheigth] = useState(true);
  const CountainerRef = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.to(CountainerRef.current, {
  //     scale: 1,
  //     delay: 5,
  //     duration: 5,
  //     ease: "bounce",
  //   });
  // });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="main-container"
      // style={{
      //   scale: "0.6",
      //   height: "100vh",
      // }}
      // ref={CountainerRef}
    >
      {/* CONSTANT COMPONENTS */}
      <ScroolToTop />

      <__MAIN_HEADER__ />
      <div className="main-content">
        <Outlet />
      </div>
      <__MAIN_FOOTER__ />
    </div>
  );
}

export default Main;
