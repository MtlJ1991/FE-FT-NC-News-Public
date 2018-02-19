import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage'
import UsersPage from './components/UsersPage'

import TopicsPage from './components/TopicsPage'
import CommentsPage from './components/CommentsPage'
import { BrowserRouter, Route } from "react-router-dom";
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 9, // Default 
  keydownSensitivity: 9 // Default (When you press arrow down/up key) 
});

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
        <span><img src='https://pbs.twimg.com/profile_images/932373124372410373/-dsqBL8m_400x400.jpg' alt='nc'/></span>
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


