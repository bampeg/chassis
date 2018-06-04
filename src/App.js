import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/products' component={Products} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
} 