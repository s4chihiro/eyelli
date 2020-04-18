import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../utils/validators/validators';


const Dialogs = (props) => {
  let onSubmit = (formData) => {
    props.addMessage(formData.newMessageBody);
  }
  return (
    <>
      <div className={classes.dialogs}>

        <div className={classes.dialogsItems}>

          {props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)}

        </div>

        <div className={classes.messages}>

          {props.messages.map(m => <Message message={m.message} />)}

        </div>
      </div>
      <div className={classes.wrapperAddMessage}>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </>
  );
};


let maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength300]}/>
      <button>Send</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessage' })(AddMessageForm);

export default Dialogs;

