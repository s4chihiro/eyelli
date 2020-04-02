import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )

  let messagesElements = props.state.messages.map ( m => <Message message={m.message} /> )

  let newMessageElement = React.createRef()

  let messageText = props.dispatch({ type: 'MESSAGE-TEXT' })

  let addMessage = () => {
    props.dispatch({ type:'ADD-MESSAGE'})
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE', newText: text })
  }

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
       { messagesElements }
       <div className={classes.wrapperAddMessage}>
        <textarea onChange={ onMessageChange } ref={ newMessageElement } value={ messageText }></textarea>
        <button onClick={ addMessage }>Send</button>
      </div>
      </div>

    </div>
  );
}

export default Dialogs;

