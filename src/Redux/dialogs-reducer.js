
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
  dialogs: [
    { id: '1', name: 'Jhon' },
    { id: '2', name: 'Harry' },
    { id: '3', name: 'Jacob' },
    { id: '4', name: 'Thomas' },
    { id: '5', name: 'Oscar' },
    { id: '6', name: 'Amelia' }
  ],
  messages: [
    { id: '1', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
    { id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
    { id: '4', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
    { id: '5', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum!' },
    { id: '6', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore' },
    { id: '7', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  ],
  messageText: 'default message text'
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: '1',
        message: state.messageText
      };

      let stateCopy = JSON.parse(JSON.stringify(state));
      if (stateCopy.messageText === '') {return stateCopy}
      stateCopy.messages.push(message);
      stateCopy.messageText = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE: {
      let stateCopy = JSON.parse(JSON.stringify(state));

      stateCopy.messageText = action.newText;
      return stateCopy;
    }
    default: return state;
  }
}

export const addMessageActionCreator = () =>({ type: ADD_MESSAGE });

export const updateNewMessageActionCreator = (text) =>({ 
  type: UPDATE_NEW_MESSAGE, 
  newText: text 
});

export default dialogsReducer;