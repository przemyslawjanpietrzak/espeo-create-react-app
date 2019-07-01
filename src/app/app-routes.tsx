import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainView from './components/main/main.container';

export const AppRoutes = () => (
  <Router basename='/react-dash'>
    <Switch>
      <Route path='/' component={MainView} />
    </Switch>
  </Router>
);
