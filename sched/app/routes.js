import React, { Component } from 'react';
import Route from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route component={App}>
    <Route path='/sched' component={Sched} />
  </Route>
);
