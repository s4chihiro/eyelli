import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState();

  let messageText = state.dialogsPage.messageText;

  let addMessage = () => {
    if (messageText === '') {return;}
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs 
      addMessage={ addMessage } 
      updateNewMessage={ onMessageChange } 
      dialogs={ state.dialogsPage.dialogs } 
      messages= {state.dialogsPage.messages } 
      messageText={ messageText }
    />
  );
};

export default DialogsContainer;

