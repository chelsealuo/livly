/* global google */
import React, { Component } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import IsLoaded from './jsApiLoaderFunction.js'; 

export default class Explore extends Component {

  
  containerStyle = {
    paddingTop:'60px',
    width: '100%',
    height: '600px'
  };
  
  center = {
    lat: 42.443962,
    lng: -76.501884
  };

  state = {
    pins: null
  };

  
  async componentDidMount() {
    let backendUrl = "https://e6syfsey55.execute-api.us-east-1.amazonaws.com/dev/"
  
      if (window.location.href.includes('localhost')) {
        backendUrl = "http://localhost:4000/dev/"
      }
  
      const response = await fetch(backendUrl + '/locations')
  
      const pins = await response.json()
      // save it to your components state so you can use it during render
      this.setState({pins: pins})
      console.log("Fetched pins")
  }

  render() {
    

  return IsLoaded ? (
    <>
    <div className="test">
      {
        this.state.pins && this.state.pins.map(pins => {
        return (
            <div>{pins.Latitude}</div>
        )
        })
      }
      </div>
      <GoogleMap
        mapContainerStyle={this.containerStyle}
        initialCenter={this.center}
        center={this.center}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        
        <></>

      </GoogleMap>
      </>
  ) : <></>
}
}