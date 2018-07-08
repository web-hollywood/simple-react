import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/components/headerComponent.css';

const headerClasses = getBEMClasses(['header']);

const HeaderComponent = (props, context) => (
  <header className={headerClasses('container')}>
    <h1 className={headerClasses('title')}>Aspire Loan App</h1>
  </header>
);

export default HeaderComponent;
