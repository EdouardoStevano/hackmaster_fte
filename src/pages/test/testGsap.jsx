import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './style.css'

gsap.registerPlugin(ScrollTrigger);

function TestGsap() {

  const squareRef = useRef(null);


  useEffect(() => {
    // const el = squareRef.current;
    gsap.to(squareRef.current, {
      // x: 800,
      duration: 8,
      scrollTrigger: {
        trigger: squareRef.current,
        start: "top 80%",
        end: "center 30%",
        scrub: 4,
        pin: squareRef.current,
        pinSpacing: false,
        toggleClass: "play none play none",
        markers: {
          fontSize: 20,
        }
      }
    })
  }, [])

  return (
    <div>
      <div className="div1">
        Div
    </div>

    <div className="div2">
        <div className="square1" ref={squareRef}>
            Square1
        </div>

        {/* <div className="square2">
            Square2
        </div> */}
    </div>

    <div className="div3">
      Div3
    </div>
    </div>
  )
}

export default TestGsap
