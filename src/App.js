import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <Route path="/login" component={Login} />
    );
  }
}

export default App;
