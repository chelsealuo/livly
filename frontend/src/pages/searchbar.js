import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"16rem",background:"#F2F1F9", border:"none", padding:"0.5rem", marginLeft:"70px", marginTop:"10px"};
  return (
    <input
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search destination"}
    />
  );
}

export default SearchBar
