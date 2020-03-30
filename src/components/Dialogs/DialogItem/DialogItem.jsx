import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = "/messages/" + props.id;
  
  return (
    <div className={classes.item}>
      <div className={classes.ava}></div>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
