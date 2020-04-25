import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST ='DELETE-POST';

let initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likesCount: '9' },
    { id: '2', message: 'God weather!', likesCount: '10' },
    { id: '3', message: 'It\'s my first post.', likesCount: '36' }
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: '4',
        message: action.newText,
        likesCount: '0'
      }
      return {
        ...state,
        posts: [post, ...state.posts]
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default: return state;
  }
}

export const addPost = (newText) => ({ type: ADD_POST, newText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => async dispatch => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async dispatch => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async dispatch => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer; 