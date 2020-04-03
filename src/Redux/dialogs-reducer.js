
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: '1',
        message: state.messageText
      };
      state.messages.push(message);
      state.messageText = '';
      return state;
    }
    case UPDATE_NEW_MESSAGE: {
      state.messageText = action.newText;
      return state;
    }
    default: return state;
  }
}

export const addMessageActionCreator = () =>({ type: ADD_MESSAGE })

export const updateNewMessageActionCreator = (text) =>({ 
  type: UPDATE_NEW_MESSAGE, 
  newText: text 
})

export default dialogsReducer;