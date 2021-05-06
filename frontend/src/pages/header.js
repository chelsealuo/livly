import '@fontsource/roboto';
import './header.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDown } from 'react-icons/ai';


function Header() {
  return (
    <>
    <div className="topLayer">
    <div className="message">
      <h3>Welcome to the explore page.</h3>
    </div>
    <button className="reactButton">All   <AiOutlineDown size={6}/></button>
    </div>
    </>
  );
}

export default Header;
