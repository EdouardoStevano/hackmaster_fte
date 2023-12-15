import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// data test pages importation
const __Data__actu = lazy(() => import('../../../utils/data/tests/actu'))

function TestsRoutes() {
  return (
    <Routes>
        <Route path="/actu/data" element={<__Data__actu />} />
      </Routes>
  )
}

export default TestsRoutes
