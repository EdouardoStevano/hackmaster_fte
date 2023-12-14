import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __MainPage = lazy(() => import('@pages/main'))
const __Home__Section = lazy(() => import('@pages/main/content/home/mainHome'))
const __test = lazy(() => import('@pages/test/test3d'))
const __loader = lazy(() => import('@pages/redirect/loader/loader'))

function MainRoutes() {
  return (
      <Routes>
        <Route path="/loader" element={<__loader />} />
        <Route path="/gsap" element={<__test />} />
        <Route path="/" element={<__MainPage />}>
            <Route index element={<__Home__Section />} />
            <Route path="/home" element={<__Home__Section />} />
        </Route>
      </Routes>
  );
}

export default MainRoutes;
