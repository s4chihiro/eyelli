import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteAuth } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, { deleteAuth })(HeaderContainer);
