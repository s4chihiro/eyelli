import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {
  
  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )

  let messagesElements = props.state.messages.map ( m => <Message message={m.message} /> )

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={classes.messages}>
       { messagesElements }
       <div className={classes.wrapperAddMessage}>
        <textarea ref={ newMessageElement }></textarea>
        <button onClick={ addMessage }>Send</button>
      </div>
      </div>

    </div>
  );
}

export default Dialogs;

