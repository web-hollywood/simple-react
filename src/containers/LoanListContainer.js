import { connect } from 'react-redux';
import LoanListComponent from '../components/LoanListComponent';

const mapStateToProps = state => {

  return {
    userName: 'Test User'
  };
};

export default connect(
  mapStateToProps
)(LoanListComponent);