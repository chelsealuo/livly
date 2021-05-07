import '@fontsource/roboto';
import './profile.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineLeft, AiOutlineEllipsis } from 'react-icons/ai';
import image1 from '../images/clocktower.jpg'
import image2 from '../images/gorge.jpg'

export default class Profile extends Component {
    state = {
      curProfile: null
  }

  async componentDidMount() {
    let backendUrl = "https://e6syfsey55.execute-api.us-east-1.amazonaws.com/dev"

    if (window.location.href.includes('localhost')) {
      backendUrl = "http://localhost:4000/dev/"
    }

    const curUrl = new URL(window.location.href)
    let uuid = curUrl.searchParams.get('uuid'); 

    const response = await fetch(backendUrl + 'aProfile', {
      headers: {
        'fetch_uuid': uuid
      }
    }
    )

    const curProfile = await response.json()
    // save it to your components state so you can use it during render
    this.setState({curProfile: curProfile})
    console.log(curProfile)
  }

  render() {
    console.log("hey")
    console.log(this.state.curProfile)
    if (this.state.curProfile != null) {
    let profile = this.state.curProfile[0];

    return (
      <>
      <div className="profileTop">
        <AiOutlineLeft size={18} color={"white"}/>
        <h4>Profile</h4>
        <AiOutlineEllipsis size={23} color={"white"}/>
      </div>
        <div className="container">
            <div className="profile">
              
              <div className="profile-image">

                <img src={this.state.curProfile[0].pictureURL} alt="" />

              </div>

              <div className="profile-user-settings">

                <h1 className="profile-user-name">{this.state.curProfile[0].Name}</h1>
                <h3 >{this.state.curProfile[0].bio}</h3>
                <div className="tags">
                        <a class="button8">{profile.category}</a>
                        <a class="button8">{profile.subcategory}</a>
                      </div>
              </div>

              <div className="profile-stats">

                <ul>
                  <li><span className="profile-stat-count">164</span> posts</li>
                  <li><span className="profile-stat-count">188</span> followers</li>
                  <li><span className="profile-stat-count">206</span> following</li>
                </ul>
                <div className="buttonWrapper1">
                  <button className="profileButton1">Follow</button>
                </div>
                <div className="buttonWrapper2">
                  <button className="profileButton2">Message</button>
                </div>

                <div className="bigView">
                  <img src={image1} />
                  <img src={image2} />
                </div>
              </div>
           </div>
        </div>
      </>
    )
    }
    return null
  }
  
}

