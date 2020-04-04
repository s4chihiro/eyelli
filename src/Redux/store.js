import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let store = {
  _callSubscriber() { },
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hi, how are you?', likesCount: '9', ava: 'https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg' },
        { id: '2', message: 'God weather!', likesCount: '10', ava: 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg' },
        { id: '3', message: 'It\'s my first post.', likesCount: '36', ava: 'https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg' }
      ],
      newPostText: 'text for textarea xD loool'
    },
    dialogsPage: {
      dialogs: [
        { id: '1', name: 'Jhon' },
        { id: '2', name: 'Harry' },
        { id: '3', name: 'Jacob' },
        { id: '4', name: 'Thomas' },
        { id: '5', name: 'Oscar' },
        { id: '6', name: 'Amelia' }
      ],
      messages: [
        { id: '1', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
        { id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
        { id: '4', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore nobis cupiditate animi quibusdam quisquam!' },
        { id: '5', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum!' },
        { id: '6', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus quos harum architecto cupiditate voluptatibus ab dignissimos maiores suscipit earum! Minima reprehenderit quae maxime labore' },
        { id: '7', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      messageText: 'default message text'
    },
    friendsList: {
      friends: [
        { id: '1', name: 'Jhon' },
        { id: '2', name: 'Harry' },
        { id: '3', name: 'Jacob' },
        { id: '4', name: 'Thomas' },
        { id: '5', name: 'Oscar' },
        { id: '6', name: 'Amelia' }
      ]
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}


window.store = store;

export default store;