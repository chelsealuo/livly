import React, { useState } from 'react'
import './navbar.css'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import SearchBar from "./searchbar.js";
import HomeContent from "./homeContent.js";
import Persona from "./persona.js";


import {AiTwotoneEnvironment} from 'react-icons/ai';

function NearMe() {

  return (
    <>
    <div className="top">
      <AiTwotoneEnvironment color={'white'}/>
      <h5>Ithaca, NY</h5>
    </div>
    <SearchBar />
    <Persona />
    </>
  );
}

export default NearMe;
