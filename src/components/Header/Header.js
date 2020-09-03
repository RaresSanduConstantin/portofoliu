import React, { Component } from "react";

import "./Header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    let i = 0;
    let text = "Is a Web Developer, Self‑Taught Programmer & Chemical Engineer";
    let speed = 60;
    this.myRef.current.innerHTML = "";

    const typeOnDOM = () => {
      if (i < text.length) {
        this.myRef.current.innerHTML =
          this.myRef.current.innerHTML + text.charAt(i);
        i++;
        setTimeout(typeOnDOM, speed);
        // } else {
        //   i = 0;
        //   this.myRef.current.innerHTML = "";
        //   setTimeout(() => {
        //     setTimeout(typeOnDOM, speed);
        //     console.log(this.myRef.current.innerHTML);
        //   }, 1500);
      }
    };
    typeOnDOM();
  }

  render() {
    return (
      <div className="bg">
        <div className="layer">
          <div className="shoucase">
            <h1 className="nume">Rareș Sandu</h1>
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

            <div className="descriere">
              <p ref={this.myRef}></p>
              <span className="ceva" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
