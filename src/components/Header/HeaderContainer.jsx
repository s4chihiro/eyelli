import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuth } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  id: state.authUserData.id,
  login: state.authUserData.login,
  email: state.authUserData.email,
  isAuth: state.authUserData.isAuth
});

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
