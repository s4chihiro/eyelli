/*import React from 'react';*/
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.messageText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {   
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

