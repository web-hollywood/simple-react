import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import path from './helpers/path';
import load from './hocs/load';
import logo from './logo.svg';
import './styles/app.css';

const HomePage = load(() => import('./layouts/HomePageLayout'));
const Header = load(() => import('./containers/HeaderContainer'));

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="app">
          <Route path={path('/')} component={HomePage} exact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
