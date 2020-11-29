import React, { Component } from "react";
import './App.css';
import axios from "axios";
import Header from './Header.js';
import LatestNewsTiles from './LatestNewsTiles.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faSyncAlt)


class App extends Component {
  constructor () {
    super();
    this.state = {
      stories: [],
    };
  }
  
  componentDidMount() {
    axios({
      method: "GET",
      url: `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=3JUrifoNOPNfy5hZecIGlU6pbGQ0f71x`,
      dataResponse: "json"
    }).then((response) => {
      response = response.data.results;
      console.log(response);
      this.setState({
        stories: response,
      });
    });
  }



  render() {
    return (
      <div>

            <Header />
        
            {this.state.stories.map((articles, index) => {
              return (
                <LatestNewsTiles
                  image={articles.multimedia[0].url}
                  alt={articles.multimedia[0].caption}
                  key={articles[index]}
                  title={articles.title}
                  published={articles.published_date}
                  read={articles.url}
                />
              )
              
          })
        }
      </div>
        )
  }
}
export default App;
