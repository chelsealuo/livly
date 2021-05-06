import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import MainHome from "./home";
import ExploreHome from "./Explore_home.js";

import Loading from "./loading";
import Navbar from "./pages/navbar.js";
import Explore from "./pages/explore.js";
import Header from "./pages/header.js";
import Home from "./pages/home.js";
import Profile from "./pages/profile.js";




function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={ExploreHome} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Navbar />
    </Router>

    </>

  );
}

export default App;
