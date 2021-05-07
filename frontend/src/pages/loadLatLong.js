import React, { Component } from 'react';

export default class viewPins extends Component {
    state = {
        pins: null
    }

    // getPins(){
    //   localStorage.setItem("pins", "hi")
    //   return this.state.pins
    // }

    async getPins() {
      let backendUrl = "https://e6syfsey55.execute-api.us-east-1.amazonaws.com/dev/"
  
      if (window.location.href.includes('localhost')) {
        backendUrl = "http://localhost:4000/dev/"
      }
  
      const response = await fetch(backendUrl + 'locations')
  
      const pins = await response.json()
      // save it to your components state so you can use it during render
      this.setState({pins: pins})
      localStorage.setItem("pins", this.state.pins)
      console.log("yellur")
    }

    render() { return (null); }
  }
  