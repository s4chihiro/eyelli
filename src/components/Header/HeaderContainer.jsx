import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { getAuth } from '../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount() {
    getAuth().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, login, email);
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
