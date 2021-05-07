import React, { useState } from 'react'
import './navbar.css'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

import { AiFillHome, AiOutlineMessage, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

function Navbar() {



  return (
    <>
    <nav className='navbar'>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='/' className='nav-Links'>
          <AiFillHome size={27}/>
          <p>Home</p>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/messages' className='nav-Links'>
          <AiOutlineMessage size={27}/>
          <p>Messages</p>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/explore' className='nav-Links'>
          <AiOutlineSearch size={27}/>
          <p>Explore</p>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/nearme' className='nav-Links'>
          <AiOutlineUser size={27}/>
          <p>Near Me</p>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
