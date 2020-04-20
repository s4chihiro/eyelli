import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Redux/auth-reducer';
import Login from './Login';
import { getIsAuth } from '../../Redux/isAuth-selector';

class LoginContainer extends React.Component {

  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, { login })(LoginContainer);