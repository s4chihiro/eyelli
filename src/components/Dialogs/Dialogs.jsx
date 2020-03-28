import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.item}>
          <NavLink to="/messages/1" activeClassName={classes.active}>Jhon</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/messages/2" activeClassName={classes.active}>Harry</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/messages/3" activeClassName={classes.active}>Jacob</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to="/messages/4" activeClassName={classes.active}>Thomas</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/messages/5"  activeClassName={classes.active}>Oscar</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you?</div>
        <div className={classes.message}>i'am fine))</div>
      </div>
    </div>
  );
}

export default Dialogs;
