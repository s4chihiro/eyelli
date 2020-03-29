import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: '1', name: 'Jhon'},
  {id: '2', name: 'Harry'},
  {id: '3', name: 'Jacob'},
  {id: '4', name: 'Thomas'},
  {id: '5', name: 'Oscar'},
  {id: '6', name: 'Oscar'},
]

let messages = [
  {id: '1', message: 'Hi!!!'},
  {id: '2', message: 'How are you?'},
  {id: '3', message: 'i\'am fine))'},
  {id: '4', message: 'Lol'},
  {id: '5', message: 'xD'},
  {id: '6', message: 'Yo'},
]
let posts = [
  {id: '1', message: 'Hi, how are you?', likesCount: '9', ava: 'https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg'},
  {id: '2', message: 'God weather!', likesCount: '10', ava: 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'},
  {id: '3', message: 'It\'s my first post.', likesCount: '36', ava: 'https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg'}
]

ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
