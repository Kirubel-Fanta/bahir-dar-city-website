import React from "react";
import '../styles/home.css'
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;