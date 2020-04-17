import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  let onExitClick = () => {
    props.deleteAuth();
  }

  return (
    <header className={classes.header}>
      <h1>eyelli</h1>
      <div className={classes.exitWrap}><button onClick={onExitClick} className={classes.exit}>exit</button></div>
      <NavLink to='/login'>{props.isAuth ? props.login : 'Login'}</NavLink>
    </header>
  )
}

export default Header;
