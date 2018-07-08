import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/header.css';

const loanListClasses = getBEMClasses(['loan-list']);

const LoanListComponent = (props, context) => (
  <div className={loanListClasses('container')}>
    
  </div>
);

LoanListComponent.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoanListComponent;
