import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import path from './helpers/path';
import logo from './logo.svg';
import './styles/app.css';

import HomePage from'./layouts/HomePageLayout';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="app">
          <Route path={path('/')} component={HomePage} exact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
