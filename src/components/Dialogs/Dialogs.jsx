import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef()

  let messageText = props.state.messageText

  let addMessage = () => {
    if (messageText === '') {return}
    let action = addMessageActionCreator()
    props.dispatch(action)
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    let action = updateNewMessageActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>

        { dialogsElements }

      </div>

      <div className={classes.messages}>

        { messagesElements }

        <div className={classes.wrapperAddMessage}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={messageText}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Dialogs;

