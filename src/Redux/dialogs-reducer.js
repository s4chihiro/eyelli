
const ADD_MESSAGE = 'ADD-MESSAGE';

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
    { id: '7', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: '1',
        message: action.message
      };
      if (!message.message) {return state}
      return {
        ...state,
        messages: [...state.messages, message]
      }
    }
    default: return state;
  }
}

export const addMessage = message =>({ type: ADD_MESSAGE, message });


export default dialogsReducer;