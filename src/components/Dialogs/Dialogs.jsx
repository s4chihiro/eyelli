import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.item}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Jhon" id="1" />
        <DialogItem name="Harry" id="2" />
        <DialogItem name="Jacob" id="3" />
        <DialogItem name="Thomas" id="4" />
        <DialogItem name="Oscar" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi!!!" />
        <Message message="How are you?" />
        <Message message="i'am fine))" />
      </div>
    </div>
  );
}

export default Dialogs;
