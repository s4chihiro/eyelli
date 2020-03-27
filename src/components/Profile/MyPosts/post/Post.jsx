import React from 'react';
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://www.meme-arsenal.com/memes/042c9d30dfe7fce0dce07452a4241680.jpg" />
      post 1
      <div>like</div>
    </div>
  );
}

export default Post;
