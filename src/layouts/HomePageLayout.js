import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from '../containers/HeaderContainer';

import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/HomePageLayout.css';

const homePageLayoutClasses = getBEMClasses('retail-layout');

class HomePageLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={homePageLayoutClasses('container')}>
          <div className={homePageLayoutClasses('header')}>
            <HeaderContainer />
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

HomePageLayout.contextTypes = {
  t: PropTypes.func.isRequired
};

export default HomePageLayout;
