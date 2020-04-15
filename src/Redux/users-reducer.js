import { getUsersAPI, followPost, followDelete } from "../api/api";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOW-IN-PROGRESS';

const initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed }
          }
          return u;
        })
      }
      return stateCopy;
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsersAPI(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}

export const onPageChanged = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    getUsersAPI(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    });
  }
}
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    followPost(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
        dispatch(toggleFollowingInProgress(false, userId));
      }
    });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
      followDelete(userId).then(data => {
        if (data.resultCode === 0) {
          dispatch(toggleFollow(userId));
          dispatch(toggleFollowingInProgress(false, userId));
        }
      });
  }
}



export default usersReducer;