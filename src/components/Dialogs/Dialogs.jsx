import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.messages.map(m => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let messageText = props.messageText;

  let onAddMessageClick = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>

        { dialogsElements }

      </div>

      <div className={classes.messages}>

        { messagesElements }

        <div className={classes.wrapperAddMessage}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={messageText}></textarea>
          <button onClick={onAddMessageClick}>Send</button>
        </div>

      </div>
    </div>
  );
};

export default Dialogs;

