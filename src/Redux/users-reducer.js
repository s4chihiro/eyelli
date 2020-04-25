import { usersAPI } from "../api/api";

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

export const getUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
}

export const onPageChanged = (page, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod;
  if (response.data.resultCode === 0) {
    dispatch(toggleFollow(userId)); 
  }
  dispatch(toggleFollowingInProgress(false, userId));   
}

export const follow = userId => dispatch => {
  let apiMethod = usersAPI.follow(userId);
  followUnfollowFlow(dispatch, userId, apiMethod);
}

export const unfollow = userId => dispatch => {
  let apiMethod = usersAPI.unfollow(userId);
  followUnfollowFlow(dispatch, userId, apiMethod);
}



export default usersReducer;