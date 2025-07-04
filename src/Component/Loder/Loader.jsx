import React from "react";
import "./Loder.css";
function Loader() {
  return (
    <>
      <div className="loader-overlay">
        <div className="mobile-loader-icon">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="8" width="30" height="44" rx="6" fill="#222" stroke="#00e676" strokeWidth="3"/>
            <rect x="23" y="14" width="14" height="28" rx="2" fill="#fff"/>
            <circle className="mobile-loader-dot" cx="30" cy="48" r="2.5" fill="#00e676"/>
          </svg>
        </div>
        <h2 className="loader-text">Yash's Portfolio</h2>
      </div>
    </>
  );
}

export default Loader;
