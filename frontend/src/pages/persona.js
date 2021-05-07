import './header.css';
  import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineDown } from 'react-icons/ai';
import image1 from '../images/clocktower.jpg'
import image2 from '../images/gorge.jpg'
import './profile.css';
import { AiOutlineLeft, AiOutlineEllipsis } from 'react-icons/ai';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


export default class Persona extends Component {
  state = {
      profiles: null
  }

  async componentDidMount() {
    let backendUrl = "https://e6syfsey55.execute-api.us-east-1.amazonaws.com/dev"

    if (window.location.href.includes('localhost')) {
      backendUrl = "http://localhost:4000/dev/"
    }

    const response = await fetch(backendUrl + 'userProfiles')

    const profiles = await response.json()
    // save it to your components state so you can use it during render
    this.setState({profiles: profiles})
    console.log(profiles)
  }

  render() {
    console.log("Hey")
    console.log(this.state.profiles)
    return (
      <div className="homeStyle">
        <div className="card">
        {
          this.state.profiles && this.state.profiles.map(profile => {
            return (
                <div className="containerpersona">
        
                  <div className="profile">
        
                    <div className="profile-image">
        
                      <img src={profile.pictureURL} alt="" />
                      <div className="tempButton">
                      <Link to={"/profile?uuid=" + profile.emailID} className='nav-Links'><button>View Profile</button></Link>
                      </div>
        
                    </div>
        
                    <div className="profile-user-settings">
        
                      <h1 className="profile-user-name">{profile.name}</h1>
                      <h3 >About me: {profile.bio}</h3>
                      <h4> I know best: {profile.category}</h4>
                      <h4> {profile.subcategory}</h4>
                    </div>
        
                  </div>
                </div>
            )
          })
        } 
        </div>
      </div>
    );
  }
}