import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_LOGIN_DATA = 'SET-USER-LOGIN-DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_LOGIN_DATA: {
      return {
        ...state,
        ...action.payload,
        isAuth: action.payload.isAuth
      }
    }

    default: return state
  }
}

const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_USER_LOGIN_DATA,
  payload: { id, login, email, isAuth }
});

export const getAuth = () => async dispatch => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const login = formData => async dispatch => {
  let response = await authAPI.login(formData);
  if (!response.data.resultCode) {
    dispatch(getAuth());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const deleteAuth = () => dispatch => {
  authAPI.logout();
  dispatch(setAuthUserData(null, null, null, false));
}
export default authReducer;