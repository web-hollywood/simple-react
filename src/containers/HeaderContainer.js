import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

const mapStateToProps = state => {
  const { userName } = state.userName;

  return {
    userName
  };
};

export default connect(
  mapStateToProps
)(HeaderComponent);