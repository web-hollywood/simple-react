import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/header.css';

const headerClasses = getBEMClasses(['header']);

const HeaderComponent = (props, context) => (
  <header className="app-header">
    <h1 className="app-title">Welcome to React</h1>
  </header>
);

HeaderComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default HeaderComponent;
