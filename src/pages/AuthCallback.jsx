import React from "react";
import { Loader2 } from "lucide-react"; // optional: if using Lucide icons
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    const expiresIn = parseInt(params.get("expires_in"), 10);

    if (token) {
      localStorage.setItem("haloToken", token);
      localStorage.setItem("haloTokenExpiry", Date.now() + expiresIn * 1000);
      setTimeout(() => navigate("/"), 1000); // slight delay for UX
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-blue-950">
      <div className="bg-white dark:bg-blue-900 shadow-xl p-8 rounded-lg text-center flex flex-col items-center space-y-4 animate-fade-in">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
        <p className="text-lg font-medium text-blue-800 dark:text-blue-100">
          Logging you in to HALO...
        </p>
        <p className="text-sm text-gray-500 dark:text-blue-300">
          Please wait while we verify your credentials.
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;
