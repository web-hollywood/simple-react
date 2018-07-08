import { connect } from 'react-redux';
import { repayLoan } from '../redux/actions/loanActions';
import LoanListComponent from '../components/LoanListComponent';

const mapStateToProps = state => {

  return {
    userName: 'Test User',
    loanList: state.loan.loanList
  };
};

const mapDispatchToProps = dispatch => ({
  repayLoan: (id) => dispatch(repayLoan(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanListComponent);