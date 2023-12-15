import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import FormPermis from "../../../pages/explore/content/FormPermis/FormPermis";

// Main pages importation
const __Explore = lazy(() => import("@pages/explore"));
const __Home__Section = lazy(() =>
  import("@pages/explore/content/explore/mainExplore")
);
const __Map__Section = lazy(() =>
  import("@pages/explore/content/globaleMap/globaleMap")
);

function ExploreRoutes() {
  return (
    <Routes>
      <Route path="/maps" element={<__Map__Section />} />
      <Route path="/formPermis" element={<FormPermis />} />
      <Route path="/explore" element={<__Explore />}>
        <Route index element={<__Home__Section />} />
        <Route path="home" element={<__Home__Section />} />
      </Route>
    </Routes>
  );
}

export default ExploreRoutes;
