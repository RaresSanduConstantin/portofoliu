import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  state = { className: "navbar" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ className: "navbar2" });
    } else {
      this.setState({ className: "navbar" });
    }
  };

  render() {
    return (
      <div>
        <header className={this.state.className}>
          {/* <a href="/" className="navbarTitle navbarItem">
            Rares's Portfolio
          </a> */}
          <a href="/" className="navbarItem">
            Home
          </a>
          <a href="/work" className="navbarItem">
            My Work
          </a>
          <a href="/contact" className="navbarItem">
            Contact
          </a>
        </header>
      </div>
    );
  }
}

export default Navbar;
