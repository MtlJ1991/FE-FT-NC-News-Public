import React, { Component } from 'react';
import './App.css';
import Home from './components/home'

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.fetchArticles()
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-toggleable-md navbar navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#"> <img src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" width="350" height="70" alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#home" style={{'align':'left'}}>Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#about">Topics</a>
                    <a class="nav-item nav-link" href="#whoami">Articles</a>
                  </div>
                </div>
              </nav>

        <Home articles={this.state.articles}/>
      </div>
    );
  }
  fetchArticles = () => {
    // return fetch(`process.env.${REACT_APP_API_DEVELOPMENT}/articles`)
    return fetch('https://northcoders-news-api.herokuapp.com/api/articles', {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      this.setState(
       this.articles = articles
      )
    })
  }
}


export default App;
