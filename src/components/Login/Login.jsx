import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { authAPI } from '../../api/api';
import classes from './Login.module.css'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../utils/validators/validators';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm}>
      <div>
        <Field type='email' placeholder='email' name='email' component={Input} className={classes.input} validate={[required]} />
      </div>
      <div>
        <Field type='password' placeholder='password' name='password' component={Input} className={classes.input} validate={[required]} />
      </div>
      <div>
        <Field id='rememberMe' type='checkbox' name='rememberMe' component={Input}/> <label for='rememberMe'>Remember me</label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    authAPI.login(formData).then(response => {
      if (response.data.resultCode === 0) {
        props.getAuth();
      }
    });
  }
  if (!props.isAuth) {
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  } else {
    return <h1>You already are logged in</h1>
  }
};

export default Login;