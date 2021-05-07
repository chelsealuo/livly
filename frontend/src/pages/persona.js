import './header.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDown } from 'react-icons/ai';
import image1 from '../images/clocktower.jpg'
import image2 from '../images/gorge.jpg'
import './profile.css';
import { AiOutlineLeft, AiOutlineEllipsis } from 'react-icons/ai';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";





function Persona() {
  return (
    <div className="homeStyle">
      <div className="card">
      	<div className="containerpersona">

      		<div className="profile">

      			<div className="profile-image">

      				<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
              <div className="tempButton">
              <Link to='/profile' className='nav-Links'><button>View Profile</button></Link>
              </div>

      			</div>

      			<div className="profile-user-settings">

      				<h1 className="profile-user-name">Angela Chen</h1>
              <h3 >About me: A student in Ithaca, enjoys going out for food and activities. </h3>
              <div className="tags">
                <a class="button8">Bars</a>
                <a class="button8">Restaurants</a>
                <a class="button8">Parks</a>
              </div>
      		</div>

          </div>

        </div>
        </div>
      </div>
  );
}

export default Persona;
