import { createStore, combineReducers, applyMiddleware } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import friendsListReducer from './friendsList-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsList: friendsListReducer,
  users: usersReducer,
  authUserData: authReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;