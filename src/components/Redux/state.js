
let store = {
  _callSubscriber() {},
  _state: {
  profilePage: {
    posts: [
      {id: '1', message: 'Hi, how are you?', likesCount: '9', ava: 'https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg'},
      {id: '2', message: 'God weather!', likesCount: '10', ava: 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'},
      {id: '3', message: 'It\'s my first post.', likesCount: '36', ava: 'https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg'}
    ],
    newPostText: 'text for textarea xD loool'
  },
  dialogsPage: {
    dialogs: [
      {id: '1', name: 'Jhon'},
      {id: '2', name: 'Harry'},
      {id: '3', name: 'Jacob'},
      {id: '4', name: 'Thomas'},
      {id: '5', name: 'Oscar'},
      {id: '6', name: 'Amelia'}
    ],
    messages: [
    {id: '1', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!'},
    {id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!'},
    {id: '4', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!'},
    {id: '5', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum!'},
    {id: '6', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore'},
    {id: '7', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
    ],
    messageText: 'default message text'
  },
  friendsList: {
    friends: [
      {id: '1', name: 'Jhon'},
      {id: '2', name: 'Harry'},
      {id: '3', name: 'Jacob'},
      {id: '4', name: 'Thomas'},
      {id: '5', name: 'Oscar'},
      {id: '6', name: 'Amelia'}
    ]
  }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _addPost() {
  let post = {
    id: '4',
    message: this._state.profilePage.newPostText,
    likesCount: '0'
  };
  if (post.message === '') { return; }
  this._state.profilePage.posts.unshift(post);
  this._state.profilePage.newPostText = '';
  this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let message = {
      id: '1',
      message: this._state.dialogsPage.messageText
    };
    if (message.message === '') { return; }
    this._state.dialogsPage.messages.push(message);
    this._state.dialogsPage.messageText = '';
    this._callSubscriber(this._state);
  },
  _updateNewMessage(newText) {
    this._state.dialogsPage.messageText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === 'ADD-POST'){
      this._addPost();
    } 
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    } 
    else if (action.type === 'ADD-MESSAGE') {
      this._addMessage();
    } 
    else if (action.type === 'UPDATE-NEW-MESSAGE') {
      this._updateNewMessage(action.newText);
    } 
    else if (action.type === 'NEW-POST-TEXT') {
      return this._state.profilePage.newPostText;
    } 
    else if (action.type === 'MESSAGE-TEXT') {
      return this._state.dialogsPage.messageText;
    }
  }
}

window.store = store;

export default store;