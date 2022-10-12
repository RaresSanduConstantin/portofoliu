import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Homepage from "./pages/Homepage/Homepage";

import Footer from "./components/Footer/Footer";
import Work from "./pages/WorkPage/Work";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
// import SignIn from "./pages/SignIn/SignIn";

const App = () => {
console.log(process.env.PUBLIC_URL)
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/portofoliu" exact component={Homepage} />
            <Route path="/portofoliu/work" component={Work} />
            <Route
              path={"/portofoliu/contact"}
              component={Contact}
            />
            <Route path="/portofoliu/admin" component={Admin} />
            {/* <Route path={"/signin"} component={SignIn} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }


export default App;
