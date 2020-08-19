import React, { Component } from "react";
// import Typing from "react-typing-animation";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="bg">
        <div className="layer">
          <div className="shoucase">
            <h1 className="nume">
              Rareș <span>Sandu</span>
            </h1>
            <div className="icons">
              <a
                href="https://www.facebook.com/rrares.ssandu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rares-sandu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a
                href="https://github.com/RaresSanduConstantin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a
                href="https://www.instagram.com/rares.sand/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>

            <div>
              <span className="descriere">
                Is a Web Developer, Self‑Taught Programmer & Chemical Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
