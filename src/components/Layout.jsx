// src/components/Layout.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import AuthCallback from "../pages/AuthCallback";
import authorizeHalo from "../api/auth/haloAuth";
import { getToken } from "../utils/auth";
import DashboardPage from "../pages/DashboardPage";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const isAuthCallback = location.pathname.startsWith("/auth");
    const token = getToken();

    if (!isAuthCallback && !token) {
      authorizeHalo();
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/redirect" element={<AuthCallback />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
    </Routes>
  );
};

export default Layout;
