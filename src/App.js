import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

import Footer from "./components/Footer/Footer";
import Work from "./pages/WorkPage/Work";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import SignIn from "./pages/SignIn/SignIn";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/work"} component={Work} />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
            />
            <Route path="/admin" component={Admin} />
            <Route path={process.env.PUBLIC_URL + "/"} component={Homepage} />
            <Route path={process.env.PUBLIC_URL + "/signin"} component={SignIn} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
