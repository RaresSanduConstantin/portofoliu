import React, { Component } from "react";
import Typing from "react-typing-animation";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="bg">
        <div className="layer">
          <div className="shoucase">
            <h1 className="nume">Rareș's Portfolio</h1>
            <Typing speed={50}>
              <span className="descriere">
                Web Developer, Self‑Taught Programmer & Chemical Engineer
              </span>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
