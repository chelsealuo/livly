import '@fontsource/roboto';
import './profile.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AiOutlineLeft, AiOutlineEllipsis } from 'react-icons/ai';


function Profile() {
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

    				<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />

    			</div>

    			<div className="profile-user-settings">

    				<h1 className="profile-user-name">Angela Chen</h1>

    			</div>

    			<div className="profile-stats">

    				<ul>
    					<li><span className="profile-stat-count">164</span> posts</li>
    					<li><span className="profile-stat-count">188</span> followers</li>
    					<li><span className="profile-stat-count">206</span> following</li>
    				</ul>

    			</div>

    			<div className="profile-bio">

    				<p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

    			</div>

    		</div>

    	</div>
    </>
  );
}

export default Profile;
