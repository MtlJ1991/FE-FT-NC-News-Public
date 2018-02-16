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
      <div className='login'>
        <h5 >Northcoder</h5>
        <span><img src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png' alt='nc'/></span>
      </div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:topic" component={TopicsPage} />
        <Route exact path="/:id/comments" component={CommentsPage} />
        <Route exact path="/users/:username" component={UsersPage} />
      </div>

      </BrowserRouter>
    );
  }

}


export default App;


