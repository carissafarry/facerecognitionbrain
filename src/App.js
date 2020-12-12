import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
import RecognitionPage from './pages/recognition';
import RegisterPage from './pages/register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/register' component={RegisterPage} exact />
          <Route path='/recognition' component={RecognitionPage} exact />
        </Switch>
      </Router>
    );
  }
}

export default App;
