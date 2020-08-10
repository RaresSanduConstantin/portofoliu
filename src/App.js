import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Skills from "./components/Skills/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
        <Skills />
      </div>
    );
  }
}

export default App;
