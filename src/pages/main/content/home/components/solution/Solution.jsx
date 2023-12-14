import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./solution.scss";
import { InView } from "react-intersection-observer";

import ImageOne from "@assets/branding/Illustration/mogule1-1.png";
import Roundtext from '@assets/branding/Illustration/RoundText_Dark.png'
// import ImageTwo from "../../../../../../assets/image/logo/LogoSiriusMinimize.png";
// import ImageThre from "../../../../../../assets/image/forme/pattern-1489782_640.png";
// import SautImage from "../../../../../../assets/image/transparentImage/jakob-rosen-CTd5_C7p__8-unsplash-removebg.png";

const Solution = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const scaleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: "-210vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "3000 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          pin.kill();
        };
      }
    });
    if (window.innerWidth > 1200) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "3000 top",
            scrub: 0.6,
            pin: true,
          },
        }
        
      );
      return () => {
        pin.kill();
      };
    }

    // gsap.fromTo(scaleRef.current, {
    //   scale: 0,
    //   opacity: 0,
    // }, {
    //   scale: 1,
    //   opacity: 1,
    // })

  }, []);

  const [lettersRef, setLetterRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }
  const triggerTextRef = useRef(null);

  useEffect(() => {
    // const reveal = gsap.timeline(lettersRef.current, {
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     scrub: true,
    //     start: "top center",
    //     end: "bottom 80%",
    //   },
    //   opacity: 1,
    //   duration: 5,
    //   stagger: 3,
    // });

    const letters = lettersRef.current;
    gsap.set(letters, { opacity: 0 });

    const reveal = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top top",
        end: "rigth center",
      },
    });

    letters.forEach((letter, index) => {
      reveal.to(letter, { opacity: 1, duration: 0.5, delay: index * 0.1 }, 0);
    });

    return () => {
      reveal.kill();
    };
  }, []);

  const [annimationOne, setAnnimationOne] = useState(false);
  const [annimationTwo, setAnnimationTwo] = useState(false);
  const handlechangeSectionOne = (InView) => {
    if (InView) {
      console.log("component view");
      setAnnimationOne(true);
    }
  };
  const handlechangeSectionTwo = (InView) => {
    if (InView) {
      console.log("component view");
      setAnnimationTwo(true);
    } else {
      setAnnimationTwo(false);
    }
  };

  const [sauter, setSauter] = useState(false);

  const handleSauter = (inview) => {
    if (inview) {
      setTimeout(() => {
        setSauter(true);
      }, 500);
    }
  };
  const text =
    "Apprendre où vous voulez, quand vous voulez, suivant vôtre propre rythme.";
  return (
    <div className="scroll-section-outer" id="solution">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section section1">
            <div className="super-container-p80 viewHorizontal section1">
              <img src={ImageOne} alt="" width={'150px'} className="floatAnim" ref={scaleRef} />
              <div className="text">
                <small data-aos="zoom-in">Efficaces et durables pour tous citoyens.</small>
                <div className="title" data-aos="fade-right">
                  <h1>Les </h1>
                  <span data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">Solutions</span>
                  <h1>que nous offrons</h1>
                </div>
                
                <p>Dans notre quête pour répondre aux défis urbains contemporains, les solutions intelligentes se révèlent comme des réponses innovantes et tangibles. Ces technologies de pointe redéfinissent la manière dont nos villes fonctionnent, offrant des réponses concrètes aux embouteillages, à la sécurité publique, à la durabilité environnementale et à bien d'autres enjeux majeurs</p>
              </div>
            
              <div className="bottom-image">
                <img src={Roundtext} alt="Round text" width={'100px'} />
              </div>
            </div>
            
          </div>

          <div className="scroll-section section2">
          <div className="super-container-p80 viewHorizontal section2 flex">
            <div className="side-50">
              <div className="line1">
                <h1>Line 1 eto</h1>
              </div>
              
              <div className="line2">
                <h1>line 2 eto</h1>
              </div>

              <div className="line2">
                <h1>line 3 eto</h1>
              </div>
            </div>

            <div className="side-50">
            <h1>sdmfds;</h1>
            </div>


              
            </div>
          </div>

          <div className="scroll-section section-3">
          <div className="super-container-p80 viewHorizontal section3">
              <h3>Les Solution que nous offrons</h3>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde fugit assumenda voluptates pariatur, maxime id. Eos ipsum repudiandae laboriosam, sed est, aspernatur labore dolores nihil alias velit dolorem? Excepturi!</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solution;
