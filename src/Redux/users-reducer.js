const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed}
          }
          return u;
        })
      }
      return stateCopy;
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }

    default: 
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;