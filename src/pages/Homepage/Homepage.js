import React, { Component } from "react";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import Description from "../../components/Description/Description";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Description />
        <Skills />
      </div>
    );
  }
}

export default Homepage;
