import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import SearchResult from "./pages/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/search" component={SearchResult} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
