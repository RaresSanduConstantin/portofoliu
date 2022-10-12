import React, { Component } from "react";
import {Link} from 'react-router-dom'
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
          <Link to="" className="navbarItem">
            Home
          </Link>
          <Link to="/work" className="navbarItem">
            My Work
          </Link>
          <Link to="/contact" className="navbarItem">
            Contact
          </Link>
        </header>
      </div>
    );
  }
}

export default Navbar;
