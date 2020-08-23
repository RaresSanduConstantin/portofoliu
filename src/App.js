import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

import Footer from "./components/Footer/Footer";
import Work from "./pages/WorkPage/Work";
import Contact from "./pages/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />

            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
