import React, { Component } from "react";
import './App.css';
import axios from "axios";
import Header from './Header.js';
import LatestNewsTiles from './LatestNewsTiles.js';
import TilesList from './TilesList.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      stories: [],
      allStories: []
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
        allStories: response
      });
    });
  }

  displaySearchResults = (data) => {
    this.setState({
      stories: data
    });
  }

  render() {
    return (
      //I did not use a wrapper intentionally here, for my design!
          <div className="main-container">
              <Header 
              searchResults={this.state.stories}
              searchResultsFunction={this.displaySearchResults}
              />
              <TilesList >
            {this.state.stories.map((articles, index) => {
              return (
                <LatestNewsTiles
                  image={articles.multimedia ? articles.multimedia[0].url : null} 
                  alt={articles.multimedia? articles.multimedia[0].caption : null}
                  key={articles[index]}
                  title={articles.title}
                  published={articles.published_date}
                  abstract={articles.abstract}
                  read={articles.url}
                />
              )
            })
            }
            </TilesList>
          </div>
        )
  }
}

export default App;
