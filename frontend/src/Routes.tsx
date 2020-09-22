import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Record from './pages/Record';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/records" exact>
        <Record />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;