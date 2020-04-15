import { getAuthAPI } from "../api/api";

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
        ...action.data,
        isAuth: true
      }
    }
    default: return state
  }
}


export const setAuthUserData = (id, login, email) => ({
  type: SET_USER_LOGIN_DATA,
  data: { id, login, email }
});

export const getAuth = () => {
  return (dispatch) => {
    getAuthAPI().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
      }
    });
  }
}
export default authReducer;