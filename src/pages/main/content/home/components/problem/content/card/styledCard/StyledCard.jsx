import React from "react";
import "./__styledCard.scss";
import { useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

import { InView } from "react-intersection-observer";
import { useState } from "react";
const StyledCard = ({ image }) => {
  console.log(image);
  const cardRef = useRef(null);

  function annimationGsapEnter() {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".content-card-bloc", {
        y: -150,
        duration: 0.5,
        delay: 0,
        ease: "power1.in",
      }).fromTo(
        ".content-card-element",
        { opacity: 0 },
        { opacity: 1, x: 0, stagger: 0.2 }
      );
    }, cardRef);

    return () => {
      ctx.revert();
    };
  }

  function annimationGsaLeave() {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".content-card-bloc", {
        translateY: 200,
        duration: 0.2,
      });
    }, cardRef);

    return () => {
      ctx.revert();
    };
  }

  const [active, setactive] = useState(false);
  function onComponentVisible(view) {
    if (view) {
      setactive(true);
    } else {
      setactive(false);
    }
  }
  return (
    <InView onChange={onComponentVisible}>
      <div
        className={`card-bloc ${active ? "active" : ""}`}
        ref={cardRef}
        onMouseLeave={annimationGsaLeave}
        onMouseEnter={annimationGsapEnter}
      >
        <div
          className="card-image-content"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="content-card-bloc">
            <p className="content-card-element title">Lorem ipsum</p>
            <hr />
            <p className="content-card-element">Lorem ipsum dolor sit</p>
            <p className="content-card-element">
              consectetur adipisicing elit. Reprehenderit, recusandae.
            </p>
          </div>
        </div>
        <div className="squaire squaire-1-cards"></div>
        <div className="squaire squaire-2-cards"></div>
      </div>
    </InView>
  );
};
export default StyledCard;
