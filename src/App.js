import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Skills from "./components/Skills/Skills";
import Description from "./components/Description/Description";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Description />
        <Skills />
      </div>
    );
  }
}

export default App;
