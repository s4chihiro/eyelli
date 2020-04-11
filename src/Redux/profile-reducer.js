const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likesCount: '9' },
    { id: '2', message: 'God weather!', likesCount: '10' },
    { id: '3', message: 'It\'s my first post.', likesCount: '36' }
  ],
  newPostText: 'text for textarea xD loool',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: '4',
        message: state.newPostText,
        likesCount: '0'
      }
      if (state.newPostText === '') {return state}
      return {
        ...state,
        posts: [post, ...state.posts],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return { 
        ...state,
        profile: action.profile
      }
    }
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ 
  type: UPDATE_NEW_POST_TEXT, 
  newText: text 
});

export const setUserProfile = (profile) => ({ 
  type: SET_USER_PROFILE, 
  profile
});

export default profileReducer; 