import React from "react";
import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="container-responsive">
      {children}
    </div>
  );
};

export default Container; 