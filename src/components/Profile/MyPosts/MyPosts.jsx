import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {

  let posts = [
    {id: '1', message: 'Hi, how are you?', likesCount: '9', ava: 'https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg'},
    {id: '2', message: 'God weather!', likesCount: '10', ava: 'https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg'},
    {id: '3', message: 'It\'s my first post.', likesCount: '36', ava: 'https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg'}
  ]

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} ava={p.ava} /> )

  return (
    <div className={classes.MyPosts}>
      <h3>My posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;