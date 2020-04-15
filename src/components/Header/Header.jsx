import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  return (
    <header className={classes.header}>
      <h1>eyelli</h1>
      <NavLink to='/login'>{props.isAuth ? props.login : 'Login'}</NavLink>
    </header>
  )
}

export default Header;
