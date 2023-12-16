import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __Explore = lazy(() => import('@pages/explore'))
const __Home__Section = lazy(() => import('@pages/explore/content/explore/mainExplore'))
const __Map__Section = lazy(() => import('@pages/explore/content/globaleMap/globaleMap'))
const __VR__Section = lazy(() => import('@pages/explore/content/globaleMap/vrlocation'))
const __Permis__Section = lazy(() => import('@pages/explore/content/FormPermis/FormPermis'))

function ExploreRoutes() {
  return (
      <Routes>
        <Route path="/maps" element={<__Map__Section />} />
        <Route path="/visit/location/:index" element={<__VR__Section />} />
        <Route path="/request" element={<__Permis__Section />} />

        <Route path="/explore" element={<__Explore />}>
            <Route index element={<__Home__Section />} />
            <Route path="home" element={<__Home__Section />} />
        </Route>
      </Routes>
  )
}

export default ExploreRoutes;
