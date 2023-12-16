import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Avis from "../../../pages/dashboard/content/avis/avis";
import Documment from "../../../pages/dashboard/content/documment/documment";
import Prortefeuil from "../../../pages/dashboard/content/portefeuil/prortefeuil";

// Main pages importation
const __dashboard = lazy(() => import("@pages/dashboard"));
const __dashboard__Home = lazy(() =>
  import("@pages/dashboard/content/home/home")
);

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<__dashboard />}>
        <Route index element={<__dashboard__Home />} />
        <Route path="home" element={<__dashboard__Home />} />
        <Route path="avis" element={<Avis />} />
        <Route path="document" element={<Documment />} />
        <Route path="protefeuil" element={<Prortefeuil />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
