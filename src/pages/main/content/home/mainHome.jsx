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
import ChatbotComponent from "../../../../components/assistance/ChatbotComponent";

function MainHome() {
  return (
    <div className="super-global-container home">
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
    </div>
  );
}

export default MainHome;
