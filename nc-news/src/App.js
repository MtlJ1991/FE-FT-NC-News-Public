import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import {fetchArticles} from './Api';
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {

  state = {
    articles: []
  }



  render() {
    return (
      <BrowserRouter>

      <div className="App">
        <NavBar />
        <Route exact path="/" component={HomePage} />

        {/* <Home articles={this.state.articles} changeVote={this.changeVote}/> */}
      </div>

      </BrowserRouter>
    );
  }

}


export default App;



{/* <BrowserRouter>
<Route exact path='/' component={homePage} />
</BrowserRouter> */}