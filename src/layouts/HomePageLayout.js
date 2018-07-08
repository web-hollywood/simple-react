import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../containers/HeaderContainer';
import LoanListContainer from '../containers/LoanListContainer';

import { getBEMClasses } from '../helpers/cssClassesHelper';
import '../styles/homePageLayout.css';

const homePageLayoutClasses = getBEMClasses('main-layout');

class HomePageLayout extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className={homePageLayoutClasses('container')}>

          <div className={homePageLayoutClasses('header')}>
            <HeaderContainer />
          </div>

          <div className={homePageLayoutClasses('body')}>
            <LoanListContainer />
          </div>

          <div className={homePageLayoutClasses('footer')}>
            <div className={homePageLayoutClasses('footer-row')}>
              <div className={homePageLayoutClasses('placeholder')} />
            </div>
          </div>

        </div>
        
      </React.Fragment>
    );
  }
}

export default HomePageLayout;
