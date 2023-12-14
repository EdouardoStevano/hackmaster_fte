import { React, Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";

// Librairie de traduction
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Constant components
import ConnectionStatus from "@components/ui/connexionStatus/connectionStatus";

// Theme mode verification
import { checkmode } from "@utils/helpers/mode/checkmode";

// Principal route imporatation
const __MAIN__ = lazy(() => import('@config/routes/main'))
const __AUTH__ = lazy(() => import('@config/routes/auth'))
const __DASHBOARD__ = lazy(() => import('@config/routes/dashboard'))
const __EXPLORE__ = lazy(() => import('@config/routes/explore'))

// Redirect route importation
const __LOADER__ = lazy(() => import('@pages/redirect/loader/loader'))
const __REDIRECT__ = lazy(() => import('@config/routes/redirect'))

// Initialize
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'fr',
  backend: {
    loadPath: "/locales/{{lng}}/translation.json",
  },
});


function RouteConfig() {
  checkmode();
  return (
    <Suspense fallback={<__LOADER__ />}>
      {/* Toastify initialize */}
      <ToastContainer
        position="top-right"
        theme="colored"
        pauseOnHover={true}
        rtl={false}
      />

      {/* Constant components */}
      <ConnectionStatus />

        <__MAIN__ />
        <__AUTH__ />
        <__EXPLORE__ />
        <__DASHBOARD__ />
        <__REDIRECT__ />
    </Suspense>
  )
}

export default RouteConfig
