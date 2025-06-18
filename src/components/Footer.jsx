// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-blue-950 text-white text-sm z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-1 sm:mb-0">
          © {new Date().getFullYear()} IT By Design. All rights reserved.
        </p>
        <div className="flex gap-4 text-blue-300">
          <a
            href="https://www.itbd.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            IT By Design
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
