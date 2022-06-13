// Embedding Stylesheets In Your Main Component App
import './App.css';

import React, {Component} from 'react';
import Header from './layout/header';
import Main from './layout/main';

import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <div className="App">
            <Header/>
            <Main/>
          </div>
        </Router>
    )
  }
}

export default App
