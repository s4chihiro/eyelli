import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { authAPI } from '../../api/api';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'email'} name={'email'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field type={'checkbox'} name={'rememberMe'} component={'input'} />Remember me
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
    console.log(formData)
    authAPI.login(formData).then(response => {
      if (response.data.resultCode === 0) {
        console.log(response);
        props.getAuth();
      }
    });
  }
  console.log(props)
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;