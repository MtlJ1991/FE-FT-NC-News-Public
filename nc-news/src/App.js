import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import UsersPage from './components/UsersPage'

import TopicsPage from './components/TopicsPage'
import CommentsPage from './components/CommentsPage'
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
        <Route exact path="/:topic" component={TopicsPage} />
        <Route exact path="/:id/comments" component={CommentsPage} />
        <Route exact path="/users/:username" component={UsersPage} />




        {/* <Home articles={this.state.articles} changeVote={this.changeVote}/> */}
      </div>

      </BrowserRouter>
    );
  }

}


export default App;


