import './header.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDown } from 'react-icons/ai';
import image1 from '../images/clocktower.jpg'
import image2 from '../images/gorge.jpg'



function HomeContent() {
  return (
    <div className="homeStyle">
      <div className="card">
        <h4>Ithaca trip</h4>
        <h5>notes: 5</h5>
        <div className="smallView">
          <img src={image1} />
          <img src={image2} />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
