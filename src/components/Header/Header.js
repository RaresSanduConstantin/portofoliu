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
