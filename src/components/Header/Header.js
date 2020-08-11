import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="bg">
        <div className="layer">
          <div className="shoucase">
            <h1 className="nume">Rareș Sandu</h1>
            <div className="icons">
              <a href="https://www.facebook.com/rrares.ssandu" target="_blank">
                <i className="fab fa-facebook fa-3x"></i>
              </a>
              <a
                href="https://www.facebook.com/rrares.ssandu"
                target="_blank"
                className="big"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="https://www.facebook.com/rrares.ssandu" target="_blank">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.facebook.com/rrares.ssandu" target="_blank">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </div>

            <Typing speed={10}>
              <span className="descriere">
                Is a Web Developer, Self‑Taught Programmer & Chemical Engineer
              </span>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
