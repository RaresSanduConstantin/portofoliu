import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-ds dd">
        This website was created by{" "}
        <span className="rares">
          <a href="/">Rares</a>
        </span>{" "}
        with love and care
      </div>
      <div className="text-ds">Contact me:</div>
      <div className="contact">
        <a
          href="mailto: sandurares57@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-at"></i>
        </a>
        <a
          href="https://www.facebook.com/rrares.ssandu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rares-sandu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/RaresSanduConstantin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/rares.sand/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
