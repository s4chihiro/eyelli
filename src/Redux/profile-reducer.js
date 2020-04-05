const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likesCount: '9', ava: 'https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg' },
    { id: '2', message: 'God weather!', likesCount: '10', ava: 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg' },
    { id: '3', message: 'It\'s my first post.', likesCount: '36', ava: 'https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg' }
  ],
  newPostText: 'text for textarea xD loool'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: '4',
        message: state.newPostText,
        likesCount: '0'
      };
      let stateCopy = JSON.parse(JSON.stringify(state));
      if (stateCopy.newPostText === '') {return stateCopy}
      stateCopy.posts.unshift(post);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ 
  type: UPDATE_NEW_POST_TEXT, 
  newText: text 
})

export default profileReducer; 