import React, { Component } from "react";
import './App.css';
import axios from "axios";
import LatestNewsTiles from './LatestNewsTiles.js';


class App extends Component {
  constructor () {
    super();
    this.state = {
      stories: [],
    };
  }
  
  componentDidMount() {
    const apiKey = `3JUrifoNOPNfy5hZecIGlU6pbGQ0f71x`;
    axios({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=3JUrifoNOPNfy5hZecIGlU6pbGQ0f71x`,
      dataResponse: "json",
      // params: {
      //   // apikey: apiKey
      //   // section: technology,
      // }
    }).then((response) => {
      response = response.data.results;
      console.log(response);
    })
  }



  render() {
    return (
      <div>
        <h1>Stories on the go!</h1>
      </div>
    )
  }
}

export default App;
