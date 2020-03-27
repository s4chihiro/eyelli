import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
  return (
    <div className={classes.MyPosts}>
      My posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" ava="https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg"/>
        <Post message="God weather!" ava="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" />
        <Post message="It's my first post." ava="https://99px.ru/sstorage/1/2014/02/image_10102141555161483319.jpg" />
      </div>
    </div>
  );
}

export default MyPosts;