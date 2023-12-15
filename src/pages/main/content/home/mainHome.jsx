import React from "react";

// Styles importation
import "./mainHome.scss";

import Band from "@components/ui/band/band";
import MainBanner from "./components/banner/mainBanner";
import MainPresentaion from "./components/presentation/presentation";
import MainCta from "./components/cta/cta";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import ListProblem from "./components/listProblem/ListProblem";
import Contact from "./components/contact/contact";
import Background3d from "@components/ui/background/background3D";
<<<<<<< HEAD
import ChatbotComponent from "../../../../components/assistance/ChatbotComponent";
=======
import SliderScroll from "@components/ui/sliderScroll/ScrollSlider";
import BlueBack from "../../components/background/blurBackground";

>>>>>>> 7ea9584acff1a0b79a0d5db52cfea2d1e51f7c31

function MainHome() {
  return (
    <div className="super-global-container home">
      <BlueBack/>
      <MainBanner />
      <ChatbotComponent />
      <Band />
      <MainPresentaion />
      <MainCta />
      {/* <Problem /> */}
      <ListProblem />
      <Solution />
      <Contact />
      <Background3d />
      <SliderScroll />
    </div>
  );
}

export default MainHome;
