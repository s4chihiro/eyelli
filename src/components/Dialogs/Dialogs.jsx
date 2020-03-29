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

  let dialogs = [
    {id: '1', name: 'Jhon'},
    {id: '2', name: 'Harry'},
    {id: '3', name: 'Jacob'},
    {id: '4', name: 'Thomas'},
    {id: '5', name: 'Oscar'},
    {id: '6', name: 'Oscar'},

  ]

  let messages = [
    {id: '1', message: 'Hi!!!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'i\'am fine))'},
    {id: '4', message: 'Lol'},
    {id: '5', message: 'xD'},
    {id: '6', message: 'Yo'},
  ]

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )

  let messagesElements = messages.map ( m => <Message message={m.message} /> )

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }  
      </div>

      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  );
}

export default Dialogs;
