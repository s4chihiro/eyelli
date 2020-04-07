import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsListReducer from './friendsList-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsList: friendsListReducer,
  users: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;