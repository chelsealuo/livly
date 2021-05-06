import './App.css';

import MainHome from "./home";
import ExploreHome from "./Explore_home.js";

import Loading from "./loading";
import Navbar from "./pages/navbar.js";
import Explore from "./pages/explore.js";
import Header from "./pages/header.js";
import Home from "./pages/home.js";

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";




function App() {
  return (
    <>
    <Link to='/profile' className='nav-Links'>
      <p>Profile testing</p>
    </Link>

    <Header />
    <Explore />
    </>

  );
}

export default App;
