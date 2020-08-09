import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="bg">
        <div className="layer">
          <div className="shoucase">
            <h1 className="nume">Rareș's Portfolio</h1>
            <p className="descriere">
              Web Developer, Self‑Taught Programmer & Chemical Engineer
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
