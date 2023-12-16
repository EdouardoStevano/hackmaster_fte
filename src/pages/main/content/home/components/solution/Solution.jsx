import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./solution.scss";
import { InView } from "react-intersection-observer";

import ImageOne from "@assets/branding/Illustration/mogule1-1.png";
import Roundtext from "@assets/branding/Illustration/RoundText_Dark.png";
// import ImageTwo from "../../../../../../assets/image/logo/LogoSiriusMinimize.png";
// import ImageThre from "../../../../../../assets/image/forme/pattern-1489782_640.png";
// import SautImage from "../../../../../../assets/image/transparentImage/jakob-rosen-CTd5_C7p__8-unsplash-removebg.png";

import imag3d from "../../../../../../assets/branding/img/480x320/GlassEffect.png";
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

  const [viewSolution, setViewSolution] = useState(false);
  const handleInview = (inview) => {
    if (inview) {
      setViewSolution(true);
    } else {
      setViewSolution(false);
    }
  };
  const [viewSolution2, setViewSolution2] = useState(false);
  const handleInview2 = (inview) => {
    if (inview) {
      setViewSolution2(true);
    } else {
      setViewSolution2(false);
    }
  };
  return (
    <div className="scroll-section-outer" id="solution">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section section1">
            <div className="super-container-p80 viewHorizontal section1">
              <img
                src={ImageOne}
                alt=""
                width={"150px"}
                className="floatAnim"
                ref={scaleRef}
              />
              <div className="text">
                <small data-aos="zoom-in">
                  Efficaces et durables pour tous citoyens.
                </small>
                <div className="title" data-aos="fade-right">
                  <h1>Les </h1>
                  <span
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    Solutions
                  </span>
                  <h1>que nous offrons</h1>
                </div>

                <p>
                  Dans notre quête pour répondre aux défis urbains
                  contemporains, les solutions intelligentes se révèlent comme
                  des réponses innovantes et tangibles. Ces technologies de
                  pointe redéfinissent la manière dont nos villes fonctionnent,
                  offrant des réponses concrètes aux embouteillages, à la
                  sécurité publique, à la durabilité environnementale et à bien
                  d'autres enjeux majeurs
                </p>
              </div>

              <div className="bottom-image">
                <img src={Roundtext} alt="Round text" width={"100px"} />
              </div>
            </div>
          </div>

          <div className="scroll-section section2">
            <div className="super-container-p80 viewHorizontal section2 flex">
              <InView onChange={handleInview}>
                <div
                  className={`mobilité-bloc-1 ${viewSolution ? "active" : ""}`}
                >
                  <div className="cube a"></div>
                  <h1>Amélioration de la mobilité</h1>

                  <p>
                    révolutionner l'expérience utilisateur grâce à une
                    application offrant une vue exhaustive des déplacements,
                    simplifiant la planification, la navigation, la sécurité, et
                    la gestion efficace des trajets, avec une carte en temps
                    réel comme allié précieux pour optimiser les déplacements en
                    fournissant des informations actualisées sur le trafic, les
                    transports publics, et les conditions météorologiques,
                    allant au-delà d'un simple outil de navigation pour agir
                    comme un guide sécuritaire, aidant à éviter les zones à
                    risque et anticiper les situations d'urgence
                  </p>
                </div>
              </InView>
            </div>
          </div>

          <div className="scroll-section section-3">
            <div className="super-container-p80 viewHorizontal section3">
              <InView onChange={handleInview2}>
                <div
                  className={`mobilité-bloc-3 ${viewSolution2 ? "active" : ""}`}
                >
                  <div className="bloc-1">
                    <h1>Technologie centrée sur l'humain</h1>
                    <p>
                      Adopter des solutions technologiques qui placent les
                      besoins des citoyens au cœur de leur conception, visant à
                      simplifier les tâches quotidiennes et à améliorer la
                      qualité de vie de manière inclusive et accessible à tous.
                    </p>
                  </div>
                  <div className="Glass-image">
                    <img src={imag3d} alt="" />
                  </div>
                </div>
              </InView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solution;
