import React, { Component } from 'react';
import logo from './logo.svg';
import RedditPosts from './components/redditPosts'
import './assets/styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reddit_json: []
    }
  }

  componentDidMount() {
    var current = this;
    var url = "https://www.reddit.com/r/mildlyinteresting/top/.json"

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(resp) {
      current.setState({ reddit_json: resp.data.children});
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <RedditPosts redditPosts={this.state.reddit_json}/>
        </div>
      </div>
    );
  }
}

export default App;
