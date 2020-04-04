import { createStore, combineReducers } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsListReducer from './friendsList-reducer';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsList: friendsListReducer
});

let store = createStore(reducers);

export default store;