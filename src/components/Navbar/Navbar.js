import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="navbar">
          <a href="/" className="navbarTitle navbarItem">
            Rares's Portfolio
          </a>
          <a href="/" className="navbarItem">
            Home
          </a>
          <a href="/" className="navbarItem">
            My Work
          </a>
          <a href="/" className="navbarItem">
            Contact
          </a>
        </header>
      </div>
    );
  }
}

export default Navbar;
