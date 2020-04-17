import { authAPI } from "../api/api";

const SET_USER_LOGIN_DATA = 'SET-USER-LOGIN-DATA';
const DELETE_AUTH = 'DELETE-AUTH';

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
        ...action.data,
        isAuth: true
      }
    }
    case DELETE_AUTH: {
      return {
        ...state,
        id: null,
        login: null,
        email: null,
        isAuth: false
      }
    }
    default: return state
  }
}

const setAuthUserData = (id, login, email) => ({
  type: SET_USER_LOGIN_DATA,
  data: { id, login, email }
});
const deleteAuthData =() => ({type: DELETE_AUTH});

export const getAuth = () => {
  return (dispatch) => {
    authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  }
}

export const deleteAuth = () => {
  return (dispatch) => {
    authAPI.logout();
    dispatch(deleteAuthData());
  }
}
export default authReducer;