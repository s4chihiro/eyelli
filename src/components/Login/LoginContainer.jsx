import React from 'react';
import { connect } from 'react-redux';
import { getAuth } from '../../Redux/auth-reducer';
import Login from './Login';

class LoginContainer extends React.Component {

  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authUserData.isAuth
})

export default connect(mapStateToProps, { getAuth })(LoginContainer);