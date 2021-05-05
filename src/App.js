import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import MainHome from "./home";
import Loading from "./loading";
import Navbar from "./pages/navbar.js";
import Explore from "./pages/explore.js";


function App() {
  return (
    <>

    <Explore />

    <Router>
      <Navbar />
    </Router>

    </>

  );
}

export default App;
