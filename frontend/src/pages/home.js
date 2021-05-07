import '@fontsource/roboto';
import './header.css';
import React from 'react';
// import Button from '@material-ui/core/Button';
// import { AiOutlineDown } from 'react-icons/ai';
import SearchBar from "./searchbar.js";
import HomeContent from "./homeContent.js";


function Home() {
  return (
    <>
    <h2 style={{paddingLeft: "15px"}}>Welcome home, Chelsea Luo</h2>
    <SearchBar />
    <HomeContent />
    </>
  );
}

export default Home;
