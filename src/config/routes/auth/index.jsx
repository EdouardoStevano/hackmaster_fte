import { React, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
const __AuthPage = lazy(() => import('@pages/auth'));
const __SignInPage = lazy(() => import('@pages/auth/signIn/signIn'));
const __SignUpPage = lazy(() => import('@pages/auth/signUp/signUp'));
const __ResetPasswordPage = lazy(() => import('@pages/auth/resetPassword/resetPassword'))

function AuthRoutes() {
  return (
      <Routes>
        <Route path="/login" element={<__AuthPage />}>
            <Route index element={<__SignInPage />} />
            <Route path="signIn" element={<__SignInPage />} />
            <Route path="signUp" element={<__SignUpPage />} />
            <Route path="password/reset" element={<__ResetPasswordPage />} />
        </Route>
      </Routes>
  );
}

export default AuthRoutes;
